import { render, screen } from '@testing-library/react'
import Footer from '@/components/layout/Footer'

describe('Footer Component', () => {
  it('renders copyright and location text', () => {
    render(<Footer />)
    expect(screen.getByText('© 2026 Atelier La Manivelle / Tous Droits Réservés')).toBeInTheDocument()
    expect(screen.getByText('Cliponville, 76640')).toBeInTheDocument()
    expect(screen.getByText('Normandie, France')).toBeInTheDocument()
  })

  it('renders social and contact links', () => {
    render(<Footer />)
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Pinterest')).toBeInTheDocument()
  })
})
