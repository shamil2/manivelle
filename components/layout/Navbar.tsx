import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 bg-surface">
      <Link href="/" className="text-2xl font-semibold tracking-tighter hover:text-accent transition-colors">
        LA MANIVELLE
      </Link>
      <div className="hidden md:flex gap-8 uppercase text-xs tracking-widest font-medium opacity-60">
        <Link href="/shop" className="hover:opacity-100 transition-opacity hover:text-accent">The Shop</Link>
        <Link href="/commissions" className="hover:opacity-100 transition-opacity hover:text-accent">Commissions</Link>
        <Link href="/workshops" className="hover:opacity-100 transition-opacity hover:text-accent">Workshops</Link>
      </div>
      <div className="flex gap-4">
        <button className="opacity-60 hover:opacity-100 uppercase tracking-widest text-xs font-bold hover:text-accent transition-colors">Cart</button>
      </div>
    </nav>
  )
}
