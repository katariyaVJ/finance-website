import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Award, Building, FileSpreadsheet, Receipt, Calculator, FileCheck, ShieldAlert, Scale, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { serviceCategories, getServicesByCategory } from '../../data/services';
import mainLogo from '../../assets/main-logo.png';


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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
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
        className={`fixed left-1/2 -translate-x-1/2 z-40 backdrop-blur-md flex items-center justify-between header-transition ${isScrolled
          ? 'top-4 w-[92%] max-w-6xl header-scrolled-active h-[76px]'
          : 'top-0 w-full bg-white/40 border-b border-transparent h-[88px]'
          }`}
      >
        <div className={`h-full flex items-center justify-between w-full header-transition ${isScrolled
          ? 'px-8 lg:px-12'
          : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
          }`}
        >

          {/* Logo Section */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={mainLogo} alt="HK Finance" className="h-[45px] w-auto object-contain drop-shadow-sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-[16px] font-bold relative py-1 hover:text-primary transition-colors duration-300 group/nav ${location.pathname === '/' ? 'text-primary' : 'text-text-muted'
                }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-full origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${location.pathname === '/' ? 'scale-x-100' : ''}`} />
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
                className={`flex items-center text-[16px] font-bold relative py-1 hover:text-primary transition-colors duration-300 group/nav focus:outline-none ${location.pathname.startsWith('/services') ? 'text-primary' : 'text-text-muted'
                  }`}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeMega ? 'rotate-180 text-primary' : ''}`} />
                <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-full origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${location.pathname.startsWith('/services') ? 'scale-x-100' : ''}`} />
              </Link>

              {/* Submenu Dropdown Overlay (Desktop) */}
              <AnimatePresence>
                {activeMega && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-0 mt-3 w-[460px] bg-white border border-border/80 rounded-2xl shadow-xl z-50 overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-2 p-3.5">
                      {Object.values(serviceCategories).map((cat) => (
                        <Link
                          key={cat.id}
                          to="/services"
                          state={{ category: cat.id }}
                          onClick={() => setActiveMega(false)}
                          className="group/item flex items-center space-x-2.5 p-2 rounded-lg hover:bg-primary-light/40 border border-transparent hover:border-primary/10 transition-all duration-300 text-left"
                        >
                          <div className="p-2 bg-primary-light text-primary group-hover/item:bg-primary group-hover/item:text-white rounded-md flex-shrink-0 transition-all duration-300">
                            {getCategoryIcon(cat.icon)}
                          </div>
                          <span className="font-extrabold text-[12.5px] text-text-dark group-hover/item:text-primary transition-colors leading-snug">
                            {cat.title}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Dropdown footer */}
                    <div className="bg-primary-light/35 py-3 px-5 flex items-center justify-between text-xs font-semibold border-t border-border/50">
                      <span className="text-text-muted max-w-[240px] leading-tight">
                        We offer <strong>80+ compliance services</strong> across India.
                      </span>
                      <Link
                        to="/services"
                        onClick={() => setActiveMega(false)}
                        className="px-3.5 py-2 bg-primary hover:bg-gold text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all duration-300 flex items-center space-x-1 cursor-pointer"
                      >
                        <span>All Services</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className={`text-[16px] font-bold relative py-1 hover:text-primary transition-colors duration-300 group/nav ${location.pathname === '/about' ? 'text-primary' : 'text-text-muted'
                }`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-full origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${location.pathname === '/about' ? 'scale-x-100' : ''}`} />
            </Link>

            <Link
              to="/contact"
              className={`text-[16px] font-bold relative py-1 hover:text-primary transition-colors duration-300 group/nav ${location.pathname === '/contact' ? 'text-primary' : 'text-text-muted'
                }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-full origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${location.pathname === '/contact' ? 'scale-x-100' : ''}`} />
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/contact"
              className="relative overflow-hidden group/btn bg-gold text-[#1A1A1A] font-black text-base px-8 py-3.5 rounded-xl shadow-md inline-flex items-center justify-center transition-all duration-500 z-10"
            >
              <span className="absolute inset-0 bg-primary transform -skew-x-12 -translate-x-[115%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out -z-10" />
              <span className="relative z-10 flex items-center group-hover/btn:text-white transition-colors duration-300">
                Consult Now
                <ArrowRight className="h-5 w-5 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </span>
            </Link>
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
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="relative overflow-hidden group/btn bg-gold text-[#1A1A1A] font-bold text-base w-full py-3 rounded-xl shadow-sm inline-flex items-center justify-center transition-all duration-500 z-10"
                >
                  <span className="absolute inset-0 bg-primary transform -skew-x-12 -translate-x-[115%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out -z-10" />
                  <span className="relative z-10 flex items-center group-hover/btn:text-white transition-colors duration-300">
                    Consult Now
                    <ArrowRight className="h-5 w-5 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
