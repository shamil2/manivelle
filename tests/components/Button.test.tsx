import { render, screen } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button', () => {
  it('renders correctly with primary variant by default', () => {
    render(<Button>Click Me</Button>)
    const button = screen.getByRole('button', { name: 'Click Me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary')
    expect(button).toHaveClass('text-white')
  })

  it('renders correctly with outline variant', () => {
    render(<Button variant="outline">Click Me</Button>)
    const button = screen.getByRole('button', { name: 'Click Me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('border-primary/10')
  })

  it('merges custom className correctly', () => {
    render(<Button className="mt-4 bg-red-500">Click Me</Button>)
    const button = screen.getByRole('button', { name: 'Click Me' })
    expect(button).toHaveClass('mt-4')
    expect(button).toHaveClass('bg-red-500')
    expect(button).not.toHaveClass('bg-primary')
  })
})
