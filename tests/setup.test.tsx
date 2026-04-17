import { render, screen } from '@testing-library/react'

describe('Setup Test', () => {
  it('renders a div', () => {
    render(<div data-testid="test-div">Hello</div>)
    expect(screen.getByTestId('test-div')).toBeInTheDocument()
  })
})
