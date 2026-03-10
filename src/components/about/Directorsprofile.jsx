import React from "react";

const Directorsprofile = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      
      <h2 className="text-3xl font-semibold text-gray-800 mb-10">
        Director Profiles
      </h2>

      {/* Profile 1 */}
      <div className="flex flex-col md:flex-row md:items-start gap-4 mb-10">
        
        <img
          src="/images/about/krishnamoorthy-founder.webp"
          alt="founder"
          className="w-14 h-14 rounded-full border border-orange-400"
        />

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">
            KKEV Krishnamoorthy (1957–2021)
          </h3>

          <p className="text-black mt-2 leading-relaxed">
            KKEV Krishnamoorthy is the founder of Krisar Silk Creations. He
            established the company with the vision of producing high-quality
            silk fabrics and garments that blend traditional craftsmanship with
            modern designs. Krisar Silk Creations has become renowned for its
            exquisite creations and has carved a niche in the silk industry
            under Krishnamoorthy's leadership.
          </p>
        </div>

        <span className="text-orange-500 font-medium md:ml-6">
          Founder
        </span>
      </div>

      {/* Profile 2 */}
      <div className="flex flex-col md:flex-row md:items-start gap-4 mb-10">

        <img
          src="/images/about/MD.webp"
          alt="MD"
          className="w-14 h-14 rounded-full border border-orange-400"
        />

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">
            K.K.Rajan
          </h3>

          <p className="text-balck mt-2 leading-relaxed">
            K.K. Rajan is the Managing Director of Krisar Silk Creations. He
            plays a crucial role in overseeing the operations and strategic
            direction of the company. Under his leadership, Krisar Silk
            Creations continues to uphold its reputation for producing fine
            silk fabrics and garments, blending traditional techniques with
            contemporary designs.
          </p>
        </div>

        <span className="text-orange-500 font-medium md:ml-6">
          Managing Director
        </span>
      </div>

      {/* Profile 3 */}
      <div className="flex flex-col md:flex-row md:items-start gap-4">

        <img
          src="/images/about/Director.webp"
          alt="director"
          className="w-14 h-14 rounded-full border border-orange-400"
        />

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">
            Sindhu Rajan
          </h3>

          <p className="text-black mt-2 leading-relaxed">
            Sindhu Rajan is the Director of Krisar Silk Creations, a role that
            involves overseeing the operations and creative direction of the
            company, particularly in the realm of silk creations.
          </p>
        </div>

        <span className="text-orange-500 font-medium md:ml-6">
          Director of Krisar Silk Creations
        </span>
      </div>

    </div>
  );
};

export default Directorsprofile;