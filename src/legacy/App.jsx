import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import Marketing from './pages/Marketing';
import ScrollToTop from './components/ScrollToTop';
import LeadPopup from './components/LeadPopup';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <LeadPopup />
        <div className="min-h-screen flex flex-col font-sans">
          <ParticleBackground />
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
