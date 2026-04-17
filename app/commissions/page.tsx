export default function CommissionsPage() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-primary italic">Custom Commissions</h1>
          <p className="text-lg text-primary/80 mb-6 font-light leading-relaxed">
            Every space is unique, and so is our approach. We work closely with you to design and craft bespoke cardboard furniture that fits your exact needs and aesthetic vision.
          </p>
          <p className="text-lg text-primary/80 mb-8 font-light leading-relaxed">
            Whether it's a specific dimension for an awkward corner, or a completely original piece of functional art, tell us what you have in mind.
          </p>
          
          <div className="bg-subtle/20 p-6 border-l-2 border-accent">
            <h3 className="text-primary font-medium mb-2">The Process</h3>
            <ol className="list-decimal list-inside text-primary/70 text-sm space-y-2">
              <li>Initial inquiry & vision sharing</li>
              <li>Concept sketches & dimension planning</li>
              <li>Quote & timeline approval</li>
              <li>Crafting in our Cliponville studio</li>
              <li>Delivery & installation</li>
            </ol>
          </div>
        </div>
        
        <div className="bg-surface p-8 border border-subtle/50 shadow-sm relative">
          <div className="absolute -top-3 -right-3 w-16 h-16 bg-cardboard-texture opacity-20 pointer-events-none" />
          <h2 className="text-2xl font-serif italic mb-6 text-primary">Start a Conversation</h2>
          
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-primary">Your Name</label>
              <input 
                type="text" 
                id="name"
                placeholder="Jane Doe" 
                className="w-full bg-surface border border-subtle p-3 outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-primary">Email Address</label>
              <input 
                type="email" 
                id="email"
                placeholder="jane@example.com" 
                className="w-full bg-surface border border-subtle p-3 outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="vision" className="text-sm font-medium text-primary">Project Vision</label>
              <textarea 
                id="vision"
                placeholder="Tell us about the piece you have in mind, dimensions, or the space it will live in..." 
                rows={5}
                className="w-full bg-surface border border-subtle p-3 outline-none focus:border-accent transition-colors resize-y"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-primary text-surface p-4 font-medium hover:bg-primary/90 transition-colors mt-2"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
