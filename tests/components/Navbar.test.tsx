import { render, screen } from '@testing-library/react';
import Navbar from '@/components/layout/Navbar';

describe('Navbar Component', () => {
  it('renders the logo', () => {
    render(<Navbar />);
    expect(screen.getByText('LA MANIVELLE')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('The Shop')).toBeInTheDocument();
    expect(screen.getByText('Commissions')).toBeInTheDocument();
    expect(screen.getByText('Workshops')).toBeInTheDocument();
  });

  it('renders the cart button', () => {
    render(<Navbar />);
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });
});
