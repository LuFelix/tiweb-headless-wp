import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ECOSYSTEM_PRODUCTS, EcosystemProduct } from '../../../../core/data/ecosystem-products.data';

@Component({
  selector: 'app-ecosystem-bento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ecosystem-bento.component.html',
  styleUrl: './ecosystem-bento.component.scss'
})
export class EcosystemBentoComponent {
  readonly products = signal<EcosystemProduct[]>(ECOSYSTEM_PRODUCTS);
}
