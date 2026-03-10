import React from "react";
import { Link } from "react-router-dom";

const Aboutintroduction = () => {
  return (
    <div>
      {/* Banner Section */}  
<div
  className="w-full h-[180px] md:h-[220px] flex items-center bg-cover bg-center"
  style={{ backgroundImage: "url('/images/about/about-banner.png')" }}
>
  <div className="max-w-7xl mx-auto w-full px-6">
    
    <h1 className="text-white text-3xl md:text-5xl font-bold">
      About Us
    </h1>

    <p className="text-white mt-2 text-sm md:text-base">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <span className="mx-2">›</span>
      <span className="font-semibold">About</span>
    </p>
 
  </div>
</div>

      {/* About Section */}
      <div className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Krisar Silks Creations
            </h2>

            <p className="text-black leading-relaxed mb-4">
              Our company Krisar Silk Creations are manufacturers of ladies silk
              sarees. We are enlisted amongst the reckoned names in the industry,
              offering attractively designed range of Ladies Silk Sarees.
            </p>

            <p className="text-black leading-relaxed">
              Our products are available in different standard lengths and can be
              easily draped. They are designed and developed as per the latest
              fashion trends prevailing in the industry. Ladies Silk Sarees are
              charged at cost-effective market rates and are available in various
              colors and patterns.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/about/intro-img.webp"
              alt="IntroImg"
              className="w-[280px] md:w-[420px]"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Aboutintroduction;