import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';

afterEach(cleanup);

describe('SismoSeguro Colombia landing', () => {
  it('presents the prevention message and the three stages', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /estar preparados/i })).toBeTruthy();
    expect(screen.getByText(/antes del sismo/i)).toBeTruthy();
    expect(screen.getByText(/durante el sismo/i)).toBeTruthy();
    expect(screen.getByText(/después del sismo/i)).toBeTruthy();
  });

  it('provides a link to official information', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /servicio geológico colombiano/i });
    expect(link.getAttribute('href')).toContain('sgc.gov.co');
  });
});
