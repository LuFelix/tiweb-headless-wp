import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BentoGrid } from '../components/BentoGrid';

describe('BentoGrid Component', () => {
  it('renders section title and description', () => {
    render(<BentoGrid />);
    expect(screen.getByText('Nossos Pilares Tecnológicos')).toBeInTheDocument();
  });

  it('renders SPED Fácil with external link to spedfacil.tiweb.app.br', () => {
    render(<BentoGrid />);
    const spedLink = screen.getByRole('link', { name: /Acessar SPED Fácil/i });
    expect(spedLink).toHaveAttribute('href', 'https://spedfacil.tiweb.app.br');
    expect(spedLink).toHaveAttribute('target', '_blank');
  });

  it('renders MAS / Educa-IA with external link to educa-ia.app.br', () => {
    render(<BentoGrid />);
    const masLink = screen.getByRole('link', { name: /Explorar Simulador/i });
    expect(masLink).toHaveAttribute('href', 'https://educa-ia.app.br');
    expect(masLink).toHaveAttribute('target', '_blank');
  });
});
