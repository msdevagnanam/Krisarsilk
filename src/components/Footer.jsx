import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#f8f9fa] pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1 - Logo & About */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <img 
              src="/images/logo.webp" 
              alt="Krisar Silk Logo" 
              className="w-24 mb-6"
            />
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xs">
              KSC is one of the leading manufacturer of exclusive wedding pure silk sarees. 
              Weaving beautiful stories more than 6 decades.
            </p>
          </div>

          {/* Column 2 - Shop Now */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-gray-800 font-bold text-lg mb-6 tracking-wide">
              Shop Now
            </h4>
            <ul className="space-y-4 text-gray-500 text-sm sm:text-base">
              <li className="hover:text-black cursor-pointer transition">Exclusive Wedding Pure Silk Sarees</li>
              <li className="text-orange-500 font-medium cursor-pointer transition">Traditional Pure Silk Sarees</li>
              <li className="hover:text-black cursor-pointer transition">Designer Pure Silk Sarees</li>
              <li className="hover:text-black cursor-pointer transition">Fancy Pure Silk Sarees</li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-gray-800 font-bold text-lg mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-500 text-sm sm:text-base">
              <li className="hover:text-black cursor-pointer transition">Home</li>
              <li className="hover:text-black cursor-pointer transition">About</li>
              <li className="hover:text-black cursor-pointer transition">Our Products</li>
              <li className="hover:text-black cursor-pointer transition">Silk Sarees</li>
              <li className="hover:text-black cursor-pointer transition">New Arrivals</li>
              <li className="hover:text-black cursor-pointer transition">Contact</li>
              <li className="hover:text-black cursor-pointer transition">Refund Policy</li>
            </ul>
          </div>

          {/* Column 4 - QR Code */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-gray-800 font-bold text-lg mb-6 tracking-wide">
              QR Code
            </h4>
            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
              {/* Placeholder QR Code image */}
              <img 
                src="/images/footer_qr.png" 
                alt="QR Code" 
                className="w-32 h-32 lg:w-40 lg:h-40 object-contain"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © 2026 Krisar Silk Creations, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
