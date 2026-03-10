import React from "react";

const VisitUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-10 py-12 sm:py-16 lg:py-20 flex flex-col md:flex-row min-h-[400px] sm:min-h-[500px] lg:min-h-[700px]">
      
      {/* Left Column - Content */}
      <div className="w-full md:w-1/2 bg-[#f4f7f9] flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4">
          Visit Us
        </h2>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-6">
          Krisar Silk Creations
        </h3>
        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-md mx-auto">
          Manufacturer of exclusive pure wedding silk sarees
        </p>
        <div className="text-gray-500 font-semibold tracking-wider text-sm sm:text-base">
          BOOK YOUR <span className="text-orange-500">APPOINTMENT</span>
        </div>
      </div>

      {/* Right Column - Map */}
      <div className="w-full md:w-1/2 h-[300px] md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11354.3!2d79.2882!3d12.6714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babdec4d1e00a91%3A0xc6cb1c26b71f98d7!2sKrisar%20Silk%20Creations!5e0!3m2!1sen!2sin!4v1709730000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Krisar Silk Creations Location"
          className="w-full h-full grayscale-[0.2] contrast-[1.1]"
        ></iframe>
      </div>

    </div>
  );
};

export default VisitUs;
