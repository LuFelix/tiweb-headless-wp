import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LisaShowcaseSection } from '../components/lisa/LisaShowcaseSection';

describe('LisaShowcaseSection Component', () => {
  it('renders Lisa headline and Automação Plus badge', () => {
    render(<LisaShowcaseSection />);
    expect(screen.getByText(/ASSISTENTE COGNITIVA & AUTOMAÇÃO PLUS/i)).toBeInTheDocument();
    expect(screen.getByText(/Conheça a/i)).toBeInTheDocument();
  });

  it('renders core capabilities of Lisa', () => {
    render(<LisaShowcaseSection />);
    expect(screen.getByText(/Atendimento Cognitivo 24\/7 no WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByText(/Fábrica de Carrosséis & Stories com Gemini/i)).toBeInTheDocument();
    expect(screen.getByText(/Publicação Direta via Meta Graph API/i)).toBeInTheDocument();
    expect(screen.getByText(/Plano Automação Plus Modular/i)).toBeInTheDocument();
  });

  it('renders live WhatsApp CTA pointing to official Lisa number', () => {
    render(<LisaShowcaseSection />);
    const liveLink = screen.getByRole('link', { name: /Testar a Lisa ao Vivo no WhatsApp/i });
    expect(liveLink.getAttribute('href')).toContain('https://wa.me/5582991821555');
    expect(liveLink).toHaveAttribute('target', '_blank');
  });
});
