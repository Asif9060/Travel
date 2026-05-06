import { Link } from 'react-router-dom';
import { Ship, Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', id: 'nav-home-link' },
    { name: 'Cruise Ships', path: '/ships', id: 'nav-ships-link' },
    { name: 'Destinations', path: '/destinations', id: 'nav-destinations-link' },
    { name: 'Packages', path: '/packages', id: 'nav-packages-link' },
    { name: 'Gallery', path: '/gallery', id: 'nav-gallery-link' },
    { name: 'About', path: '/about', id: 'nav-about-link' },
    { name: 'Contact', path: '/contact', id: 'nav-contact-link' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 luxury-glass h-20">
      <div className="luxury-container h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center space-x-2" data-testid="logo-link">
            <div className="w-8 h-8 bg-gold flex items-center justify-center font-bold text-slate-950 rounded-sm">O</div>
            <span className="text-xl font-heading text-white tracking-[0.3em] font-light uppercase">OceanVoyage</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[10px] font-semibold tracking-widest uppercase text-slate-300 hover:text-gold transition-all"
                data-testid={link.id}
              >
                {link.name}
              </Link>
            ))}
            <button className="concierge-button ml-4" data-testid="book-now-button">
              Concierge
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm uppercase tracking-widest text-slate-300 hover:text-gold"
                  data-testid={`mobile-${link.id}`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="gold-button w-full" data-testid="mobile-book-now-button">
                Book Passage
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
