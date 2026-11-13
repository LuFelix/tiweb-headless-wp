import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface PipelineStage {
  step: string;
  title: string;
  icon: string;
  businessHeadline: string;
  businessDescription: string;
  businessBenefit: string;
  techHeadline: string;
  techDescription: string;
  techSpec: string;
}

@Component({
  selector: 'app-engineering-trust',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './engineering-trust.component.html',
  styleUrl: './engineering-trust.component.scss'
})
export class EngineeringTrustComponent {
  readonly activeMode = signal<'business' | 'tech'>('business');

  readonly stages: PipelineStage[] = [
    {
      step: '01',
      title: 'Arquitetura SSOT & Fronteira de Código',
      icon: '🏛️',
      businessHeadline: 'Blindagem Contra o Código Espaguete',
      businessDescription: 'Elimina a armadilha do software que não pode ser alterado. Definimos fronteiras cirúrgicas para que novas funções nunca quebrem processos ativos.',
      businessBenefit: 'Seu sistema evolui rápido sem gerar retrabalho ou custos surpresa.',
      techHeadline: 'Single Source of Truth & Zero-Duplication',
      techDescription: 'Governança centralizada com contratos invioláveis, schemas imutáveis e fronteira estrita de arquivos declarada por issue.',
      techSpec: 'Padrão SSOT canônico, zero-cópia e isolamento de escopo por tenant.'
    },
    {
      step: '02',
      title: 'Desenvolvimento Guiado por Testes (TDD)',
      icon: '🧪',
      businessHeadline: 'Previsibilidade e Segurança de Caixa',
      businessDescription: 'Erros e bugs são caçados matematicamente nos testes automáticos, garantindo que falhas nunca apareçam na frente do seu cliente final.',
      businessBenefit: 'Zero prejuízos com transações perdidas ou atendimento interrompido.',
      techHeadline: 'Rigor Matemático com Cobertura ≥ 93%',
      techDescription: 'Suítes automatizadas de testes unitários, testes de contrato e integração executadas em ambiente virtual antes da promoção de branch.',
      techSpec: 'Vitest / Jasmine / Playwright com gating estrito de cobertura >= 93%.'
    },
    {
      step: '03',
      title: 'Quality Gate & Rastreabilidade Atômica',
      icon: '🛡️',
      businessHeadline: 'Aprovação Rigorosa e Rollback Cirúrgico',
      businessDescription: 'Se uma alteração precisar ser desfeita, conseguimos reverter cirurgicamente apenas aquela linha em 30 segundos, sem afetar o resto da operação.',
      businessBenefit: 'Tranquilidade total para colocar novidades no ar toda semana.',
      techHeadline: 'Universal Merge Commit & Push Protection',
      techDescription: 'Proibição de squash destrutivo no GitHub, exigência de merge commits atômicos rastreáveis por git bisect/revert e auditoria GitGuardian.',
      techSpec: 'allow_merge_commit=true, allow_squash=false, allow_rebase=false.'
    },
    {
      step: '04',
      title: 'Produção Híbrida & Smoke Test Automático',
      icon: '⚡',
      businessHeadline: 'Alta Performance com Custo Inteligente',
      businessDescription: 'Combinamos servidores dedicados de alta potência para IA com servidores de borda para downloads rápidos, economizando milhares de reais em infraestrutura.',
      businessBenefit: 'Carregamento instantâneo para o usuário e margem financeira saudável.',
      techHeadline: 'Orquestração Dual VPS (Docker) + HostGator (Edge/FTP)',
      techDescription: 'SaaS e APIs isoladas em Docker na VPS, e frontends estáticos/downloads sincronizados via FTP automático com validação HTTP pós-deploy.',
      techSpec: 'GitHub Actions FTP/SSH com smoke test HTTP automático.'
    }
  ];

  setMode(mode: 'business' | 'tech'): void {
    this.activeMode.set(mode);
  }
}
