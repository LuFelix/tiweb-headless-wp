export interface UserData {
  name: string;
  email: string;
  picture?: string;
  exp?: number;
}

const STORAGE_KEY = 'tiweb_auth_token';
const API_URL = 'https://tiweb.app.br/wp-json';

export class AuthService {
  private static parseJwt(token: string): UserData | null {
    try {
      const base64Url = token.split('.')[1];
      if (!base64Url) return null;
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const parsed = JSON.parse(jsonPayload);
      return {
        name: parsed.data?.user?.display_name || parsed.user_display_name || parsed.name || parsed.email || 'Advogado(a)',
        email: parsed.data?.user?.user_email || parsed.user_email || parsed.email || '',
        picture: parsed.picture || undefined,
        exp: parsed.exp
      };
    } catch {
      return null;
    }
  }

  public static getToken(): string | null {
    return localStorage.getItem(STORAGE_KEY);
  }

  public static isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    const user = this.parseJwt(token);
    if (!user || !user.exp) return true; // se não houver exp, considera válido ou sem exp
    return Date.now() < user.exp * 1000;
  }

  public static getUser(): UserData | null {
    const token = this.getToken();
    if (!token) return null;
    return this.parseJwt(token);
  }

  public static saveToken(token: string): void {
    localStorage.setItem(STORAGE_KEY, token);
  }

  public static logout(): void {
    localStorage.removeItem(STORAGE_KEY);
  }

  public static async loginWithCredentials(username: string, password: string): Promise<{ success: boolean; token?: string; error?: string }> {
    try {
      const res = await fetch(`${API_URL}/jwt-auth/v1/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        this.saveToken(data.token);
        return { success: true, token: data.token };
      }
      return { success: false, error: data.message || 'Credenciais inválidas.' };
    } catch (err: unknown) {
      return { success: false, error: err instanceof Error ? err.message : 'Falha de conexão com o servidor.' };
    }
  }

  public static async loginWithGoogle(idToken: string): Promise<{ success: boolean; token?: string; error?: string }> {
    try {
      const res = await fetch(`${API_URL}/tiweb/v1/google-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: idToken, provider: 'google' })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        this.saveToken(data.token);
        return { success: true, token: data.token };
      }
      return { success: false, error: data.message || 'Falha ao autenticar com Google.' };
    } catch (err: unknown) {
      return { success: false, error: err instanceof Error ? err.message : 'Falha na comunicação com o servidor.' };
    }
  }
}
