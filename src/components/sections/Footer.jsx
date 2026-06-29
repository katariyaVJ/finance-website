import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import whiteLogo from '../../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-white relative overflow-hidden z-10 py-[50px] px-4 md:px-8 leading-[21px]">
      {/* Unique Floating Brand Panel */}
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-[#1a4425] to-[#102b17] border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">

        {/* Subtle decorative grid overlay and interior glows inside the card */}
        <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-gold/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-[90px] pointer-events-none" />

        {/* Header Block: Call to Action Row */}
        <div className="mb-[80px] flex flex-col gap-6 relative z-10">
          <div className="text-left space-y-2 max-w-xl">
            <span className="text-sm font-bold text-gold uppercase tracking-widest block">
              READY TO SECURE YOUR COMPLIANCE?
            </span>
            <h2 className="text-4xl sm:text-[3.25rem] font-extrabold tracking-tight text-white leading-tight font-display">
              Let's Connect & Grow.
            </h2>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 relative z-10">

          {/* Column 1: Brand details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6 text-left">
            <Link to="/" className="flex items-center space-x-2 self-start text-left">
              <img src={whiteLogo} alt="HK Finance" className="h-[54px] w-auto drop-shadow-sm" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight leading-none text-white font-display">HK FINANCE</span>
                <span className="text-[11.5px] font-extrabold tracking-wider text-white mt-0.5 uppercase">GET ALL THE ONLY YOU NEED</span>
              </div>
            </Link>

            <p className="text-sm font-sans font-medium text-primary-light/80 leading-relaxed max-w-sm">
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
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/917600049383?text=Hi%20HK%20Finance,%20I%27d%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] text-white rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>


          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
            <h3 className="text-gold font-extrabold text-base uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-3 text-sm font-medium text-primary-light/80">
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
            <h3 className="text-gold font-extrabold text-base uppercase tracking-widest">
              Our Services
            </h3>
            <ul className="flex flex-col space-y-3 text-sm font-medium text-primary-light/80">
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

          {/* Column 4: Contact details & Helplines (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4 text-left">
            <h3 className="text-gold font-extrabold text-base uppercase tracking-widest">
              Contact Info
            </h3>
            <div className="flex flex-col space-y-4 text-sm text-primary-light/80">
              {/* Phone */}
              <a
                href="tel:7600049383"
                className="flex items-center space-x-3 hover:text-gold transition-colors duration-200 group"
              >
                <Phone className="h-4 w-4 text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">+91 76000 / 49383</span>
              </a>

              {/* Email */}
              <a
                href="mailto:hkfinance0807@gmail.com"
                className="flex items-center space-x-3 hover:text-gold transition-colors duration-200 group"
              >
                <Mail className="h-4 w-4 text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">hkfinance0807@gmail.com</span>
              </a>

              {/* Location */}
              <a
                href="https://maps.google.com/?q=HK+Finance,+4th+Floor,+AR+Mall+and+Multiplex,+447,+opp.+Panvel+Point,+Mota+Varachha,+Surat,+Gujarat+394105"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-gold transition-colors duration-200 group"
              >
                <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium leading-relaxed">
                  HK Finance, 4th Floor, AR Mall and Multiplex, 447, opp. Panvel Point, Mota Varachha, Surat, Gujarat 394105
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Center aligned Copyright info inside the card - Removed designer note */}
        <div className="pt-8 text-center text-sm font-bold text-primary-light/70 relative z-10 font-sans">
          Copyright © {currentYear} HK Finance. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
