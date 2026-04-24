'use client'

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Button from "@/components/ui/Button"
import type { GalleryItem } from "@/lib/content"

type Props = {
  gallery?: GalleryItem[]
}

const defaultGallery: GalleryItem[] = [
  { title: 'Bibliothèque Architecturale', image: '/assets/images/gallery-1.svg', description: 'Réalisation sur mesure pour un appartement haussmannien. Structure en carton double cannelure, finitions kraft brut.', alt: 'Bibliothèque sur mesure' },
  { title: 'Table de Réunion Organique', image: '/assets/images/gallery-2.svg', description: 'Table de réunion pour espace de coworking. Design organique inspiré des formes naturelles.', alt: 'Table de réunion' },
  { title: 'Fauteuil Asymétrique', image: '/assets/images/gallery-3.svg', description: 'Fauteuil lounge confortable avec accoudoirs asymétriques. Conçu pour le confort quotidien.', alt: 'Fauteuil en carton' },
  { title: 'La Texture', image: '/assets/images/gallery-3.svg', description: 'Détail des tranches de carton superposées et poncées à la main. Le matériau brut devient noble.', alt: 'Texture du carton' },
]

const ITEMS_PER_PAGE = 9

export default function GalleryPage({ gallery }: Props) {
  const galleryItems = (gallery && gallery.length > 0) ? gallery : defaultGallery
  const totalItems = galleryItems.length
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)

  const [currentPage, setCurrentPage] = useState(1)

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return galleryItems.slice(start, start + ITEMS_PER_PAGE)
  }, [galleryItems, currentPage])

  const goToPrev = () => setCurrentPage(p => Math.max(1, p - 1))
  const goToNext = () => setCurrentPage(p => Math.min(totalPages, p + 1))

  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition }
  }

  const getDefaultImage = (index: number) => {
    const images = ['/assets/images/gallery-1.svg', '/assets/images/gallery-2.svg', '/assets/images/gallery-3.svg', '/assets/images/gallery-3.svg']
    return images[index % images.length]
  }

  return (
    <div className="flex-1 flex flex-col pt-32 pb-24 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 cardboard-overlay opacity-[0.02] pointer-events-none"></div>

      <motion.div
        className="max-w-[1440px] mx-auto px-6 md:px-12 w-full"
        initial="hidden"
        animate="visible"
      >
        <div className="mb-32">
          <motion.span variants={itemUp} className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/20"></span>
            Portfolio
          </motion.span>
          <motion.h1 variants={itemUp} className="font-serif text-[clamp(3.5rem,10vw,8rem)] text-primary italic leading-[0.85] tracking-tighter text-balance mb-8">
            Sélection <span className="text-primary/30 relative inline-block">
              Visuelle
              <span className="absolute bottom-2 left-0 w-full h-[2px] bg-accent/30 rounded-full" />
            </span>.
          </motion.h1>
          <motion.p variants={itemUp} className="text-lg md:text-xl text-primary/60 max-w-2xl leading-relaxed">
            Découvrez nos réalisations en carton recyclé. Chaque pièce est unique, conçue et thérapeutiquement assemblée à la main dans notre atelier normand.
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-16"
          >
            {paginatedItems.map((item, idx) => {
              const actualIndex = (currentPage - 1) * ITEMS_PER_PAGE + idx
              return (
                <motion.div
                  key={`${currentPage}-${idx}`}
                  variants={itemUp}
                  className="break-inside-avoid mb-8"
                >
                  <div className="relative aspect-[3/4] rough-border overflow-hidden bg-subtle/10 group mb-4">
                    <Image
                      src={item.image || getDefaultImage(actualIndex)}
                      alt={item.alt || item.title || "Gallery"}
                      fill
                      loading="lazy"
                      className="object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <span className="font-mono text-[10px] opacity-40 mb-2 block">Pièce_{String(actualIndex + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl font-serif italic mb-1">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm opacity-60 leading-relaxed font-sans">{item.description}</p>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <motion.div
            variants={itemUp}
            className="flex items-center justify-center gap-8 py-12 border-y border-primary/10 mb-24"
          >
            <button
              onClick={goToPrev}
              disabled={currentPage === 1}
              className="font-mono text-xs uppercase tracking-widest opacity-40 hover:opacity-100 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            >
              ← Précédent
            </button>
            <span className="font-mono text-[10px] opacity-40">
              Page {currentPage} sur {totalPages}
            </span>
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="font-mono text-xs uppercase tracking-widest opacity-40 hover:opacity-100 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            >
              Suivant →
            </button>
          </motion.div>
        )}

        <motion.div variants={itemUp} viewport={{ once: true }} initial="hidden" whileInView="visible" className="py-32 border-y border-primary/10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32 relative">
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          <div className="lg:col-span-4 lg:col-start-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 block">Le Processus</span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-serif italic mb-6 leading-none">Le Geste Artisanal.</h2>
            <p className="text-lg opacity-70 leading-relaxed max-w-sm mb-8">Découvrez le processus de création de nos meubles. De la découpe précise au montage structurel, chaque ��tape est réalisée à la main dans notre atelier normand.</p>
          </div>
          <div className="lg:col-span-6 relative aspect-video bg-subtle/20 rough-border overflow-hidden shadow-xl">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/LID3JUDXRPo" 
              title="La Manivelle - Le processus de création" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen 
              className="relative z-0"
            ></iframe>
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