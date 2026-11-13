import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Output() toggleLoginForm = new EventEmitter<void>();

  scrollToEngineering(): void {
    const element = document.getElementById('engenharia-confianca');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
