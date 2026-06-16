import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, CheckCircle2, Calendar, Mail, Award } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import FormInput from '../ui/FormInput';
import Button from '../ui/Button';
import Branches from '../components/sections/Branches';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const phoneNumbers = [
    '7600049383',
    '9662634363',
    '8799160981',
    '8866003245',
    '9727179830'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg('Please fill in Name and Phone Number.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="bg-bg-page pt-20 text-left min-h-screen">
      
      {/* Small Green Hero */}
      <section className="bg-primary text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <rect x="0" y="0" width="100" height="100" transform="skewX(-15)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold font-display text-white"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-primary-light max-w-xl mt-2 opacity-90"
          >
            Have queries regarding GST filings, company setup, or tax notices? Write to us or call our support lines.
          </motion.p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Contact Information (7 cols - widened for spacious text) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            
            {/* Direct Channels */}
            <div className="bg-white border border-border p-6 rounded-2xl shadow-card space-y-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-text-dark pb-1 flex items-center space-x-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>Direct Communication</span>
                </h3>
                
                {/* Phone Desk */}
                <div className="flex items-start space-x-4 text-left mt-6">
                  <div className="p-3 bg-primary-light text-primary rounded-xl flex-shrink-0">
                    <Phone className="h-5.5 w-5.5" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-extrabold text-sm text-text-dark">Call Support (5 Lines)</h4>
                    <p className="text-xs text-text-muted mt-0.5">Quick connection to our senior advisors.</p>
                    <div className="grid grid-cols-2 gap-2.5 mt-3">
                      {phoneNumbers.slice(0, 4).map((num, i) => (
                        <a
                          key={i}
                          href={`tel:${num}`}
                          className="text-xs text-text-muted hover:text-primary transition-colors font-bold py-2 px-3 bg-bg-page border border-border/60 rounded-xl hover:border-primary/40 text-center shadow-sm"
                        >
                          +91 {num.slice(0, 5)} {num.slice(5)}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4 text-left pt-4">
                <div className="p-3 bg-primary-light text-primary rounded-xl flex-shrink-0">
                  <Clock className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-text-dark">Business Hours</h4>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    Monday – Saturday: 10:00 AM – 07:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Business Partnership Opportunities (Light background with Gold Accent Highlight) */}
            <div className="relative overflow-hidden bg-gradient-to-tr from-white to-gold/5 border border-primary/20 p-6 rounded-2xl shadow-card flex-grow flex flex-col justify-between group">
              {/* Golden accent bar on the left */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2.5 pl-3">
                  <div className="p-2 bg-primary-light text-primary rounded-xl">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="text-primary font-display font-extrabold text-[11px] uppercase tracking-widest">Partnership Desk</span>
                </div>

                <div className="text-left pl-3 space-y-2">
                  <h4 className="font-extrabold text-base text-text-dark tracking-tight leading-snug">
                    Professional CA, CS & Advocates Network
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed font-semibold">
                    Are you a practicing Chartered Accountant, Company Secretary, Advocate, or corporate legal consultant? Partner with HK Finance to deliver top-tier compliance and filing solutions to your clients.
                  </p>
                  <p className="text-xs text-text-muted leading-relaxed font-normal">
                    By joining our network, you gain priority access to our high-volume digital processing pipeline, automated status logs, and wholesale pricing. Let our back-office team manage the paperwork and filings, allowing you to focus on strategic advisory and client growth.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <Button
                  label="Connect with Partners"
                  variant="gold"
                  size="md"
                  href="mailto:info@hkfinancegroup.co?subject=Partnership%20Enquiry%20-%20HK%20Finance"
                  className="shadow-sm hover:scale-[1.02] transition-transform"
                />
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form Card (5 cols - reduced width for compact look) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            className="lg:col-span-5 bg-white border border-border p-6 md:p-8 rounded-2xl shadow-card hover:border-primary/30 transition-all duration-300 border-t-4 border-t-primary flex flex-col justify-between"
          >
            <div>
              {/* Mobile Bottomsheet Handle Bar */}
              <div className="w-12 h-1 bg-primary/20 rounded-full mx-auto mb-4 lg:hidden" />

              <h2 className="text-xl md:text-2xl font-bold text-text-dark pb-4 mb-6 flex items-center justify-between">
                <span>Send an Enquiry</span>
                <Mail className="h-5.5 w-5.5 text-primary" />
              </h2>

              {isSubmitted ? (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <CheckCircle2 className="h-16 w-16 text-[#25D366] mx-auto" />
                  <h3 className="text-xl font-bold text-text-dark">Enquiry Sent Successfully!</h3>
                  <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
                    Thank you for contacting HK Finance. Our CAs and legal advisors will review your message and contact you within 24 hours.
                  </p>
                  <div className="pt-4">
                    <Button
                      label="Send Another Message"
                      variant="outline"
                      size="md"
                      onClick={() => setIsSubmitted(false)}
                    />
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <FormInput
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
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
                    placeholder="name@example.com (optional)"
                  />

                  {/* Select Service (Optional Dropdown) */}
                  <div className="flex flex-col space-y-1.5 w-full text-left">
                    <label className="text-xs font-semibold text-text-dark uppercase tracking-wider">
                      Select Service <span className="text-text-muted font-normal text-[10px]">(Optional)</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-border focus:border-primary focus:ring-4 focus:ring-primary-light rounded-xl text-sm text-text-dark transition-all duration-200 outline-none"
                    >
                      <option value="">Choose a service...</option>
                      <option value="pvt-ltd">Private Limited Company</option>
                      <option value="llp">LLP Registration</option>
                      <option value="gst-filing">GST Return Filing</option>
                      <option value="itr-filing">Income Tax Return</option>
                      <option value="trademark">Trademark Registration</option>
                      <option value="fssai">FSSAI Food License</option>
                      <option value="gumasta">Shop & Establishment (Gumasta)</option>
                      <option value="accounting">Bookkeeping Services</option>
                      <option value="msme">MSME Registration</option>
                      <option value="other">Other / Custom Service</option>
                    </select>
                  </div>

                  <FormInput
                    label="Your Query / Message"
                    type="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your requirement or tax notice details..."
                    rows={4}
                  />

                  {errorMsg && <p className="text-xs text-red-500 font-semibold">{errorMsg}</p>}

                  <div className="flex justify-center w-full pt-2">
                    <Button
                      label={isSubmitting ? "Sending..." : "Send Enquiry"}
                      disabled={isSubmitting}
                      variant="gold"
                      size="md"
                      type="submit"
                      icon={Calendar}
                      className="w-full md:w-auto px-8 py-2 text-sm"
                    />
                  </div>

                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Regional Branches Map Section */}
      <Branches />

    </div>
  );
}
