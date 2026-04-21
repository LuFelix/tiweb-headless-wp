import { Component, inject, OnInit, DestroyRef, signal } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { LoginComponent } from './login/login.component';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, HeroComponent, LoginComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  private readonly socialAuthService = inject(SocialAuthService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  showManualLogin = signal<boolean>(false);

  ngOnInit(): void {
    // ✅ Sincronização dupla: se usuário já logado ao carregar página
    if (this.authService.isAuthenticated()) {
      console.log('🔍 Usuário já autenticado, redirecionando...');
      this.router.navigate(['/dashboard']);
    }

    // ✅ Escutar mudanças de estado do login social
    this.socialAuthService.authState
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(user => {
        if (user && this.authService.isAuthenticated()) {
          console.log('✅ Login detectado na Landing Page');
          this.router.navigate(['/dashboard']);
        }
      });
  }
}
