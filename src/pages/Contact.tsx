import { motion } from 'motion/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24 luxury-container grid grid-cols-1 md:grid-cols-12 gap-20">
      {/* Left: Info */}
      <div className="md:col-span-5 space-y-12">
        <div className="space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase text-gold"
          >
            Reach Out
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-heading text-white">Private <br />Concierge</h1>
          <p className="text-slate-400 font-light text-lg leading-relaxed">
            Our advisors operate with the utmost discretion to tailor your journey. For immediate assistance, our 24/7 global bridge is at your disposal.
          </p>
        </div>

        <div className="space-y-8 pt-4">
          <div className="flex items-start gap-6 group cursor-pointer">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Global Priority</p>
              <p className="text-white text-lg font-light">+1 (800) VOYAGE</p>
            </div>
          </div>

          <div className="flex items-start gap-6 group cursor-pointer">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Concierge Desk</p>
              <p className="text-white text-lg font-light">concierge@oceanvoyage.luxury</p>
            </div>
          </div>

          <div className="flex items-start gap-6 group cursor-pointer">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Headquarters</p>
              <p className="text-white text-lg font-light leading-snug">Maritime District, Place du Casino<br />98000, Monaco</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="md:col-span-7">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="luxury-card p-8 md:p-16 space-y-10"
        >
          <div className="flex items-center gap-4 border-b border-white/10 pb-8">
            <MessageSquare className="w-10 h-10 text-gold opacity-50" />
            <div className="space-y-1">
              <h3 className="text-2xl font-heading text-white">Reservation Inquiry</h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Responses within 2 business hours</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gold/80 font-bold ml-1">Full Name</label>
              <Input placeholder="Alexander Sterling" className="bg-white/5 border-white/10 h-14 rounded-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gold/80 font-bold ml-1">Email Address</label>
              <Input placeholder="a.sterling@private.com" className="bg-white/5 border-white/10 h-14 rounded-sm" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest text-gold/80 font-bold ml-1">Preferred Voyage</label>
              <Input placeholder="e.g., Mediterranean Elegance Sep 2026" className="bg-white/5 border-white/10 h-14 rounded-sm" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest text-gold/80 font-bold ml-1">Special Requests</label>
              <textarea 
                className="w-full bg-white/5 border border-white/10 p-4 min-h-40 text-white text-sm focus:outline-none focus:ring-1 focus:ring-gold rounded-sm transition-all" 
                placeholder="Dietary requirements, accessibility, or event coordination..." 
              />
            </div>
          </div>

          <Button className="gold-button w-full h-16 text-sm font-bold shadow-2xl" data-testid="contact-submit-button">
            Send Secure Inquiry
          </Button>

          <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest">
            Your data is stored securely in accordance with GDPR & Monaco Privacy Laws.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
