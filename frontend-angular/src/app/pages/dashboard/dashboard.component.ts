import { Component, ChangeDetectionStrategy, inject, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { GraphqlService } from '../../core/services/graphql.service';

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

    console.log('📥 URL Original do GraphQL:', url);

    // 🔄 TRADUTOR DE AMBIENTE LOCAL
    // Se a URL vier com o nome interno do Docker, trocamos para o localhost exposto
    let publicUrl = url;
    if (publicUrl.includes('site_tiweb')) {
      // Remove a porta 80 se vier, e troca pelo localhost:8080
      publicUrl = publicUrl.replace('http://site_tiweb:80', 'http://localhost:8080');
      publicUrl = publicUrl.replace('http://site_tiweb', 'http://localhost:8080');
    }

    console.log('🔗 URL Pública (Navegador):', publicUrl);

    // Cria o link invisível
    const link = document.createElement('a');
    link.href = publicUrl; 
    link.target = '_blank';
    
    // Sugestão de nome limpo
    const extension = publicUrl.split('.').pop()?.split(/#|\?/)[0] || 'zip';
    link.download = `${materialTitle}.${extension}`;

    // Dispara o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
