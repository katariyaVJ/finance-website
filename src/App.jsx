import React, { useEffect, useMemo, lazy, Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './components/ui/WhatsAppIcon';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import Home from './pages/Home';

// Lazy-load all non-critical pages to reduce initial bundle size
const Services      = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const About         = lazy(() => import('./pages/About'));
const Contact       = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound      = lazy(() => import('./pages/NotFound'));

import { servicesData } from './data/services';

// ─────────────────────────────────────────────────────────────
// ScrollToTop — resets scroll position on every route change
// ─────────────────────────────────────────────────────────────
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
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

// ─────────────────────────────────────────────────────────────
// Fallback spinner — shown while lazy pages load
// ─────────────────────────────────────────────────────────────
const PageLoader = (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

// ─────────────────────────────────────────────────────────────
// FloatingWhatsApp — memoized to avoid re-render on location change
// ─────────────────────────────────────────────────────────────
const FloatingWhatsApp = memo(function FloatingWhatsApp({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 lg:bottom-6 lg:right-6 p-3.5 bg-[#25D366] hover:bg-[#1ebd57] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-rotate-6 z-40 flex items-center justify-center"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
});

// ─────────────────────────────────────────────────────────────
// MobileBar — memoized sticky bottom bar for mobile users
// ─────────────────────────────────────────────────────────────
const MobileBar = memo(function MobileBar({ whatsappUrl }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full h-14 bg-white grid grid-cols-2 z-40 shadow-2xl">
      <a
        href="tel:7600049383"
        className="flex items-center justify-center bg-gold hover:bg-gold-hover text-dark font-bold text-sm uppercase tracking-wider transition-colors duration-200"
        aria-label="Call HK Finance"
      >
        <Phone className="h-4 w-4 mr-2" />
        Call Now
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#25D366] hover:bg-[#1ebd57] text-white font-bold text-sm uppercase tracking-wider transition-colors duration-200"
        aria-label="WhatsApp HK Finance"
      >
        <WhatsAppIcon className="h-4.5 w-4.5 mr-2" />
        WhatsApp
      </a>
    </div>
  );
});

// ─────────────────────────────────────────────────────────────
// SEO meta title map — defined outside component to avoid recreation
// ─────────────────────────────────────────────────────────────
const STATIC_META = {
  '/': {
    title: 'HK Finance | Company Incorporation, GST & Tax Solutions',
    desc:  'Fastest corporate incorporation, tax representations, GST return filings, and outsourced bookkeeping services in India. Trusted by 5,000+ businesses.'
  },
  '/services': {
    title: 'Services Directory | HK Finance',
    desc:  'Explore our 80+ online business services including company registration, GST return filing, trademark registration, ITR, and bookkeeping.'
  },
  '/about': {
    title: 'About Us | HK Finance',
    desc:  'Learn about HK Finance. Our team of expert CAs, CSs, and corporate consultants provide top-tier compliance and tax solutions across India.'
  },
  '/contact': {
    title: 'Contact CA / Expert | HK Finance',
    desc:  'Get in touch with HK Finance. Call our support desk, request a callback, or visit our offices in Surat, Ankleshwar, Vadodara, and Ahmedabad.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | HK Finance',
    desc:  'Read our Privacy Policy. HK Finance ensures high security and strict confidentiality for all client data and corporate filings.'
  }
};

// ─────────────────────────────────────────────────────────────
// MainLayout — Navbar + Footer + floating actions wrapper
// ─────────────────────────────────────────────────────────────
function MainLayout() {
  const location = useLocation();

  // Dynamic SEO — runs on every route change
  useEffect(() => {
    const path = location.pathname;
    let title = 'HK Finance | Company Incorporation, GST & Tax Solutions';
    let description = 'Your trusted partner for corporate incorporation, tax representations, GST return filings, and outsourced bookkeeping across India.';

    if (STATIC_META[path]) {
      title       = STATIC_META[path].title;
      description = STATIC_META[path].desc;
    } else if (path.startsWith('/services/')) {
      const slug    = path.substring(10);
      const service = servicesData.find((s) => s.slug === slug);
      if (service) {
        title       = `${service.name} Services | HK Finance`;
        description = service.description || `Get expert assistance for ${service.name}. HK Finance provides corporate incorporation, GST return filings, and tax consulting in India.`;
      } else {
        title       = 'Service Not Found | HK Finance';
        description = 'The requested service details could not be found. Explore our active services directory.';
      }
    }

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }, [location.pathname]);

  // Memoize WhatsApp URL to avoid re-computation on every render
  const whatsappUrl = useMemo(() => {
    const path = location.pathname;
    if (path.startsWith('/services/')) {
      const slug    = path.substring(10);
      const service = servicesData.find((s) => s.slug === slug);
      if (service) {
        return `https://wa.me/917600049383?text=${encodeURIComponent(`Hi HK Finance, I'd like to enquire about ${service.name}.`)}`;
      }
    }
    return "https://wa.me/917600049383?text=Hi%20HK%20Finance%2C%20I'd%20like%20to%20enquire%20about%20your%20services.";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white select-text selection:bg-primary-light selection:text-primary">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Page Content — rendered by nested route */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Floating WhatsApp button */}
      <FloatingWhatsApp url={whatsappUrl} />

      {/* 5. Mobile sticky bottom call-to-action bar */}
      <MobileBar whatsappUrl={whatsappUrl} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// App — root component with router + Suspense boundary
// ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={PageLoader}>
        <Routes>
          {/* Pages WITH Navbar + Footer */}
          <Route element={<MainLayout />}>
            <Route path="/"               element={<Home />} />
            <Route path="/services"       element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/about"          element={<About />} />
            <Route path="/contact"        element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>

          {/* 404 — no Navbar, no Footer */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
