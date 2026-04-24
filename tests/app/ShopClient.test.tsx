import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import ShopClient from '@/app/shop/shop-client'

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

// Mock Framer Motion
jest.mock('framer-motion', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const React = require('react');
  const Actual = jest.requireActual('framer-motion');
  
  // eslint-disable-next-line react/display-name
  const Dummy = (type: string) => ({ children, ...props }: Record<string, unknown>) => {
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

describe('ShopClient Component', () => {
  it('renders "Bientôt Disponible" and waitlist form when no products are provided', () => {
    render(<ShopClient products={[]} />)
    expect(screen.getByText(/Bientôt Disponible/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Votre adresse email/i)).toBeInTheDocument()
  })

  it('renders products when they are provided', () => {
    const fakeProducts = [
      {
        name: "Produit Test",
        description: "Test description",
        price: 99,
        inStock: true,
        checkoutUrl: "#",
      }
    ]
    render(<ShopClient products={fakeProducts} />)
    expect(screen.getByText("Produit Test")).toBeInTheDocument()
    expect(screen.getByText("Test description")).toBeInTheDocument()
    expect(screen.getByText("99€")).toBeInTheDocument()
    expect(screen.getByText(/Commander/i)).toBeInTheDocument()
    expect(screen.queryByText(/Bientôt Disponible/i)).not.toBeInTheDocument()
  })

  it('shows out of stock badge if product is not in stock', () => {
    const fakeProducts = [
      {
        name: "Produit Épuisé",
        price: 150,
        inStock: false,
      }
    ]
    render(<ShopClient products={fakeProducts} />)
    expect(screen.getByText("Produit Épuisé")).toBeInTheDocument()
    expect(screen.getAllByText(/Épuisé/i).length).toBeGreaterThan(0)
    expect(screen.queryByText(/Commander/i)).not.toBeInTheDocument()
  })
  
  it('handles waitlist form submission', () => {
    render(<ShopClient products={[]} />)
    const emailInput = screen.getByPlaceholderText(/Votre adresse email/i)
    const submitButton = screen.getByText(/Me Prévenir/i)
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(submitButton)
    
    expect(screen.getByText(/Merci !/i)).toBeInTheDocument()
    expect(screen.getByText(/Nous vous préviendrons dès que la boutique ouvre !/i)).toBeInTheDocument()
  })
})
