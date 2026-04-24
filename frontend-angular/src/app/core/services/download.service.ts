import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DownloadService {

  /**
   * Baixa um arquivo contornando problemas de CORS e Hostnames locais.
   */
 downloadFile(originalUrl: string, suggestedName: string = 'Documento'): void {
    if (!originalUrl) {
      console.warn('⚠️ Nenhuma URL encontrada para download.');
      return;
    }

    // 1. Tradução de Rota (Docker para Localhost - À prova de balas)
    let finalUrl = originalUrl;
    
    // Se a URL contém o host interno do Docker, traduzimos na força bruta
    if (finalUrl.includes('site_tiweb')) {
      finalUrl = finalUrl.replace(/http:\/\/site_tiweb(:\d+)?/gi, 'http://localhost:8080');
    }

    console.log('📥 URL do Iframe traduzida:', finalUrl);

    // 2. A MÁGICA: Cria o Iframe invisível
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = finalUrl;

    document.body.appendChild(iframe);

    // 3. Limpeza de Memória
    setTimeout(() => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    }, 5000);
  }
}