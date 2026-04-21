'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminSignup() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success) {
      router.push('/admin/login');
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md w-full bg-slate-800 p-10 rounded-[2.5rem] border border-slate-700 shadow-2xl">
        <h2 className="text-3xl font-black text-white mb-8 text-center">Admin <span className="text-blue-500">Signup</span></h2>
        {error && <p className="text-red-400 text-sm mb-6 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input required type="text" placeholder="Username" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all" />
          <input required type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all" />
          <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg">Create Admin Account</button>
        </form>
        <p className="mt-8 text-center text-slate-400 text-sm">
          Already have an account? <Link href="/admin/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}
