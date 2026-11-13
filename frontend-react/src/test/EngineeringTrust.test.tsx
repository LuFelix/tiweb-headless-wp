import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EngineeringTrust } from '../components/EngineeringTrust';

describe('EngineeringTrust Component', () => {
  it('renders section headline', () => {
    render(<EngineeringTrust />);
    expect(screen.getByText('Como Construímos Software')).toBeInTheDocument();
  });

  it('renders business view by default', () => {
    render(<EngineeringTrust />);
    expect(screen.getByText(/Proteção do Seu Investimento/i)).toBeInTheDocument();
    expect(screen.getByText(/Blindagem Jurídica & LGPD/i)).toBeInTheDocument();
  });

  it('switches to tech view when CTO button is clicked', async () => {
    render(<EngineeringTrust />);
    const techBtn = screen.getByRole('button', { name: /Visão Técnica \(CTO & Arquitetura\)/i });
    fireEvent.click(techBtn);

    expect(await screen.findByText(/TDD Estrito ≥ 93%/i)).toBeInTheDocument();
    expect(screen.getByText(/SSOT & Git Flow Universal/i)).toBeInTheDocument();
  });
});
