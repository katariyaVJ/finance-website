import React from 'react';
import { Phone, MessageSquare, MapPin, Mail } from 'lucide-react';

export default function ContactBar() {
  const phoneNumbers = [
    '7600049383',
    '9662634363',
    '8799160981',
    '8866003245',
    '9727179830'
  ];

  return (
    <section className="bg-dark text-white py-12 border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Column 1: Call Us */}
          <div className="flex items-start space-x-4 pb-6 md:pb-0 md:pr-4">
            <div className="p-3 bg-primary/20 text-primary-light rounded-lg">
              <Phone className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-base uppercase tracking-wider text-primary-light mb-2">Call Us</h4>
              <div className="flex flex-col space-y-1">
                {phoneNumbers.map((num, i) => (
                  <a
                    key={i}
                    href={`tel:${num}`}
                    className="text-sm text-gray-light hover:text-white transition-colors block"
                  >
                    {num.slice(0, 5)} {num.slice(5)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Message / Email */}
          <div className="flex items-start space-x-4 pt-6 md:pt-0 md:px-6">
            <div className="p-3 bg-primary/20 text-primary-light rounded-lg">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div className="text-left w-full">
              <h4 className="font-bold text-base uppercase tracking-wider text-primary-light mb-2">WhatsApp & Email</h4>
              <p className="text-sm text-gray-light leading-relaxed mb-3">
                Send documents or quick queries on our official WhatsApp:
              </p>
              <a
                href="https://wa.me/917600049383?text=Hi%20HK%20Finance,%20I%27d%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#25D366] hover:bg-[#1ebd57] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
              >
                Chat on WhatsApp
              </a>
              <a
                href="mailto:info@hkfinancegroup.co"
                className="flex items-center space-x-2 text-sm text-gray-light hover:text-white transition-colors mt-4"
              >
                <Mail className="h-4 w-4" />
                <span>info@hkfinancegroup.co</span>
              </a>
            </div>
          </div>

          {/* Column 3: Head Office */}
          <div className="flex items-start space-x-4 pt-6 md:pt-0 md:pl-6">
            <div className="p-3 bg-primary/20 text-primary-light rounded-lg">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-base uppercase tracking-wider text-primary-light mb-2">Head Office</h4>
              <p className="text-sm text-gray-light leading-relaxed mb-4">
                447, 4th Floor, AR Mall, Mota Varachha, Surat – 394101, Gujarat
              </p>
              <div className="text-xs font-semibold text-[#C9960C] uppercase tracking-widest">
                Branches: Ahmedabad · Vadodara · Ankleshwar
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
