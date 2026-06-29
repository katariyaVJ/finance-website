import React from 'react';
import { MapPin } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import BranchCard from '../cards/BranchCard';
import { branchesData } from '../../data/branches';

export default function Branches() {
  return (
    <section id="branches-section" className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          eyebrow="Our Locations"
          eyebrowSize="text-sm"
          title="We're Close to You"
          align="left"
          className="!mb-[24px] !max-w-none"
          titleClassName="leading-tight tracking-tight"
          subtitleClassName="!max-w-none font-medium leading-tight"
        />

        {/* Google Business Profile Verified Badge */}
        <div className="mb-6 text-left">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-6">

          {/* Left side: Branch Cards (50% width) */}
          <div className="text-left w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-0">
              {branchesData.map((branch) => (
                <BranchCard
                  key={branch.city}
                  {...branch}
                />
              ))}
            </div>
          </div>

          {/* Right side: Live Map (50% width, matches height of left side from verified badge to last card) */}
          <div className="min-h-[280px] lg:min-h-full w-full">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-card flex border-2 border-border hover:border-primary/50 transition-all duration-300">
              <iframe
                title="HK Finance Surat Head Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5714732158913!2d72.876798!3d21.248834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f42f6162ff9%3A0xe54e6015bd67634f!2sAR%20Mall%20and%20Multiplex%2C%20Mota%20Varachha%2C%20Surat%2C%20Gujarat%20394105!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
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
