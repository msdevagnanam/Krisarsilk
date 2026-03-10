import React from "react";

const Silkcreation = () => {
  return (
    <div id="silks" className="relative max-w-7xl mx-auto max-md:mx-4 mt-10 sm:mt-16 lg:mt-20 overflow-hidden rounded-lg shadow-lg">

      {/* Background Image */}
      <img
        src="/images/krisarsilks_creation.webp"
        alt="banner"
        loading="lazy"
        className="w-full h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">

        {/* Logo */}
        <img
          src="/images/logo.webp"
          alt="logo"
          className="w-12 sm:w-14 md:w-16 lg:w-20 mb-3 sm:mb-4"
        />

        {/* Title */}
        <h2 className="text-yellow-300 font-semibold 
        text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">
          Krisar Silk Creations
        </h2>

        {/* Subtitle */}
        <h3 className="text-white italic font-semibold 
        text-sm sm:text-base md:text-lg lg:text-xl mb-3">
          Manufacturers and whole seller of
        </h3>

        {/* Main Heading */}
        <h1 className="text-white italic font-semibold
        text-xl sm:text-2xl md:text-4xl lg:text-6xl
        leading-tight max-w-4xl">
          exclusive pure wedding silk sarees
        </h1>

        {/* Button */}
        <button
          className="mt-5 sm:mt-6 
          border-2 border-orange-700 
          text-white font-semibold
          px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4
          rounded-full hover:bg-orange-700
          transition duration-300"
        >
          Shop Now
        </button>

      </div>
    </div>
  );
};

export default Silkcreation;