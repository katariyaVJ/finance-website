import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../cards/ServiceCard';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const coreServices = [
    {
      icon: 'FileSpreadsheet',
      title: 'GST & Taxation',
      description: 'Error-free GST return filings, notices, ITC claims, and custom E-invoicing setups.',
      href: '/services/gst-return-filing'
    },
    {
      icon: 'Building',
      title: 'Company Registration',
      description: 'Register Pvt Ltd, LLP, OPC, Partnership, or NGO entities quickly across India.',
      href: '/services/pvt-ltd-registration'
    },
    {
      icon: 'Calculator',
      title: 'Accounting & Bookkeeping',
      description: 'Outsource daily bookkeeping, monthly auditing prep, and bank reconciliations.',
      href: '/services/bookkeeping-services'
    },
    {
      icon: 'Award',
      title: 'Business Certifications',
      description: 'Secure ISO, RERA, MSME Udyam, BIS, and ZED quality standards for your company.',
      href: '/services/iso-certification'
    },
    {
      icon: 'Scale',
      title: 'Legal & Revenue Services',
      description: 'Airtight drafting of affidavits, partnership deeds, rental agreements, PAN, and passport support.',
      href: '/services/agreement-drafting'
    },
    {
      icon: 'FileCheck',
      title: 'Government Licenses',
      description: 'Acquire FSSAI food codes, drug wholesale licenses, municipal trade permits, and factory licenses.',
      href: '/services/fssai-license'
    }
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="What We Do"
          title="Complete Business Solutions Under One Roof"
          subtitle="We take the legal and tax filing burden off your shoulders so you can focus on building your enterprise."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {coreServices.map((service, i) => (
            <ServiceCard
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            label="View All 80+ Services"
            variant="outline"
            size="lg"
            href="/services"
            icon={ArrowRight}
          />
        </div>

      </div>
    </section>
  );
}
