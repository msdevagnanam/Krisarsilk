import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HiX } from "react-icons/hi";

const products = [
  { image: "/images/kanchisilk1.webp", label: "Kanchi Silk Saree" },
  { image: "/images/kanchisilk2.webp", label: "Kanchi Silk Saree" },
  { image: "/images/kanchisilk3.webp", label: "Kanchi Silk Saree" },
  { image: "/images/kanchisilk4.webp", label: "Kanchi Silk Saree" },
];

const BestSelling = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
    <div id="best-selling" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-10 py-12 sm:py-16 lg:py-20">

      {/* Heading */}
      <p className="text-orange-500 font-medium text-sm sm:text-base mb-2">Shop Now</p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10">
        Best Selling
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {products.map((item, index) => (
          <div key={index} className="cursor-pointer group rounded-2xl overflow-hidden shadow-lg bg-white">

            {/* Image */}
            <div className="overflow-hidden relative">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] object-cover 
                group-hover:scale-105 transition-transform duration-300"
              />
              {/* Hover search icon */}
              <button
                onClick={() => setLightbox(item.image)}
                className="absolute top-3 right-3 w-10 h-10 bg-white/80 hover:bg-white
                rounded-full flex items-center justify-center shadow-md
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-10"
              >
                <IoSearchOutline className="text-gray-700 text-lg" />
              </button>
            </div>

            {/* Label */}
            <div className="border-t border-gray-200 px-4 py-4">
              <p className="text-gray-900 font-bold text-sm sm:text-base">
                {item.label}
              </p>
            </div>

          </div>
        ))}
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

export default BestSelling;
