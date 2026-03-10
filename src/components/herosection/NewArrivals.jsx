import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HiX } from "react-icons/hi";

const slides = [
  { image: "/images/softsilk1.webp", label: "Soft Silk Saree" },
  { image: "/images/softsilk2.webp", label: "Soft Silk Saree" },
  { image: "/images/softsilk3.webp", label: "Soft Silk Saree" },
];

const NewArrivals = () => {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get 2 visible cards (current and next, wrapping around)
  const firstCard = slides[current];
  const secondCard = slides[(current + 1) % slides.length];

  const renderCard = (card, keyPrefix) => (
    <div key={`${keyPrefix}-${current}`} className="animate-fadeSlideIn rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="overflow-hidden relative group">
        <img
          src={card.image}
          alt={card.label}
          loading="lazy"
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover
          group-hover:scale-105 transition-transform duration-300"
        />
        {/* Hover search icon */}
        <button
          onClick={() => setLightbox(card.image)}
          className="absolute top-3 right-3 w-10 h-10 bg-white/80 hover:bg-white
          rounded-full flex items-center justify-center shadow-md
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-10"
        >
          <IoSearchOutline className="text-gray-700 text-lg" />
        </button>
      </div>
      <div className="border-t border-gray-200 px-4 py-4">
        <p className="text-gray-900 font-bold text-sm sm:text-base md:text-lg">
          {card.label}
        </p>
      </div>
    </div>
  );

  return (
    <>
    <div id="new-arrivals" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-10 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">

        {/* Left Side - Text */}
        <div className="md:w-1/3 w-full">
          <p className="text-orange-500 font-medium text-sm sm:text-base mb-2">
            Krisar Silk Creations
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            New Arrivals
          </h2>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold
            px-8 py-3 rounded-full transition duration-300 text-sm sm:text-base mb-6">
            Shop Now
          </button>

          {/* Dots */}
          <div className="flex gap-2 mt-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                ${index === current ? "bg-gray-900 scale-110" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - 2 Visible Cards */}
        <div className="md:w-2/3 w-full">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {renderCard(firstCard, "card1")}
            {renderCard(secondCard, "card2")}
          </div>
        </div>

        {/* Slide-in animation */}
        <style>{`
          @keyframes fadeSlideIn {
            0% { opacity: 0; transform: translateX(40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-fadeSlideIn {
            animation: fadeSlideIn 0.5s ease-out forwards;
          }
        `}</style>

      </div>
    </div>

    {/* Lightbox Modal */}
    {lightbox && (
      <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        onClick={() => setLightbox(null)}>
        <button
          onClick={() => setLightbox(null)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40
          rounded-full flex items-center justify-center transition z-50"
        >
          <HiX className="text-white text-2xl" />
        </button>
        <img
          src={lightbox}
          alt="full view"
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
    </>
  );
};

export default NewArrivals;
