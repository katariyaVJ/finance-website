import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Award, Building, FileSpreadsheet, Receipt, Calculator, FileCheck, ShieldAlert, Scale, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { serviceCategories, getServicesByCategory } from '../../data/services';

const mainServices = [
  { name: "Private Limited Company", slug: "pvt-ltd-registration", desc: "Register a Pvt Ltd company quickly with limited liability." },
  { name: "LLP Registration", slug: "llp-registration", desc: "Form a Limited Liability Partnership with lower compliance." },
  { name: "GST Return Filing", slug: "gst-return-filing", desc: "Ensure error-free GSTR-1 & 3B return filings on time." },
  { name: "Income Tax Return", slug: "itr-filing", desc: "File ITR-1 to ITR-7 accurately and maximize your tax refunds." },
  { name: "Trademark Registration", slug: "trademark-registration", desc: "Protect your brand name, logo, and secure the TM symbol." },
  { name: "FSSAI Food License", slug: "fssai-license", desc: "Get food registration/license for manufacture or trading." },
  { name: "Shop & Establishment", slug: "gumasta-license", desc: "Obtain Gumasta license to legalise commercial premises." },
  { name: "Bookkeeping Services", slug: "bookkeeping-services", desc: "Maintain daily sales, purchases, and bank ledger entries." },
  { name: "MSME Udyam Registration", slug: "msme-registration", desc: "Secure interest rate benefits and collateral-free loan access." }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null);
  const [mobileActiveSubCategory, setMobileActiveSubCategory] = useState(null);
  const location = useLocation();
  const megaMenuRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveMega(false);
    setMobileActiveCategory(null);
    setMobileActiveSubCategory(null);
  }, [location]);

  // Track scroll position to change background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setActiveMega(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Category Icon Map Helper
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Building': return <Building className="h-5 w-5" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="h-5 w-5" />;
      case 'Receipt': return <Receipt className="h-5 w-5" />;
      case 'Calculator': return <Calculator className="h-5 w-5" />;
      case 'Award': return <Award className="h-5 w-5" />;
      case 'FileCheck': return <FileCheck className="h-5 w-5" />;
      case 'ShieldAlert': return <ShieldAlert className="h-5 w-5" />;
      case 'Scale': return <Scale className="h-5 w-5" />;
      default: return <Building className="h-5 w-5" />;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-sm py-3' 
            : 'bg-white/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <span className="text-xl font-extrabold text-primary hover:text-[#1a4724] transition-colors font-display tracking-tight leading-none">
              HK FINANCE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-semibold relative py-1 hover:text-primary transition-colors group/nav ${
                location.pathname === '/' ? 'text-primary' : 'text-text-muted'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 ${location.pathname === '/' ? 'scale-x-100' : ''}`} />
            </Link>
            
            {/* Mega Dropdown Active Trigger */}
            <div 
              className="relative group" 
              ref={megaMenuRef}
              onMouseEnter={() => setActiveMega(true)}
              onMouseLeave={() => setActiveMega(false)}
            >
              <Link
                to="/services"
                onClick={() => setActiveMega(false)}
                className={`flex items-center text-sm font-semibold relative py-1 hover:text-primary transition-colors group/nav focus:outline-none ${
                  location.pathname.startsWith('/services') ? 'text-primary' : 'text-text-muted'
                }`}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeMega ? 'rotate-180 text-primary' : ''}`} />
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 ${location.pathname.startsWith('/services') ? 'scale-x-100' : ''}`} />
              </Link>
            </div>

            <Link 
              to="/about" 
              className={`text-sm font-semibold relative py-1 hover:text-primary transition-colors group/nav ${
                location.pathname === '/about' ? 'text-primary' : 'text-text-muted'
              }`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 ${location.pathname === '/about' ? 'scale-x-100' : ''}`} />
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-semibold relative py-1 hover:text-primary transition-colors group/nav ${
                location.pathname === '/contact' ? 'text-primary' : 'text-text-muted'
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 ${location.pathname === '/contact' ? 'scale-x-100' : ''}`} />
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Button 
              label="Consult Now" 
              variant="gold" 
              size="md" 
              href="/contact" 
            />
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-dark hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* Mega Menu Overlay (Desktop) */}
        <AnimatePresence>
          {activeMega && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 w-full bg-white shadow-xl z-50 overflow-y-auto max-h-[85vh] no-scrollbar"
              onMouseEnter={() => setActiveMega(true)}
              onMouseLeave={() => setActiveMega(false)}
            >
              <div className="max-w-6xl mx-auto px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mainServices.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setActiveMega(false)}
                      className="flex flex-col p-4 bg-bg-page/50 hover:bg-primary/5 rounded-xl transition-all duration-300 group/item text-left"
                    >
                      <span className="font-extrabold text-sm text-text-dark group-hover/item:text-primary transition-colors">
                        {service.name}
                      </span>
                      <span className="text-xs text-text-muted mt-1 leading-relaxed">
                        {service.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Bottom footer inside mega dropdown */}
              <div className="bg-primary-light/40 py-4 px-8">
                <div className="max-w-6xl mx-auto flex items-center justify-between text-xs md:text-sm">
                  <span className="text-text-muted font-medium">
                    Looking for a specific license? We offer <strong>80+ compliance services</strong> across India.
                  </span>
                  <Link
                    to="/services"
                    onClick={() => setActiveMega(false)}
                    className="text-primary font-extrabold hover:text-gold flex items-center transition-colors"
                  >
                    Open Full Directory
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl z-50 overflow-y-auto px-6 py-8 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6">
                  <span className="font-extrabold text-primary tracking-tight">
                    HK FINANCE
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-text-dark hover:text-primary"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex flex-col space-y-4 pt-6">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-bold text-text-dark hover:text-primary py-2 block"
                  >
                    Home
                  </Link>
                  
                  {/* Services Accordion Trigger */}
                  <div className="py-2">
                    <div className="flex justify-between items-center w-full">
                      <Link
                        to="/services"
                        onClick={() => setIsOpen(false)}
                        className="text-base font-bold text-text-dark hover:text-primary py-1"
                      >
                        Services (80+ Online)
                      </Link>
                      <button
                        onClick={() => setMobileActiveCategory(mobileActiveCategory === 'services' ? null : 'services')}
                        className="p-1 focus:outline-none text-primary hover:text-primary"
                        aria-label="Toggle Services categories"
                      >
                        <ChevronDown className={`h-5 w-5 text-primary transition-transform duration-300 ${mobileActiveCategory === 'services' ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    
                    <AnimatePresence>
                      {mobileActiveCategory === 'services' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-3 mt-3 space-y-2 flex flex-col overflow-hidden"
                        >
                          {Object.values(serviceCategories).map((cat) => {
                            const isSubOpen = mobileActiveSubCategory === cat.id;
                            const catServices = getServicesByCategory(cat.id).slice(0, 5);
                            return (
                              <div key={cat.id} className="flex flex-col">
                                <button
                                  onClick={() => setMobileActiveSubCategory(isSubOpen ? null : cat.id)}
                                  className="w-full text-left py-2 px-1 text-sm font-semibold text-text-muted hover:text-primary flex items-center justify-between focus:outline-none"
                                >
                                  <span className="flex items-center">
                                    <span className="mr-2 text-primary">{getCategoryIcon(cat.icon)}</span>
                                    <span>{cat.title}</span>
                                  </span>
                                  <ChevronDown className={`h-4 w-4 text-gray-mid transition-transform duration-300 ${isSubOpen ? 'rotate-180 text-primary' : ''}`} />
                                </button>
                                <AnimatePresence>
                                  {isSubOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="pl-7 mt-1.5 mb-2.5 space-y-2 flex flex-col overflow-hidden"
                                    >
                                      {catServices.map((service) => (
                                        <Link
                                          key={service.slug}
                                          to={`/services/${service.slug}`}
                                          onClick={() => setIsOpen(false)}
                                          className="text-xs text-text-muted hover:text-primary py-1 font-medium transition-colors"
                                        >
                                          {service.name}
                                        </Link>
                                      ))}
                                      <Link
                                        to="/services"
                                        state={{ category: cat.id }}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xs text-primary font-bold hover:text-gold flex items-center pt-1"
                                      >
                                        View All in {cat.title.split(' ')[0]} →
                                      </Link>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                          <Link
                            to="/services"
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-bold text-gold hover:text-primary py-2 mt-2"
                          >
                            All 80+ Services Directory →
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-bold text-text-dark hover:text-primary py-2 block"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-bold text-text-dark hover:text-primary py-2 block"
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Bottom drawer buttons */}
              <div className="flex flex-col space-y-4 pt-6 mt-auto">
                <Button
                  label="Consult Now"
                  variant="gold"
                  size="md"
                  href="/contact"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
