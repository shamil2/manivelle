import { render, screen } from '@testing-library/react'
import AboutPage from '@/app/about/page'

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
  const React = require('react');
  const Actual = jest.requireActual('framer-motion');
  
  const Dummy = (type: string) => ({ children, ...props }: any) => {
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
    return React.createElement(type, domProps, children);
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
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
})

describe('About Page', () => {
  it('renders About page title', () => {
    render(<AboutPage />)
    expect(screen.getByText(/Emmanuelle/i)).toBeInTheDocument()
  })
})
