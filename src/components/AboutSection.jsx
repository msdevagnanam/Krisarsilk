import React from "react";

const AboutSection = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

        {/* Left - Text Content */}
        <div className="md:w-1/2">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
            Krisar Silk Creations
            <sup className="text-base sm:text-lg font-normal ml-1">®</sup>
          </h2>

          <h3 className="text-red-600 font-semibold italic text-sm sm:text-base lg:text-lg mb-5">
            Manufacturer of pure wedding silk sarees
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Krisar Silk Creations are renowned for their exceptional craftsmanship & high-quality
            pure silk sarees. They specialize in creating premium wedding pure silk sarees. Often
            incorporating intricate designs and patterns that highlight traditional techniques.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Each Piece from Krisar Silk Creations reflects commitment to elegance and craftsmanship,
            making them a favoured choice among those whose appreciate fine textiles & unique design.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            Krisar Silk Sarees are known for their vibrant colors, fine detailing and superior
            finish, making them a symbol of elegance and timeless beauty.
          </p>

          <button className="border-2 border-orange-400 text-gray-800 font-medium
            px-8 py-2.5 rounded-full hover:bg-orange-400 hover:text-white
            transition duration-300 text-sm sm:text-base">
            Read More
          </button>

        </div>

        {/* Right - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/Manufacturing.webp"
            alt="Manufacturing Silks"
            loading="lazy"
            className="w-full max-w-md lg:max-w-lg object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
