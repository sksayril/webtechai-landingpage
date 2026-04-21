'use client';
import { motion } from 'framer-motion';
import { 
  HiOutlineSpeakerphone, 
  HiOutlineGlobe, 
  HiOutlineCollection, 
  HiOutlineVideoCamera, 
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiCheckCircle
} from 'react-icons/hi';
import { FaFacebook, FaMeta, FaYoutube, FaGoogle } from 'react-icons/fa6';
import Link from 'next/link';

const services = [
  {
    title: "Meta & Facebook Ads",
    desc: "Targeted advertising campaigns on Facebook and Instagram to drive high-quality traffic and conversions.",
    icon: <FaMeta className="text-[#0668E1]" size={30} />,
    color: "from-blue-500/20 to-indigo-500/10",
    features: ["Custom Audience Targeting", "A/B Testing", "Pixel Integration", "Re-marketing"]
  },
  {
    title: "YouTube & Google Ads",
    desc: "Video and search ads designed to put your brand in front of the right audience at the right time.",
    icon: <FaYoutube className="text-[#FF0000]" size={30} />,
    color: "from-red-500/20 to-orange-500/10",
    features: ["Video Ad Production", "Keyword Research", "Bidding Optimization", "Performance Tracking"]
  },
  {
    title: "Social Media Handling",
    desc: "End-to-end management of your social profiles to build a loyal community and consistent brand voice.",
    icon: <HiOutlineCollection className="text-purple-500" size={30} />,
    color: "from-purple-500/20 to-pink-500/10",
    features: ["Content Calendar", "Engagement Management", "Growth Strategies", "Monthly Reporting"]
  },
  {
    title: "SEO & Blog Content",
    desc: "Authority-building SEO strategies and high-quality blog content to dominate search engine results.",
    icon: <HiOutlineGlobe className="text-emerald-500" size={30} />,
    color: "from-emerald-500/20 to-teal-500/10",
    features: ["Article Writing", "On-Page SEO", "Authority Building", "Technical Optimization"]
  },
  {
    title: "Branding Solutions",
    desc: "Creating a unique brand identity that resonates with your audience and stands out in the market.",
    icon: <HiOutlineLightningBolt className="text-amber-500" size={30} />,
    color: "from-amber-500/20 to-orange-500/10",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Market Positioning"]
  },
  {
    title: "Performance Analytics",
    desc: "Data-driven insights to measure success and continuously optimize your marketing spend.",
    icon: <HiOutlineChartBar className="text-indigo-500" size={30} />,
    color: "from-indigo-500/20 to-blue-500/10",
    features: ["ROI Tracking", "Conversion Analysis", "Custom Dashboards", "Data Mining"]
  }
];

const packages = [
  {
    name: "Growth Starter",
    price: "15,000",
    desc: "Perfect for small businesses looking to establish their digital footprint.",
    features: [
      "Social Media Management (1 Platform)",
      "Basic Facebook Ads Setup",
      "2 Blog Posts Per Month",
      "Basic SEO Optimization",
      "Monthly Performance Report"
    ],
    highlight: false,
    color: "slate"
  },
  {
    name: "Business Pro",
    price: "25,000",
    desc: "Designed for scaling brands that need aggressive multi-channel growth.",
    features: [
      "Social Media Handling (3 Platforms)",
      "Meta & Facebook Ads Management",
      "4 High-Quality Blog Posts",
      "Advanced SEO Authority",
      "YouTube Ad Strategy",
      "Weekly Strategy Updates"
    ],
    highlight: true,
    color: "blue"
  },
  {
    name: "Enterprise Elite",
    price: "35,000",
    desc: "Full-scale branding and marketing dominance for market leaders.",
    features: [
      "Omni-channel Social Management",
      "Global Meta & YouTube Ads",
      "Elite Content Marketing (8 Posts)",
      "Full Branding & Identity Suite",
      "Dedicated Account Manager",
      "Daily Performance Monitoring"
    ],
    highlight: false,
    color: "indigo"
  }
];

const MarketingClient = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen relative overflow-x-hidden font-sans pt-20">
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#0ea5e9]/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-6 tracking-widest uppercase shadow-sm">
              Digital Marketing Mastery
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
              Scale Your Brand with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-blue-600">Precision Solutions</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed mb-12">
              From Meta Ads to SEO-driven content, we deploy high-performance strategies that transform your digital presence into a conversion engine.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#packages" className="px-10 py-4 bg-[#0ea5e9] text-white rounded-full font-bold shadow-lg hover:bg-[#0284c7] hover:-translate-y-1 transition-all">
                View Packages
              </a>
              <Link href="/contact" className="px-10 py-4 bg-white text-slate-800 border-2 border-slate-100 rounded-full font-bold hover:bg-slate-50 hover:-translate-y-1 transition-all">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Marketing Ecosystem</h2>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to capture attention, build authority, and drive exponential growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#0ea5e9] transition-colors">{service.title}</h3>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed font-medium">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="py-32 px-6 lg:px-12 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Investment Tiers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-10 rounded-[3rem] border transition-all h-full flex flex-col ${
                  pkg.highlight ? 'bg-slate-800 border-[#0ea5e9] shadow-2xl scale-105 z-20' : 'bg-slate-800/40 border-slate-700'
                }`}
              >
                <h3 className="text-2xl font-extrabold text-white mb-2">{pkg.name}</h3>
                <div className="mb-10 flex items-baseline">
                  <span className="text-5xl font-black text-white">₹{pkg.price}</span>
                  <span className="text-slate-400 font-bold ml-2 text-sm uppercase">/ Mo</span>
                </div>
                <div className="space-y-5 mb-12 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <HiCheckCircle className="text-[#0ea5e9] shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-300 text-sm font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className={`w-full py-5 rounded-2xl font-bold text-center transition-all ${pkg.highlight ? 'bg-[#0ea5e9] text-white hover:bg-blue-600' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-[#0ea5e9] to-indigo-600 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to Dominate Your Market?</h2>
          <Link href="/contact" className="inline-flex px-12 py-5 bg-white text-[#0ea5e9] rounded-2xl font-black text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
            Book My Call &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MarketingClient;
