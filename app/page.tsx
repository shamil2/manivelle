import Image from "next/image";
import Button from "@/components/ui/Button";
import BentoCard from "@/components/ui/BentoCard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-8 relative">
        <div className="absolute inset-0 bg-cardboard-texture opacity-20 pointer-events-none"></div>
        <h1 className="text-[clamp(3rem,10vw,6rem)] font-serif italic text-center max-w-5xl leading-tight">
          Crafting the <span className="text-accent">tactile</span> future from recycled cardboard.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-black/60 max-w-2xl text-center dark:text-zinc-400">
          La Manivelle is an artisanal studio in Normandie designing bespoke, eco-responsible furniture.
        </p>
        <div className="mt-12 flex gap-4">
          <Button variant="primary">Discover the Shop</Button>
          <Button variant="outline">Book a Workshop</Button>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="w-full max-w-7xl px-8 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          <BentoCard 
            title="Artisanal Workshops" 
            subtitle="Learn the Craft" 
            number="01" 
            description="Join us in Normandie to build your own cardboard furniture."
            className="md:col-span-2 md:row-span-2"
          />
          <BentoCard 
            title="The Shop" 
            subtitle="Ready-Made" 
            number="02" 
            dark
            className="md:col-span-2"
          />
          <BentoCard 
            title="Custom Commissions" 
            subtitle="Bespoke Design" 
            number="03" 
            className="md:col-span-2"
          />
        </div>
      </section>

      {/* Ethos Section */}
      <section className="w-full max-w-7xl px-8 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-bold">Our Ethos</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mt-4 mb-6">Circular by design, built to last.</h2>
            <p className="text-lg text-black/70 mb-8 leading-relaxed dark:text-zinc-400">
              Every piece created at La Manivelle begins as discarded material. Through precise cutting, folding, and finishing, we transform everyday cardboard into structural, durable furniture that challenges the perception of &quot;waste&quot;.
            </p>
            <Button variant="outline">Read our Story</Button>
          </div>
          <div className="grid grid-cols-2 gap-4 relative">
             <div className="aspect-[3/4] bg-neutral-200 rounded-sm overflow-hidden relative">
               <Image src="https://static.wixstatic.com/media/22a2c6_3cebd6f34c6b45499a4f9751e16592d7~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_560,h_752,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5629_JPG.jpg" alt="Workshop details" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
             </div>
             <div className="aspect-[3/4] bg-neutral-200 rounded-sm overflow-hidden relative translate-y-12">
               <Image src="https://static.wixstatic.com/media/22a2c6_3af074da3ef44b488eebc9798df07205~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_147,h_196,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/22a2c6_3af074da3ef44b488eebc9798df07205~mv2_d_3024_4032_s_4_2.jpg" alt="Finished piece" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
