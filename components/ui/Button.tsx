import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text'
  children: React.ReactNode
  href?: string
}

export default function Button({ variant = 'primary', children, className = '', href, ...props }: ButtonProps) {
  const baseStyles = "uppercase text-xs tracking-widest font-bold px-8 py-4 transition-all duration-300 rounded-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
  const variants = {
    primary: "bg-primary text-white hover:bg-accent hover:scale-105",
    outline: "border border-primary/10 hover:bg-primary/5",
    text: "bg-transparent text-primary hover:text-accent px-0 py-2 underline underline-offset-4"
  }
  
  const button = (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  )

  if (href) {
    return <Link href={href}>{button}</Link>
  }
  return button
}
