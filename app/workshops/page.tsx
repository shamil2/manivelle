export default function WorkshopsPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 text-primary italic">Workshops</h1>
        <p className="text-xl text-primary/80 font-light leading-relaxed">
          Discover the art of cartonnage in our Cliponville studio. Learn the techniques to transform humble cardboard into durable, beautiful furniture.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="lg:col-span-1 space-y-8">
          <div className="border border-subtle/50 p-8 bg-surface">
            <h3 className="font-serif text-2xl italic text-primary mb-4">Discovery Session</h3>
            <div className="text-sm text-primary/70 mb-4 flex justify-between border-b border-subtle/30 pb-2">
              <span>Duration</span>
              <span className="font-medium">3 Hours</span>
            </div>
            <p className="text-primary/80 font-light text-sm mb-6">
              A perfect introduction. Learn the basic techniques of cutting, gluing, and finishing while creating a small decorative object to take home.
            </p>
            <span className="text-accent font-medium">€45.00</span>
          </div>

          <div className="border border-subtle/50 p-8 bg-surface relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-natural/80" />
            <h3 className="font-serif text-2xl italic text-primary mb-4">Furniture Masterclass</h3>
            <div className="text-sm text-primary/70 mb-4 flex justify-between border-b border-subtle/30 pb-2">
              <span>Duration</span>
              <span className="font-medium">20 Sessions</span>
            </div>
            <p className="text-primary/80 font-light text-sm mb-6">
              Our comprehensive course. Over several weeks, you will design, construct, and finish your own full-sized piece of cardboard furniture under expert guidance.
            </p>
            <span className="text-accent font-medium">€450.00</span>
          </div>
        </div>

        <div className="lg:col-span-2 bg-subtle/10 border border-subtle/30 p-8 min-h-[500px] flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-serif italic text-primary mb-2">Book Your Session</h2>
          <p className="text-primary/60 text-sm mb-8">Select a date and time that works for you.</p>
          
          <div className="w-full max-w-md aspect-video border-2 border-dashed border-subtle/50 flex items-center justify-center bg-surface/50 rounded-sm">
            <div className="text-primary/40 flex flex-col items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>[ Calendly Widget Placeholder ]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
