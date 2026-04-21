import { render, screen, fireEvent } from '@testing-library/react'
import MagneticButton from '@/components/ui/MagneticButton'

describe('MagneticButton Component', () => {
  it('renders children correctly', () => {
    render(
      <MagneticButton className="test-class">
        <span>Magnetic Text</span>
      </MagneticButton>
    )
    expect(screen.getByText('Magnetic Text')).toBeInTheDocument()
  })

  it('handles mouse events without crashing', () => {
    const { container } = render(
      <MagneticButton>
        <button>Hover me</button>
      </MagneticButton>
    )
    const wrapper = container.firstChild as Element
    
    // Mock getBoundingClientRect
    wrapper.getBoundingClientRect = jest.fn(() => ({
      width: 100,
      height: 50,
      top: 0,
      left: 0,
      bottom: 50,
      right: 100,
      x: 0,
      y: 0,
      toJSON: () => {}
    }))

    fireEvent.mouseMove(wrapper, { clientX: 50, clientY: 25 })
    fireEvent.mouseLeave(wrapper)
    
    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })
})
