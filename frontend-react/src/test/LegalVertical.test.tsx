import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LegalVerticalSection } from '../components/legal/LegalVerticalSection';
import { WhatsAppSimulator } from '../components/legal/WhatsAppSimulator';

describe('LegalVerticalSection Component', () => {
  it('renders headline and ethical OAB badge', () => {
    render(<LegalVerticalSection />);
    expect(screen.getByText(/Inteligência Artificial & Atendimento para a/i)).toBeInTheDocument();
    expect(screen.getByText(/Vertical Especializada \/\/ Advocacia 4.0/i)).toBeInTheDocument();
  });

  it('renders the 3 strategic legal pillars', () => {
    render(<LegalVerticalSection />);
    expect(screen.getByText(/Provimento 205\/2021 da OAB 100% Blindado/i)).toBeInTheDocument();
    expect(screen.getByText(/Triagem Cognitiva & Atendimento 24\/7/i)).toBeInTheDocument();
    expect(screen.getByText(/Sentinela de Alvarás & Reativação de Contatos/i)).toBeInTheDocument();
  });

  it('opens and closes mobile presentation modal', async () => {
    render(<LegalVerticalSection />);
    const openBtn = screen.getByRole('button', { name: /Abrir Apresentação no Celular \(7 Slides\)/i });
    fireEvent.click(openBtn);

    expect(screen.getByText('MODO APRESENTAÇÃO EXECUTIVA')).toBeInTheDocument();
    expect(screen.getByText(/SLIDE 1 DE 7/i)).toBeInTheDocument();

    const nextBtn = screen.getByRole('button', { name: /Próximo/i });
    fireEvent.click(nextBtn);
    await waitFor(() => {
      expect(screen.getByText(/SLIDE 2 DE 7/i)).toBeInTheDocument();
    });

    const closeBtn = screen.getByRole('button', { name: /Fechar apresentação/i });
    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(screen.queryByText('MODO APRESENTAÇÃO EXECUTIVA')).not.toBeInTheDocument();
    });
  });

  it('advances slide on touch swipe left and returns on touch swipe right', async () => {
    render(<LegalVerticalSection />);
    const openBtn = screen.getByRole('button', { name: /Abrir Apresentação no Celular \(7 Slides\)/i });
    fireEvent.click(openBtn);

    const slideContainer = screen.getByTestId('presentation-slide-container');

    // Swipe left (advance to slide 2)
    fireEvent.touchStart(slideContainer, { targetTouches: [{ clientX: 300 }] });
    fireEvent.touchMove(slideContainer, { targetTouches: [{ clientX: 200 }] });
    fireEvent.touchEnd(slideContainer);

    await waitFor(() => {
      expect(screen.getByText(/SLIDE 2 DE 7/i)).toBeInTheDocument();
    });

    // Swipe right (return to slide 1)
    fireEvent.touchStart(slideContainer, { targetTouches: [{ clientX: 200 }] });
    fireEvent.touchMove(slideContainer, { targetTouches: [{ clientX: 300 }] });
    fireEvent.touchEnd(slideContainer);

    await waitFor(() => {
      expect(screen.getByText(/SLIDE 1 DE 7/i)).toBeInTheDocument();
    });
  });
});

describe('WhatsAppSimulator Component', () => {
  it('renders simulator header with OAB status', () => {
    render(<WhatsAppSimulator />);
    expect(screen.getByText(/Atendente Jurídica IA/i)).toBeInTheDocument();
    expect(screen.getByText(/Online 24\/7 • Ética OAB/i)).toBeInTheDocument();
  });

  it('renders preset scenarios buttons', () => {
    render(<WhatsAppSimulator />);
    expect(screen.getByText('⚖️ Consulta Trabalhista')).toBeInTheDocument();
    expect(screen.getByText('💰 Notificação de Alvará')).toBeInTheDocument();
    expect(screen.getByText('🏠 Contrato Imobiliário')).toBeInTheDocument();
  });

  it('simulates scenario interaction when clicked', async () => {
    render(<WhatsAppSimulator />);
    const scenarioBtn = screen.getByText('⚖️ Consulta Trabalhista');
    fireEvent.click(scenarioBtn);

    expect(screen.getByText(/preciso saber se tenho direito a horas extras/i)).toBeInTheDocument();
  });
});
