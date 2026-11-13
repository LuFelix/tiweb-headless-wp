import { Component, inject, OnInit, DestroyRef, signal } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { EcosystemBentoComponent } from './sections/ecosystem-bento/ecosystem-bento.component';
import { EngineeringTrustComponent } from './sections/engineering-trust/engineering-trust.component';
import AboutUsComponent from './sections/about-us/about-us.component';
import ServicesComponent from './sections/services/services.component';
import ContactComponent from './sections/contact/contact.component';
import FooterComponent from './sections/footer/footer.component';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    EcosystemBentoComponent,
    EngineeringTrustComponent,
    AboutUsComponent, 
    ServicesComponent, 
    ContactComponent, 
    FooterComponent, 
    RouterModule
  ], 
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
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      this.showManualLogin.set(url.includes('/login') || url.includes('/register'));
    });

    this.socialAuthService.authState
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(user => {
        if (user && this.authService.isAuthenticated()) {
          this.router.navigate(['/dashboard']);
        }
      });
  }

  onEnterManual(): void {
    this.showManualLogin.set(true);
    this.router.navigate(['/login']);
  }
}
