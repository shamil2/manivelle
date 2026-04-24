'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function AboutPage() {
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
        className="max-w-[1440px] mx-auto px-6 md:px-12 w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          
          {/* Portrait - Asymmetrical placement */}
          <motion.div variants={itemUp} className="lg:col-span-5 relative mt-8 lg:mt-24 order-2 lg:order-1">
            <div className="relative aspect-[3/4] rough-border overflow-hidden bg-subtle/10 group mb-12">
               <Image 
                 src="/assets/images/author-portrait.png" 
                 alt="Emmanuelle BUREL - ZAREE" 
                 fill 
                 priority
                 sizes="(max-width: 768px) 100vw, 40vw"
                 className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
               />
               <div className="absolute inset-0 cardboard-overlay opacity-10 pointer-events-none mix-blend-multiply"></div>
            </div>
            <div className="absolute -top-12 -left-12 w-64 h-64 border border-primary/5 rounded-full blur-3xl pointer-events-none bg-accent/5"></div>
          </motion.div>
          
          {/* Main Title & Intro */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <motion.span variants={itemUp} className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/20"></span>
              L&apos;Artisane
            </motion.span>
            
            <motion.h1 variants={itemUp} className="text-[clamp(3.5rem,8vw,7rem)] font-serif italic mb-12 text-primary leading-[0.85] tracking-tighter">
              Emmanuelle <br/> Burel-Zaree.
            </motion.h1>
            
            <motion.div variants={itemUp} className="text-xl md:text-2xl text-primary/80 leading-relaxed font-sans font-medium mb-12">
              <p>
                Je suis née en Thaïlande, puis ai suivi mes parents toute mon enfance et mon adolescence dans leurs missions à l&apos;étranger, principalement en Afrique de l&apos;Ouest.
              </p>
            </motion.div>
            
            <motion.div variants={itemUp} className="space-y-6 text-lg text-primary/70 leading-relaxed font-sans">
              <p>
                Rentrée en métropole après le bac, j&apos;ai fait une école de commerce, puis ai travaillé dans les télécoms, la banque, la métallerie, le tourisme, l&apos;édition, la pétrochimie... à des postes variés, mettant en œuvre mes capacités d&apos;adaptation et mon envie d&apos;apprendre.
              </p>
              <p>
                Cependant, à tous ces postes intéressants, il me manquait toujours quelque chose : la possibilité d&apos;exprimer pleinement ma créativité.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Pull Quote Section */}
        <motion.div 
          variants={itemUp}
          viewport={{ once: true, margin: "-100px" }}
          initial="hidden"
          whileInView="visible"
          className="w-full py-24 mb-24 border-y border-primary/10 relative"
        >
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          <div className="max-w-4xl mx-auto text-center px-6">
            <span className="font-serif text-accent text-8xl leading-none absolute -top-10 left-1/2 -translate-x-1/2 opacity-20">&quot;</span>
            <h2 className="text-3xl md:text-5xl font-serif italic text-primary leading-tight text-balance relative z-10">
              J&apos;ai toujours trouvé un intérêt à fabriquer les choses par moi-même. La valorisation du carton permet de réduire les déchets et d&apos;avoir un impact positif concret.
            </h2>
          </div>
        </motion.div>

        {/* The Journey (Timeline format) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
           <motion.div 
             variants={itemUp}
             viewport={{ once: true }}
             initial="hidden"
             whileInView="visible"
             className="lg:col-span-4"
           >
              <h2 className="text-4xl font-serif italic mb-8">Le Parcours.</h2>
              <p className="text-lg opacity-60 leading-relaxed">
                De la découverte de la matière à la professionnalisation, chaque étape a renforcé ma conviction qu&apos;une autre façon de créer était possible.
              </p>
           </motion.div>

           <div className="lg:col-span-7 lg:col-start-6 space-y-16">
              {[
                { 
                  year: '2007', 
                  title: 'Le Déclic', 
                  desc: 'Après la naissance de mon premier enfant, j&apos;ai découvert l&apos;art du cartonnage lors d&apos;un stage. En est sorti mon premier meuble et l&apos;envie d&apos;en faire mon métier.' 
                },
                { 
                  year: '2019', 
                  title: 'La Création', 
                  desc: 'Lancement officiel de La Manivelle. Création de mes propres modèles et confirmation de mon intérêt pour cette matière qui permet tellement de possibles.' 
                },
                { 
                  year: '2020', 
                  title: 'La Reconnaissance', 
                  desc: 'Obtention de la Médaille d&apos;argent de L&apos;académie des Arts et des Sciences de Paris. Une reconnaissance prestigieuse qui m&apos;a encouragée à continuer.' 
                },
                { 
                  year: '2021', 
                  title: 'La Maîtrise', 
                  desc: 'Formation intensive de 6 semaines à l&apos;École du Carton à Paris. Découverte de nouvelles techniques complexes et confirmation de ma professionnalisation.' 
                }
              ].map((item, i) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ ...transition, delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row gap-6 sm:gap-12 group"
                >
                   <div className="shrink-0 w-24">
                      <span className="font-mono text-xl opacity-40 group-hover:text-accent group-hover:opacity-100 transition-colors duration-500">{item.year}</span>
                   </div>
                   <div>
                      <h3 className="text-2xl font-serif italic mb-3">{item.title}</h3>
                      <p className="text-lg opacity-70 leading-relaxed max-w-lg">{item.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Origin of the name */}
        <motion.div 
          variants={itemUp}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          className="max-w-3xl mx-auto bg-surface/5 border border-primary/10 p-10 md:p-16 mb-40 text-center rough-border relative overflow-hidden"
        >
          <div className="absolute inset-0 cardboard-overlay opacity-10 pointer-events-none"></div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6 block relative z-10">Pourquoi La Manivelle ?</span>
          <p className="text-lg md:text-xl text-primary/80 leading-relaxed italic font-serif relative z-10">
            C&apos;est une compilation des lettres des prénoms des membres de ma famille nucléaire. Une manivelle permet de décupler les forces, c&apos;est aussi une contraction de Manuelle et de Manue (mon alias pour les intimes). Cette Manivelle m&apos;équilibre et me motive chaque jour.
          </p>
        </motion.div>

        {/* CTA Footer */}
        <motion.div 
          variants={itemUp}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          className="border-t border-primary/10 pt-24 text-center"
        >
           <h2 className="text-4xl md:text-6xl font-serif italic mb-10">Poursuivre la découverte.</h2>
           <div className="flex flex-wrap justify-center gap-6">
              <a href="/shop"><Button variant="primary">Explorer la Boutique</Button></a>
              <a href="/workshops"><Button variant="outline">Voir les Stages</Button></a>
           </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
