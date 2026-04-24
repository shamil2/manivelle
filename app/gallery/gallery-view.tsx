'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { GalleryItem } from "@/lib/content";

type Props = {
  gallery?: GalleryItem[]
}

const defaultGallery: GalleryItem[] = [
  { title: 'Bibliothèque Architecturale', image: '/assets/images/gallery-1.jpg', description: 'Réalisation sur mesure pour un appartement haussmannien. Structure en carton double cannelure, finition kraft brut.', alt: 'Bibliothèque sur mesure' },
  { title: 'Table de Réunion Organique', image: '/assets/images/gallery-2.jpg', description: 'Table de réunion pour espace de coworking. Design organique inspiré des formes naturelles.', alt: 'Table de réunion' },
  { title: 'Fauteuil Asymétrique', image: '/assets/images/gallery-3.jpg', description: 'Fauteuil lounge confortable avec accoudoirs asymétriques. Conçu pour le confort quotidien.', alt: 'Fauteuil en carton' },
  { title: 'La Texture', image: '/assets/images/finished-detail.jpg', description: 'Détail des tranches de carton superposées et poncées à la main. Le matériau brut devient noble.', alt: 'Texture du carton' },
]

export default function GalleryPage({ gallery }: Props) {
  const galleryItems = (gallery && gallery.length > 0) ? gallery : defaultGallery

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

  const getDefaultImage = (index: number) => {
    const images = ['/assets/images/gallery-1.jpg', '/assets/images/gallery-2.jpg', '/assets/images/gallery-3.jpg', '/assets/images/finished-detail.jpg']
    return images[index % images.length]
  }

  return (
    <div className="flex-1 flex flex-col pt-32 pb-24 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 cardboard-overlay opacity-[0.02] pointer-events-none"></div>
      
      <motion.div 
        className="max-w-[1440px] mx-auto px-6 md:px-12 w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-32">
          <motion.span variants={itemUp} className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/20"></span>
            Archives / Portfolio
          </motion.span>
          <motion.h1 variants={itemUp} className="font-serif text-[clamp(3.5rem,10vw,8rem)] text-primary italic leading-[0.85] tracking-tighter text-balance">
            Sélection <span className="text-primary/30 relative inline-block">
              Visuelle
              <span className="absolute bottom-2 left-0 w-full h-[2px] bg-accent/30 rounded-full" />
            </span>.
          </motion.h1>
        </div>

        <div className="flex flex-col gap-24 md:gap-40 mb-40">
          {galleryItems.map((item, index) => {
            const isLarge = index === 0
            const isSmallRow = index === 1 || index === 2
            const isTextRight = index % 2 === 0
            const isDetail = index === 3
            
            return (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${isSmallRow ? 'items-start' : ''}`}>
                {isLarge ? (
                  <>
                    <motion.div variants={itemUp} viewport={{ once: true, margin: "-100px" }} className="md:col-span-8 relative aspect-[16/9] md:aspect-[21/9] rough-border overflow-hidden bg-subtle/10 group">
                      <div className="absolute inset-0 cardboard-overlay opacity-10 pointer-events-none z-10"></div>
                      <Image src={item.image || getDefaultImage(index)} alt={item.alt || item.title || "Gallery"} fill priority={index === 0} className="object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" sizes="(max-width: 768px) 100vw, 70vw" />
                    </motion.div>
                    <motion.div variants={itemUp} viewport={{ once: true }} className="md:col-span-3 md:col-start-10">
                      <span className="font-mono text-[10px] opacity-40 mb-4 block">Archive_{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="text-2xl font-serif italic mb-3">{item.title}</h3>
                      <p className="text-sm opacity-60 leading-relaxed font-sans">{item.description}</p>
                    </motion.div>
                  </>
                ) : isSmallRow ? (
                  <motion.div variants={itemUp} viewport={{ once: true, margin: "-100px" }} className={`md:col-span-4 ${index === 1 ? 'md:col-start-2' : 'md:col-start-7 md:mt-32'}`}>
                    <div className="relative aspect-[3/4] rough-border overflow-hidden bg-subtle/10 group mb-6">
                      <div className="absolute inset-0 cardboard-overlay opacity-10 pointer-events-none z-10"></div>
                      <Image src={item.image || getDefaultImage(index)} alt={item.alt || item.title || "Gallery"} fill loading="lazy" className="object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <span className="font-mono text-[10px] opacity-40 mb-2 block">Archive_{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="text-xl font-serif italic">{item.title}</h3>
                  </motion.div>
                ) : isDetail ? (
                  <>
                    <motion.div variants={itemUp} viewport={{ once: true }} className="md:col-span-3 md:col-start-2 order-2 md:order-1">
                      <span className="font-mono text-[10px] opacity-40 mb-4 block">Archive_{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="text-2xl font-serif italic mb-3">{item.title}</h3>
                      <p className="text-sm opacity-60 leading-relaxed font-sans">{item.description}</p>
                    </motion.div>
                    <motion.div variants={itemUp} viewport={{ once: true, margin: "-100px" }} className="md:col-span-6 md:col-start-6 order-1 md:order-2 relative aspect-square rough-border overflow-hidden bg-subtle/10 group">
                      <div className="absolute inset-0 cardboard-overlay opacity-10 pointer-events-none z-10"></div>
                      <Image src={item.image || getDefaultImage(index)} alt={item.alt || item.title || "Gallery"} fill loading="lazy" className="object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
                    </motion.div>
                  </>
                ) : (
                  <>
                    {isTextRight ? (
                      <>
                        <motion.div variants={itemUp} viewport={{ once: true, margin: "-100px" }} className="md:col-span-8 relative aspect-[16/9] md:aspect-[21/9] rough-border overflow-hidden bg-subtle/10 group">
                          <div className="absolute inset-0 cardboard-overlay opacity-10 pointer-events-none z-10"></div>
                          <Image src={item.image || getDefaultImage(index)} alt={item.alt || item.title || "Gallery"} fill className="object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" sizes="(max-width: 768px) 100vw, 70vw" />
                        </motion.div>
                        <motion.div variants={itemUp} viewport={{ once: true }} className="md:col-span-3 md:col-start-10">
                          <span className="font-mono text-[10px] opacity-40 mb-4 block">Archive_{String(index + 1).padStart(2, '0')}</span>
                          <h3 className="text-2xl font-serif italic mb-3">{item.title}</h3>
                          <p className="text-sm opacity-60 leading-relaxed font-sans">{item.description}</p>
                        </motion.div>
                      </>
                    ) : (
                      <>
                        <motion.div variants={itemUp} viewport={{ once: true, margin: "-100px" }} className="md:col-span-6 md:col-start-4 order-2 relative aspect-square rough-border overflow-hidden bg-subtle/10 group">
                          <div className="absolute inset-0 cardboard-overlay opacity-10 pointer-events-none z-10"></div>
                          <Image src={item.image || getDefaultImage(index)} alt={item.alt || item.title || "Gallery"} fill className="object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
                        </motion.div>
                        <motion.div variants={itemUp} viewport={{ once: true }} className="md:col-span-4 order-1">
                          <span className="font-mono text-[10px] opacity-40 mb-4 block">Archive_{String(index + 1).padStart(2, '0')}</span>
                          <h3 className="text-2xl font-serif italic mb-3">{item.title}</h3>
                          <p className="text-sm opacity-60 leading-relaxed font-sans">{item.description}</p>
                        </motion.div>
                      </>
                    )}
                  </>
                )}
              </div>
            )
          })}
        </div>
         
        <motion.div variants={itemUp} viewport={{ once: true }} initial="hidden" whileInView="visible" className="py-32 border-y border-primary/10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32 relative">
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          <div className="lg:col-span-4 lg:col-start-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 block">Le Processus</span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-serif italic mb-6 leading-none">Le Geste Artisanal.</h2>
            <p className="text-lg opacity-70 leading-relaxed max-w-sm mb-8">Découvrez le processus de création de nos meubles. De la découpe précise au montage structurel, chaque étape est réalisée à la main dans notre atelier normand.</p>
          </div>
          <div className="lg:col-span-6 relative aspect-video bg-subtle/20 rough-border overflow-hidden shadow-xl">
            <div className="absolute inset-0 cardboard-overlay opacity-10 pointer-events-none z-10"></div>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jZ_y12_9KFE?si=uK3_g2JzZ1Wz28gQ" title="La Manivelle Workshop" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="relative z-0"></iframe>
          </div>
        </motion.div>

        <motion.div variants={itemUp} viewport={{ once: true }} initial="hidden" whileInView="visible" className="text-center pb-24">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-10">Un projet en tête ?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/commissions"><Button variant="primary">Commander sur mesure</Button></a>
            <a href="/shop"><Button variant="outline">Voir les pièces disponibles</Button></a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}