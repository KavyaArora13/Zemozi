import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mb-8">
          {/* Get in Touch Section */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <h3 className="text-yellow-400 text-lg sm:text-xl font-medium mb-3 sm:mb-4">
              GET IN TOUCH
            </h3>
            <div className="space-y-2">
              <p className="text-sm sm:text-base">Call us at</p>
              <p className="text-base sm:text-lg">6375310709</p>
              <p className="text-sm sm:text-base">Mon to Fri: 9:00AM - 9:00PM</p>
              <p className="text-sm sm:text-base">Saturday: 9:00AM - 6:00PM</p>
            </div>
          </div>

          {/* Support Section */}
          <div className="col-span-1">
            <h3 className="text-yellow-400 text-base sm:text-lg font-medium mb-3 sm:mb-4">
              Support
            </h3>
            <p className="text-sm sm:text-base">Sathi@zimozi.co</p>
          </div>

          {/* First Careers Section */}
          <div className="col-span-1">
            <h3 className="text-yellow-400 text-base sm:text-lg font-medium mb-3 sm:mb-4">
              Careers
            </h3>
            <p className="text-sm sm:text-base">We're hiring!</p>
          </div>

          {/* Second Careers Section - Hidden on mobile, visible from md up */}
          <div className="hidden md:block col-span-1">
            <h3 className="text-yellow-400 text-base sm:text-lg font-medium mb-3 sm:mb-4">
              Careers
            </h3>
            <p className="text-sm sm:text-base">ayush.kumar@zimozi.co</p>
          </div>

          {/* Influencer Section - Hidden on mobile, visible from lg up */}
          <div className="hidden lg:block col-span-1">
            <h3 className="text-yellow-400 text-base sm:text-lg font-medium mb-3 sm:mb-4">
              Influencer collab
            </h3>
            <p className="text-sm sm:text-base">Join Us</p>
          </div>
        </div>

        {/* Mobile Additional Links - Visible only on mobile and sm screens */}
        <div className="grid grid-cols-2 gap-6 mb-8 md:hidden">
          <div className="col-span-1">
            <h3 className="text-yellow-400 text-base font-medium mb-3">
              Careers
            </h3>
            <p className="text-sm">ayush.kumar@zimozi.co</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-yellow-400 text-base font-medium mb-3">
              Influencer collab
            </h3>
            <p className="text-sm">Join Us</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 sm:pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            Kavya Arora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;