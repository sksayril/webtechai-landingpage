'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ContactClient = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-32 min-h-screen bg-[#fafafa] relative z-10 font-sans overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-[#0ea5e9] border border-blue-100 rounded-full text-xs font-bold mb-6 tracking-widest uppercase shadow-sm">
              Initiate Contact
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 text-slate-900 leading-[1.05]">
              Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0ea5e9] to-indigo-600">The Future</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Whether you need to overhaul your digital architecture or scale your global paid media, our elite strategists are ready as your growth partners.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-md relative overflow-hidden">
            {isSubmitted ? (
               <div className="py-20 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle size={32} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-500 font-medium">We have received your brief and will get back to you shortly.</p>
               </div>
            ) : (
              <>
                <h2 className="text-3xl font-extrabold mb-8 text-slate-900 tracking-tight">Secure a Strategy Session</h2>
                <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 uppercase">First Name</label>
                      <input required type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] outline-none" placeholder="Alexander" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 uppercase">Last Name</label>
                      <input required type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] outline-none" placeholder="Vance" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 uppercase">Corporate Email</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] outline-none" placeholder="alex@enterprise.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 uppercase">Project Brief</label>
                    <textarea required rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] outline-none resize-none" placeholder="We are looking to scale our digital infrastructure..."></textarea>
                  </div>
                  <button type="submit" disabled={loading} className="w-full py-5 bg-[#0ea5e9] text-white font-extrabold text-lg rounded-xl shadow-lg hover:bg-[#0284c7] transition-all flex justify-center items-center gap-3 disabled:opacity-50">
                    {loading ? 'Sending...' : 'Initialize Transmission'} <FaPaperPlane />
                  </button>
                </form>
              </>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-md h-full min-h-[400px] overflow-hidden flex flex-col">
              <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-slate-900">Headquarters</h3>
                <HiOutlineLocationMarker size={24} className="text-[#0ea5e9]" />
              </div>
              <div className="relative flex-grow">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.952382513338!2d88.39217147954781!3d22.618253276496223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dfbf2265d6d%3A0x1779bb7dfec6f213!2sRoy%20Mallick%20Colony%2C%20Ghughudanga%2C%20South%20Dumdum%2C%20West%20Bengal%20700074!5e0!3m2!1sen!2sin!4v1776805089841!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 flex items-center gap-6 shadow-sm">
               <div className="w-12 h-12 bg-blue-50 text-[#0ea5e9] rounded-xl flex items-center justify-center shrink-0"><HiOutlineMail size={24} /></div>
               <p className="text-slate-900 font-bold break-all">webtechaisolution@gmail.com</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 flex items-center gap-6 shadow-sm">
               <div className="w-12 h-12 bg-blue-50 text-[#0ea5e9] rounded-xl flex items-center justify-center shrink-0"><HiOutlinePhone size={18} /></div>
               <p className="text-slate-900 font-bold tracking-tighter text-sm">+91 93302 22087</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactClient;
