import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { servicesData } from './data/services';

// Scroll to top on navigation change helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Delay slightly to ensure DOM is fully rendered
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function MainLayout() {
  const location = useLocation();

  // Custom context-specific WhatsApp text
  let whatsappUrl = "https://wa.me/917600049383?text=Hi%20HK%20Finance,%20I%27d%20like%20to%20enquire%20about%20your%20services.";
  if (location.pathname.startsWith('/services/')) {
    const slug = location.pathname.substring(10);
    const service = servicesData.find((s) => s.slug === slug);
    if (service) {
      whatsappUrl = `https://wa.me/917600049383?text=Hi%20HK%20Finance,%20I%27d%20like%20to%20enquire%20about%20${encodeURIComponent(service.name)}.`;
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg-page select-text selection:bg-primary-light selection:text-primary">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Page Content View */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      {/* 4. Global Footer */}
      <Footer />

      {/* 5. Floating Desktop & Mobile WhatsApp CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 sm:bottom-6 sm:right-6 p-3.5 bg-[#25D366] hover:bg-[#1ebd57] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-rotate-6 z-40 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="h-6 w-6 stroke-[2]" />
      </a>

      {/* 6. Mobile-Specific Sticky Bottom Action Bar (visible on sm/md viewports) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full h-14 bg-white grid grid-cols-2 z-40 shadow-2xl">
        <a
          href="tel:7600049383"
          className="flex items-center justify-center bg-gold hover:bg-gold-hover text-dark font-bold text-sm uppercase tracking-wider transition-colors duration-200"
        >
          <Phone className="h-4 w-4 mr-2" />
          Call Now
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#25D366] hover:bg-[#1ebd57] text-white font-bold text-sm uppercase tracking-wider transition-colors duration-200"
        >
          <MessageSquare className="h-4.5 w-4.5 mr-2" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout />
    </Router>
  );
}
