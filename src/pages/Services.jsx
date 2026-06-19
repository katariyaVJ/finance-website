import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/cards/ServiceCard';
import { serviceCategories, servicesData } from '../data/services';

export default function Services() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Handle redirect from mega menu with category in state
  useEffect(() => {
    if (location.state && location.state.category) {
      setSelectedCategory(location.state.category);
      // Clear state so reload doesn't force category
      window.history.replaceState({}, document.title);
    }
  }, [location]);

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
    <div className="bg-bg-page pt-20">
      
      {/* Search Hero Section (Green Background) */}
      <section className="bg-primary text-white py-5 md:py-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <circle cx="20" cy="20" r="50" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-2xl md:text-3.5xl font-extrabold mb-1 font-display text-white">
            80+ Business Compliance Services
          </h1>
          <p className="text-xs md:text-sm text-primary-light max-w-lg mx-auto mb-3 opacity-90">
            Search our comprehensive database of company registration, taxation filing, legal drafting, and licensing certifications.
          </p>

          {/* Live Search Input Bar */}
          <div className="relative max-w-md mx-auto shadow-md rounded-lg overflow-hidden bg-white">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-mid">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search e.g. GST registration, Pvt Ltd, FSSAI..."
              className="w-full pl-9 pr-10 py-2 bg-white text-text-dark placeholder:text-gray-mid border-0 outline-none focus:ring-0 text-xs md:text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-bold text-primary hover:text-gold"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Category Filter - Sidebar (Desktop) / Horizontal Row (Mobile) */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 self-start flex flex-col space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar pb-4 pr-1">
            
            {/* Category Title */}
            <div className="hidden lg:flex items-center space-x-2 text-text-dark font-bold text-xs uppercase tracking-widest pb-2 mb-2 border-b border-border">
              <SlidersHorizontal className="h-4 w-4 text-primary" />
              <span>Service Categories</span>
            </div>

            {/* List */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-2 no-scrollbar scroll-smooth">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center transition-all duration-200 flex-shrink-0 lg:flex-shrink lg:w-full min-h-[40px]
                  ${selectedCategory === 'all' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'bg-white hover:bg-primary-light text-text-muted hover:text-primary border border-border'}`}
              >
                All Services
              </button>
              
              {Object.values(serviceCategories).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center transition-all duration-200 flex-shrink-0 lg:flex-shrink lg:w-full min-h-[40px]
                    ${selectedCategory === cat.id 
                      ? 'bg-primary text-white shadow-sm' 
                      : 'bg-white hover:bg-primary-light text-text-muted hover:text-primary border border-border'}`}
                >
                  {cat.title}
                </button>
              ))}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    href={`https://wa.me/917600049383?text=Hi%20HK%20Finance,%20I%20could%27t%20find%20the%2520service%2520"${encodeURIComponent(searchTerm)}"%2520on%2520your%2520directory.%2520Can%2520you%2520help%2520me?`}
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
