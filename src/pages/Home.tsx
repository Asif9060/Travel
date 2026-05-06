import { motion } from 'motion/react';
import { SHIPS, DESTINATIONS, PACKAGES } from '@/constants';
import { Search, Calendar, Users, MapPin, ArrowRight, Play, Ship } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';

export default function Home() {
  const sponsors = [
    { name: 'Bangladesh Biman', url: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9' }, // Placeholder for local branding
    { name: 'Apex', url: 'https://images.unsplash.com/photo-1562783912-21ad31ee2a83' },
    { name: 'Grameenphone', url: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20' }
  ];

  return (
    <div className="space-y-0 text-slate-300 bg-slate-950">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Cruise Hero" 
            className="w-full h-full object-cover scale-110 motion-safe:animate-[zoom-out_20s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 w-full luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="editorial-label tracking-[0.4em] block"
                >
                  Expedition Asia • 2024
                </motion.span>
                <h1 className="text-6xl md:text-8xl font-light leading-[1] text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Where the <br/><span className="italic">Horizon Ends</span>
                </h1>
                <p className="text-xl text-slate-400 font-light leading-relaxed max-w-lg">
                  Curating the most exclusive maritime journeys across the Bay of Bengal and beyond. Luxury redefined at sea.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button className="gold-button">Request Quote</Button>
                <Link to="/gallery">
                  <Button className="outline-button">The Experience</Button>
                </Link>
              </div>
            </motion.div>

            {/* Booking Widget (Travoway Inspired) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="bg-slate-900/40 backdrop-blur-3xl p-8 border border-white/10 shadow-2xl space-y-6">
                <h2 className="text-2xl font-heading text-white">Plan Your Voyage</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold flex items-center gap-2">
                        <MapPin size={12} /> Region
                      </label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
                          <SelectValue placeholder="Select Destination" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-white/10 text-white">
                          <SelectItem value="sundarbans">Sundarbans</SelectItem>
                          <SelectItem value="stmartins">Saint Martin's</SelectItem>
                          <SelectItem value="coxs">Cox's Bazar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold flex items-center gap-2">
                        <Users size={12} /> Party
                      </label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
                          <SelectValue placeholder="Guests" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-white/10 text-white">
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="large">Private Charter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold font-bold flex items-center gap-2">
                      <Calendar size={12} /> Departure Date
                    </label>
                    <Input 
                      type="date" 
                      className="bg-white/5 border-white/10 text-white h-12 block w-full focus:ring-gold"
                    />
                  </div>
                </div>

                <Button className="gold-button w-full h-14 flex items-center justify-center gap-3 group">
                  EXPLORE AVAILABILITY <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Button>

                <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest">
                  Secure checkout • Priority Concierge support
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Voyage Section (Editorial Pattern) */}
      <section className="bg-bg-secondary border-t border-white/5 h-auto lg:h-72 flex flex-col lg:flex-row">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center border-r border-white/5 p-10 lg:p-16"
        >
          <span className="editorial-label mb-2">Featured Expedition</span>
          <h3 className="text-3xl font-light text-slate-100" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Sundarban Mystic</h3>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-medium mt-2">4 Nights • Signature Series • Private Guide</p>
        </motion.div>
        
        <div className="flex-[2] grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            { tag: 'Explorer', name: 'Mangrove Deep', img: 'https://images.unsplash.com/photo-1614704170756-1dedf8819001?auto=format&fit=crop&q=80&w=800' },
            { tag: 'Luxury', name: 'Celestial Deck', img: 'https://images.unsplash.com/photo-1776993298456-98c71c0e177e' },
            { tag: 'Escape', name: 'Coral Island', img: 'https://images.unsplash.com/photo-1608958141441-0cc938517b18?auto=format&fit=crop&q=80&w=800' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="group relative overflow-hidden h-72 lg:h-full border-r border-white/5 last:border-r-0"
            >
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] text-gold font-bold uppercase tracking-widest mb-1">{item.tag}</p>
                <p className="text-sm font-light text-white tracking-widest uppercase">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex-1 flex flex-col justify-center items-center lg:items-end p-10 lg:p-16">
          <div className="text-right">
            <p className="text-4xl font-light text-gold mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>৳85,000</p>
            <p className="text-[9px] uppercase tracking-widest opacity-40 text-slate-400">Request Custom Itinerary</p>
            <button className="mt-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gold hover:text-white transition-colors group">
              View Itinerary <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-bg-tertiary">
        <div className="luxury-container">
          <div className="flex flex-wrap justify-between items-center opacity-30 gap-8">
            {sponsors.map((sponsor) => (
              <img 
                key={sponsor.name} 
                src={sponsor.url} 
                alt={sponsor.name} 
                className="h-8 md:h-12 w-auto grayscale brightness-200 contrast-200"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ships */}
      <section className="py-32 bg-slate-950 overflow-hidden">
        <div className="luxury-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <span className="editorial-label">The Fleet</span>
              <h2 className="text-5xl md:text-8xl font-heading text-white">Floating Palaces</h2>
            </div>
            <Link to="/ships" className="text-[10px] uppercase tracking-[0.3em] text-gold hover:text-white transition-colors flex items-center gap-4 pb-2 group">
              Explore Our Vessels <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SHIPS.map((ship, index) => (
              <motion.div
                key={ship.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="luxury-card group overflow-hidden"
              >
                <div className="relative h-[450px] overflow-hidden">
                  <img 
                    src={ship.image} 
                    alt={ship.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" 
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors"></div>
                </div>
                <div className="p-10 space-y-6 bg-midnight/80 backdrop-blur-md">
                  <h3 className="text-3xl font-heading text-white tracking-widest uppercase">{ship.name}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed line-clamp-3">{ship.description}</p>
                  <Button variant="outline" className="w-full outline-button flex items-center justify-center gap-3">
                    View Deck Plan <ArrowRight size={12} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations - Asymmetrical Bento Grid */}
      <section className="py-32 bg-bg-secondary relative border-y border-white/5">
        <div className="luxury-container">
          <div className="text-left space-y-4 mb-24 max-w-2xl">
            <span className="editorial-label">Uncharted Paths</span>
            <h2 className="text-5xl md:text-8xl font-heading text-white leading-none">Chart Your <br /><span className="italic">Own Course</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
             {/* Sundarbans */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 relative overflow-hidden group"
            >
              <img src={DESTINATIONS[0].image} alt={DESTINATIONS[0].name} className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-4xl font-heading text-white mb-2">{DESTINATIONS[0].name}</h3>
                <p className="text-sm text-slate-400 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500 font-light">
                  {DESTINATIONS[0].description}
                </p>
              </div>
            </motion.div>

            {/* Saint Martin's */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden group"
            >
              <img src={DESTINATIONS[1].image} alt={DESTINATIONS[1].name} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-slate-950/40 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-heading text-white">{DESTINATIONS[1].name}</h3>
              </div>
            </motion.div>

            {/* Kuakata */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden group"
            >
              <img src={DESTINATIONS[3].image} alt={DESTINATIONS[3].name} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-slate-950/40 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-heading text-white">{DESTINATIONS[3].name}</h3>
              </div>
            </motion.div>

             {/* Cox's Bazar */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="md:col-span-4 relative overflow-hidden group"
            >
              <img src={DESTINATIONS[2].image} alt={DESTINATIONS[2].name} className="w-full h-full object-cover grayscale-[30%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-5xl font-heading text-white mb-4">{DESTINATIONS[2].name}</h3>
                <p className="text-lg text-slate-300 max-w-xl font-light">{DESTINATIONS[2].description}</p>
                <Button className="gold-button w-fit mt-8">Explore Horizon</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Taste of the High Seas */}
      <section className="py-24 bg-slate-950">
        <div className="luxury-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Culinary Experience</span>
            <h2 className="text-4xl md:text-5xl font-heading text-white leading-tight">Masterpieces on Every Plate</h2>
            <p className="text-slate-400 font-light text-lg">
              Our Michellin-starred chefs bring the world's most exquisite flavors to your table. From fresh-caught seafood in the Mediterranean to artisanal pastries at sunset.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold">01</div>
                <div>
                  <h4 className="text-white font-medium">Fine Dining</h4>
                  <p className="text-xs text-slate-500">Exquisite culinary journeys every night.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold">02</div>
                <div>
                  <h4 className="text-white font-medium">Sommelier Selection</h4>
                  <p className="text-xs text-slate-500">World's rarest vintages curated for your palate.</p>
                </div>
              </div>
            </div>
            <Button className="outline-button mt-4">View All Dining</Button>
          </div>
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 blur-3xl rounded-full"></div>
             <img 
               src="https://images.unsplash.com/photo-1776993298456-98c71c0e177e" 
               alt="Fine Dining" 
               className="rounded-sm shadow-2xl relative z-10 w-full h-[500px] object-cover"
             />
             <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-gold/20 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Professional Service Section */}
      <section className="py-32 bg-deep-space">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <span className="editorial-label mb-6 block">The Standard</span>
                <h2 className="text-5xl md:text-7xl font-heading text-white leading-tight mb-8">Uncompromising <br /><span className="italic">Excellence</span></h2>
                <div className="space-y-10">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0 text-gold">
                      <Ship size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-heading text-xl mb-2">Curated Fleet</h4>
                      <p className="text-slate-400 font-light leading-relaxed">Each vessel in our collection undergoes rigorous vetting for service and luxury standards.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0 text-gold">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-heading text-xl mb-2">Private Concierge</h4>
                      <p className="text-slate-400 font-light leading-relaxed">Dedicated experts available 24/7 to personalize every aspect of your journey.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -left-20 w-64 h-64 bg-gold/5 blur-[120px] rounded-full"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Service" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[20px] border-slate-950/20 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Newsletter */}
      <section className="py-24 relative overflow-hidden bg-midnight border-t border-white/5">
         <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa" 
            alt="Waves Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"></div>
        </div>
        <div className="luxury-container relative z-10 text-center max-w-3xl space-y-8">
          <span className="editorial-label">Join The Inner Circle</span>
          <h2 className="text-4xl md:text-5xl font-heading text-white">Bespoke Travel Intelligence</h2>
          <p className="text-slate-400 font-light">
            Be the first to receive invitation-only deals, early access to new fleet launches, and curated stories from across the horizons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Input 
              placeholder="Your email address" 
              className="bg-white/5 border-white/20 text-white h-14 rounded-none focus:ring-gold"
            />
            <Button className="gold-button h-14 whitespace-nowrap px-10">Subscribe</Button>
          </div>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">By subscribing, you agree to our privacy policy and terms.</p>
        </div>
      </section>
    </div>
  );
}
