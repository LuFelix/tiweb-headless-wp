import { Injectable, signal, computed } from '@angular/core';
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
    private router: Router
  ) {
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
    this.http.post(`${environment.apiUrl}/jwt-auth/v1/token`, {
      token: idToken,
      provider: 'google'
    }).pipe(
      tap((response: any) => {
        this.saveToken(response.token);
        this.router.navigate(['/dashboard']);
      }),
      catchError(err => {
        console.error('WP Authentication failed:', err);
        this.logout();
        return of(null);
      })
    ).subscribe();
  }

  private saveToken(token: string): void {
    localStorage.setItem(this.STORAGE_KEY, token);
    this._token.set(token);
    this._isAuthenticated.set(true);
  }

  private hasValidToken(): boolean {
    return !!localStorage.getItem(this.STORAGE_KEY);
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

  private decodeJwt(token: string): UserData | null {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      return null;
    }
  }
}