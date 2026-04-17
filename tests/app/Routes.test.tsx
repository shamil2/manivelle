import { render, screen } from '@testing-library/react'
import ShopPage from '@/app/shop/page'
import WorkshopsPage from '@/app/workshops/page'

describe('Basic Routes', () => {
  it('renders Shop page', () => {
    render(<ShopPage />)
    expect(screen.getByText('The Shop')).toBeInTheDocument()
  })
  it('renders Workshops page', () => {
    render(<WorkshopsPage />)
    expect(screen.getByText('Workshops')).toBeInTheDocument()
  })
})
