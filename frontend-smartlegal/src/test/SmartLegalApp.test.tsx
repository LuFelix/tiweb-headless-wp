import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('SmartLegal Showcase App', () => {
  it('renders ethical OAB banner and headline', () => {
    render(<App />);
    expect(screen.getByText(/ESTRITAMENTE CONFORME O CÓDIGO DE ÉTICA DA OAB/i)).toBeInTheDocument();
    expect(screen.getByText(/Advocacia Contemporânea/i)).toBeInTheDocument();
  });

  it('renders the 3 strategic legal pillars', () => {
    render(<App />);
    expect(screen.getByText('Acolhimento 24 Horas')).toBeInTheDocument();
    expect(screen.getByText('Sentinela de Alvarás')).toBeInTheDocument();
    expect(screen.getByText('Visual Law Integrado')).toBeInTheDocument();
  });

  it('changes active practice area when button is clicked', async () => {
    render(<App />);
    const previdenciarioBtn = screen.getByRole('button', { name: 'Direito Previdenciário' });
    fireEvent.click(previdenciarioBtn);

    expect(await screen.findByText(/Concessão, Revisão de Aposentadoria e BPC\/LOAS/i)).toBeInTheDocument();
  });

  it('contains CTA button pointing to WhatsApp demo', () => {
    render(<App />);
    const simularBtn = screen.getByRole('link', { name: /Simular Atendente no WhatsApp/i });
    expect(simularBtn.getAttribute('href')).toContain('https://wa.me/5582991821555');
  });
});
