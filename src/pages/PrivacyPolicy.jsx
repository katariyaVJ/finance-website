import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg-page pt-20 text-left min-h-screen">
      {/* Green Header Banner */}
      <section className="bg-primary text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <rect x="0" y="0" width="100" height="100" transform="skewX(-10)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Privacy Policy
          </h1>
          <p className="text-sm md:text-base text-primary-light max-w-xl mt-2 opacity-90">
            Last Updated: June 16, 2026. How HK Finance handles, stores, and protects your corporate data and tax documents.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white border border-border p-6 md:p-10 rounded-lg shadow-card space-y-8">
          
          <div className="flex items-center space-x-3.5 pb-6">
            <Shield className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-lg font-bold text-text-dark">Data Security is Our Core Priority</h2>
              <p className="text-xs text-text-muted">HK Finance is committed to maintaining absolute trust and compliance integrity.</p>
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="text-base md:text-lg font-extrabold text-text-dark flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>1. Information We Collect</span>
            </h3>
            <p className="text-sm text-text-muted leading-relaxed pl-3.5">
              To provide company registration, GST return filing, and ITR representation services, we collect client documents including PAN cards, Aadhaar cards, business premises electricity bills, rent agreements, and bank details. This information is collected solely for submission to the respective government portals (GSTN, Income Tax Dept, MCA) upon your explicit authorization.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="text-base md:text-lg font-extrabold text-text-dark flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>2. How We Use Your Data</span>
            </h3>
            <p className="text-sm text-text-muted leading-relaxed pl-3.5">
              Your data is strictly used for the execution of services you request. We do not sell, rent, or lease our client databases to any marketing agencies or third-party brokers. Access to documents is restricted to our in-house qualified Chartered Accountants (CAs), Company Secretaries (CSs), and designated compliance officers.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h3 className="text-base md:text-lg font-extrabold text-text-dark flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>3. Document Storage & Security</span>
            </h3>
            <p className="text-sm text-text-muted leading-relaxed pl-3.5">
              All scanned credentials and confidential taxation documents are stored in secure cloud systems protected by multi-factor authentication and strict access controls. We maintain records for compliance histories and tax filing reference logs, which are accessible to the client upon written request.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h3 className="text-base md:text-lg font-extrabold text-text-dark flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>4. WhatsApp and Communications</span>
            </h3>
            <p className="text-sm text-text-muted leading-relaxed pl-3.5">
              We coordinate document verification and status reporting via official communication channels, such as email and WhatsApp. We do not broadcast promotional messages without your consent.
            </p>
          </div>

          {/* Compliance Badge Callout */}
          <div className="p-5 bg-primary-light/50 border border-primary/20 rounded-2xl flex items-start space-x-3.5">
            <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-left text-xs md:text-sm">
              <h4 className="font-bold text-text-dark">Government Portal Submissions</h4>
              <p className="text-text-muted mt-1 leading-relaxed">
                As registered filing partners, our operations adhere strictly to the Information Technology Act, 2000 and data secrecy guidelines of the Ministry of Corporate Affairs, India.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
