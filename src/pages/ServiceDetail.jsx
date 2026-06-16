import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, CheckCircle2, ChevronRight, FileText, HelpCircle, Phone, Calendar } from 'lucide-react';
import { getServiceBySlug, serviceCategories, servicesData } from '../data/services';
import ServiceCard from '../components/cards/ServiceCard';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  // Form State
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSubmitted(false);
    setIsSubmitting(false);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-[70vh] bg-bg-page flex flex-col items-center justify-center pt-24 px-4">
        <div className="bg-white border border-border p-8 rounded-lg shadow-card text-center max-w-md w-full">
          <HelpCircle className="h-16 w-16 text-gold mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-text-dark mb-2">Service Not Found</h2>
          <p className="text-sm text-text-muted mb-6">
            The service path you are trying to access does not exist or has been relocated.
          </p>
          <Button
            label="Back to Services Directory"
            variant="primary"
            size="md"
            href="/services"
            icon={ArrowLeft}
            className="w-full"
          />
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg('Please fill in both name and phone number.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1200);
  };

  // Get related services (same category, excluding current)
  const relatedServices = servicesData
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  const categoryTitle = serviceCategories[service.category]?.title || '';

  // Dynamic Fallbacks for expanded database services
  const fullDescriptionFallback = service.fullDescription
    ? service.fullDescription
    : `${service.description} Our senior team of Chartered Accountants, Company Secretaries, and legal advisors handles all document drafting, government portal submissions, and official coordination from start to finish. We ensure that all requirements are met and filings are completed error-free according to the latest Indian regulatory standards.`;

  const whoNeedsItFallback = service.whoNeedsIt && service.whoNeedsIt.length > 0
    ? service.whoNeedsIt
    : [
        "SMEs and startups looking for legal recognition and compliance.",
        "Business promoters requiring authorized corporate registration or licenses.",
        "Taxpayers wishing to avoid regulatory audits and delay penalties.",
        "Entities aiming to build trust with customers, investors, and vendors."
      ];

  const documentsFallback = service.documentsRequired && service.documentsRequired.length > 0
    ? service.documentsRequired
    : [
        "PAN Card of the applicant or corporate entity",
        "Aadhaar Card / Voter ID of directors or partners",
        "Business address proof (Electricity bill or Rent agreement)",
        "NOC from the landlord of the office premises",
        "Bank account proof (Cancelled cheque or passbook copy)"
      ];

  const processStepsFallback = service.processSteps && service.processSteps.length > 0
    ? service.processSteps
    : [
        "Expert Consultation & Document Checklist: Our CAs review your profile and verify all required documentation.",
        "Application Drafting & Filing: We fill and submit the necessary forms on the official government registry portal.",
        "Department Approval & Certificate Delivery: We coordinate with the department officers to obtain the certificate and send it to you digitally."
      ];

  return (
    <div className="bg-bg-page pt-20 text-left">
      
      {/* Service Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-1.5 text-xs text-primary-light/80 mb-4 font-semibold uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{categoryTitle}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-white max-w-4xl leading-tight">
            {service.name}
          </h1>
          <p className="text-sm md:text-base text-primary-light max-w-2xl mt-4 opacity-90">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Body Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Content Details) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="bg-white border border-border p-6 md:p-8 rounded-lg shadow-card">
              <h2 className="text-xl md:text-2xl font-bold text-text-dark pb-4 mb-6">
                Overview of {service.name}
              </h2>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                {fullDescriptionFallback}
              </p>
            </div>

            {/* Who Needs It */}
            <div className="bg-white border border-border p-6 md:p-8 rounded-lg shadow-card">
              <h2 className="text-xl md:text-2xl font-bold text-text-dark pb-4 mb-6">
                Who Needs this Service?
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whoNeedsItFallback.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="p-1 bg-primary-light text-primary rounded-full flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm md:text-base text-text-muted font-medium leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents Required */}
            <div className="bg-white border border-border p-6 md:p-8 rounded-lg shadow-card">
              <h2 className="text-xl md:text-2xl font-bold text-text-dark pb-4 mb-6">
                Documents Required
              </h2>
              <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-6">
                Keep these scanned files ready for upload:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documentsFallback.map((doc, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 bg-bg-page border border-border rounded-md">
                    <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-text-dark font-semibold leading-tight">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps Timeline */}
            <div className="bg-white border border-border p-6 md:p-8 rounded-lg shadow-card">
              <h2 className="text-xl md:text-2xl font-bold text-text-dark pb-4 mb-6">
                Filing & Incorporation Process
              </h2>
              <div className="relative border-l-2 border-border pl-6 space-y-8 ml-3 mt-4">
                {processStepsFallback.map((step, i) => (
                  <div key={i} className="relative">
                    {/* Timeline Node */}
                    <span className="absolute -left-[35px] top-1 h-5 w-5 bg-primary border-4 border-white rounded-full flex items-center justify-center shadow-sm" />
                    
                    <h4 className="text-base font-bold text-text-dark leading-none mb-2">
                      Step {i + 1}
                    </h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why choose HK */}
            <div className="bg-white border border-border p-6 md:p-8 rounded-lg shadow-card">
              <h3 className="text-lg md:text-xl font-bold text-text-dark mb-4">
                Why Choose HK Finance for {service.name}?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Our network of Chartered Accountants, corporate advisors, and legal staff are dedicated to delivering fast, secure, and error-free compliance filings. 
              </p>
              <ul className="space-y-2.5 text-sm font-semibold text-text-dark">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary" />
                  <span>100% Secure & Confidential Document Treatment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary" />
                  <span>Real-time Tracking & Direct WhatsApp Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary" />
                  <span>Authorized Professionals handling government applications</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column (Sticky Inquiry Form) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            {/* Quick Inquiry Card */}
            <div className="bg-white border border-border p-6 rounded-lg shadow-card">
              <h3 className="text-lg font-bold text-text-dark mb-2">
                Enquire About This Service
              </h3>
              <p className="text-xs text-text-muted mb-6">
                Fill the form and we will review your request and call back.
              </p>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-[#25D366] mx-auto" />
                  <h4 className="font-bold text-text-dark text-base">Inquiry Submitted!</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Thank you. Our compliance officer has received your details and will call you back within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <FormInput
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                  
                  <FormInput
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit number"
                    required
                  />

                  <FormInput
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                  />

                  <div className="flex flex-col space-y-1 text-left">
                    <label className="text-xs font-semibold text-text-dark uppercase tracking-wider">
                      Selected Service
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={service.name}
                      className="w-full px-4 py-3 bg-bg-page border border-border rounded-md text-xs text-text-muted outline-none cursor-not-allowed font-medium"
                    />
                  </div>

                  <FormInput
                    label="Message / Query"
                    type="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your requirement (optional)"
                    rows={3}
                  />

                  {errorMsg && <p className="text-xs text-red-500 font-semibold">{errorMsg}</p>}

                  <Button
                    label={isSubmitting ? "Sending Enquiry..." : "Send Enquiry"}
                    disabled={isSubmitting}
                    variant="gold"
                    size="md"
                    type="submit"
                    className="w-full"
                    icon={Calendar}
                  />
                </form>
              )}
            </div>

            {/* Helpline Card */}
            <div className="p-6 bg-primary-light/50 border border-primary/20 rounded-lg text-center">
              <Phone className="h-6 w-6 text-primary mx-auto mb-2" />
              <h4 className="font-bold text-text-dark text-sm">Need Instant Support?</h4>
              <p className="text-xs text-text-muted mt-1 mb-4">
                Call our direct phone desk to speak with a CA.
              </p>
              <a
                href="tel:7600049383"
                className="text-lg font-extrabold text-primary hover:text-gold transition-colors"
              >
                76000 49383
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Related Services (Bottom) */}
      {relatedServices.length > 0 && (
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl md:text-2xl font-bold text-text-dark text-center mb-8">
              Related Compliance Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <ServiceCard
                  key={rel.slug}
                  icon={serviceCategories[rel.category]?.icon}
                  title={rel.name}
                  description={rel.description}
                  href={`/services/${rel.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
