import { motion } from 'motion/react';
import { Ship, History, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="luxury-container relative z-10 text-center space-y-8">
           <motion.span 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-xs font-semibold tracking-[0.4em] uppercase text-gold"
           >
             Est. 1924
           </motion.span>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="text-5xl md:text-8xl font-heading text-white max-w-5xl mx-auto leading-[0.9]"
           >
             A Century of <br /><span className="italic">Maritime Elegance</span>
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="max-w-2xl mx-auto text-slate-400 text-lg font-light leading-relaxed"
           >
             OceanVoyage was founded on the belief that travel isn't just about reaching a destination—it's about the transformation that happens on the open sea.
           </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-white/5 bg-bg-tertiary">
        <div className="luxury-container grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Founded', value: '1924', icon: History },
            { label: 'Voyages', value: '18k+', icon: Ship },
            { label: 'Awards', value: '150+', icon: Award },
            { label: 'Team', value: '5k+', icon: Users }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <stat.icon className="w-6 h-6 text-gold mx-auto mb-4 opacity-50" />
              <p className="text-3xl font-heading text-white tracking-widest">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-slate-950">
        <div className="luxury-container grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1540541338287-41700207dee6" 
               alt="Heritage" 
               className="rounded-sm shadow-2xl w-full h-[600px] object-cover grayscale" 
             />
             <div className="absolute -bottom-10 -right-10 hidden lg:block">
                <div className="w-64 h-64 border border-gold/20 p-8 flex items-center justify-center bg-slate-950/80 backdrop-blur-xl">
                   <p className="text-xs text-gold uppercase tracking-[0.2em] leading-relaxed text-center font-bold">The Heritage Selection 2026</p>
                </div>
             </div>
          </div>
          <div className="space-y-12">
             <div className="space-y-6">
                <h2 className="text-5xl font-heading text-white">The Vision</h2>
                <p className="text-slate-400 font-light text-lg leading-relaxed">
                  What started as a single mail-carrier vessel in the North Sea has evolved into the world's most prestigious private fleet. 
                </p>
                <p className="text-slate-400 font-light text-lg leading-relaxed">
                  We specialize in the "Deep Slow"—a philosophy of travel that prioritizes immersion and sensory connection over speed and spectacle. On board our ships, time behaves differently.
                </p>
             </div>
             
             <div className="space-y-8">
                <div className="space-y-2">
                   <h4 className="text-gold text-xs uppercase tracking-widest font-bold">Uncompromising Safety</h4>
                   <p className="text-sm text-slate-500">Beyond standard regulations, our protocols are the industry benchmark.</p>
                </div>
                <div className="space-y-2">
                   <h4 className="text-gold text-xs uppercase tracking-widest font-bold">True Sustainability</h4>
                   <p className="text-sm text-slate-500">Leading the industry in carbon-neutral maritime technology by 2030.</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
