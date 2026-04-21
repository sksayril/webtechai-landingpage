'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineSearch, HiOutlineShare, HiOutlineDocumentText, HiX, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { FiPieChart } from 'react-icons/fi';
import ParticleBackground from './ParticleBackground';
import TestimonialCarousel from './TestimonialCarousel';

const stepDetails = {
  1: { title: "Strategic Audit", desc: "We begin with a comprehensive deep-dive into your unit economics, current marketing assets, and your competitor landscape. We identify exactly where you are losing money and where massive scale opportunities lie." },
  2: { title: "Funnel Engineering", desc: "Our team maps out a customized precision funnel. This includes designing the omni-channel touchpoints across Google, Meta, and SEO, ensuring your users are guided seamlessly toward conversion." },
  3: { title: "Velocity Testing", desc: "Deployment is fast and calculated. We launch aggressive testing phases to collect crucial data, performing daily optimizations on creatives, bidding strategies, and landing pages to stabilize CPL for maximum volume." },
  4: { title: "Market Dominance", desc: "Once we track the most profitable channels, we pour fuel on the fire. Our infrastructure automatically handles increased budget while maintaining ROAS, achieving total market share domination." }
};

const HomeClient = () => {
  const [activeStep, setActiveStep] = useState(null);
  
  return (
    <div className="bg-[#fafafa] min-h-screen relative overflow-x-hidden font-sans">
      
      {/* Background Particles */}
      <div className="opacity-10 pointer-events-none fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center px-3 py-1 bg-[#e0f2fe] text-[#0284c7] rounded-full text-[11px] font-bold mb-6 uppercase tracking-wider">
            Digital Growth Partner
          </div>
          <h1 className="text-[3.5rem] md:text-[4.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-6">
            Scaling Brands through <span className="text-[#0ea5e9]">Precision Marketing</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-medium">
            We deploy data-driven strategies and liquid creative to transform your digital presence into a high-performance lead generation engine.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-[#f97316] text-white rounded-full font-bold shadow-lg hover:bg-[#ea580c] hover:-translate-y-0.5 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#f97316]">
              Start Your Growth
            </Link>
            <Link href="/about" className="px-8 py-3.5 bg-white text-slate-800 border-2 border-gray-200 rounded-full font-bold hover:bg-gray-50 hover:-translate-y-0.5 transition-all">
              View Case Studies
            </Link>
          </div>
        </motion.div>

        {/* Orbital Hero Graphic */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-full flex items-center justify-center lg:justify-end min-h-[400px]">
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center mt-10 md:mt-0">

            {/* Outer Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute inset-0 md:inset-4 rounded-full border border-dashed border-[#0ea5e9]/40"
            ></motion.div>

            {/* Inner Rotating Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-10 md:inset-16 rounded-full border-[3px] border-blue-500/10"
            ></motion.div>

            {/* Background Glow */}
            <div className="absolute inset-20 bg-[#0ea5e9]/20 rounded-full blur-[60px] pointer-events-none"></div>

            {/* Center Node */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-20 w-40 h-40 md:w-48 md:h-48 bg-white rounded-full shadow-[0_0_50px_rgba(14,165,233,0.3),inset_0_4px_15px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-slate-900 border-4 border-[#0ea5e9]/20 overflow-hidden p-10"
            >
              <img src="/logo.png" alt="Center Logo" className="w-full h-full object-contain mb-2" />
              <span className="font-extrabold text-[10px] md:text-xs text-center leading-tight tracking-[0.2em] uppercase text-[#0ea5e9]">WebTechAI</span>
            </motion.div>

            {/* Orbiting Icons... (keeping the rest of the orbital markup) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }} animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ opacity: { duration: 0.6, delay: 0.4 }, y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0 } }}
              className="absolute top-2 left-0 md:top-8 md:left-4 z-30 p-2 md:p-3 bg-white/95 backdrop-blur-xl rounded-[1.5rem] shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-blue-100 flex items-center md:gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-black text-sm shadow-lg border-2 border-white/50">SEO</div>
              <span className="font-bold text-slate-800 text-sm hidden md:block pr-3">Optimization</span>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, x: 30, y: -30 }} animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
              transition={{ opacity: { duration: 0.6, delay: 0.6 }, y: { repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 } }}
              className="absolute -top-4 right-0 md:top-4 md:-right-6 z-30 p-2 md:p-3 bg-white/95 backdrop-blur-xl rounded-[1.5rem] shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-purple-100 flex items-center md:gap-3"
            >
              <span className="font-bold text-slate-800 text-sm hidden md:block pl-3 text-right">Generative</span>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-white font-black text-sm shadow-lg border-2 border-white/50">AIO</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }} animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{ opacity: { duration: 0.6, delay: 0.8 }, y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 } }}
              className="absolute bottom-6 -right-4 md:bottom-10 md:-right-8 z-30 p-2 md:p-3 bg-white/95 backdrop-blur-xl rounded-[1.5rem] shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-orange-100 flex items-center md:gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-black text-sm shadow-lg border-2 border-white/50">CM</div>
              <span className="font-bold text-slate-800 text-sm hidden md:block pr-3">Content</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }} animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
              transition={{ opacity: { duration: 0.6, delay: 1 }, y: { repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 1.5 } }}
              className="absolute -bottom-2 left-2 md:bottom-2 md:-left-2 z-30 p-2 md:p-3 bg-white/95 backdrop-blur-xl rounded-[1.5rem] shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-teal-100 flex items-center md:gap-3"
            >
              <span className="font-bold text-slate-800 text-sm hidden md:block pl-3 text-right">Websites</span>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-black text-sm shadow-lg border-2 border-white/50">WEB</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trusted By Carousel */}
      <section className="py-12 border-y border-gray-100 bg-white relative z-10 overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest relative inline-block">
            <span className="absolute left-0 top-1/2 w-8 h-[2px] bg-[#0ea5e9]/50 -translate-x-12"></span>
            Trusted by industry-leading growth teams
            <span className="absolute right-0 top-1/2 w-8 h-[2px] bg-[#0ea5e9]/50 translate-x-12"></span>
          </p>
        </div>
        <div className="relative flex overflow-hidden group">
          <div className="absolute top-0 left-0 bottom-0 w-24 md:w-56 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-24 md:w-56 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex whitespace-nowrap opacity-100"
            style={{ width: "max-content" }}
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center justify-around gap-16 px-8">
                <div className="flex items-center gap-2 text-[1.4rem] font-bold text-slate-800 font-serif">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0ea5e9] to-blue-600 shadow-md"></div>Velo Systems
                </div>
                <div className="flex items-center gap-2 text-2xl font-black text-indigo-900 tracking-tighter">
                  <span className="text-indigo-500 font-light">/</span> TECHFLOW
                </div>
                <div className="flex items-center gap-1.5 text-[1.35rem] font-bold text-slate-900 tracking-widest relative">
                  Apex<span className="text-orange-500">Commerce</span>
                </div>
                 <div className="flex items-center gap-1.5 text-xl font-bold text-slate-800 uppercase">
                  Quantum<span className="text-xs font-black text-white bg-gradient-to-r from-purple-500 to-fuchsia-600 px-2 py-0.5 rounded shadow-sm">AI</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Proof of Performance Stats */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-4 tracking-widest uppercase shadow-sm">
              Impact Delivered
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Proof of <span className="text-[#0ea5e9]">Performance</span>
            </h2>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "250%", label: "Avg. ROI Increase" },
              { val: "12M+", label: "Leads Generated" },
              { val: "45k", label: "Ad Spend Managed" },
              { val: "98%", label: "Client Retention" }
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 relative group overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#0ea5e9] to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-[#0ea5e9] to-indigo-600 mb-4">{s.val}</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Precision (Bento Grid) */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Specialized Precision</h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              We deploy specialized squads focused on specific levers of growth.
            </p>
          </div>
          <Link href="/products" className="text-[#0ea5e9] font-bold hover:underline flex items-center gap-1">All Services &rarr;</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="md:col-span-2 rounded-3xl p-10 flex flex-col justify-between border border-blue-100 shadow-sm transition-all duration-500 bg-gradient-to-br from-white to-[#f0f9ff] group relative overflow-hidden">
             <div className="relative z-10">
               <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-[#0ea5e9] to-indigo-600 flex items-center justify-center text-white mb-8 border border-white/20">
                 <HiOutlineSearch size={32} />
               </div>
               <h3 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Authority-Driven SEO</h3>
               <p className="text-slate-600 mb-8 max-w-md font-medium text-lg">Dominate search results with technical excellence and high-authority link acquisition.</p>
             </div>
             <div className="flex flex-wrap gap-3 relative z-10">
               <span className="px-4 py-2 bg-white/60 border border-white rounded-full text-xs font-bold text-[#0ea5e9]">Technical Audit</span>
               <span className="px-4 py-2 bg-white/60 border border-white rounded-full text-xs font-bold text-[#0ea5e9]">Semantic Mapping</span>
             </div>
           </div>

           <div className="rounded-3xl p-10 flex flex-col justify-between border border-orange-100 bg-gradient-to-b from-white to-[#fff7ed] group relative overflow-hidden">
              <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white mb-6">
                 <FiPieChart size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">Precision Ads</h3>
              <p className="text-slate-600 text-sm mb-8 font-medium">High-conversion PPC across Google, Meta, and LinkedIn.</p>
              <div className="mt-auto flex items-center gap-2 text-xs font-bold text-orange-700 bg-orange-100 px-4 py-2 rounded-full">
                Active Growth
              </div>
           </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 lg:px-12 bg-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-[#0ea5e9] border border-blue-100 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">
                The Methodology
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">How Digital Marketing <span className="text-[#0ea5e9]">Propels</span> Growth</h2>
              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                We architect a complete digital ecosystem that systematically turns strangers into loyal customers.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { id: 1, title: "Traffic Ingestion", desc: "Aggressive multi-channel campaigns on Meta & Google capture high-intent traffic.", icon: <HiOutlineShare size={36} /> },
               { id: 2, title: "Precise Filtering", desc: "Our proprietary AI identifies the 5% of users most likely to convert.", icon: <FiPieChart size={36} /> },
               { id: 3, title: "Value Saturation", desc: "We establish your brand as the only logical choice with authority content.", icon: <HiOutlineDocumentText size={36} /> },
               { id: 4, title: "Final Conversion", desc: "Optimized funnels turn intent into revenue for maximum LTV.", icon: <HiOutlineSearch size={36} />, dark: true }
             ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`${s.dark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-8 rounded-[2.5rem] border shadow-xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 ${i % 2 !== 0 ? 'lg:mt-12' : ''}`}>
                   <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-lg transition-all ${s.dark ? 'bg-[#0ea5e9] text-white shadow-[#0ea5e9]/40' : 'bg-blue-50 text-[#0ea5e9] group-hover:bg-[#0ea5e9] group-hover:text-white'}`}>
                      {s.icon}
                   </div>
                   <h3 className={`text-xl font-bold mb-4 ${s.dark ? 'text-white' : 'text-slate-900'}`}>{s.id}. {s.title}</h3>
                   <p className={`${s.dark ? 'text-slate-400' : 'text-slate-500'} text-sm font-medium leading-relaxed`}>{s.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* The Roadmap */}
      <section className="bg-slate-900 py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">How We <span className="text-[#0ea5e9]">Scale</span> Your Brand</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-28">
              {[1, 2, 3, 4].map((step) => (
                <motion.div key={step} onClick={() => setActiveStep(step)} className="flex flex-col items-center group cursor-pointer">
                  <div className={`w-24 h-24 rounded-[2rem] border-2 flex items-center justify-center mb-8 relative transition-all duration-500 ${step === 4 ? 'bg-[#0ea5e9] border-white/20 shadow-lg' : 'bg-slate-800 border-slate-700 group-hover:border-[#0ea5e9]'}`}>
                    <span className="text-3xl font-black text-white italic">0{step}</span>
                  </div>
                  <h4 className="font-black text-white mb-3 text-xl tracking-tight group-hover:text-[#0ea5e9] transition-colors">{stepDetails[step].title}</h4>
                  <p className="text-slate-400 text-sm font-medium opacity-80">Click to explore phase architecture.</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-28 px-6 bg-[#fafafa] relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Precision Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
             {[
               { title: "Growth Starter", price: "₹15k", features: ["Social Media Management", "Meta Ads Setup", "2 Blog Posts", "SEO Essentials"] },
               { title: "Business Pro", price: "₹25k", features: ["YouTube Ad Strategy", "4 Blog Posts", "Advanced SEO", "Social (3 Platforms)"], popular: true },
               { title: "Enterprise Elite", price: "₹35k", features: ["Full Branding Identity", "Omni-channel Social", "8 Premium Assets", "Growth Squad"] }
             ].map((pkg, i) => (
                <div key={i} className={`rounded-[2rem] p-10 border transition-all h-full flex flex-col ${pkg.popular ? 'bg-slate-900 border-[#0ea5e9] shadow-2xl scale-105' : 'bg-white border-gray-200 shadow-md'}`}>
                   <h3 className={`font-extrabold text-2xl mb-2 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>{pkg.title}</h3>
                   <div className="mb-8">
                     <span className={`text-5xl font-extrabold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>{pkg.price}</span>
                     <span className="text-slate-400 font-medium ml-2">/mo</span>
                   </div>
                   <ul className="space-y-4 mb-10 flex-grow text-left">
                     {pkg.features.map((f, j) => (
                       <li key={j} className={`flex items-start text-sm font-medium ${pkg.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                         <span className="text-[#0ea5e9] mr-3">✓</span> {f}
                       </li>
                     ))}
                   </ul>
                   <button className={`w-full py-4 rounded-full font-bold transition-all ${pkg.popular ? 'bg-[#0ea5e9] text-white hover:bg-blue-600' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                     Deploy Growth
                   </button>
                </div>
             ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* Map Section */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
               <h2 className="text-4xl font-black text-slate-900 mb-8">Visit Our Office</h2>
               <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0ea5e9] shrink-0"><HiOutlineLocationMarker size={24} /></div>
                    <p className="text-slate-500 font-medium">9, Roy Mallick Colony, Kundubagan, Ghughudanga, South Dumdum, West Bengal 700074</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0ea5e9] shrink-0"><HiOutlinePhone size={24} /></div>
                    <p className="text-slate-500 font-medium">+91 93302 22087</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 w-full h-[400px] rounded-[2rem] overflow-hidden border shadow-inner bg-slate-50">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.952382513338!2d88.39217147954781!3d22.618253276496223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dfbf2265d6d%3A0x1779bb7dfec6f213!2sRoy%20Mallick%20Colony%2C%20Ghughudanga%2C%20South%20Dumdum%2C%20West%20Bengal%20700074!5e0!3m2!1sen!2sin!4v1776805089841!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
          <div className="max-w-6xl mx-auto bg-[#0ea5e9] rounded-[3rem] py-20 px-8 text-center text-white shadow-2xl overflow-hidden relative">
             <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to scale?</h2>
               <Link href="/contact" className="px-10 py-5 bg-[#f97316] text-white rounded-full font-bold text-xl inline-block hover:bg-orange-600 transition-all shadow-xl hover:-translate-y-1">Book a Strategy Call</Link>
             </div>
          </div>
      </section>

      {/* Step Modal */}
      <AnimatePresence>
        {activeStep && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveStep(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-6">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white rounded-3xl p-10 max-w-xl shadow-2xl relative" onClick={e => e.stopPropagation()}>
               <button onClick={() => setActiveStep(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"><HiX size={24} /></button>
               <h3 className="text-3xl font-black text-slate-900 mb-6">{stepDetails[activeStep].title}</h3>
               <p className="text-slate-600 text-lg font-medium leading-relaxed">{stepDetails[activeStep].desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeClient;
