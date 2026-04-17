# La Manivelle Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready, visually striking Next.js website for La Manivelle featuring a Shop, Custom Commissions, and Workshop bookings, using an artisanal "Organic & Handcrafted" aesthetic.

**Architecture:** A Next.js App Router application using Tailwind CSS for styling. The site will utilize static and server-side rendering where appropriate. State management will be handled natively via React hooks. Form handling for the Custom Commissions will use native React Server Actions or standard form submissions. E-commerce and booking functionalities are structured to be "Integration-Ready" (Stripe & Calendly).

**Tech Stack:** Next.js (App Router), React, Tailwind CSS, Jest, React Testing Library, Framer Motion (for animations).

---

### Task 1: Project Initialization & Tooling Setup

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `jest.config.mjs`, `jest.setup.js`
- Modify: `app/layout.tsx`, `app/globals.css`

- [ ] **Step 1: Bootstrap Next.js App**
Run: `npx create-next-app@latest . --typescript --tailwind --eslint --app --use-npm --src-dir false --import-alias "@/*" --no-tailwind-html`
Note: If directory is not empty, force it or manually create files. Since we already have some files, we can just run the initialization and resolve conflicts.

- [ ] **Step 2: Install Testing Dependencies**
Run: `npm install -D jest @testing-library/react @testing-library/jest-dom @testing-library/dom jest-environment-jsdom ts-node`

- [ ] **Step 3: Configure Jest**
Create `jest.config.mjs`:
```javascript
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(config)
```

Create `jest.setup.js`:
```javascript
import '@testing-library/jest-dom'
```

- [ ] **Step 4: Verify Test Environment**
Create `tests/setup.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'

describe('Setup Test', () => {
  it('renders a div', () => {
    render(<div data-testid="test-div">Hello</div>)
    expect(screen.getByTestId('test-div')).toBeInTheDocument()
  })
})
```
Run: `npx jest`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "chore: initialize next.js project and testing environment"
```

### Task 2: Design Tokens & Typography

**Files:**
- Modify: `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`

- [ ] **Step 1: Configure Tailwind Theme**
Update `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#F9F9F5",
        primary: "#2D2D2A",
        accent: "#D97757",
        subtle: "#DED6C9",
        natural: "#788C5D",
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        serif: ['var(--font-instrument)', 'serif'],
      },
      backgroundImage: {
        'cardboard-texture': "url('https://www.transparenttextures.com/patterns/cardboard-flat.png')",
      }
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2: Add Global CSS**
Update `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: theme('colors.surface');
  color: theme('colors.primary');
}
```

- [ ] **Step 3: Configure Next.js Fonts**
Update `app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const instrument = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-instrument" });

export const metadata: Metadata = {
  title: "La Manivelle | Meubles Sur Mesure",
  description: "Artisanal cardboard furniture and workshops in Cliponville, France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} ${instrument.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Run dev server to verify**
Run: `npm run dev` and check localhost:3000 to ensure fonts and background load without errors. (Stop server after checking).

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "style: add design tokens and configure fonts"
```

### Task 3: Shared Components - Button & BentoCard

**Files:**
- Create: `components/ui/Button.tsx`, `components/ui/BentoCard.tsx`
- Create: `tests/components/Button.test.tsx`, `tests/components/BentoCard.test.tsx`

- [ ] **Step 1: Write Button Test**
Create `tests/components/Button.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument()
  })
})
```
Run: `npx jest tests/components/Button.test.tsx` (Should fail).

- [ ] **Step 2: Implement Button**
Create `components/ui/Button.tsx`:
```tsx
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  children: React.ReactNode
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "uppercase text-xs tracking-widest font-bold px-8 py-4 transition-all duration-300 rounded-sm"
  const variants = {
    primary: "bg-primary text-white hover:bg-accent hover:scale-105",
    outline: "border border-black/10 hover:bg-black/5"
  }
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
```

- [ ] **Step 3: Write BentoCard Test**
Create `tests/components/BentoCard.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import BentoCard from '@/components/ui/BentoCard'

describe('BentoCard', () => {
  it('renders content', () => {
    render(<BentoCard title="Test Title" subtitle="Subtitle" number="01" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Subtitle')).toBeInTheDocument()
  })
})
```

