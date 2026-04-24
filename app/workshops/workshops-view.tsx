'use client'

import Button from "@/components/ui/Button";
import Image from "next/image";
import { InlineWidget } from "react-calendly";
import type { Workshop } from "@/lib/content";

type Props = {
  workshops?: Workshop[]
}

const defaultWorkshops: Workshop[] = [
  { 
    title: 'Session Découverte', 
    time: '3 Heures', 
    price: '€45',
    description: 'Une introduction tactile à l\'artisanat du carton. Apprenez les bases de la découpe et de l\'assemblage en créant un objet décoratif.',
    features: ['Bases du matériau', 'Coupe de précision', 'Création à emporter']
  },
  { 
    title: 'Masterclass Mobilier', 
    time: '20 Sessions', 
    price: '€450',
    description: 'Notre formation phare. Concevez et construisez un meuble structurel grandeur nature, guidé pas à pas par un maître artisan.',
    features: ['Ingénierie structurelle', 'Design sur mesure', 'Accès à l\'atelier']
  },
  { 
    title: 'Semaine Intensive', 
    time: '5 Jours', 
    price: '€180',
    description: 'Plongez dans le métier. Une expérience immersive conçue pour vous donner les bases solides de la conception de mobilier.',
    features: ['Apprentissage accéléré', 'Focus sur le projet', 'Développement technique']
  }
];

