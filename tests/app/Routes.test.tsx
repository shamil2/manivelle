import { render, screen } from '@testing-library/react'
import ShopPage from '@/app/shop/page'
import WorkshopsPage from '@/app/workshops/page'
import CommissionsPage from '@/app/commissions/page'

describe('Basic Routes', () => {
  it('renders Shop page', () => {
    render(<ShopPage />)
    expect(screen.getByText('The Shop')).toBeInTheDocument()
  })
  it('renders Workshops page', () => {
    render(<WorkshopsPage />)
    expect(screen.getByText('Workshops')).toBeInTheDocument()
  })
  it('renders Commissions page', () => {
    render(<CommissionsPage />)
    expect(screen.getByText('Custom Commissions')).toBeInTheDocument()
  })
})
