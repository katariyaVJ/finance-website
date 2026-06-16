import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import StatsStrip from '../components/sections/StatsStrip';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import HowItWorks from '../components/sections/HowItWorks';
import ServicesTabs from '../components/sections/ServicesTabs';
import Testimonials from '../components/sections/Testimonials';
import Branches from '../components/sections/Branches';
import CTABanner from '../components/sections/CTABanner';
import FAQSection from '../components/sections/FAQSection';

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Stats Strip */}
      <StatsStrip />

      {/* 3. Services Overview Grid */}
      <ServicesGrid />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. How It Works Timeline */}
      <HowItWorks />

      {/* 6. Popular Services Tabs */}
      <ServicesTabs />

      {/* 8. Client Testimonials */}
      <Testimonials />

      {/* 9. High-Priority CTA Banner */}
      <CTABanner />

      {/* 10. Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Regional Branches (Our Locations) */}
      <Branches />
    </div>
  );
}
