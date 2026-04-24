import React from 'react'
import { cn } from '@/lib/utils'

interface BentoCardProps {
  title: string
  subtitle: string
  number: string
  description?: string
  dark?: boolean
  className?: string
  href?: string
}

export default function BentoCard({ title, subtitle, number, description, dark = false, className = '', href = "#" }: BentoCardProps) {
  return (
    <a 
      href={href}
      className={cn(
        "p-10 flex flex-col justify-between group relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] border border-primary/5 hover:border-accent/40", 
        dark ? "bg-primary text-surface" : "bg-white text-primary", 
        className
      )}
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 cardboard-overlay opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 group-hover:opacity-100 transition-opacity duration-500">{subtitle}</span>
          <span className="font-mono text-[10px] opacity-20 group-hover:opacity-100 transition-opacity duration-500">/{number}</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif italic mb-6 leading-[1.1] transition-transform duration-700 group-hover:-translate-y-1">{title}</h2>
        {description && (
          <p className="text-sm opacity-50 max-w-[280px] leading-relaxed transition-opacity duration-700 group-hover:opacity-80">
            {description}
          </p>
        )}
      </div>

      <div className="mt-12 flex justify-end relative z-10 overflow-hidden h-6">
        <span className="text-sm font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
          Explore →
        </span>
      </div>
      
      {/* Physical Detail: Subtle corner mark */}
      <div className="absolute bottom-0 right-0 w-8 h-8 opacity-5 group-hover:opacity-20 transition-opacity">
        <div className="absolute bottom-2 right-2 w-px h-4 bg-primary"></div>
        <div className="absolute bottom-2 right-2 w-4 h-px bg-primary"></div>
      </div>
    </a>
  )
}
