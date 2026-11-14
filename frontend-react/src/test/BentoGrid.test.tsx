import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BentoGrid } from '../components/BentoGrid';

describe('BentoGrid Component', () => {
  it('renders section title and description', () => {
    render(<BentoGrid />);
    expect(screen.getByText('Nossos Pilares Tecnológicos')).toBeInTheDocument();
  });

  it('renders SmartContact with external link to smartcontact.tiweb.app.br', () => {
    render(<BentoGrid />);
    const scLink = screen.getByRole('link', { name: /Acessar SmartContact/i });
    expect(scLink).toHaveAttribute('href', 'https://smartcontact.tiweb.app.br');
    expect(scLink).toHaveAttribute('target', '_blank');
  });

  it('renders MAS / Educa-IA with dual buttons for portal and live VPS motor', () => {
    render(<BentoGrid />);
    const portalLink = screen.getByRole('link', { name: /Portal & Loja Educa-IA/i });
    expect(portalLink).toHaveAttribute('href', 'https://educa-ia.app.br');
    expect(portalLink).toHaveAttribute('target', '_blank');

    const liveMotorLink = screen.getByRole('link', { name: /Motor MAS ao Vivo/i });
    expect(liveMotorLink).toHaveAttribute('href', 'https://mas.educa-ia.app.br');
    expect(liveMotorLink).toHaveAttribute('target', '_blank');
  });

  it('renders SPED Fácil with external link to spedfacil.tiweb.app.br', () => {
    render(<BentoGrid />);
    const spedLink = screen.getByRole('link', { name: /Acessar SPED Fácil/i });
    expect(spedLink).toHaveAttribute('href', 'https://spedfacil.tiweb.app.br');
    expect(spedLink).toHaveAttribute('target', '_blank');
  });
});
