'use client';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  { name: 'Alex Vance', role: 'Chief Executive Officer', image: 'bg-gradient-to-br from-[#0f172a] to-[#334155]', bio: 'Former Head of Growth at major tech enterprise, spearheading WebTechAI\'s vision for scientific scale.' },
  { name: 'Dr. Morgan Chen', role: 'Head of AI Architecture', image: 'bg-gradient-to-br from-[#0ea5e9] to-[#2563eb]', bio: 'Ph.D. in Machine Learning. Drives the proprietary predictive algorithmic models behind our growth engines.' },
  { name: 'Jordan Rices', role: 'VP of Performance', image: 'bg-gradient-to-br from-[#f97316] to-[#ea580c]', bio: 'Mastermind behind over $50M in highly profitable, multi-channel ad spend across global markets.' },
  { name: 'Samantha Lee', role: 'Director of SEO', image: 'bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9]', bio: 'Pioneered advanced semantic mapping techniques that have repeatedly outranked Fortune 500 corporations.' }
];

const historyMilestones = [
  { year: '2019', title: 'The Genesis', desc: 'WebTechAI was founded in a small tech-hub with a singular vision: to treat digital marketing as an algorithmic science rather than guesswork.' },
  { year: '2021', title: 'Performance Breakthrough', desc: 'Developed our proprietary tracking architecture, allowing 100% attribution for multi-channel ad spend, massively reducing wasted budget.' },
  { year: '2023', title: 'The AI Integration', desc: 'Fully integrated Generative AI into our content and optimization workflows, boosting client ROI by a record-breaking 250%.' },
  { year: '2024', title: 'Global Precision', desc: 'Expanded our operations internationally, managing eight-figure ad budgets and enterprise SEO pipelines globally.' }
];

const AboutClient = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#fafafa] relative z-10 font-sans">
      
      {/* 1. Hero & Mission Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-6 tracking-widest uppercase shadow-sm">
            Our Origin Story
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.05]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0ea5e9] to-[#3b82f6]">Ecosystems</span>
          </h1>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Founded with the vision to revolutionize how businesses interact with the digital world, WebTechAI combines cutting-edge AI technologies with bespoke design systems. We don't just build websites; we architect high-converting digital ecosystems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white p-10 lg:p-14 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0ea5e9]/5 rounded-full blur-[80px] -mr-40 -mt-40 pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="bg-slate-50 rounded-[2rem] p-3 relative overflow-hidden h-full min-h-[400px] border border-gray-100 shadow-lg flex">
              <div className="w-full h-full min-h-[400px] bg-white rounded-3xl relative overflow-hidden shadow-inner isolate">
                <img 
                  src="/images/about_ecosystem.png" 
                  alt="Digital Ecosystem Architecture" 
                  className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative z-10"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Data-Driven Precision</h2>
            <p className="text-slate-500 mb-8 leading-relaxed text-lg font-medium">
              We employ a forward-thinking development and marketing lifecycle. From initial consulting to mass deployment, our team of experts ensures that your strategy is performant, heavily SEO-optimized, and statistically guaranteed to convert.
            </p>
            <p className="text-slate-500 leading-relaxed text-lg font-medium">
              The deep sky blue in our branding represents the limitless potential of cloud processing and the vast horizon of algorithmic innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. History Timeline Section */}
      <div className="bg-white py-32 border-y border-gray-100 shadow-sm relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">The Evolution of <span className="text-[#0ea5e9]">Precision</span></h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
               <div className="absolute left-[20px] md:left-1/2 md:-ml-[2px] top-4 bottom-4 w-1 bg-gradient-to-b from-blue-100 via-[#0ea5e9] to-blue-100 rounded-full"></div>
               
               {historyMilestones.map((milestone, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.5, delay: idx * 0.15 }}
                   className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                 >
                   <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#0ea5e9] z-20"></div>
                   <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                     <div className="bg-[#fafafa] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                       <div className="text-[#0ea5e9] font-black text-xl mb-2">{milestone.year}</div>
                       <h3 className="text-2xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                       <p className="text-slate-500 font-medium">{milestone.desc}</p>
                     </div>
                   </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </div>

      {/* 3. The Team Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 pb-40">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">The Architects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {teamMembers.map((member, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md hover:-translate-y-2 transition-all flex flex-col group"
             >
               <div className={`w-full h-48 rounded-2xl ${member.image} mb-6 relative overflow-hidden`}></div>
               <h3 className="font-extrabold text-slate-900 text-xl">{member.name}</h3>
               <p className="text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">{member.bio}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default AboutClient;
