import { cn } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-start gap-8 opacity-40 text-sm bg-surface mt-auto">
      <div>
        <p>© 2026 La Manivelle</p>
        <p>Cliponville, France</p>
      </div>
      <div className="flex gap-8 uppercase tracking-widest text-xs font-bold">
        <a href="#" className="hover:opacity-100 hover:text-accent transition-colors">Instagram</a>
        <a href="#" className="hover:opacity-100 hover:text-accent transition-colors">Facebook</a>
        <a href="mailto:emmanuellezaree@lamanivelle.fr" className="hover:opacity-100 hover:text-accent transition-colors">Contact</a>
      </div>
    </footer>
  )
}
