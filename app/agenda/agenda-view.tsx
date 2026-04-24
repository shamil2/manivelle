'use client'

import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import type { Event } from "@/lib/content";

type Props = {
  events?: Event[]
}

const defaultEvents: Event[] = [
  { title: 'Salon de l\'Artisanat Durable', date: '2026-10-12', location: 'Rouen, France' },
  { title: 'Journées Portes Ouvertes', date: '2026-11-05', location: 'Atelier La Manivelle' },
]

export default function AgendaPage({ events }: Props) {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const eventList = (events && events.length > 0) ? events : defaultEvents

  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition }
  };

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 cardboard-overlay opacity-[0.02] pointer-events-none"></div>
      
      <motion.div 
        className="max-w-[1440px] mx-auto w-full px-6 md:px-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-8">
            <motion.span variants={itemUp} className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/20"></span>
              Planification
            </motion.span>
            <motion.h1 variants={itemUp} className="font-serif text-[clamp(3.5rem,10vw,8rem)] text-primary italic leading-[0.85] tracking-tighter text-balance">
              Agenda & <span className="text-primary/30 relative inline-block">
                Événements
                <span className="absolute bottom-2 left-0 w-full h-[2px] bg-accent/30 rounded-full" />
              </span>.
            </motion.h1>
          </div>
          <motion.div variants={itemUp} className="lg:col-span-4 pb-4">
             <p className="text-sm opacity-60 leading-relaxed uppercase tracking-widest font-bold">
               Découvrez nos prochaines expositions, où nous aurons un stand, et réservez une session directement via notre calendrier.
             </p>
          </motion.div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Informational Sidebar */}
          <motion.div variants={itemUp} className="lg:col-span-4 space-y-16">
            <div>
              <h3 className="text-2xl font-serif italic mb-4">L&apos;Atelier</h3>
              <p className="text-sm opacity-70 leading-relaxed font-sans mb-6">
                Situé au cœur de la Normandie, l&apos;atelier La Manivelle est un espace dédié à la création et à la transmission. Les visites se font uniquement sur rendez-vous.
              </p>
              <div className="pt-6 border-t border-primary/10">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 block mb-2">Adresse</span>
                <p className="text-sm font-medium">Atelier La Manivelle<br/>76640 Cliponville, Normandie</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif italic mb-4">Événements à venir</h3>
              <div className="space-y-6">
                {eventList.map((event, index) => (
                  <div key={index} className="group cursor-default">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-1 block">{event.date ? new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Date à venir'}</span>
                    <h4 className="text-lg font-medium group-hover:opacity-70 transition-opacity">{event.title}</h4>
                    <p className="text-sm opacity-60 font-mono mt-1">{event.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Calendly Integration framed as a physical object */}
          <motion.div variants={itemUp} className="lg:col-span-8">
            <div className="w-full bg-white relative rough-border p-2 md:p-6 overflow-hidden min-h-[750px]">
              
              {/* Subtle background noise to integrate the white box */}
              <div className="absolute inset-0 cardboard-overlay opacity-[0.03] pointer-events-none z-0 mix-blend-multiply"></div>
              
              {/* Loading Skeleton */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 z-10 ${isCalendlyLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="w-12 h-12 border-2 border-primary/10 rounded-full border-t-accent animate-spin mb-6"></div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40">
                  Connexion à l&apos;agenda...
                </span>
              </div>

              {/* Calendly Wrapper */}
              <div className={`relative z-20 transition-opacity duration-1000 ${isCalendlyLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <InlineWidget 
                  url="https://calendly.com/letest123" 
                  styles={{ height: '700px', width: '100%' }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: 'D97757',
                    textColor: '2D2D2A'
                  }}
                  prefill={{}}
                />
              </div>
              
              {/* Fake physical script to detect Calendly load (since react-calendly doesn't expose an onLoad callback easily in this version) */}
              {/* We use a simple timeout for the demo, but in production we'd use the useCalendlyEventListener hook if available */}
              <div 
                className="hidden" 
                ref={(el) => {
                  if (el && !isCalendlyLoaded) {
                    setTimeout(() => setIsCalendlyLoaded(true), 2000);
                  }
                }}
              />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
