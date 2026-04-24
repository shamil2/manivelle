"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CommissionsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
    <div className="flex-1 flex flex-col pt-32 pb-24 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 cardboard-overlay opacity-[0.02] pointer-events-none"></div>
      
      <motion.div 
        className="max-w-[1440px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Side: Asymmetrical Editorial Intro */}
        <div className="lg:col-span-7">
          <motion.span variants={itemUp} className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/20"></span>
            Sur_Mesure / Custom
          </motion.span>
          <motion.h1 variants={itemUp} className="font-serif text-[clamp(3.5rem,8vw,6.5rem)] mb-12 text-primary italic leading-[0.85] tracking-tighter text-balance">
            Des pièces conçues <span className="text-primary/30 relative inline-block">
              pour votre espace
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent/30 rounded-full" />
            </span>.
          </motion.h1>
          
          <motion.div variants={itemUp} className="space-y-8 text-xl text-primary/70 leading-relaxed font-sans mb-16">
            <p>
              Chaque espace a une histoire, et chaque meuble devrait y contribuer. Nous sommes spécialisés dans la création de structures en carton sur mesure qui défient les limites du matériau et de la forme.
            </p>
          </motion.div>

          <motion.div variants={itemUp} className="relative aspect-[21/9] w-full rough-border overflow-hidden bg-subtle/10 mb-16 group">
             <div className="absolute inset-0 cardboard-overlay opacity-10 pointer-events-none z-10 mix-blend-multiply"></div>
             <Image 
               src="/assets/images/gallery-1.jpg" 
               alt="Processus de conception" 
               fill 
               className="object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
             />
          </motion.div>
            
          <motion.div variants={itemUp} className="pt-8 border-t border-primary/10">
             <h3 className="font-serif italic text-3xl mb-8">Le Processus</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { step: '01', title: 'La Vision', desc: 'Partagez vos idées, dimensions et besoins fonctionnels lors d\'un premier échange.' },
                  { step: '02', title: 'Le Croquis', desc: 'Nous fournissons des dessins techniques, des modélisations et des échantillons.' },
                  { step: '03', title: 'La Création', desc: 'Fabrication artisanale dans notre atelier, avec des points d\'étape réguliers.' }
                ].map(item => (
                  <div key={item.step} className="flex flex-col gap-4">
                    <span className="font-mono text-lg opacity-20">{item.step}</span>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{item.title}</h4>
                      <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </motion.div>
        </div>

        {/* Right Side: Handcrafted Inquiry Form Container */}
        <motion.div variants={itemUp} className="lg:col-span-4 lg:col-start-9 lg:mt-32">
          <div className="relative p-10 md:p-12 bg-white border border-primary/5 shadow-xl overflow-hidden group min-h-[600px] flex flex-col">
            <div className="absolute inset-0 cardboard-overlay opacity-[0.03] pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col flex-1 relative z-10"
                >
                  <h2 className="text-2xl font-serif italic mb-12 text-primary leading-none">Démarrer une conversation</h2>

                  <form className="space-y-12 flex-1 flex flex-col" onSubmit={handleSubmit}>
                    <div className="relative border-b border-primary/10 focus-within:border-accent transition-colors duration-500">
                      <label className="font-mono text-[8px] uppercase tracking-[0.2em] opacity-40 absolute -top-4 left-0">Votre Nom</label>
                      <input 
                        type="text" 
                        placeholder="NOM COMPLET" 
                        className="w-full bg-transparent py-2 text-sm outline-none placeholder:opacity-10 font-bold tracking-widest text-primary"
                        required
                      />
                    </div>

                    <div className="relative border-b border-primary/10 focus-within:border-accent transition-colors duration-500">
                      <label className="font-mono text-[8px] uppercase tracking-[0.2em] opacity-40 absolute -top-4 left-0">Adresse Email</label>
                      <input 
                        type="email" 
                        placeholder="artisan@atelier.fr" 
                        className="w-full bg-transparent py-2 text-sm outline-none placeholder:opacity-10 font-bold tracking-widest text-primary"
                        required
                      />
                    </div>

                    <div className="relative border-b border-primary/10 focus-within:border-accent transition-colors duration-500 flex-1">
                      <label className="font-mono text-[8px] uppercase tracking-[0.2em] opacity-40 absolute -top-4 left-0">Votre Projet</label>
                      <textarea 
                        placeholder="Parlez-nous de l'espace et de la pièce que vous imaginez..." 
                        className="w-full bg-transparent py-2 text-sm outline-none placeholder:opacity-10 font-bold tracking-widest resize-none min-h-[120px] text-primary"
                        required
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button variant="primary" className="w-full">Envoyer la demande</Button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="flex flex-col items-center justify-center text-center flex-1 relative z-10"
                >
                  <span className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-8">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <h3 className="font-serif text-4xl mb-6 text-primary italic leading-none">Vision Partagée.</h3>
                  <p className="text-sm text-primary/60 mb-12 max-w-[250px] leading-relaxed">
                    Merci d&apos;avoir partagé votre projet. Nous allons l&apos;étudier et vous recontacterons sous 2 à 3 jours.
                  </p>
                  <div onClick={() => setSubmitted(false)}>
                     <Button variant="outline">Nouveau Message</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
