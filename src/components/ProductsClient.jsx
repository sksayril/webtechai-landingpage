'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineDatabase, HiOutlineCloud, HiOutlineChartSquareBar, HiOutlineLightningBolt, HiOutlineSearchCircle, HiOutlineTemplate } from 'react-icons/hi';

const products = [
  {
    id: 1,
    title: "WebTechAI NeuralNet",
    category: "AI & Analytics",
    description: "An advanced predictive analytics tool designed for enterprise data forecasting and trend analysis.",
    icon: <HiOutlineChartSquareBar size={32} className="text-[#0ea5e9]" />,
    image: "/images/neuralnet.png",
    fallbackImage: "bg-gradient-to-br from-slate-800 to-slate-900",
    features: ["Real-time Processing", "AutoML Integration", "Custom Dashboards"]
  },
  {
    id: 2,
    title: "CloudVault Sync",
    category: "Infrastructure",
    description: "A highly secure and decentralized cloud storage solution tailored specifically for global IT firms.",
    icon: <HiOutlineCloud size={32} className="text-[#0ea5e9]" />,
    image: "/images/cloudsync.png",
    fallbackImage: "bg-gradient-to-br from-blue-900 to-indigo-900",
    features: ["End-to-End Encryption", "Multi-region Replication", "API Access"]
  },
  {
    id: 3,
    title: "DataStream Pro",
    category: "Data Engineering",
    description: "A comprehensive ETL processing infrastructure for managing large scale data lakes with sub-second latency.",
    icon: <HiOutlineDatabase size={32} className="text-[#0ea5e9]" />,
    image: "/images/datastream.png",
    fallbackImage: "bg-gradient-to-br from-teal-900 to-emerald-900",
    features: ["Visual Pipeline Builder", "Zero Downtime Deployments", "Schema Validations"]
  },
  {
    id: 4,
    title: "Precision AdEngine",
    category: "Marketing Automation",
    description: "Machine-learning powered bidding engine that optimizes PPC spend automatically across 14 ad networks.",
    icon: <HiOutlineLightningBolt size={32} className="text-[#0ea5e9]" />,
    image: "/images/hero_team.png", 
    fallbackImage: "bg-gradient-to-br from-orange-900 to-red-900",
    features: ["Cross-Network Algorithms", "Auto-Budget Allocation", "Live Conversion Tracking"]
  },
  {
    id: 5,
    title: "OmniSearch Crawler",
    category: "SEO & Content",
    description: "An enterprise technical SEO spider that continuously monitors for semantic gaps and vital core web vitals.",
    icon: <HiOutlineSearchCircle size={32} className="text-[#0ea5e9]" />,
    image: "/images/meeting_team.png",
    fallbackImage: "bg-gradient-to-br from-purple-900 to-fuchsia-900",
    features: ["JavaScript Rendering", "Semantic Void Mapping", "Automated Auditing"]
  },
  {
    id: 6,
    title: "Conversion Architect",
    category: "Development",
    description: "Headless UI toolkit for building sub-second loading, high-converting digital storefronts.",
    icon: <HiOutlineTemplate size={32} className="text-[#0ea5e9]" />,
    image: "/images/about_ecosystem.png",
    fallbackImage: "bg-gradient-to-br from-sky-900 to-blue-900",
    features: ["Component Library", "A/B Testing Native", "Edge Caching"]
  }
];

const ProductsClient = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "AI & Analytics", "Infrastructure", "Marketing Automation", "SEO & Content", "Development", "Data Engineering"];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-32 min-h-screen bg-[#fafafa] relative z-10 font-sans">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-white text-[#0ea5e9] border border-blue-100 rounded-full text-xs font-bold mb-6 tracking-widest uppercase shadow-sm">
              Proprietary Technology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-slate-900">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6]">Ecosystem</span> Suite
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Explore our proprietary suite of high-performance tools engineered specifically for scaling hyper-growth organizations.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-slate-900 text-white shadow-lg scale-105' 
                  : 'bg-white border border-gray-200 text-slate-500 hover:bg-gray-50 hover:text-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 40, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20, delay: index * 0.05 }}
                className="bg-white rounded-3xl border border-gray-100 flex flex-col h-full shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 relative"
              >
                <div className={`relative h-56 w-full ${product.fallbackImage}`}>
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-2xl shadow-lg">{product.icon}</div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black mb-3 text-slate-900 tracking-tight group-hover:text-[#0ea5e9] transition-colors">{product.title}</h3>
                  <p className="text-slate-500 text-sm mb-8 flex-grow font-medium leading-relaxed">{product.description}</p>
                   <div className="mt-auto bg-slate-50 rounded-2xl p-5">
                    <h4 className="text-xs font-bold text-slate-800 mb-3 uppercase tracking-widest">Core Features</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-sm text-slate-600 font-medium flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsClient;
