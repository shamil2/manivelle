import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import MagneticButton from './MagneticButton'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text'
  children: React.ReactNode
  href?: string
}

export default function Button({ variant = 'primary', children, className = '', href, ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center uppercase text-[10px] tracking-[0.2em] font-bold px-10 py-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-4 overflow-hidden group"
  
  const variants = {
    primary: "bg-primary text-surface hover:text-surface shadow-sm",
    outline: "border border-primary/20 text-primary hover:border-primary",
    text: "px-0 py-2 border-b border-primary/10 hover:border-primary text-primary"
  }
  
  const Btn = (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  )

  const WrappedBtn = variant === 'primary' ? <MagneticButton>{Btn}</MagneticButton> : Btn;

  if (href) {
    return <Link href={href}>{WrappedBtn}</Link>
  }

  return WrappedBtn
}
