import React from "react";
import visionIcon from "/images/about/vision.png";
import missionIcon from "/images/about/Mission.png";

const Visionmission = () => {
  return (
    <div className="px-6 py-10 space-y-10">

      {/* Vision */}
      <div className="flex flex-col md:flex-row  items-center gap-6 bg-gray-200 rounded-2xl p-8">
        <img
          src={visionIcon}
          alt="Vision"
          className="w-20 h-20 object-contain"
        />

        <div>
          <h3 className="text-lg font-semibold mb-2">Vision</h3>
          <p className="text-black leading-relaxed">
            The vision of Krisar Silk Creations revolves around preserving and
            promoting the art of silk weaving while embracing innovation and
            contemporary design. They aim to create exquisite silk products
            that showcase the richness of Indian textiles and craftsmanship,
            catering to the discerning tastes of global clientele. Krisar Silk
            Creations strive to uphold the highest standards of quality,
            authenticity, and sustainability in their creations, ensuring each
            piece reflects their dedication to timeless elegance and cultural
            heritage.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="flex flex-col md:flex-row  items-center gap-6 bg-gray-200 rounded-2xl p-8">
        <img
          src={missionIcon}
          alt="Mission"
          className="w-20 h-20 object-contain"
        />

        <div>
          <h3 className="text-lg font-semibold mb-2">Mission</h3>
          <p className="text-black leading-relaxed">
            Krisar Silk Creations aim to innovate within the realm of
            traditional silk weaving techniques, while also promoting
            sustainability and ethical practices in their production processes.
            Their mission is to delight customers worldwide with unique,
            luxurious silk creations that blend timeless elegance with
            contemporary style.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Visionmission;