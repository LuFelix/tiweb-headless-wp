import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CasesShowcase } from '../components/cases/CasesShowcase';

describe('CasesShowcase Component', () => {
  it('renders section title and segment filter buttons', () => {
    render(<CasesShowcase />);
    expect(screen.getByText('Cases Reais & Verticais em Escala')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Todos' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Saúde' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Jurídico' })).toBeInTheDocument();
  });

  it('renders Concept Odontologia as a real project with link to production', () => {
    render(<CasesShowcase />);
    expect(screen.getByText('Concept Odontologia de Alta Performance')).toBeInTheDocument();
    expect(screen.getByText('PROJETO REAL')).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /Acessar Concept Odontologia ao Vivo/i });
    expect(link).toHaveAttribute('href', 'https://conceptodontologia.odo.br');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders Advocacia / SmartLegal with dual buttons for presentation and live tour', () => {
    render(<CasesShowcase />);
    const slidesLink = screen.getByRole('link', { name: /Abrir Apresentação/i });
    expect(slidesLink).toHaveAttribute('href', '#advocacia');

    const liveTourLink = screen.getByRole('link', { name: /Tour ao Vivo \(SmartLegal\)/i });
    expect(liveTourLink).toHaveAttribute('href', 'https://smartlegal.tiweb.app.br');
    expect(liveTourLink).toHaveAttribute('target', '_blank');
  });

  it('filters cases when segment is clicked', () => {
    render(<CasesShowcase />);
    const saudeBtn = screen.getByRole('button', { name: 'Saúde' });
    fireEvent.click(saudeBtn);

    expect(screen.getByText('Concept Odontologia de Alta Performance')).toBeInTheDocument();
    expect(screen.queryByText('Ecossistema de IA para Advocacia de Elite')).not.toBeInTheDocument();
  });
});
