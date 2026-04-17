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
      {/* Texture overlay using the custom variable we defined in Task 2 */}
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
