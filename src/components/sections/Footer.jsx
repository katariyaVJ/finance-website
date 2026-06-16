import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, ArrowRight, ArrowUpRight, MessageSquare } from 'lucide-react';
import Button from '../ui/Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-white relative overflow-hidden z-10 pt-8 pb-12 px-4 md:px-8">
      {/* Unique Floating Brand Panel */}
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-[#13331C] to-[#0A1F11] border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">
        
        {/* Subtle decorative grid overlay and interior glows inside the card */}
        <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-gold/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-[90px] pointer-events-none" />

        {/* Header Block: Call to Action Row */}
        <div className="pb-8 md:pb-12 mb-10 md:mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
          <div className="text-left space-y-2 max-w-xl">
            <span className="text-xs font-bold text-gold uppercase tracking-widest block">
              READY TO SECURE YOUR COMPLIANCE?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
              Let's Comply & Grow.
            </h2>
          </div>
          <div className="flex-shrink-0 self-start md:self-center">
            <Button
              label="Consult Now"
              variant="gold"
              size="lg"
              href="/contact"
              icon={ArrowRight}
              className="hover:scale-105 transition-transform duration-300 shadow-md"
            />
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 relative z-10">
          
          {/* Column 1: Brand details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6 text-left">
            <Link to="/" className="flex flex-col space-y-1.5 group self-start text-left">
              <span className="text-2xl font-extrabold text-white tracking-tight leading-none font-display">
                HK FINANCE
              </span>
              <span className="text-[9px] text-gold font-extrabold tracking-widest mt-1">COMPLIANCE & TAX SOLUTIONS</span>
            </Link>
            
            <p className="text-sm text-primary-light/80 leading-relaxed max-w-sm">
              Your trusted partner for corporate incorporation, tax representations, GST return filings, and outsourced bookkeeping across India.
            </p>
            
            {/* Social channels */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com/hkfinancegroup"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-gold hover:text-dark hover:border-gold text-white rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/917600049383?text=Hi%20HK%20Finance,%20I%27d%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] text-white rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>

            {/* Email Address right below socials */}
            <div className="flex flex-col space-y-1.5 pt-3">
              <span className="text-[10px] text-gold font-bold uppercase tracking-wider">Direct Email Desk</span>
              <a 
                href="mailto:info@hkfinancegroup.co" 
                className="text-sm font-semibold text-primary-light/95 hover:text-gold transition-colors flex items-center space-x-2"
              >
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span>info@hkfinancegroup.co</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
            <h4 className="text-gold font-extrabold text-xs uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-3 text-sm font-semibold text-primary-light/80">
              <li>
                <Link to="/" className="hover:text-gold hover:translate-x-1 transition-all duration-200 inline-block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold hover:translate-x-1 transition-all duration-200 inline-block">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold hover:translate-x-1 transition-all duration-200 inline-block">Services Directory</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold hover:translate-x-1 transition-all duration-200 inline-block">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-gold hover:translate-x-1 transition-all duration-200 inline-block">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Compliance (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4 text-left">
            <h4 className="text-gold font-extrabold text-xs uppercase tracking-widest">
              Key Services
            </h4>
            <ul className="flex flex-col space-y-3 text-sm font-semibold text-primary-light/80">
              <li>
                <Link to="/services/gst-return-filing" className="hover:text-gold transition-colors flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">GST Return Filing</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all text-gold" />
                </Link>
              </li>
              <li>
                <Link to="/services/itr-filing" className="hover:text-gold transition-colors flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">ITR Return Filing</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all text-gold" />
                </Link>
              </li>
              <li>
                <Link to="/services/pvt-ltd-registration" className="hover:text-gold transition-colors flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Company Incorporation</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all text-gold" />
                </Link>
              </li>
              <li>
                <Link to="/services/msme-registration" className="hover:text-gold transition-colors flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">MSME Registration</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all text-gold" />
                </Link>
              </li>
              <li>
                <Link to="/services/trademark-registration" className="hover:text-gold transition-colors flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Trademark Protection</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all text-gold" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details & Helplines (3 cols) - Curated for 2 numbers and branches */}
          <div className="lg:col-span-3 flex flex-col space-y-4 text-left">
            <h4 className="text-gold font-extrabold text-xs uppercase tracking-widest">
              Direct Contact
            </h4>
            <div className="space-y-4 text-sm text-primary-light/80">
              
              {/* Helplines (2 lines only) */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider block">Support Hotline</span>
                <div className="flex flex-col space-y-2 text-xs">
                  {['7600049383', '9662634363'].map((num, idx) => (
                    <a
                      key={idx}
                      href={`tel:${num}`}
                      className="hover:text-gold transition-colors font-bold py-2 px-3 bg-white/5 hover:bg-white/10 rounded border border-white/5 flex items-center space-x-2"
                    >
                      <Phone className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                      <span>+91 {num.slice(0, 5)} {num.slice(5)}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Head Office & Branches */}
              <div className="pt-3 space-y-2 text-xs">
                <div>
                  <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider block mb-1">Head Office</span>
                  <p className="leading-relaxed text-primary-light/75">
                    447, 4th Floor, AR Mall, Mota Varachha, Surat - 394101
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-gold uppercase tracking-wider block">Regional Branches</span>
                  <span className="text-[11px] text-primary-light/60 font-semibold">
                    Ahmedabad · Vadodara · Ankleshwar
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Center aligned Copyright info inside the card - Removed designer note */}
        <div className="pt-8 text-center text-xs sm:text-sm font-bold text-primary-light/70 relative z-10">
          Copyright © {currentYear} HK Finance. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
