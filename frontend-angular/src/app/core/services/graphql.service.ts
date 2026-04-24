import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';


@Injectable({ providedIn: 'root' })
export class GraphqlService {

  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);
  

  getMateriais() {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    });

    const query = `
      query GetMateriais {
        materiaisSped {
          nodes {
            id
            title
            dadosDoMaterial {
              arquivoParaDownload {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    `;

    return this.http.post(environment.graphqlUrl, { query }, { headers })
      .pipe(
        map((response: any) => response?.data?.materiaisSped?.nodes || []),
        catchError(err => {
          console.error('❌ Erro ao carregar materiais:', err);
          return of([]);
        })
      );
  }

}