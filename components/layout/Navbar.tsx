'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav aria-label="Main Navigation" className="flex justify-between items-center p-8 bg-surface relative">
      <Link href="/" className="text-2xl font-semibold tracking-tighter hover:text-accent transition-colors z-50">
        LA MANIVELLE
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 uppercase text-xs tracking-widest font-medium opacity-60">
        <Link href="/shop" className="hover:opacity-100 transition-opacity hover:text-accent">Boutique</Link>
        <Link href="/commissions" className="hover:opacity-100 transition-opacity hover:text-accent">Sur Mesure</Link>
        <Link href="/workshops" className="hover:opacity-100 transition-opacity hover:text-accent">Stages</Link>
        <Link href="/about" className="hover:opacity-100 transition-opacity hover:text-accent">À Propos</Link>
        <Link href="/agenda" className="hover:opacity-100 transition-opacity hover:text-accent">Agenda</Link>
        <Link href="/gallery" className="hover:opacity-100 transition-opacity hover:text-accent">Galerie</Link>
      </div>

      <div className="flex gap-4 items-center">
        <button className="opacity-60 hover:opacity-100 uppercase tracking-widest text-xs font-bold hover:text-accent transition-colors">Cart</button>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 p-1"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className={cn("w-6 h-0.5 bg-primary transition-transform duration-300 origin-center", isOpen && "rotate-45 translate-y-2")} />
          <span className={cn("w-6 h-0.5 bg-primary transition-opacity duration-300", isOpen && "opacity-0")} />
          <span className={cn("w-6 h-0.5 bg-primary transition-transform duration-300 origin-center", isOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center gap-12 transition-transform duration-500 md:hidden",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <Link href="/shop" onClick={() => setIsOpen(false)} className="text-2xl uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors">Boutique</Link>
        <Link href="/commissions" onClick={() => setIsOpen(false)} className="text-2xl uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors">Sur Mesure</Link>
        <Link href="/workshops" onClick={() => setIsOpen(false)} className="text-2xl uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors">Stages</Link>
        <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors">À Propos</Link>
        <Link href="/agenda" onClick={() => setIsOpen(false)} className="text-2xl uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors">Agenda</Link>
        <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-2xl uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors">Galerie</Link>
      </div>
    </nav>
  )
}
