import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from '../components/Hero';

describe('Hero Component', () => {
  it('renders authority badge', () => {
    render(<Hero />);
    expect(screen.getByText(/Software House de Elite \/\/ B2B Enterprise & IA/i)).toBeInTheDocument();
  });

  it('renders 4 engineering metrics indicators', () => {
    render(<Hero />);
    expect(screen.getByText('SSOT')).toBeInTheDocument();
    expect(screen.getByText('≥ 93%')).toBeInTheDocument();
    expect(screen.getByText('Bancário')).toBeInTheDocument();
    expect(screen.getByText('Atômico')).toBeInTheDocument();
  });

  it('renders CTAs to explore products and cases', () => {
    render(<Hero />);
    expect(screen.getByText(/Explorar Produtos do Ecossistema/i)).toBeInTheDocument();
    expect(screen.getByText(/Ver Vitrine de Cases Reais/i)).toBeInTheDocument();
  });
});
