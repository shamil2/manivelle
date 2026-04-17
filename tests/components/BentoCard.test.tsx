import { render, screen } from '@testing-library/react'
import BentoCard from '@/components/ui/BentoCard'

describe('BentoCard', () => {
  it('renders content', () => {
    render(<BentoCard title="Test Title" subtitle="Subtitle" number="01" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Subtitle')).toBeInTheDocument()
  })
})
