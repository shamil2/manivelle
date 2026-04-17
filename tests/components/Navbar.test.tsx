import { render, screen } from '@testing-library/react';
import Navbar from '@/components/layout/Navbar';

describe('Navbar Component', () => {
  it('renders the logo', () => {
    render(<Navbar />);
    expect(screen.getByText('LA MANIVELLE')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getAllByText('The Shop').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Commissions').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Workshops').length).toBeGreaterThan(0);
  });

  it('renders the cart button', () => {
    render(<Navbar />);
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });
});
