import { Component, Output, EventEmitter } from '@angular/core';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [GoogleSigninButtonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Output() toggleLoginForm = new EventEmitter<void>();

  toggleManualLogin(): void {
    this.toggleLoginForm.emit();
  }
}
