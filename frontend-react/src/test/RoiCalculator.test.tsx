import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { RoiCalculator } from '../components/RoiCalculator';

describe('RoiCalculator Component', () => {
  it('renders title and payback badge', () => {
    render(<RoiCalculator />);
    expect(screen.getByText('Calculadora de Retorno (ROI Reverso)')).toBeInTheDocument();
    expect(screen.getByText('PAYBACK < 15 DIAS')).toBeInTheDocument();
  });

  it('renders default calculated revenue', () => {
    render(<RoiCalculator />);
    expect(screen.getByText(/Receita Potencial Recuperada/i)).toBeInTheDocument();
    // Default: 8 leads * 25% = 2 contracts * R$ 4.000 = R$ 8.000
    expect(screen.getAllByText(/R\$ 8\.000/i).length).toBeGreaterThan(0);
  });

  it('updates calculation when ticket slider is changed', () => {
    render(<RoiCalculator />);
    const sliders = screen.getAllByRole('slider');
    const ticketSlider = sliders[0]; // first slider is ticket

    fireEvent.change(ticketSlider, { target: { value: '10000' } });
    // 2 contracts * R$ 10.000 = R$ 20.000
    expect(screen.getAllByText(/R\$ 20\.000/i).length).toBeGreaterThan(0);
  });
});
