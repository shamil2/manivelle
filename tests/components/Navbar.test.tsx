import { render, screen } from '@testing-library/react'
import Navbar from '@/components/layout/Navbar'

describe('Navbar Component', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByAltText('La Manivelle Logo')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('La Boutique').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Sur Mesure').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Les Stages').length).toBeGreaterThan(0)
  })

  it('renders the cart button', () => {
    render(<Navbar />)
    expect(screen.getByText('Panier (0)')).toBeInTheDocument()
  })
})
