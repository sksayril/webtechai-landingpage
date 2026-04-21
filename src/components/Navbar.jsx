'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Marketing', path: '/marketing' },
    { name: 'Product', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="fixed w-full md:w-[calc(100%-2rem)] md:max-w-7xl md:left-1/2 md:-translate-x-1/2 top-0 md:top-5 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100 md:border md:border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:rounded-full transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-[#0ea5e9]/5 md:rounded-full -z-10 pointer-events-none"></div>
      <nav className="w-full px-6 lg:px-10 py-3.5 flex justify-between items-center relative z-10">
        {/* Modern Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 border border-slate-100 overflow-hidden">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <div className="flex items-center">
               <span className="text-slate-800">WebTech</span><span className="text-[#0ea5e9] -ml-0.5">AI</span>
            </div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-0.5">Solutions</span>
          </div>
        </Link>

        {/* Desktop Links (Center) */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative text-sm font-bold transition-all px-4 py-2 ${
                pathname === link.path ? 'text-[#0ea5e9]' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {pathname === link.path && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white border border-[#0ea5e9]/20 shadow-[0_2px_10px_rgba(14,165,233,0.1)] rounded-full w-full h-full -z-0"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA (Right) */}
        <div className="hidden md:block">
          <Link href="/contact" className="px-7 py-3 bg-gradient-to-r from-[#0ea5e9] to-blue-500 text-white text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(14,165,233,0.4)] hover:-translate-y-0.5 transition-all duration-300 focus:ring-4 focus:ring-[#0ea5e9]/50 block">
            Get Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 text-2xl focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-gray-100 flex flex-col items-center py-4 gap-4 px-6 shadow-soft shadow-lg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-base font-bold transition-all w-full text-center py-3 rounded-xl ${
                pathname === link.path ? 'bg-blue-50 text-[#0ea5e9]' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full text-center px-6 py-4 mt-2 bg-gradient-to-r from-[#0ea5e9] to-blue-500 text-white font-bold rounded-xl shadow-[0_4px_15px_rgba(14,165,233,0.3)]">
            Get Free Consultation
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
