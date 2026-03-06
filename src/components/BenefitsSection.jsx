import React from "react";

const benefits = [
  { icon: "/images/benifitsilk1.png", label: "Ready To Shipping" },
  { icon: "/images/benifitsilk2.png", label: "100% Original Quality" },
  { icon: "/images/benifitsilk3.png", label: "Best Price Challenge" },
  { icon: "/images/benifitsilk4.png", label: "Timely Delivery" },
  { icon: "/images/benifitsilk5.png", label: "Supporting Artisans" },
  { icon: "/images/benifitsilk6.png", label: "Handwoven" },
  { icon: "/images/benifitsilk7.png", label: "Sustainable" },
  { icon: "/images/benifitsilk8.png", label: "Pure Silk" },
];

const BenefitsSection = () => {
  return (
    <div className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Image with Fixed/Parallax-like effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/bg_silk.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-8">
          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={item.icon} 
                  alt={item.label} 
                  loading="lazy"
                  className="w-full h-full object-contain filter invert brightness-200"
                />
              </div>
              <p className="text-yellow-400 font-bold text-sm sm:text-base lg:text-lg tracking-wide uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
