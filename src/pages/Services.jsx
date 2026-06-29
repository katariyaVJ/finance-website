import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/cards/ServiceCard';
import { serviceCategories, servicesData } from '../data/services';

export default function Services() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Handle redirect from mega menu with category in state — also scroll to directory
  useEffect(() => {
    if (location.state && location.state.category) {
      setSelectedCategory(location.state.category);
      // Clear state so reload doesn't force category
      window.history.replaceState({}, document.title);
      // Scroll to directory listing so the user sees the filtered result
      setTimeout(() => {
        const element = document.getElementById('services-directory');
        if (element) {
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  // Handle category change and scroll up to the directory start
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    const element = document.getElementById('services-directory');
    if (element) {
      const yOffset = -90; // Spacing below sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Live filter logic
  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = 
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.fullDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white pt-20">
      
      {/* Search Hero Section (Clean Background) */}
      <section className="bg-gradient-to-br from-[#1b4a25] to-primary text-white py-[50px] relative overflow-hidden">
        {/* Subtle grid and accent lighting */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="absolute right-0 top-0 h-[250px] w-[250px] bg-primary-light/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 font-display text-white tracking-tight leading-tight">
            80+ Business Compliance Services
          </h1>
          <p className="text-sm md:text-base text-primary-light/95 max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
            Search our comprehensive database of company registration, taxation filing, legal drafting, and licensing certifications.
          </p>

          {/* Live Search Input Bar */}
          <div className="relative max-w-xl mx-auto shadow-xl rounded-2xl bg-white p-1.5 flex items-center border border-border/40 focus-within:border-primary/20 focus-within:ring-4 focus-within:ring-primary-light/40 transition-all duration-300">
            <div className="pl-3 pr-1 text-primary flex-shrink-0">
              <Search className="h-5 w-5 stroke-[2.5]" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search e.g. GST registration, Pvt Ltd, FSSAI..."
              className="w-full bg-white text-text-dark placeholder:text-gray-mid/80 border-none outline-none focus:outline-none focus:ring-0 text-sm md:text-base py-2.5 px-2 font-medium"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="px-3.5 py-1.5 text-xs md:text-sm font-semibold text-text-muted hover:text-primary transition-colors mr-1 cursor-pointer"
              >
                Clear
              </button>
            )}
            <button 
              type="submit"
              className="hidden sm:block px-5 py-2.5 bg-primary hover:bg-[#1a4724] text-white rounded-xl text-xs md:text-sm font-extrabold shadow-sm transition-all duration-200 flex-shrink-0 cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section id="services-directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Category Filter - Sidebar (Desktop) / Horizontal Row (Mobile) */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 self-start flex flex-col space-y-3 max-h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar pb-4 pr-1">
            
            {/* Category Title */}
            <div className="hidden lg:flex items-center space-x-2 text-text-dark font-bold text-xs uppercase tracking-widest pb-2 mb-2 border-b border-border">
              <SlidersHorizontal className="h-4 w-4 text-primary" />
              <span>Service Categories</span>
            </div>

            {/* List */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-3 no-scrollbar scroll-smooth">
              <button
                type="button"
                onClick={() => handleCategoryChange('all')}
                className={`group px-5 lg:px-6 py-2.5 rounded-xl text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center transition-all duration-300 flex-shrink-0 lg:flex-shrink lg:w-full min-h-[40px] cursor-pointer text-center
                  ${selectedCategory === 'all' 
                    ? 'bg-primary text-white shadow-md shadow-primary/10 border border-primary scale-[1.01]' 
                    : 'bg-white text-text-dark border border-border hover:border-primary'}`}
              >
                <span>All Services</span>
              </button>
              
              {Object.values(serviceCategories).map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`group px-5 lg:px-6 py-2.5 rounded-xl text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center transition-all duration-300 flex-shrink-0 lg:flex-shrink lg:w-full min-h-[40px] cursor-pointer text-center
                      ${isActive 
                        ? 'bg-primary text-white shadow-md shadow-primary/10 border border-primary scale-[1.01]' 
                        : 'bg-white text-text-dark border border-border hover:border-primary'}`}
                  >
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Service Cards Grid (Right side) */}
          <div className="lg:col-span-9 flex flex-col space-y-6">

            {/* Count Indicator */}
            <div className="text-left text-sm text-text-muted font-semibold">
              Showing <span className="text-primary font-bold">{filteredServices.length}</span> services
              {selectedCategory !== 'all' && (
                <> in <span className="text-primary font-bold">{serviceCategories[selectedCategory]?.title}</span></>
              )}
              {searchTerm && <> matching "{searchTerm}"</>}
            </div>

            {/* Services Grid */}
            {filteredServices.length > 0 ? (
              selectedCategory === 'all' && !searchTerm ? (
                <div className="space-y-14">
                  {Object.values(serviceCategories).map((cat) => {
                    const catServices = servicesData.filter((s) => s.category === cat.id);
                    if (catServices.length === 0) return null;
                    const CategoryIcon = Icons[cat.icon] || Icons.Building;
                    return (
                      <div key={cat.id} className="space-y-5">
                        {/* Category Heading with Icon */}
                        <div className="flex items-center space-x-3 pb-3 border-b border-border text-left">
                          <div className="p-2.5 bg-primary-light text-primary rounded-xl flex-shrink-0">
                            <CategoryIcon className="h-5 w-5" />
                          </div>
                          <h2 className="text-base md:text-lg font-extrabold text-text-dark font-display">
                            {cat.title}
                          </h2>
                        </div>

                        {/* Service Cards Grid inside Category */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {catServices.map((service) => (
                            <ServiceCard
                              key={service.slug}
                              icon={cat.icon}
                              title={service.name}
                              description={service.description}
                              href={`/services/${service.slug}`}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => (
                    <ServiceCard
                      key={service.slug}
                      icon={
                        selectedCategory !== 'all'
                          ? serviceCategories[selectedCategory]?.icon
                          : serviceCategories[service.category]?.icon
                      }
                      title={service.name}
                      description={service.description}
                      href={`/services/${service.slug}`}
                    />
                  ))}
                </div>
              )
            ) : (
              <div className="p-10 md:p-16 bg-white rounded-2xl border border-border/80 text-center shadow-card max-w-xl mx-auto w-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary/20 via-primary to-gold/30" />
                <svg className="w-20 h-20 mx-auto text-gray-light mb-6 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v4m-2-2h4" className="stroke-gold" />
                </svg>
                <div className="text-lg font-extrabold text-text-dark mb-2">No Compliance Services Found</div>
                <p className="text-sm text-text-muted leading-relaxed mb-8 max-w-sm mx-auto">
                  We couldn't find any service matching "{searchTerm}". Try clearing your filters or search keywords.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-primary text-white text-xs uppercase tracking-wider font-extrabold rounded-xl hover:bg-[#1a4724] transition-all duration-300 shadow-sm"
                  >
                    Reset Filters
                  </button>
                  <a
                    href={`https://wa.me/917600049383?text=${encodeURIComponent(`Hi HK Finance, I couldn't find the service "${searchTerm}" on your directory. Can you help me?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 bg-bg-page border border-border text-text-dark hover:border-primary text-xs uppercase tracking-wider font-extrabold rounded-xl transition-all duration-300 block text-center"
                  >
                    Ask Custom Service
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
