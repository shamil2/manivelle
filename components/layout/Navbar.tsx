'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'La Boutique', href: '/shop' },
    { name: 'Sur Mesure', href: '/commissions' },
    { name: 'Les Stages', href: '/workshops' },
    { name: 'À Propos', href: '/about' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'Galerie', href: '/gallery' },
  ]

  return (
    <nav 
      aria-label="Main Navigation" 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] px-6 md:px-12 py-6 md:py-8 flex justify-between items-center",
        scrolled ? "bg-surface/80 backdrop-blur-md py-4 md:py-6 border-b border-primary/5" : "bg-transparent"
      )}
    >
      <Link href="/" className="group flex flex-col items-start leading-none z-[110]">
        <div className="relative w-40 h-10 md:w-48 md:h-12 transition-transform duration-500 group-hover:scale-105">
          <Image 
            src="/assets/images/logo-clean.png" 
            alt="La Manivelle Logo" 
            fill 
            className="object-contain object-left pointer-events-none drop-shadow-md" 
          />
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] opacity-40 mt-1">
          Atelier Artisanal
        </span>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-12 items-center">
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            href={link.href} 
            className={cn(
              "text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 hover:text-accent relative py-1",
              pathname === link.href ? "text-accent" : "text-primary/60"
            )}
          >
            {link.name}
            {pathname === link.href && (
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-100 origin-left transition-transform duration-500" />
            )}
            {pathname !== link.href && (
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 origin-right hover:origin-left transition-transform duration-500" />
            )}
          </Link>
        ))}
      </div>

      <div className="flex gap-8 items-center z-[110]">
        <button className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60 hover:opacity-100 hover:text-accent transition-all duration-500">
          Panier (0)
        </button>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 group"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className={cn("w-6 h-px bg-primary transition-all duration-500 origin-center", isOpen && "rotate-45 translate-y-[7px]")} />
          <span className={cn("w-4 h-px bg-primary transition-all duration-500 self-end", isOpen && "opacity-0 w-0")} />
          <span className={cn("w-6 h-px bg-primary transition-all duration-500 origin-center", isOpen && "-rotate-45 -translate-y-[7px]")} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-surface z-[100] flex flex-col items-center justify-center gap-12 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <div className="absolute inset-0 cardboard-overlay opacity-5 pointer-events-none"></div>
        {navLinks.map((link, i) => (
          <Link 
            key={link.name}
            href={link.href} 
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: `${i * 100}ms` }}
            className={cn(
              "text-3xl font-serif italic tracking-tight hover:text-accent transition-all duration-500",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
