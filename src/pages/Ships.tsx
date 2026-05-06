import { SHIPS } from '@/constants';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export default function Ships() {
  return (
    <div className="py-24 luxury-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 mb-20"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Our Fleet</span>
        <h1 className="text-5xl md:text-7xl font-heading text-white">Engineering Excellence</h1>
        <p className="max-w-2xl text-slate-400 font-light text-lg">
          From state-of-the-art stability systems to artisanal wood finishes, our fleet represents the pinnacle of maritime architecture.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {SHIPS.map((ship, index) => (
          <motion.div 
            key={ship.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="luxury-card group"
            data-testid={`ship-card-${ship.id}`}
          >
            <div className="h-[500px] overflow-hidden relative">
              <img src={ship.image} alt={ship.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
            <div className="p-12 space-y-8">
              <div className="flex justify-between items-end">
                <h2 className="text-4xl font-heading text-white">{ship.name}</h2>
                <span className="text-[10px] uppercase tracking-widest text-gold border border-gold/20 px-3 py-1">{ship.capacity}</span>
              </div>
              <p className="text-slate-400 font-light leading-relaxed text-lg">{ship.description}</p>
              
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 border-b border-white/5 pb-2">Onboard Exclusives</h4>
                <div className="grid grid-cols-2 gap-y-3">
                  {ship.amenities.map(a => (
                    <div key={a} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-gold rotate-45" /> {a}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button className="gold-button flex-1 h-14" data-testid={`view-decks-${ship.id}`}>Explore Deck Plans</Button>
                <Button variant="outline" className="outline-button h-14" data-testid={`book-ship-${ship.id}`}>Check Dates</Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
