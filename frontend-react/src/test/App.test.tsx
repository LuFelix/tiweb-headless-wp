import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  it('renders navbar brand with TIWEB', () => {
    render(<App />);
    expect(screen.getAllByText(/TIWEB/i).length).toBeGreaterThan(0);
  });

  it('renders hero main headline', () => {
    render(<App />);
    expect(
      screen.getByText(/Engenharia de Software de/i)
    ).toBeInTheDocument();
  });

  it('renders the 4 ecosystem products cards', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'SmartContact' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'MAS / Educa-IA' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Lisa / Automação Social' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'SPED Fácil' })).toBeInTheDocument();
  });

  it('renders footer with copyright', () => {
    render(<App />);
    expect(screen.getByText(/TIWEB Soluções Tecnológicas/i)).toBeInTheDocument();
  });
});
