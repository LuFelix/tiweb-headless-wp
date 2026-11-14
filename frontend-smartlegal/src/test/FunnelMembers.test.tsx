import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { App } from '../App';
import { MemberDashboard } from '../components/members/MemberDashboard';
import { MemberLogin } from '../components/members/MemberLogin';
import { LEGAL_FREE_PERKS, VIP_UPSELL_CARDS } from '../data/legalPerks';
import { AuthService } from '../services/authService';

describe('SmartLegal 2-Stage Funnel & Member Portal', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('renders Member Area CTA in top navigation', () => {
    render(<App />);
    expect(screen.getByText(/Área do Advogado/i)).toBeInTheDocument();
  });

  it('opens Login Modal when clicking on Member Area CTA', () => {
    render(<App />);
    const memberBtn = screen.getByText(/Área do Advogado/i);
    fireEvent.click(memberBtn);

    expect(screen.getByText(/Área de Membros Jurídica/i)).toBeInTheDocument();
    expect(screen.getByText(/Acesso Rápido para Demonstração/i)).toBeInTheDocument();
  });

  it('allows quick demo login and directs user into Stage 1 and Stage 2 Dashboard', async () => {
    render(<App />);
    const memberBtn = screen.getByText(/Área do Advogado/i);
    fireEvent.click(memberBtn);

    const quickAccessBtn = screen.getByText(/Acesso Rápido para Demonstração/i);
    fireEvent.click(quickAccessBtn);

    // Dashboard should render with Stage 1 Perks and Stage 2 VIP cards
    await waitFor(() => {
      expect(screen.getByText(/Portal do Advogado Associado/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Etapa 1 do Funil/i)).toBeInTheDocument();
    expect(screen.getByText(/Seus 4 Mimos de Autoridade OAB Liberados/i)).toBeInTheDocument();

    // Verify all 4 legal perks are rendered
    LEGAL_FREE_PERKS.forEach((perk) => {
      expect(screen.getByText(perk.title)).toBeInTheDocument();
    });

    // Verify Stage 2 VIP Upsell section is rendered
    expect(screen.getByText(/Etapa 2 do Funil/i)).toBeInTheDocument();
    VIP_UPSELL_CARDS.forEach((vip) => {
      expect(screen.getByText(vip.title)).toBeInTheDocument();
    });
  });

  it('triggers download simulation and updates button state in MemberDashboard', () => {
    const handleLogout = vi.fn();
    render(<MemberDashboard onLogout={handleLogout} />);

    const downloadButtons = screen.getAllByRole('button', { name: /Baixar Recurso Gratuito/i });
    expect(downloadButtons.length).toBe(4);

    fireEvent.click(downloadButtons[0]);
    expect(screen.getByText(/Baixar Novamente/i)).toBeInTheDocument();
  });

  it('displays error message in login modal on failed credential authentication', async () => {
    vi.spyOn(AuthService, 'loginWithCredentials').mockResolvedValue({
      success: false,
      error: 'E-mail ou senha incorretos'
    });

    const handleSuccess = vi.fn();
    const handleCancel = vi.fn();

    render(<MemberLogin onSuccess={handleSuccess} onCancel={handleCancel} />);

    const emailInput = screen.getByPlaceholderText(/seu.nome@oab.org.br/i);
    const passwordInput = screen.getByPlaceholderText(/••••••••/i);
    const submitBtn = screen.getByRole('button', { name: /Acessar Área Exclusiva/i });

    fireEvent.change(emailInput, { target: { value: 'errado@oab.org.br' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/E-mail ou senha incorretos/i)).toBeInTheDocument();
    });
    expect(handleSuccess).not.toHaveBeenCalled();
  });
});