- [ ] **Step 4: Implement BentoCard**
Create `components/ui/BentoCard.tsx`:
```tsx
import React from 'react'

interface BentoCardProps {
  title: string
  subtitle: string
  number: string
  description?: string
  dark?: boolean
  className?: string
}

export default function BentoCard({ title, subtitle, number, description, dark = false, className = '' }: BentoCardProps) {
  return (
    <div className={`p-12 flex flex-col justify-between group relative overflow-hidden transition-all duration-400 border border-black/5 hover:-translate-y-1 hover:shadow-2xl hover:border-accent ${dark ? 'bg-primary text-white' : 'bg-white'} ${className}`}>
      <div className="absolute inset-0 bg-cardboard-texture opacity-5 pointer-events-none"></div>
      <div className="relative z-10">
        <span className="text-xs uppercase tracking-widest opacity-40 mb-4 block">{subtitle}</span>
        <h2 className="text-4xl font-serif italic mb-4">{title}</h2>
        {description && <p className="opacity-60 max-w-sm">{description}</p>}
      </div>
      <div className="flex items-end justify-between relative z-10">
        <span className="text-5xl font-light opacity-10 group-hover:opacity-100 transition-opacity">{number}</span>
        <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
      </div>
    </div>
  )
}
```
Run tests: `npx jest` (All pass).

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "feat: add Button and BentoCard UI components"
```

### Task 4: Layout Components - Navbar & Footer

**Files:**
- Create: `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Write Navbar Test**
Create `tests/components/Navbar.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/layout/Navbar'

describe('Navbar', () => {
  it('renders logo and links', () => {
    render(<Navbar />)
    expect(screen.getByText('LA MANIVELLE')).toBeInTheDocument()
    expect(screen.getByText('The Shop')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Implement Navbar & Footer**
Create `components/layout/Navbar.tsx`:
```tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8">
      <Link href="/" className="text-2xl font-semibold tracking-tighter">LA MANIVELLE</Link>
      <div className="hidden md:flex gap-8 uppercase text-xs tracking-widest font-medium opacity-60">
        <Link href="/shop" className="hover:opacity-100 transition-opacity">The Shop</Link>
        <Link href="/commissions" className="hover:opacity-100 transition-opacity">Commissions</Link>
        <Link href="/workshops" className="hover:opacity-100 transition-opacity">Workshops</Link>
      </div>
      <div className="flex gap-4">
        <button className="opacity-60 hover:opacity-100 uppercase tracking-widest text-xs font-bold">Cart</button>
      </div>
    </nav>
  )
}
```

Create `components/layout/Footer.tsx`:
```tsx
export default function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-start gap-8 opacity-40 text-sm">
      <div>
        <p>© 2026 La Manivelle</p>
        <p>Cliponville, France</p>
      </div>
      <div className="flex gap-8 uppercase tracking-widest text-xs font-bold">
        <a href="#" className="hover:opacity-100">Instagram</a>
        <a href="#" className="hover:opacity-100">Facebook</a>
        <a href="mailto:emmanuellezaree@lamanivelle.fr" className="hover:opacity-100">Contact</a>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Update RootLayout**
Modify `app/layout.tsx` to include Navbar and Footer:
```tsx
import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ... existing font setup and metadata ...

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} ${instrument.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Run Tests**
Run `npx jest tests/components/Navbar.test.tsx`.
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "feat: add global Navbar and Footer components"
```

### Task 5: Assemble Home Page Sections

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Write Home Page Test**
Create `tests/app/HomePage.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders hero title', () => {
    render(<Home />)
    expect(screen.getByText(/Crafting the/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Implement Home Page**
Update `app/page.tsx`:
```tsx
import Button from '@/components/ui/Button'
import BentoCard from '@/components/ui/BentoCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-4 md:p-8 pt-0">
      <header className="relative mb-24 min-h-[70vh] flex flex-col justify-center">
        <h1 className="text-[clamp(3rem,10vw,6rem)] leading-[0.9] tracking-tighter font-serif italic mb-8">
          Crafting the<br/>future of <span className="text-accent">cardboard</span>.
        </h1>
        <p className="max-w-xl text-lg opacity-70 mb-12 leading-relaxed">
          Handmade in Cliponville. Eco-responsible custom furniture, unique lighting, and workshops dedicated to the art of cartonnage.
        </p>
        <div className="flex gap-4">
          <Button variant="primary">Explore Creations</Button>
          <Button variant="outline">Book a Workshop</Button>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-subtle/20 -z-10 rounded-full blur-3xl mix-blend-multiply"></div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 min-h-[800px] mb-24">
        <BentoCard 
          className="md:col-span-2 md:row-span-2"
          subtitle="Cartonnage"
          title="Artisanal Workshops"
          description="Join us in the studio. Learn the precise techniques of cardboard furniture creation in a warm, convivial atmosphere."
          number="01"
        />
        <BentoCard 
          className="md:col-span-2"
          dark={true}
          subtitle="The Shop"
          title="Ready-to-Ship"
          description="Browse our collection of lamps, small furniture, and decorative objects crafted from recycled materials."
          number="02"
        />
        <BentoCard 
          className="md:col-span-2"
          subtitle="Bespoke"
          title="Custom Commissions"
          description="From shelving units to unique office desks. We design and build furniture tailored perfectly to your space."
          number="03"
        />
      </section>

      <section className="mb-24 py-24 border-y border-black/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-xs uppercase tracking-widest opacity-40 mb-8 font-bold">The Ethos</h3>
            <h2 className="text-5xl font-serif italic mb-8 leading-tight">Handmade, Eco-responsible, and deeply Personal.</h2>
            <div className="space-y-6 opacity-70 text-lg leading-relaxed">
              <p>Every piece at La Manivelle begins with recovered cardboard—a humble material transformed through precision and creativity into durable, high-end furniture.</p>
              <p>We believe in the circular economy and the transmission of know-how. Whether you&apos;re buying a piece or learning to make your own, you&apos;re part of a sustainable future for craft.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {/* Using scraped Wix images as placeholders until AI assets are generated */}
            <div className="aspect-[3/4] bg-neutral-200 rounded-sm overflow-hidden relative">
              <Image src="https://static.wixstatic.com/media/22a2c6_3cebd6f34c6b45499a4f9751e16592d7~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_560,h_752,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5629_JPG.jpg" alt="Workshop details" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="aspect-[3/4] bg-neutral-200 rounded-sm overflow-hidden relative translate-y-12">
              <Image src="https://static.wixstatic.com/media/22a2c6_3af074da3ef44b488eebc9798df07205~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_147,h_196,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/22a2c6_3af074da3ef44b488eebc9798df07205~mv2_d_3024_4032_s_4_2.jpg" alt="Finished piece" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

