import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Exclusive Wedding Pure Silk Sarees",
    img: "/images/our-products/exclusive-wedding-pure-silk.webp",
    link: "/Ourproductspage"
  },
  {
    id: 2,
    name: "Traditional Pure Silk Sarees",
    img: "/images/our-products/traditional-pure-silk.webp",
    link: "/Ourproductspage"
  },
  {
    id: 3,
    name: "Designer Pure Silk Sarees",
    img: "/images/our-products/designer-pure-silk.webp",
    link: "/Ourproductspage"
  },
  {
    id: 4,
    name: "Fancy Pure Silk Sarees",
    img: "/images/our-products/fancy-pure-silk.webp",
    link: "/Ourproductspage"
  },
];

const Ourproducts = () => {
  return (
    <div>

      {/* Banner */}
      <div
        className="w-full h-[180px] md:h-[220px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/our-products/our-products-banner.png')" }}
      >
        <div className="max-w-7xl mx-auto w-full px-6">

          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Our Products
          </h1>

          <p className="text-white mt-2 text-sm md:text-base">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="font-semibold">Our Products</span>
          </p>

        </div>
      </div>

      {/* Products Grid */}
     <div className="max-w-5xl mx-auto py-12 px-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

    {products.map((product) => (
      <Link to={product.link} key={product.id}>
        <div className="bg-white rounded-md shadow-sm overflow-hidden cursor-pointer">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[360px] md:h-[420px] lg:h-[480px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Title */}
          <div className="p-3 text-sm text-black">
            {product.name}
          </div>

        </div>
      </Link>
    ))}

  </div>
</div>
    </div>
  );
};

export default Ourproducts;