import React, { useState, useCallback } from 'react';
import SectionHeader from '../ui/SectionHeader';
import AccordionItem from '../ui/AccordionItem';
import faqImg from '../../assets/FAQ.png';

const customFaqs = [
  {
    question: "What documents are required for GST Registration in India?",
    answer: "For a standard sole proprietorship, you require the owner's PAN card, Aadhaar card, passport photo, a cancelled cheque, and proof of business address (such as an electricity bill, rent agreement, and a signed No Objection Certificate from the property owner)."
  },
  {
    question: "How long does the Private Limited Company incorporation process take?",
    answer: "Company registration typically takes 5 to 7 business days. This includes securing the Digital Signature Certificate (DSC), obtaining Director Identification Numbers (DIN), securing name approval via the MCA portal, and filing the final SPICe+ incorporation forms."
  },
  {
    question: "Can I register for GST if I operate a remote or e-commerce business without a physical office?",
    answer: "Yes. We offer Virtual GST Registration services across all Indian states. We provide you with a legally compliant business address, a formal rent agreement, a utility bill copy, and a signed NOC so you can secure a GSTIN without physical lease overheads."
  },
  {
    question: "Who is required to file a Tax Audit under Section 44AB?",
    answer: "A statutory Tax Audit by a Chartered Accountant is mandatory if your business turnover exceeds ₹10 Crore in a financial year (or ₹2 Crore for professionals), or if you opt of presumptive taxation and claim lower profits than the mandated statutory limits."
  },
  {
    question: "How do I share records for outsourced bookkeeping with your team?",
    answer: "Our digital bookkeeping workflow is completely paperless. You can securely upload bank statements, purchase ledgers, sales logs, and expense bills via email or WhatsApp. Our CAs record entries, reconcile accounts, and prepare monthly profit & loss sheets."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="bg-white py-[50px] relative overflow-hidden" style={{ overflowAnchor: 'none' }}>
      {/* Decorative backdrops */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 top-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="FAQ & Insights"
          eyebrowSize="text-[14px]"
          title="Frequently Asked Questions & Advisory"
          titleClassName=""
          align="left"
          className="mb-10 !space-y-5 !max-w-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8" style={{ overflowAnchor: 'none' }}>

          {/* Left Column: Image Column (stretches to match FAQ height) */}
          <div className="w-full pt-6 lg:pt-0">
            {/* Sticky Container */}
            <div className="lg:sticky lg:top-28 w-full">
              <div className="relative w-full h-[420px] md:h-[500px] lg:h-[550px] rounded-[16px] border border-border/80 shadow-card overflow-hidden bg-bg-page">
                <img
                  src={faqImg}
                  alt="Frequently Asked Questions"
                  className="w-full h-full object-cover rounded-[16px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div className="text-left w-full self-center">
            <div className="space-y-4">
              {customFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
