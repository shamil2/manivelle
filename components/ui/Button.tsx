import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  children: React.ReactNode
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "uppercase text-xs tracking-widest font-bold px-8 py-4 transition-all duration-300 rounded-sm cursor-pointer"
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
