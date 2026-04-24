import { Component, ChangeDetectionStrategy, inject, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { GraphqlService } from '../../core/services/graphql.service';
import { DownloadService } from '../../core/services/download.service'; 

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
  private readonly graphqlService = inject(GraphqlService);
  private readonly http = inject(HttpClient);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly downloadService = inject(DownloadService);
  public readonly user = this.authService.user;
  public readonly isAuthenticated = this.authService.isAuthenticated;

  public readonly materiais = signal<any[]>([]);
  public readonly isLoadingMateriais = signal(true);

  constructor() {
    this.graphqlService.getMateriais().subscribe({
      next: (materiais) => {
        console.log('📦 Dados recebidos:', materiais);
        this.materiais.set(materiais);
        this.isLoadingMateriais.set(false);
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingMateriais.set(false);
        this.cdr.markForCheck();
      }
    });
  }

  downloadApp(url: string | undefined, materialTitle: string = 'Documento'): void {
    if (!url) {
      console.warn('⚠️ Nenhuma URL encontrada para download.');
      return;
    }
    
    // O Componente delega a complexidade!
    this.downloadService.downloadFile(url, materialTitle);
  }
}
