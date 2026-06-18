import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Eye, Target, Users, Scale, Building2 } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Branches from '../components/sections/Branches';
import StatsStrip from '../components/sections/StatsStrip';

export default function About() {
  const teamRoles = [
    {
      role: 'Chartered Accountants (CA)',
      icon: Users,
      desc: 'Our CA desk manages Income Tax filings, statutory audits, TDS calculations, and GST Notice representations.'
    },
    {
      role: 'Company Secretaries (CS)',
      icon: Building2,
      desc: 'Our CS team handles private limited company incorporations, annual ROC compliances, LLPs, and partnership agreements.'
    },
    {
      role: 'Legal Advocates',
      icon: Scale,
      desc: 'Our legal desk drafts deeds, agreements, affidavits, coordinates copyright registrations, and handles trademark objections.'
    }
  ];

  const valueList = [
    { title: 'Professional & Experienced Team', desc: 'Expert CAs, CSs, and Advocates.' },
    { title: 'Quick Processing', desc: 'Fast turnaround times on all filings.' },
    { title: 'Transparent & Affordable Pricing', desc: 'Absolutely no hidden charges.' },
    { title: 'All India Online Services', desc: 'Digital operations serving clients nationwide.' },
    { title: 'End-to-End Support', desc: 'Complete ownership from draft to approval.' },
    { title: 'Expert Consultation', desc: 'Free initial calls for strategic compliance reviews.' },
    { title: '100% Compliance Assurance', desc: 'Strict verification according to government rules.' }
  ];

  return (
    <div className="bg-bg-page pt-20 text-left">
      
      {/* Hero Section */}
      <section className="bg-white py-10 md:py-12 relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute right-0 top-0 h-[400px] w-[400px] bg-primary-light/50 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary-light self-start px-3 py-1.5 rounded-xl">
                Established Compliance Agency
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-text-dark">
                Your Trusted Partner <br className="hidden sm:inline" />
                Since Day One
              </h1>
              <p className="text-sm sm:text-base text-text-muted max-w-xl leading-relaxed font-medium">
                HK Finance is a dedicated tax consulting and corporate compliance advisory firm headquartered in Surat. We empower entrepreneurs and businesses by handling all their governmental licensing, legal paperwork, and taxation returns.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              {/* Compact Visual Box */}
              <div className="relative w-full max-w-[340px] bg-primary text-white border border-primary/20 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-lg">
                <Users className="h-10 w-10 text-gold mb-2.5 stroke-[1.5]" />
                <h3 className="font-extrabold text-white text-base tracking-tight font-display">Authorized Advisory Firm</h3>
                <p className="text-[11px] text-primary-light/85 mt-1 font-semibold">Surat · Ahmedabad · Vadodara · Ankleshwar</p>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-gold/10 rounded-full blur-xl" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip />

      {/* Story & Vision */}
      <section className="bg-white py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Story */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-dark font-display">Our Story</h2>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                HK Finance began with a simple vision: to bridge the gap between complex Indian compliance laws and small business owners. Taxation and incorporation can feel overwhelming. By placing Chartered Accountants, Company Secretaries, and Advocates under one single platform, we created a streamlined workflow for our clients.
              </p>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                Today, we have served over 5,000 clients, ranging from small retail shops in Surat to manufacturing industries in Ankleshwar and IT startups in Ahmedabad. We handle over 80+ online services, keeping clients fully compliant and secure.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 bg-bg-page border border-border/80 rounded-2xl shadow-card">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-text-dark text-base mb-2">Our Mission</h3>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                  To provide transparent, affordable, and quick compliance solutions, enabling entrepreneurs to grow their businesses without legal roadblocks.
                </p>
              </div>

              <div className="p-6 bg-bg-page border border-border/80 rounded-2xl shadow-card">
                <Eye className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-text-dark text-base mb-2">Our Vision</h3>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                  To become India’s most trusted online platform for business registration, licensing, and taxation advisory, known for compliance integrity.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Team / Roles */}
      <section className="bg-white py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Our Experts"
            title="In-House Professional Staff"
            subtitle="We do not outsource your filings. Our dedicated in-house team of qualified experts handles every document."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {teamRoles.map((role, i) => {
              const Icon = role.icon;
              return (
                <div key={i} className="p-6 bg-white border border-border/80 rounded-2xl shadow-card text-center hover:border-primary hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center p-3 bg-primary-light text-primary rounded-lg mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-text-dark text-lg mb-2">{role.role}</h3>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed">{role.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Choose HK Finance (Value list) */}
      <section className="bg-white py-8 md:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Our Promise"
            title="How We Deliver Value"
            subtitle="Our clients choose us for our transparency, speed, and dedicated CA support."
            align="center"
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueList.map((val, i) => (
              <div key={i} className="flex space-x-3 items-start p-4 bg-bg-page border border-border/80 rounded-2xl">
                <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-bold text-text-dark text-sm">{val.title}</h4>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Branches Map Section */}
      <Branches />

    </div>
  );
}
