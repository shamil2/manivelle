import { render, screen } from '@testing-library/react'
import BentoCard from '@/components/ui/BentoCard'

describe('BentoCard', () => {
  it('renders content', () => {
    render(<BentoCard title="Test Title" subtitle="Subtitle" number="01" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Subtitle')).toBeInTheDocument()
  })

  it('applies dark mode classes', () => {
    const { container } = render(<BentoCard title="Test Title" subtitle="Subtitle" number="01" dark />)
    expect(container.firstChild).toHaveClass('bg-primary', 'text-white')
    expect(container.firstChild).not.toHaveClass('bg-white')
  })

  it('merges custom className', () => {
    const { container } = render(<BentoCard title="Test Title" subtitle="Subtitle" number="01" className="custom-class bg-red-500" />)
    expect(container.firstChild).toHaveClass('custom-class', 'bg-red-500')
    expect(container.firstChild).toHaveClass('p-12')
    expect(container.firstChild).not.toHaveClass('bg-white')
  })
})
