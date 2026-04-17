"use client";

import { useState } from "react";

export default function ShopPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 text-primary italic">Thank You</h1>
        <p className="text-xl md:text-2xl text-primary/80 mb-12 max-w-2xl font-light">
          We&apos;ve added you to our waitlist. We&apos;ll be in touch soon!
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-primary text-surface px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="font-serif text-5xl md:text-7xl mb-6 text-primary italic">The Shop</h1>
      <p className="text-xl md:text-2xl text-primary/80 mb-12 max-w-2xl font-light">
        A curated collection of ready-made artisanal cardboard objects. 
        We are currently crafting new pieces for the upcoming season.
      </p>
      
      <div className="bg-subtle/30 p-8 border border-subtle/50 rounded-sm w-full max-w-md">
        <h2 className="text-xl font-medium mb-4 text-primary">Coming Soon</h2>
        <p className="text-sm text-primary/70 mb-6">
          Join the waitlist to be notified when the shop opens.
        </p>
        {/* Placeholder for email signup or Stripe integration */}
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Your email address" 
            aria-label="Email address for waitlist"
            className="w-full bg-surface border border-subtle p-3 outline-none focus:border-accent transition-colors"
            required
          />
          <button 
            type="submit"
            className="w-full bg-primary text-surface p-3 font-medium hover:bg-primary/90 transition-colors"
          >
            Notify Me
          </button>
        </form>
        <div className="mt-8 pt-4 border-t border-subtle/30 text-xs text-primary/50 text-center">
          <p>[ Stripe Integration Placeholder ]</p>
        </div>
      </div>
    </div>
  );
}
