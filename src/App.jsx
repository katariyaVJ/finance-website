import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './components/ui/WhatsAppIcon';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import Home from './pages/Home';
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));
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

// Layout wrapper — renders Navbar + Footer + child page via <Outlet>
function MainLayout() {
  const location = useLocation();

  // Dynamic SEO Title and Meta Description handling
  useEffect(() => {
    let title = "HK Finance | Company Incorporation, GST & Tax Solutions";
    let description = "Your trusted partner for corporate incorporation, tax representations, GST return filings, and outsourced bookkeeping across India.";

    const path = location.pathname;

    if (path === '/') {
      title = "HK Finance | Company Incorporation, GST & Tax Solutions";
      description = "Fastest corporate incorporation, tax representations, GST return filings, and outsourced bookkeeping services in India. Trusted by 10k+ businesses.";
    } else if (path === '/services') {
      title = "Services Directory | HK Finance";
      description = "Explore our 80+ online business services including company registration, GST return filing, trademark registration, ITR, and bookkeeping.";
    } else if (path.startsWith('/services/')) {
      const slug = path.substring(10);
      const service = servicesData.find((s) => s.slug === slug);
      if (service) {
        title = `${service.name} Services | HK Finance`;
        description = service.description || `Get expert assistance for ${service.name}. HK Finance provides corporate incorporation, GST return filings, and tax consulting in India.`;
      } else {
        title = "Service Not Found | HK Finance";
        description = "The requested service details could not be found. Explore our active services directory.";
      }
    } else if (path === '/about') {
      title = "About Us | HK Finance";
      description = "Learn about HK Finance. Our team of expert CAs, CSs, and corporate consultants provide top-tier compliance and tax solutions across India.";
    } else if (path === '/contact') {
      title = "Contact CA / Expert | HK Finance";
      description = "Get in touch with HK Finance. Call our support desk, request a callback, or visit our offices in Surat, Ahmedabad, and Vadodara.";
    } else if (path === '/privacy-policy') {
      title = "Privacy Policy | HK Finance";
      description = "Read our Privacy Policy. HK Finance ensures high security and strict confidentiality for all client data and corporate filings.";
    }

    document.title = title;

    // Update dynamic meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [location]);

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

      {/* 2. Page Content — rendered by nested route */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Floating Desktop & Mobile WhatsApp CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 lg:bottom-6 lg:right-6 p-3.5 bg-[#25D366] hover:bg-[#1ebd57] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-rotate-6 z-40 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>

      {/* 5. Mobile-Specific Sticky Bottom Action Bar (visible on sm/md viewports) */}
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
          <WhatsAppIcon className="h-4.5 w-4.5 mr-2" />
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
      <Suspense fallback={
        <div className="min-h-screen bg-bg-page flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Routes>
          {/* Pages WITH Navbar + Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>

          {/* 404 — no Navbar, no Footer */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
