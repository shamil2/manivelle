import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-surface pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 cardboard-overlay opacity-[0.05] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="relative w-48 h-12 mb-6">
              <Image 
                src="/assets/images/logo-clean.png" 
                alt="La Manivelle Logo" 
                fill 
                className="object-contain object-left pointer-events-none drop-shadow-xl" 
              />
            </div>
            <p className="text-sm opacity-40 max-w-xs leading-relaxed mb-8">
              Atelier de mobilier en carton artisanal basé en Normandie. Éco-responsable, sur mesure et conçu pour la vie.
            </p>
            <div className="space-y-1 font-mono text-[10px] uppercase tracking-[0.2em] opacity-30">
              <p>Cliponville, 76640</p>
              <p>Normandie, France</p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-30 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Accueil', 'Boutique', 'Sur Mesure', 'Stages', 'À Propos', 'Agenda'].map((item, idx) => {
                const paths = ['/', '/shop', '/commissions', '/workshops', '/about', '/agenda'];
                return (
                  <li key={item}>
                    <a href={paths[idx]} className="text-sm hover:text-accent transition-colors duration-500 uppercase tracking-widest font-bold">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-30 mb-8">Réseaux</h4>
            <ul className="space-y-4">
              {['Instagram', 'Facebook', 'Pinterest'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-accent transition-colors duration-500 uppercase tracking-widest font-bold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-30 mb-8">L&apos;Atelier</h4>
            <p className="text-sm opacity-60 mb-8">Rejoignez notre newsletter pour les mises à jour des stages et les nouvelles collections.</p>
            <div className="flex border-b border-surface/20 pb-2 group focus-within:border-accent transition-colors duration-500">
              <input 
                type="email" 
                placeholder="ADRESSE EMAIL" 
                className="bg-transparent border-none text-[10px] tracking-[0.2em] uppercase font-bold w-full focus:outline-none placeholder:opacity-20"
              />
              <button className="text-[10px] tracking-[0.2em] uppercase font-bold hover:text-accent transition-colors duration-500">
                Rejoindre
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-surface/5 opacity-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em]">
            © 2026 Atelier La Manivelle / Tous Droits Réservés
          </p>
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-accent transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-accent transition-colors">CGV</a>
            <a href="#" className="hover:text-accent transition-colors">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