Update `next.config.js` or `next.config.mjs` to allow images from `static.wixstatic.com`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
    ],
  },
};
export default nextConfig;
```

- [ ] **Step 3: Run Tests**
Run `npx jest tests/app/HomePage.test.tsx`.
Expected: PASS

- [ ] **Step 4: Commit**
```bash
git add .
git commit -m "feat: assemble complete home page layout"
```

### Task 6: Routing & Placeholder Pages (Integration Ready)

**Files:**
- Create: `app/shop/page.tsx`, `app/commissions/page.tsx`, `app/workshops/page.tsx`

- [ ] **Step 1: Write Route Rendering Test**
Create `tests/app/Routes.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import ShopPage from '@/app/shop/page'
import WorkshopsPage from '@/app/workshops/page'

describe('Basic Routes', () => {
  it('renders Shop page', () => {
    render(<ShopPage />)
    expect(screen.getByText('The Shop')).toBeInTheDocument()
  })
  it('renders Workshops page', () => {
    render(<WorkshopsPage />)
    expect(screen.getByText('Workshops')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Implement Pages**
Create `app/shop/page.tsx`:
```tsx
export default function Shop() {
  return (
    <div className="p-8 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-serif italic mb-6">The Shop</h1>
      <p className="opacity-60 max-w-md mx-auto mb-8">Our latest collection of eco-responsible cardboard furniture and lighting is currently being crafted.</p>
      {/* Stripe Integration Placeholder */}
      <div className="p-6 border border-black/10 rounded-sm border-dashed">
        <p className="text-sm font-mono opacity-50">[ Stripe Product Grid Integration Point ]</p>
      </div>
    </div>
  )
}
```

Create `app/commissions/page.tsx`:
```tsx
export default function Commissions() {
  return (
    <div className="p-8 py-24 max-w-2xl mx-auto">
      <h1 className="text-5xl font-serif italic mb-6">Custom Commissions</h1>
      <p className="opacity-60 mb-12">Tell us about your space and the piece you envision. We will design a custom cardboard creation tailored precisely to your needs.</p>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-bold uppercase tracking-widest mb-2">Name</label>
          <input type="text" className="w-full p-4 bg-transparent border border-black/20 focus:border-accent outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase tracking-widest mb-2">Project Vision</label>
          <textarea rows={4} className="w-full p-4 bg-transparent border border-black/20 focus:border-accent outline-none transition-colors"></textarea>
        </div>
        <button type="submit" className="bg-primary text-white uppercase text-xs tracking-widest font-bold px-8 py-4 hover:bg-accent transition-colors">Submit Request</button>
      </form>
    </div>
  )
}
```

Create `app/workshops/page.tsx`:
```tsx
export default function Workshops() {
  return (
    <div className="p-8 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-serif italic mb-6">Workshops</h1>
      <p className="opacity-60 max-w-md mx-auto mb-8">Join our 3h discovery sessions or extensive 20-session courses in Cliponville.</p>
      {/* Calendly Integration Placeholder */}
      <div className="p-12 border border-black/10 rounded-sm w-full max-w-4xl border-dashed">
        <p className="text-sm font-mono opacity-50">[ Calendly Widget Integration Point ]</p>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Run Tests**
Run `npx jest tests/app/Routes.test.tsx`.
Expected: PASS

- [ ] **Step 4: Commit**
```bash
git add .
git commit -m "feat: add shop, commissions, and workshop placeholder pages"
```

### Task 7: AI Asset Generation Execution

**Files:**
- N/A (Script execution)

- [ ] **Step 1: Generate Cinematic Hero Background**
Run: `python scripts/minimax_video.py --prompt "Cinematic close-up of hands working with textured kraft paper and cardboard. Warm, sun-drenched lighting. Dust motes in the air. Organic, tactile, artisanal." --output "public/assets/videos/hero-background.mp4"`
*(Assuming the `minimax_video.py` script is available from the frontend-dev skill in the project workspace, otherwise skip or use placeholder)*.

- [ ] **Step 2: Generate Shop Product Textures**
Run: `python scripts/minimax_image.py --prompt "Close up high resolution texture of clean corrugated cardboard, warm studio lighting, minimal, empty space" --output "public/assets/images/texture-cardboard.webp"`

- [ ] **Step 3: Commit Generated Assets**
```bash
git add public/assets/
git commit -m "asset: add AI-generated media"
```

---
