import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// Mock matchMedia for Framer Motion
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

// Mock Framer Motion to avoid issues with useScroll/useTransform in JSDOM
jest.mock('framer-motion', () => {
  const React = require('react');
  const Dummy = ({ children, ...props }: any) => {
    // Filter out motion props
    const { 
      whileInView, 
      viewport, 
      initial, 
      animate, 
      variants, 
      transition,
      ...domProps 
    } = props;
    return React.createElement('div', domProps, children);
  };
  
  return {
    ...jest.requireActual('framer-motion'),
    useScroll: jest.fn(() => ({ scrollYProgress: { get: () => 0, onChange: () => {} } })),
    useTransform: jest.fn(() => 0),
    motion: {
      div: Dummy,
      h1: ({ children, ...props }: any) => {
        const { variants, initial, animate, transition, ...domProps } = props;
        return React.createElement('h1', domProps, children);
      },
      h2: ({ children, ...props }: any) => {
        const { variants, initial, animate, transition, ...domProps } = props;
        return React.createElement('h2', domProps, children);
      },
      span: ({ children, ...props }: any) => {
        const { variants, initial, animate, transition, ...domProps } = props;
        return React.createElement('span', domProps, children);
      },
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
})

describe('Home Page', () => {
  it('renders hero title', () => {
    render(<Home />)
    expect(screen.getByText(/Façonner l'avenir/i)).toBeInTheDocument()
  })
})
