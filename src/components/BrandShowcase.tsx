import React from 'react';

const BrandShowcase: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      {/* For mobile: stack vertically, for tablet and up: grid */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {/* First Brand */}
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <img 
            src="/images/half1.png" 
            alt="AVON Cosmetics"
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Second Brand */}
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <img 
            src="/images/half2.png" 
            alt="Estee Lauder"
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;