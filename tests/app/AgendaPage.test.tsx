import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AgendaPage from '@/app/agenda/page'

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

// Mock Framer Motion with a Proxy to handle all motion.x components
jest.mock('framer-motion', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const React = require('react');
  const Actual = jest.requireActual('framer-motion');
  
  // eslint-disable-next-line react/display-name
  const Dummy = (type: string) => ({ children, ...props }: Record<string, unknown>) => {
    // Filter out motion props
    const domProps = { ...props };
    delete domProps.whileInView;
    delete domProps.viewport;
    delete domProps.initial;
    delete domProps.animate;
    delete domProps.variants;
    delete domProps.transition;
    
    return React.createElement(type, domProps as Record<string, unknown>, children as React.ReactNode);
  };
  
  const motionProxy = new Proxy({}, {
    get: (_target, key: string) => {
      return Dummy(key);
    }
  });

  return {
    ...Actual,
    useScroll: jest.fn(() => ({ scrollYProgress: { get: () => 0, onChange: () => {} } })),
    useTransform: jest.fn(() => 0),
    motion: motionProxy,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
})

describe('Agenda Page', () => {
  it('renders Agenda page title', () => {
    render(<AgendaPage />)
    expect(screen.getByText(/Agenda &/i)).toBeInTheDocument()
  })
})
