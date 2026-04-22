import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DashboardComponent {
  private readonly authService = inject(AuthService);

  public readonly user = this.authService.user;
  public readonly isAuthenticated = this.authService.isAuthenticated;

  downloadApp(): void {
    console.log('Iniciando download seguro via WP REST API...');
  }
}