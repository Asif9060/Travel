import { DESTINATIONS } from '@/constants';
import { motion } from 'motion/react';
import { MapPin, Wind, Sun, Anchor } from 'lucide-react';

export default function Destinations() {
  return (
    <div className="py-24 luxury-container min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 mb-20"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Global Portfolios</span>
        <h1 className="text-5xl md:text-7xl font-heading text-white">Uncharted Elegance</h1>
        <p className="max-w-2xl mx-auto text-slate-400 font-light">From the silent fjords of the North to the vibrant pulse of the Caribbean, we curate the world's most evocative destinations.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESTINATIONS.map((dest, index) => (
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="luxury-card group cursor-pointer"
            data-testid={`destination-card-${dest.id}`}
          >
            <div className="h-96 overflow-hidden relative">
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />
              <div className="absolute top-6 left-6 flex space-x-2">
                 <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10 shadow-lg">
                    <Sun className="w-3 h-3 text-gold" />
                    <span className="text-[10px] text-white uppercase tracking-widest">Tropical</span>
                 </div>
              </div>
            </div>
            <div className="p-10 space-y-4">
              <div className="flex items-center gap-2 text-gold">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Region Spotlight</span>
              </div>
              <h3 className="text-3xl font-heading text-white">{dest.name}</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">{dest.description}</p>
              <div className="pt-6 flex justify-between items-center border-t border-white/5">
                <div className="flex gap-4">
                  <Wind className="w-4 h-4 text-slate-600" />
                  <Anchor className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white font-medium hover:text-gold transition-colors">Discover Port</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
