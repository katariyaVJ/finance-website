import React from 'react';
import { MapPin } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import BranchCard from '../cards/BranchCard';
import { branchesData } from '../../data/branches';

export default function Branches() {
  return (
    <section id="branches-section" className="bg-bg-page py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left side: Header & Branch Cards (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left">
            <div>
              <SectionHeader
                eyebrow="Our Locations"
                eyebrowSize="text-sm"
                title="We're Close to You"
                subtitle="Headquartered in Surat with regional offices in Ahmedabad, Vadodara, and Ankleshwar to serve your business locally."
                align="left"
                className="mb-6"
              />

              {/* Google Business Profile Verified Badge */}
              <div className="mb-6">
                <a
                  href="https://share.google/Ow6SDlKaA10OOBEWs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2.5 bg-white border border-primary/20 hover:border-primary/50 text-xs font-bold text-primary uppercase tracking-wider rounded-xl shadow-sm hover:scale-[1.02] transition-transform duration-250"
                >
                  <MapPin className="h-4.5 w-4.5 mr-2 text-primary" />
                  <span>Verified Google Business Profile</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-0">
                {branchesData.map((branch, i) => (
                  <BranchCard
                    key={i}
                    city={branch.city}
                    address={branch.address}
                    phone={branch.phone}
                    mapLink={branch.mapLink}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side: Live Map (6 cols) */}
          <div className="lg:col-span-6 min-h-[350px] lg:min-h-full">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-card flex border border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <iframe
                title="HK Finance Surat Head Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5714732158913!2d72.876798!3d21.248834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f42f6162ff9%3A0xe54e6015bd67634f!2sAR%20Mall%20and%20Multiplex%2C%20Mota%20Varachha%2C%20Surat%2C%20Gujarat%20394105!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[350px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
