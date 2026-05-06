import { PACKAGES } from '@/constants';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Check, Star, Coffee, Wine, Wifi } from 'lucide-react';

export default function Packages() {
  const allPackages = [
    ...PACKAGES,
    {
      id: 'arctic-expedition',
      title: 'Arctic Expedition',
      description: 'Journey to the edge of the world with expert naturalists.',
      price: 'From $12,000',
      duration: '14 Days',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa'
    }
  ];

  return (
    <div className="py-24 luxury-container min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 mb-24"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">All-Inclusive Curations</span>
        <h1 className="text-5xl md:text-7xl font-heading text-white">The Definitive Selection</h1>
        <p className="max-w-2xl text-slate-400 font-light text-lg">
          Each voyage is an orchestrated masterpiece. Our packages are designed to provide the most seamless and elevated experience possible.
        </p>
      </motion.div>

      <div className="space-y-16">
        {allPackages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`luxury-card flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} overflow-hidden relative group`}
            data-testid={`package-card-${pkg.id}`}
          >
            {/* Visual */}
            <div className="lg:w-1/2 h-[500px] overflow-hidden relative">
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-950/20" />
              <div className="absolute top-8 left-8">
                 <div className="bg-gold text-slate-950 px-4 py-1 text-[10px] font-bold uppercase tracking-widest shadow-xl">Best Choice</div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">{pkg.duration} All-Inclusive</span>
                  <h2 className="text-4xl font-heading text-white mt-4">{pkg.title}</h2>
                </div>
                <div className="text-right">
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest">Signature Voyage</p>
                  <p className="text-3xl text-white font-heading font-light">{pkg.price}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Per Person</p>
                </div>
              </div>

              <p className="text-slate-400 font-light text-lg leading-relaxed">{pkg.description}</p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Coffee, text: 'Gourmet Dining' },
                  { icon: Wine, text: 'Open Bar' },
                  { icon: Wifi, text: 'Premium Data' },
                  { icon: Star, text: 'Personal Butler' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-500">
                    <item.icon className="w-4 h-4 text-gold/50" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <Button className="gold-button flex-1 h-16" data-testid={`book-pkg-${pkg.id}`}>Begin Reservation</Button>
                <Button variant="outline" className="outline-button h-16" data-testid={`view-pkg-${pkg.id}`}>Itinerary Details</Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
