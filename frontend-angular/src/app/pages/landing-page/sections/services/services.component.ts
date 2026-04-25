import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export default class ServicesComponent {

  readonly services: Service[] = [
    {
      id: 1,
      title: 'Geração do SPED Fácil',
      description: 'Automação inteligente que reduz em até 90% o tempo de preenchimento das obrigações tributárias federais.',
      icon: 'automation'
    },
    {
      id: 2,
      title: 'Validação e Auditoria',
      description: 'Cruzamento de dados preventivo com mais de 500 regras de validação atualizadas em tempo real.',
      icon: 'validation'
    },
    {
      id: 3,
      title: 'Consultoria Especializada',
      description: 'Apoio técnico e tributário direto da equipe Trazom com mais de 30 anos de experiência no mercado.',
      icon: 'consulting'
    }
  ];

}