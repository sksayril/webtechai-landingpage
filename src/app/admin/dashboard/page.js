'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { HiOutlineDatabase, HiOutlineUserGroup, HiOutlineMail, HiOutlineLogout, HiOutlineChartBar, HiOutlineClock } from 'react-icons/hi';

export default function AdminDashboard() {
  const [data, setData] = useState({ leads: [], contacts: [] });
  const [activeTab, setActiveTab] = useState('leads');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/dashboard/data');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const json = await res.json();
      if (json.success) {
        setData(json);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    // Basic logout by deleting cookie
    document.cookie = "admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex font-sans">
      
      {/* Sidebar */}
      <aside className="w-72 bg-[#121214] border-r border-white/5 flex flex-col p-8 hidden lg:flex">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center p-2">
            <img src="/logo.png" className="invert object-contain" alt="Logo" />
          </div>
          <span className="font-black text-xl tracking-tight">CONTROL</span>
        </div>

        <nav className="flex-grow space-y-2">
          <button 
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'leads' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
          >
            <HiOutlineUserGroup size={20} /> Popup Leads
          </button>
          <button 
            onClick={() => setActiveTab('contacts')}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'contacts' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
          >
            <HiOutlineMail size={20} /> Contact Inbox
          </button>
        </nav>

        <button onClick={handleLogout} className="flex items-center gap-4 px-6 py-4 text-slate-500 hover:text-red-400 font-bold transition-all mt-auto border-t border-white/5 pt-8">
          <HiOutlineLogout size={20} /> Terminate Session
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">WebTechAI <span className="text-blue-500">Intelligence</span></h1>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em]">{activeTab === 'leads' ? 'Lead Capture Management' : 'Global Communications Inbox'}</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl glass-panel">
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-1">Total Signals</span>
                <span className="text-2xl font-black">{data.leads.length + data.contacts.length}</span>
             </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2rem] shadow-xl shadow-blue-900/20">
              <HiOutlineChartBar size={32} className="mb-4 opacity-70" />
              <h3 className="text-sm font-bold opacity-70 mb-1">Lead Conversion Rate</h3>
              <p className="text-4xl font-black">24.8%</p>
           </div>
           <div className="bg-[#121214] border border-white/5 p-8 rounded-[2rem]">
              <HiOutlineClock size={32} className="mb-4 text-blue-500" />
              <h3 className="text-sm font-bold text-slate-500 mb-1">Avg Response Time</h3>
              <p className="text-4xl font-black">2.4h</p>
           </div>
           <div className="bg-[#121214] border border-white/5 p-8 rounded-[2rem]">
              <HiOutlineDatabase size={32} className="mb-4 text-blue-500" />
              <h3 className="text-sm font-bold text-slate-500 mb-1">Inflow Velocity</h3>
              <p className="text-4xl font-black">High</p>
           </div>
        </div>

        {/* Data Table */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#121214] border border-white/5 rounded-[2.5rem] overflow-hidden"
        >
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-[#161619]">
              <h2 className="text-xl font-bold">{activeTab === 'leads' ? 'Recent Leads' : 'Inbound Messages'}</h2>
              <div className="px-4 py-1.5 bg-blue-500/10 text-blue-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-500/20">Live Feed</div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 text-slate-500">
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Identify</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Connect</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Signal Content</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {(activeTab === 'leads' ? data.leads : data.contacts).map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6">
                      <div className="font-extrabold text-slate-200 group-hover:text-blue-400 transition-colors">{item.name || `${item.firstName} ${item.lastName}`}</div>
                      {activeTab === 'leads' && <div className="text-[10px] text-slate-600 font-bold uppercase mt-1">Lead Node</div>}
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-sm font-medium text-slate-400">{item.email}</div>
                      <div className="text-xs text-slate-600 mt-1">{item.phone || 'N/A'}</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-sm text-slate-400 max-w-xs truncate font-medium">{item.message || 'No custom brief provided.'}</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-xs font-bold text-slate-600 uppercase tracking-tighter">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                  </tr>
                ))}
                {(activeTab === 'leads' ? data.leads : data.contacts).length === 0 && (
                   <tr>
                     <td colSpan="4" className="px-8 py-20 text-center text-slate-600 font-bold uppercase tracking-widest">No Signals Detected</td>
                   </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
