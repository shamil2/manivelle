'use client'

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Button from "@/components/ui/Button"
import type { Product } from "@/lib/content"

type Props = {
  products?: Product[]
}

export default function ShopClient({ products = [] }: Props) {
  const [submitted, setSubmitted] = useState(false)

  const hasProducts = products && products.length > 0

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition }
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 text-primary italic">Merci !</h1>
        <p className="text-xl md:text-2xl text-primary/80 mb-12 max-w-2xl font-light">
          Nous vous préviendrons dès que la boutique ouvre !
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-primary text-surface px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
        >
          Retour à la Boutique
        </button>
      </div>
    )
  }

  if (!hasProducts) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-32 pb-24">
        <div className="mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/20"></span>
            La Boutique
          </span>
          <h1 className="font-serif text-[clamp(3.5rem,10vw,8rem)] text-primary italic leading-[0.85] tracking-tighter text-balance mb-8">
            Collection <span className="text-primary/30">Artisanale</span>.
          </h1>
          <p className="text-lg md:text-xl text-primary/60 max-w-2xl leading-relaxed">
            Une sélection de pièces uniques en carton recyclé. Chaque objet estcrafted à la main dans notre atelier normand.
          </p>
        </div>

        <div className="bg-subtle/30 p-8 md:p-12 border border-subtle/50 rounded-sm w-full max-w-lg mx-auto">
          <h2 className="text-2xl font-serif italic mb-4 text-primary">Bientôt Disponible</h2>
          <p className="text-sm text-primary/70 mb-8">
            Inscrivez-vous pour être tenu au courant de l'ouverture de la boutique.
          </p>
          <form className="flex flex-col gap-3" onSubmit={handleWaitlistSubmit}>
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              aria-label="Email pour la liste d'attente"
              className="w-full bg-surface border border-subtle p-4 outline-none focus:border-accent transition-colors"
              required
            />
            <Button type="submit" variant="primary">
              Me Prévenir
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-32 pb-24">
      <div className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-8 flex items-center gap-4">
          <span className="w-8 h-px bg-primary/20"></span>
          La Boutique
        </span>
        <h1 className="font-serif text-[clamp(3.5rem,10vw,8rem)] text-primary italic leading-[0.85] tracking-tighter text-balance mb-8">
          Collection <span className="text-primary/30">Artisanale</span>.
        </h1>
        <p className="text-lg md:text-xl text-primary/60 max-w-2xl leading-relaxed">
          Une sélection de pièces uniques en carton recyclé. Chaque objet est thérapeutiquement assemblée à la main dans notre atelier normand.
        </p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            variants={itemUp}
            className="group"
          >
            <div className="relative aspect-[3/4] rough-border overflow-hidden bg-subtle/10 mb-6">
              <Image
                src={product.images?.[0] || '/assets/images/gallery-2.svg'}
                alt={product.name || "Product"}
                fill
                className="object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-2xl font-serif italic mb-2">{product.name}</h3>
            {product.description && (
              <p className="text-sm opacity-60 mb-4 leading-relaxed">{product.description}</p>
            )}
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-medium">
                {product.price ? `${product.price}€` : 'Sur devis'}
              </span>
              {product.inStock ? (
                <a href={product.checkoutUrl || '#'}>
                  <Button variant="primary">Commander</Button>
                </a>
              ) : (
                <span className="text-xs uppercase tracking-widest opacity-40">Épuisé</span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}