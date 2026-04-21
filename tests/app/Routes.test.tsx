import { render, screen } from '@testing-library/react'
import ShopPage from '@/app/shop/page'
import WorkshopsPage from '@/app/workshops/page'
import CommissionsPage from '@/app/commissions/page'

// Mock matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

describe('Basic Routes', () => {
  it('renders Shop page', () => {
    render(<ShopPage />)
    expect(screen.getByText(/La Boutique est actuellement/i)).toBeInTheDocument()
  })
  it('renders Workshops page', () => {
    render(<WorkshopsPage />)
    expect(screen.getByText(/Transmettre le/i)).toBeInTheDocument()
  })
  it('renders Commissions page', () => {
    render(<CommissionsPage />)
    expect(screen.getByText(/Des pièces conçues/i)).toBeInTheDocument()
  })
})
