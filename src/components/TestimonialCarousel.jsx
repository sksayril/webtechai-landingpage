'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "WebTechAI didn't just bring us leads; they brought us the right leads. Our customer acquisition cost dropped by 48% in the first quarter alone.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow Global",
    image: "/images/meeting_team.png"
  },
  {
    id: 2,
    quote: "The most transparent agency I've ever worked with. Their dashboards provide real-time clarity on where every dollar is going.",
    author: "Marcus Thorne",
    role: "Founder, ApexCommerce",
    image: "/images/hero_team.png"
  },
  {
    id: 3,
    quote: "Their specialized precision squads overhauled our entire digital architecture. We scaled our organic traffic by 300% in under a year.",
    author: "Elena Rodriguez",
    role: "VP Marketing, QuantumAI",
    image: "/images/meeting_team.png"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // changes every 5 seconds for better readability

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-12">Built by Trust</h2>
        
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative"
            >
              <div className="text-5xl font-serif text-[#0ea5e9] absolute top-4 left-6 leading-none select-none">"</div>
              <p className="text-slate-700 font-medium italic text-lg leading-relaxed pt-6 mb-8 relative z-10 min-h-[120px]">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0 border border-slate-300 flex items-center justify-center text-slate-500 font-bold">
                   {testimonials[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{testimonials[currentIndex].author}</div>
                  <div className="text-xs text-[#0ea5e9] font-medium">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-8 absolute -bottom-10 left-0">
            {testimonials.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#0ea5e9] w-8' : 'bg-slate-200'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-full w-full mt-10 lg:mt-0">
         <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-full min-h-[400px] lg:min-h-[500px]">
           <AnimatePresence mode="wait">
             <motion.img 
               key={currentIndex}
               initial={{ opacity: 0, scale: 1.05 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8 }}
               src={testimonials[currentIndex].image} 
               alt="Team meeting" 
               className="absolute inset-0 w-full h-full object-cover object-center" 
             />
           </AnimatePresence>
           <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
