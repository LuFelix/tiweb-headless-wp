import { Injectable, signal, computed, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { tap, catchError, of } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

export interface UserData {
  name: string;
  email: string;
  picture?: string;
  exp: number;
}

@Injectable({ providedIn: 'root' })

export class AuthService {

  private readonly STORAGE_KEY = 'tiweb_auth_token';
  
  // ✅ Angular 17 Signals Nativo
  private readonly _isAuthenticated = signal<boolean>(this.hasValidToken());
  private readonly _token = signal<string | null>(this.getToken());
  
  public readonly isAuthenticated = this._isAuthenticated.asReadonly();
  public readonly user = computed<UserData | null>(() => {
    const token = this._token();
    if (!token) return null;
    return this.decodeJwt(token);
  });

  constructor(
    private http: HttpClient,
    private socialAuthService: SocialAuthService,
    private router: Router,
    private ngZone: NgZone
  ) {
    console.log('🔌 API URL Resolvida:', environment.apiUrl);
    this.initializeGoogleAuthListener();
  }

  private initializeGoogleAuthListener(): void {
    this.socialAuthService.authState.subscribe({
      next: (user: SocialUser | null) => {
        if (user) this.authenticateWithWordpress(user.idToken);
      },
      error: (err) => console.error('Google Auth Error:', err)
    });
  }

  private authenticateWithWordpress(idToken: string): void {
    // 🚩 Chama o endpoint customizado!
    this.http.post(`${environment.apiUrl}/tiweb/v1/google-login`, {
   // this.http.post(`${environment.apiUrl}/jwt-auth/v1/token`, {
      token: idToken,
      provider: 'google'
    }).pipe(
      tap((response: any) => {
        console.log('✅ Autenticação WP concluída com sucesso');
        this.saveToken(response.token);
        
        // ✅ Garantir que o Angular detectou a mudança antes de navegar
      //   setTimeout(() => {
      //     console.log('🧭 Navegando para o Dashboard...');
      //     this.router.navigate(['/dashboard']).then(success => {
      //       console.log(success ? '✅ Navegação concluída' : '❌ Falha na navegação');
      //     });
      //   }, 0);
      // }),
      this.ngZone.run(() => {
          console.log('🧭 Navegando para o Dashboard dentro do NgZone...');
          this.router.navigate(['/dashboard']).then(success => {
            console.log(success ? '✅ Tela pintada com sucesso!' : '❌ Guard bloqueou!');
          });
        });
      }),
      catchError(err => {
        console.error('❌ WP Authentication failed:', err);
        this.logout();
        return of(null);
      })
    ).subscribe();
  }

 private saveToken(token: string | null | undefined): void {
    if (!token) {
      console.warn('⚠️ Tentativa de salvar um token inválido ignorada.');
      return;
    }

    try {
      // Tenta decodificar para garantir que não é um token lixo
      const decoded = this.decodeJwt(token);
      if (decoded && decoded.exp) {
        // Verifica se a data de expiração já passou
        const isExpired = Date.now() >= decoded.exp * 1000;
        if (isExpired) {
          console.warn('⚠️ O token recebido já está expirado.');
          return;
        }
      }
    } catch (e) {
        console.error('❌ Erro ao validar formato do JWT ao salvar.');
        return;
    }

    localStorage.setItem(this.STORAGE_KEY, token);
    this._token.set(token);
    this._isAuthenticated.set(true);
  }

  private hasValidToken(): boolean {
    const token = this.getToken();
    if (!token) return false;

    // Não basta ter o token, ele não pode estar expirado
    const decoded = this.decodeJwt(token);
    if (!decoded || !decoded.exp) return false;

    const isExpired = Date.now() >= decoded.exp * 1000;
    if (isExpired) {
      // Se tiver expirado, já faz a faxina
      localStorage.removeItem(this.STORAGE_KEY);
      return false;
    }

    return true;
  }

  public getToken(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);
  }

  public logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this._token.set(null);
    this._isAuthenticated.set(false);
    this.socialAuthService.signOut().catch(() => {});
    this.router.navigate(['/']);
  }

  public loginWithCredentials(username: string, password: string) {
    return this.http.post(`${environment.apiUrl}/jwt-auth/v1/token`, {
      username,
      password
    }).pipe(
      tap((response: any) => {
        console.log('✅ Autenticação por credenciais concluída com sucesso');
        this.saveToken(response.token);
        
      //   setTimeout(() => {
      //     console.log('🧭 Navegando para o Dashboard...');
      //     this.router.navigate(['/dashboard']);
      //   }, 0);
      // }),
      this.ngZone.run(() => {
          console.log('🧭 Navegando para o Dashboard dentro do NgZone...');
          this.router.navigate(['/dashboard']).then(success => {
            console.log(success ? '✅ Tela pintada com sucesso!' : '❌ Guard bloqueou!');
          });
        });
      }),
      catchError(err => {
        console.error('❌ Falha na autenticação:', err);
        this.logout();
        throw err;
      })
    );
  }

  public requestRegistration(email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/tiweb/v1/request-registration`, { email, password })
      .pipe(
        tap(() => console.log('✅ Código de validação enviado para:', email)),
        catchError(err => {
          console.error('❌ Falha ao solicitar registro:', err);
          throw err;
        })
      );
  }

  public verifyRegistration(email: string, code: string) {
    return this.http.post(`${environment.apiUrl}/tiweb/v1/verify-registration`, { email, code })
      .pipe(
        tap((response: any) => {
          console.log('✅ Registro confirmado com sucesso');
          this.saveToken(response.token);
          
        //   setTimeout(() => {
        //     console.log('🧭 Navegando para o Dashboard...');
        //     this.router.navigate(['/dashboard']);
        //   }, 0);
        // }),
          this.ngZone.run(() => {
            console.log('🧭 Navegando para o Dashboard dentro do NgZone...');
            this.router.navigate(['/dashboard']).then(success => {
              console.log(success ? '✅ Tela pintada com sucesso!' : '❌ Guard bloqueou!');
            });
          });
        }),
        catchError(err => {
          console.error('❌ Falha na verificação do código:', err);
          throw err;
        })
      );
  }

  private decodeJwt(token: string): UserData | null {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      return null;
    }
  }
}
