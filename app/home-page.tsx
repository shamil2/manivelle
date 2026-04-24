'use client'

import { useRef, type ReactNode } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import Button from "@/components/ui/Button"
import BentoCard from "@/components/ui/BentoCard"
import type { PageContent } from "@/lib/content"

type Props = {
  content?: PageContent | null
}

const defaultContent: PageContent = {
  heroTitle: "Façonner l'avenir",
  heroSubtitle: "tactile à partir de carton de récupération.",
  heroDescription: "La Manivelle est un atelier artisanal concevant des meubles sur mesure et éco-responsables en carton recyclé. Savoir-faire artisanal, ingénierie précise.",
  heroCtaText: "La Boutique",
  heroCtaLink: "/shop",
  galleryItems: [
    { title: "Bibliothèque Architecturale", image: "/assets/images/gallery-1.jpg", caption: "Custom commission detail", location: "Paris, France" },
    { title: "Table de Réunion Organique", image: "/assets/images/gallery-2.jpg", caption: "Custom commission detail", location: "Studio Creatif" },
  ],
}

export default function HomeClient({ content }: Props) {
  const horizontalScrollRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: horizontalScrollRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"])

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

  const pageContent = { ...defaultContent, ...content }

  const heroTitleWords = pageContent.heroTitle?.split(' ') || defaultContent.heroTitle!.split(' ')
  const subtitleWord = pageContent.heroSubtitle || defaultContent.heroSubtitle!
  const galleryItems = pageContent.galleryItems || defaultContent.galleryItems!

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section: Asymmetrical Editorial */}
      <section className="relative w-full pt-32 pb-24 md:pt-48 md:pb-40 px-6 md:px-12 overflow-hidden">
        <motion.div 
          className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Main Copy: Left-aligned, high impact */}
          <div className="md:col-span-8 relative z-10">
            <motion.span variants={itemUp} className="inline-block font-mono text-[10px] tracking-[0.3em] uppercase opacity-40 mb-10">
              Cliponville, Normandie / Est. 2021
            </motion.span>
            <motion.h1 variants={itemUp} className="text-[clamp(3.5rem,10vw,8rem)] font-serif italic leading-[0.85] tracking-tighter mb-14 text-balance">
              {heroTitleWords[0]} {heroTitleWords[1]} <span className="text-accent relative inline-block">
                {heroTitleWords[2]}
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent/30 rounded-full" />
              </span> {subtitleWord}
            </motion.h1>
            <motion.div variants={itemUp} className="flex flex-wrap gap-6 items-center">
              <Link href={pageContent.heroCtaLink || defaultContent.heroCtaLink!}>
                <Button variant="primary">{pageContent.heroCtaText || defaultContent.heroCtaText}</Button>
              </Link>
              <Button variant="outline">Réserver un Stage</Button>
            </motion.div>
          </div>

          {/* Secondary Detail: Right-aligned, smaller */}
          <motion.div variants={itemUp} className="md:col-span-4 md:pt-24 relative z-10">
            <p className="text-lg md:text-xl text-primary/60 leading-relaxed font-sans mb-12 max-w-sm">
              {pageContent.heroDescription || defaultContent.heroDescription}
            </p>
            <div className="relative w-full aspect-[4/5] rough-border overflow-hidden bg-subtle/20 group">
              <div className="absolute inset-0 cardboard-overlay opacity-10 group-hover:opacity-20 transition-opacity duration-700 z-10 pointer-events-none"></div>
              <Image 
                src={pageContent.heroImage || "/assets/images/hero-cardboard.png"}
                alt="Cardboard Texture Working"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-[2000ms] ease-out pointer-events-none"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Background Texture element */}
        <div className="absolute top-0 right-0 w-[60%] h-full -z-10 opacity-10 pointer-events-none">
           <div className="w-full h-full cardboard-overlay rotate-12 scale-150"></div>
        </div>
      </section>

      {/* Bento Grid: Asymmetrical Layout */}
      <section className="w-full bg-primary text-surface py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 cardboard-overlay opacity-[0.05] pointer-events-none"></div>
        <motion.div 
          className="max-w-[1440px] mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemUp} className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-serif italic leading-none">Nos Formules.</h2>
            <p className="text-sm opacity-50 max-w-xs leading-relaxed uppercase tracking-widest font-bold">
              Trois façons de s&apos;engager avec l&apos;artisanat : Acheter, Commander sur mesure ou Apprendre.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-fr">
            <motion.div variants={itemUp} className="md:col-span-7 h-full">
              <BentoCard 
                title="Les Stages" 
                subtitle="L'Expérience" 
                number="01" 
                description="Entrez dans l'atelier. Des sessions de découverte de 3 heures aux formations intensives de 5 jours."
                className="h-full min-h-[400px]"
                href="/workshops"
              />
            </motion.div>
            <motion.div variants={itemUp} className="md:col-span-5 h-full">
              <BentoCard 
                title="La Boutique" 
                subtitle="Pièces Prêtes" 
                number="02" 
                dark
                description="Découvrez notre collection de lampes, petits meubles et objets uniques."
                className="h-full border-surface/10 bg-[#1f1f1d]"
                href="/shop"
              />
            </motion.div>
            <motion.div variants={itemUp} className="md:col-span-12 h-full">
              <BentoCard 
                title="Sur Mesure" 
                subtitle="Design Personnalisé" 
                number="03" 
                description="Des meubles parfaitement adaptés à votre espace. Conçus pour durer, construits pour la vie."
                className="h-full"
                href="/commissions"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Horizontal Hijack Scroll Gallery */}
      <section ref={horizontalScrollRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-subtle/10 border-y border-primary/5">
          <div className="absolute inset-0 cardboard-overlay opacity-5 pointer-events-none"></div>
          
          <motion.div style={{ x }} className="flex gap-16 px-6 md:px-12 w-[300vw]">
            
            {/* Title Slide */}
            <div className="w-screen flex-shrink-0 max-w-[1440px] flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-8 block">/ Galerie</span>
              <h2 className="text-5xl md:text-8xl font-serif italic mb-6 leading-none">
                Le Sur Mesure.
              </h2>
              <p className="text-xl text-primary/60 font-sans max-w-lg leading-relaxed">
                Chaque pièce commence par une conversation. Découvrez comment nous transformons vos besoins en œuvres durables.
              </p>
            </div>

            {/* Gallery Slides from CMS */}
            {galleryItems.map((item, index) => (
              <div key={index} className="w-[80vw] max-w-[900px] flex-shrink-0 flex flex-col justify-center">
                <div className="relative aspect-[16/9] overflow-hidden group rough-border bg-white mb-8">
                  <Image 
                    src={item.image || "/assets/images/gallery-1.jpg"} 
                    alt={item.caption || item.title || "Gallery item"} 
                    fill 
                    loading="lazy"
                    sizes="(max-width: 768px) 80vw, 900px"
                    className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out opacity-90"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif italic">{item.title}</h3>
                    <p className="text-sm opacity-60 mt-2 font-mono uppercase tracking-widest">{item.location}</p>
                  </div>
                  <span className="font-mono text-sm opacity-40">{String(index + 1).padStart(2, '0')}/{galleryItems.length}</span>
                </div>
              </div>
            ))}

            {/* End CTA Slide */}
            <div className="w-screen flex-shrink-0 flex flex-col justify-center items-center text-center">
              <h2 className="text-4xl md:text-6xl font-serif italic mb-8">Votre Projet ?</h2>
              <Button variant="outline">Demander un Devis</Button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Ethos: Overlapping Editorial Section */}
      <section className="w-full py-48 px-6 md:px-12 overflow-hidden relative">
        <motion.div 
          className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemUp} className="md:col-span-5 relative z-10">
            <div className="relative aspect-[3/4] rough-border overflow-hidden bg-subtle/10 group mb-12 translate-x-4 md:translate-x-12">
               <Image 
                  src="/assets/images/finished-detail.jpg" 
                  alt="Finished Cardboard Detail" 
                  fill 
                  loading="lazy"
                  className="object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
            </div>
            <div className="absolute -top-12 -left-12 w-64 h-64 border border-primary/5 rounded-full blur-3xl pointer-events-none bg-accent/5"></div>
          </motion.div>
          
          <motion.div variants={itemUp} className="md:col-span-7 relative z-10 md:pl-12">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-8 block">/ Philosophie</span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-serif italic mb-12 leading-[1.1] text-balance">
              Construire un avenir <span className="text-primary/30 relative inline-block">
                durable
                <span className="absolute bottom-1 left-0 w-full h-[1px] bg-primary/20 rotate-[-2deg]" />
              </span>, un pli à la fois.
            </h2>
            <div className="space-y-8 text-lg md:text-xl text-primary/70 leading-relaxed font-sans max-w-2xl">
              <p>
                La Manivelle est née d&apos;une envie de créer autrement : des meubles éco-responsables, solides et sur-mesure, fabriqués à partir d&apos;un matériau souvent sous-estimé : le carton.
              </p>
              <p>
                Nous croyons en l&apos;économie circulaire et la transmission du savoir-faire artisanal. Que vous commandiez une pièce ou que vous appreniez vous-même l&apos;artisanat, vous participez à un mode de vie plus lent et plus intentionnel.
              </p>
            </div>
            <div className="mt-16">
              <Button variant="text">Découvrir notre démarche</Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Workshop Detail Section: Technical Feel */}
      <section className="w-full bg-surface border-t border-primary/5 py-32 px-6 md:px-12 relative overflow-hidden">
        <motion.div 
          className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 border-l border-primary/10 pl-6 lg:pl-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemUp} className="max-w-md lg:shrink-0">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/20"></span>
              Processus / Transmission
            </h3>
            <p className="text-sm opacity-60 leading-relaxed mb-12 text-balance">
              La transmission est au cœur de notre atelier. Nous proposons trois niveaux d&apos;engagement pour ceux qui souhaitent maîtriser l&apos;art du meuble en carton.
            </p>
            <Button variant="outline">Planifier une visite</Button>
          </motion.div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-12">
            {[
              { id: '01', title: 'Découverte', time: '3 Heures', desc: 'Un premier contact tactile avec la matière. Idéal pour s&apos;initier aux bases du cartonnage.' },
              { id: '02', title: 'Intensif', time: '5 Jours', desc: 'Construisez votre premier meuble structurel complet sous la supervision d&apos;un artisan.' },
              { id: '03', title: 'Maîtrise', time: '20 Sessions', desc: 'Autonomie technique complète. Conception, design et réalisation de projets complexes.' }
            ].map(item => (
              <motion.div key={item.id} variants={itemUp} className="group cursor-default relative">
                <div className="absolute -left-6 lg:-left-12 top-0 w-[1px] h-0 bg-accent group-hover:h-full transition-all duration-700 ease-out"></div>
                <span className="font-mono text-[10px] opacity-40 block mb-6">TYPE_{item.id}</span>
                <h4 className="text-xl font-bold uppercase tracking-widest mb-3 group-hover:text-accent transition-colors duration-500">{item.title}</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 opacity-60 bg-subtle/30 inline-block px-3 py-1 rounded-sm">{item.time}</p>
                <p className="text-sm opacity-80 leading-relaxed max-w-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}