export default function WorkshopsPage({ workshops }: Props) {
  const workshopTypes = workshops && workshops.length > 0 ? workshops : defaultWorkshops;

  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex-1 flex flex-col pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 cardboard-overlay opacity-[0.02] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12">
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40 items-end">
          <div className="lg:col-span-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/20"></span>
              Transmission / Apprentissage
            </span>
            <h1 className="font-serif text-[clamp(3.5rem,10vw,8rem)] text-primary italic leading-[0.85] tracking-tighter text-balance">
              Transmettre le <span className="text-primary/30 relative inline-block">
                geste
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent/30 rounded-full" />
              </span>.
            </h1>
          </div>
          <div className="lg:col-span-4 pb-4">
             <p className="text-sm opacity-60 leading-relaxed uppercase tracking-widest font-bold">
               Maîtrisez les techniques de création de mobilier en carton haut de gamme dans notre atelier à Cliponville.
             </p>
          </div>
        </div>

        {/* Asymmetrical Workshop Offerings */}
        <div className="flex flex-col gap-32 mb-40">
          
          {/* Item 01 - Standard Left */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
             <div className="lg:col-span-5 relative aspect-[4/5] bg-surface/5 rough-border group overflow-hidden">
                <Image src={workshopTypes[0].image || "/assets/images/workshop-01.png"} alt={workshopTypes[0].title || "Workshop"} fill className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out brightness-90 group-hover:brightness-100" />
                <div className="absolute inset-0 cardboard-overlay opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700 mix-blend-multiply"></div>
             </div>
             <div className="lg:col-span-6 lg:col-start-7">
                <span className="font-mono text-[10px] opacity-40 block mb-6">INITIATION</span>
                <h2 className="text-4xl md:text-5xl font-serif italic mb-6">{workshopTypes[0].title}</h2>
                <div className="flex gap-6 mb-8 text-[10px] uppercase tracking-[0.2em] font-bold">
                  <span className="opacity-40">{workshopTypes[0].time}</span>
                  <span className="text-accent">{workshopTypes[0].price}</span>
                </div>
                <p className="text-lg opacity-70 leading-relaxed max-w-md mb-12">
                  {workshopTypes[0].description}
                </p>
                <div onClick={scrollToBooking}>
                  <Button variant="outline">Demander une date</Button>
                </div>
             </div>
          </div>

          {/* Item 02 - Featured Right (Masterclass) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
             <div className="absolute -inset-x-6 md:-inset-x-12 inset-y-[-4rem] bg-primary/5 -z-10"></div>
             
             <div className="lg:col-span-6 order-2 lg:order-1 lg:pl-12">
                <span className="font-mono text-[10px] opacity-40 block mb-6 text-accent">FORMATION PHARE</span>
                <h2 className="text-5xl md:text-7xl font-serif italic mb-6">{workshopTypes[1].title}</h2>
                <div className="flex gap-6 mb-8 text-[10px] uppercase tracking-[0.2em] font-bold">
                  <span className="opacity-40">{workshopTypes[1].time}</span>
                  <span className="text-accent">{workshopTypes[1].price}</span>
                </div>
                <p className="text-xl opacity-80 leading-relaxed max-w-md mb-12">
                  {workshopTypes[1].description}
                </p>
                <div onClick={scrollToBooking}>
                  <Button variant="primary">Réserver cette formation</Button>
                </div>
             </div>
             <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-square bg-primary text-surface rough-border group overflow-hidden">
                <Image src={workshopTypes[1].image || "/assets/images/workshop-02.png"} alt={workshopTypes[1].title || "Workshop"} fill className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 cardboard-overlay opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700 mix-blend-screen"></div>
             </div>
          </div>

          {/* Item 03 - Standard Left */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
             <div className="lg:col-span-4 lg:col-start-2 relative aspect-[3/4] bg-surface/5 rough-border group overflow-hidden">
                <Image src={workshopTypes[2].image || "/assets/images/workshop-03.png"} alt={workshopTypes[2].title || "Workshop"} fill className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out brightness-90 group-hover:brightness-100" />
                <div className="absolute inset-0 cardboard-overlay opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700 mix-blend-multiply"></div>
             </div>
             <div className="lg:col-span-6 lg:col-start-7">
                <span className="font-mono text-[10px] opacity-40 block mb-6">IMMERSION</span>
                <h2 className="text-4xl md:text-5xl font-serif italic mb-6">{workshopTypes[2].title}</h2>
                <div className="flex gap-6 mb-8 text-[10px] uppercase tracking-[0.2em] font-bold">
                  <span className="opacity-40">{workshopTypes[2].time}</span>
                  <span className="text-accent">{workshopTypes[2].price}</span>
                </div>
                <p className="text-lg opacity-70 leading-relaxed max-w-md mb-12">
                  {workshopTypes[2].description}
                </p>
                <div onClick={scrollToBooking}>
                  <Button variant="outline">Demander une date</Button>
                </div>
             </div>
          </div>

        </div>

      </div>

      {/* Booking Section: Unified Calendly Integration */}
      <div id="booking-section" className="w-full bg-primary text-surface py-32 px-6 md:px-12 relative overflow-hidden">
         <div className="absolute inset-0 cardboard-overlay opacity-[0.05] pointer-events-none"></div>
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 relative z-10">
               <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-serif italic mb-8 leading-none">Réserver.</h2>
               <p className="text-lg opacity-60 leading-relaxed mb-12 max-w-sm">
                 Sélectionnez la date qui vous convient dans notre calendrier. Les places sont limitées pour garantir un accompagnement personnalisé.
               </p>
               <div className="space-y-6">
                 <div className="pb-6 border-b border-surface/10">
                   <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 block mb-2">Adresse</span>
                   <p className="text-sm opacity-80">Atelier La Manivelle<br/>76640 Cliponville, Normandie</p>
                 </div>
                 <div>
                   <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 block mb-2">Contact</span>
                   <p className="text-sm opacity-80">bonjour@lamanivelle.fr<br/>+33 (0)6 12 34 56 78</p>
                 </div>
               </div>
            </div>
            
            <div className="lg:col-span-7 relative z-10">
               <div className="w-full bg-white rounded-md shadow-2xl overflow-hidden rough-border min-h-[700px]">
                  <InlineWidget url="https://calendly.com/letest123" styles={{ height: '700px' }} />
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}
