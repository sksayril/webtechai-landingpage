'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiCheckCircle } from 'react-icons/hi';

const LeadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const hasSubmitted = localStorage.getItem('webtechai_lead_submitted');
    if (!hasSubmitted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000); // Show after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        localStorage.setItem('webtechai_lead_submitted', 'true');
        setIsSubmitted(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          ></motion.div>

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            {/* Design Element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-10"
            >
              <HiX size={20} />
            </button>

            <div className="p-8 md:p-12 relative z-10">
              {!isSubmitted ? (
                <>
                  <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-[#0ea5e9] rounded-full text-[10px] font-bold mb-6 tracking-widest uppercase border border-blue-100">
                    Priority Access
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Scale Your <span className="text-[#0ea5e9]">Revenue</span></h2>
                  <p className="text-slate-500 font-medium text-sm mb-8">
                    Get a free personalized digital growth roadmap for your business. Limited spots available.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="group">
                      <input
                        required
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        required
                        type="email"
                        placeholder="Work Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all"
                      />
                      <input
                        required
                        type="tel"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all"
                      />
                    </div>
                    <textarea
                      placeholder="Tell us about your goals..."
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] transition-all resize-none"
                    ></textarea>

                    <button
                      type="submit"
                      className="w-full py-5 bg-[#0ea5e9] text-white font-black text-lg rounded-2xl shadow-[0_10px_25px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_35px_rgba(14,165,233,0.4)] hover:-translate-y-1 transition-all duration-300"
                    >
                      Get My Free Roadmap →
                    </button>
                    <p className="text-center text-[10px] text-slate-400 font-medium pt-2">
                       We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-20 flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/30"
                  >
                    <HiCheckCircle size={40} />
                  </motion.div>
                  <h2 className="text-3xl font-black text-slate-900 mb-3">Transmission Received!</h2>
                  <p className="text-slate-500 font-medium">
                    Our strategists are analyzing your data. We'll be in touch within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup;
