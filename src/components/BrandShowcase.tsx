import React from 'react';

const BrandShowcase: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      {/* Title Section with decorative lines */}
      <div className="flex items-center justify-center mb-12">
        <div className="h-[1px] w-20 bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl text-center px-4 text-gray-900">
          OUR MODELS
        </h2>
        <div className="h-[1px] w-20 bg-gray-300"></div>
      </div>

      {/* For mobile: stack vertically, for tablet and up: grid */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {/* First Brand */}
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <img 
            src="/images/half1.webp" 
            alt="AVON Cosmetics"
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Second Brand */}
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <img 
            src="/images/half2.webp" 
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