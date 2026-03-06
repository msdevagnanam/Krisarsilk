import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const HeroBanner = () => {

  const images = [
    "/images/herobanner1.webp",
    "/images/herobanner2.webp"
  ];

  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const nextIndex = (current + 1) % images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setAnimKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setAnimKey((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setAnimKey((prev) => prev + 1);
  };

  return (

    <div id="home" className="relative w-full lg:h-[60vh] sm:h-[50vh] h-[15vh] overflow-hidden">

      {/* Zoom-fade keyframes */}
      <style>{`
        @keyframes zoomFade {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      `}</style>

      {/* Bottom layer: NEXT image (always visible underneath) */}
      <img
        src={images[nextIndex]}
        alt="banner"
        className="w-full h-auto absolute inset-0 object-cover"
        style={{ zIndex: 1 }}
      />

      {/* Top layer: CURRENT image with zoom + fade out */}
      <img
        key={`zoom-${current}-${animKey}`}
        src={images[current]}
        alt="banner"
        className="w-full h-auto absolute inset-0 object-cover"
        style={{
          zIndex: 2,
          animation: `zoomFade 5s ease-in-out forwards`,
        }}
      />

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 md:left-8 top-1/2 -translate-y-1/2
        bg-white/90 hover:bg-white
        w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
        rounded-full flex items-center justify-center
        shadow-lg transition-transform hover:scale-110 z-10"
      >
        <SlArrowLeft className="text-gray-700 text-xs sm:text-sm md:text-lg" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:left-auto sm:right-5 md:right-8 top-1/2 -translate-y-1/2
        bg-white/90 hover:bg-white
        w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
        rounded-full flex items-center justify-center
        shadow-lg transition-transform hover:scale-110 z-10"
      >
        <SlArrowRight className="text-gray-700 text-xs sm:text-sm md:text-lg" />
      </button>

    </div>

  );

};

export default HeroBanner;