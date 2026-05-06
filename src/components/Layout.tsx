import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <motion.main 
        className="flex-grow pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
