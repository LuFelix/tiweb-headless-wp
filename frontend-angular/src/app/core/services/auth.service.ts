import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { BehaviorSubject, tap, catchError, of, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly STORAGE_KEY = 'tiweb_auth_token';
  private authStateSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  
  public isAuthenticated$ = this.authStateSubject.asObservable();

  constructor(
    private http: HttpClient,
    private socialAuthService: SocialAuthService
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
        this.authStateSubject.next(true);
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
  }

  private hasValidToken(): boolean {
    return !!localStorage.getItem(this.STORAGE_KEY);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);
  }

  public logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.authStateSubject.next(false);
    this.socialAuthService.signOut().catch(() => {});
  }

  public isAuthenticated(): boolean {
    return this.authStateSubject.value;
  }
}