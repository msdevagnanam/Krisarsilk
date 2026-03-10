import React from "react";

const Quality = () => {
  const qualityItems = [
    {
      icon: "/images/about/type-of-silk.png",
      title: "Type of Silk",
      desc: "Different types of silk such as Mulberry silk, Tussar silk, and Kanjivaram silk have distinct qualities in terms of texture, sheen, and durability.",
    },
    {
      icon: "/images/about/weaving-technique.png",
      title: "Weaving Technique",
      desc: "Handwoven sarees are generally considered to be of higher quality than machine-made ones due to the craftsmanship involved.",
    },
    {
      icon: "/images/about/thread-count.png",
      title: "Thread Count",
      desc: "Higher thread count generally indicates finer and more durable fabric.",
    },
    {
      icon: "/images/about/color-fastness.png",
      title: "Color Fastness",
      desc: "Good quality silk sarees should have strong color retention, meaning the colors remain vibrant over time.",
    },
    {
      icon: "/images/about/finishing-and-detailing.png",
      title: "Finishing and Detailing",
      desc: "Intricate designs, embroidery, and embellishments add to the overall quality and aesthetic appeal of the saree.",
    },
  ];

  return (
    <section className="bg-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">Quality</h2>
        <p className="text-gray-600 mb-12">
          The quality of silk sarees can vary significantly depending on several factors:
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {qualityItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />

              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;