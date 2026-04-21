import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaGlobe, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0b1121] pt-24 pb-12 text-slate-300 relative overflow-hidden border-t border-slate-800/50">
      {/* Decorative Top Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0ea5e9]/70 to-transparent shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
      
      {/* Background Glows */}
      <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-[#0ea5e9]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute -top-40 -left-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-slate-800/80 pb-16 relative z-10">
        
        {/* Brand */}
        <div className="lg:col-span-4 lg:pr-8">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-3 group mb-6">
            <div className="w-10 h-10 rounded-xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 overflow-hidden">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-center">
                <span className="text-white">WebTech</span><span className="text-[#0ea5e9] -ml-0.5">AI</span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-0.5">Solutions</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
            Architecting high-converting digital ecosystems. We combine proprietary AI with precision execution to scale brands infinitely.
          </p>
          <div className="flex space-x-4 text-slate-400">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all duration-300 hover:-translate-y-1"><FaGlobe size={16} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all duration-300 hover:-translate-y-1"><FaTwitter size={16} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all duration-300 hover:-translate-y-1"><FaLinkedinIn size={16} /></a>
          </div>
        </div>
        
        {/* Expertise */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold tracking-wide mb-6">Expertise</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/products" className="hover:text-[#0ea5e9] hover:translate-x-1 block transition-all">Authority SEO</Link></li>
            <li><Link href="/products" className="hover:text-[#0ea5e9] hover:translate-x-1 block transition-all">Precision Ads</Link></li>
            <li><Link href="/products" className="hover:text-[#0ea5e9] hover:translate-x-1 block transition-all">Social Scaling</Link></li>
            <li><Link href="/products" className="hover:text-[#0ea5e9] hover:translate-x-1 block transition-all">Content Assets</Link></li>
          </ul>
        </div>
        
        {/* Company */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold tracking-wide mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/" className="hover:text-[#0ea5e9] hover:translate-x-1 block transition-all">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#0ea5e9] hover:translate-x-1 block transition-all">About Us</Link></li>
            <li><Link href="/marketing" className="hover:text-[#0ea5e9] hover:translate-x-1 block transition-all">Marketing Solutions</Link></li>
            <li><Link href="/products" className="hover:text-[#0ea5e9] hover:translate-x-1 block transition-all">Products</Link></li>
            <li><Link href="/contact" className="hover:text-[#0ea5e9] hover:translate-x-1 block transition-all">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-4">
          <h4 className="text-white font-bold tracking-wide mb-6">Digital Intelligence</h4>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Subscribe to our weekly private newsletter covering the latest in AI and algorithmic growth engineering.
          </p>
          <div className="relative group">
            <input type="email" placeholder="Enter your email" className="w-full bg-slate-900/80 border border-slate-700 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all text-sm pr-14 shadow-inner" />
            <button className="absolute right-2 top-2 bottom-2 w-12 bg-[#0ea5e9] text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(14,165,233,0.3)]">
              <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 relative z-10">
        <p>&copy; {new Date().getFullYear()} WebTechAI Agency. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 font-medium tracking-wide">
          <Link href="/" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          <Link href="/" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-slate-300 transition-colors">Cookie Controls</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
