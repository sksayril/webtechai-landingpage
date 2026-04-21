'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success) {
      router.push('/admin/dashboard');
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6 text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)] -z-10"></div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full bg-slate-800/50 backdrop-blur-xl p-10 rounded-[3rem] border border-slate-700/50 shadow-2xl">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-600/20">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain invert" />
        </div>
        <h2 className="text-3xl font-black mb-2 text-center">Auth <span className="text-blue-500">Gateway</span></h2>
        <p className="text-slate-400 text-sm text-center mb-10">Secure access to WebTechAI Control Center</p>
        
        {error && <p className="text-red-400 text-xs font-bold bg-red-400/10 p-3 rounded-xl mb-6 text-center border border-red-400/20">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-4">Username</label>
            <input required type="text" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all font-medium" placeholder="admin_webtech" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-4">Password</label>
            <input required type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all font-medium" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1">Initialize Login</button>
        </form>
        
        <p className="mt-10 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
          New Admin? <Link href="/admin/signup" className="text-blue-500 hover:text-blue-400">Request Access</Link>
        </p>
      </motion.div>
    </div>
  );
}
