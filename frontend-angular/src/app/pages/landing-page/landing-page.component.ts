import { Component, inject, OnInit, DestroyRef, signal } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import AboutUsComponent from './sections/about-us/about-us.component';
import ServicesComponent from './sections/services/services.component';
import ContactComponent from './sections/contact/contact.component';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router, RouterModule, NavigationEnd } from '@angular/router'; // Adicionado NavigationEnd
import { AuthService } from '../../core/services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators'; // Adicionado filter

@Component({
  selector: 'app-landing-page',
  standalone: true,
  // 💡 REMOVI o LoginComponent daqui. O roteador vai injetar ele via <router-outlet>
  imports: [CommonModule, HeroComponent, AboutUsComponent, ServicesComponent, ContactComponent, RouterModule], 
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
    // 1. Redireciona se já estiver logado
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }

    // 2. Escuta mudanças manuais na URL (se o cara digitar /login ou /register direto)
    // Isso garante que o Signal showManualLogin fique sincronizado com a URL
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      // Se a URL contém login ou register, mostramos o card. Se for a raiz, mostramos o Hero.
      // const isAuthPath = url.includes('/login') || url.includes('/register');
      // this.showManualLogin.set(isAuthPath);
      this.showManualLogin.set(url.includes('/login') || url.includes('/register'));
    });

    // 3. Login Social
    this.socialAuthService.authState
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(user => {
        if (user && this.authService.isAuthenticated()) {
          this.router.navigate(['/dashboard']);
        }
      });
  }

  // 💡 Método para o Hero chamar
  onEnterManual(): void {
    this.showManualLogin.set(true);
    this.router.navigate(['/login']); // Força a ida para o Login primeiro
  }
}