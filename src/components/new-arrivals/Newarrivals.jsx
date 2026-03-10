import React from "react";
import { Link } from "react-router-dom";

const products = [
{ id: 1, img: "/images/new-arrivals/New 1.webp", link: "/Newarrivalspage" },
{ id: 2, img: "/images/new-arrivals/New 2.webp", link: "/Newarrivalspage" },
{ id: 3, img: "/images/new-arrivals/New 3.webp", link: "/Newarrivalspage" },
{ id: 4, img: "/images/new-arrivals/New 4.webp", link: "/Newarrivalspage" },
{ id: 5, img: "/images/new-arrivals/New 5.webp", link: "/Newarrivalspage" },
{ id: 6, img: "/images/new-arrivals/New 6.webp", link: "/Newarrivalspage" },
{ id: 7, img: "/images/new-arrivals/New 7.webp", link: "/Newarrivalspage" },
{ id: 8, img: "/images/new-arrivals/New 8.webp", link: "/Newarrivalspage" },
{ id: 9, img: "/images/new-arrivals/New 9.webp", link: "/Newarrivalspage" },
{ id: 10, img: "/images/new-arrivals/New 10.webp", link: "/Newarrivalspage" },
{ id: 11, img: "/images/new-arrivals/New 11.webp", link: "/Newarrivalspage" },
{ id: 12, img: "/images/new-arrivals/New 12.webp", link: "/Newarrivalspage" },
];

const Newarrivals = () => {
  return (
    <div>

      {/* Banner */}
      <div
        className="w-full h-[180px] md:h-[220px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/new-arrivals/new-arrivals-banner.png')" }}
      >
        <div className="max-w-7xl mx-auto w-full px-6">

          <h1 className="text-white text-3xl md:text-5xl font-bold">
            New Arrivals
          </h1>

          <p className="text-white mt-2 text-sm md:text-base">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="font-semibold">New Arrivals</span>
          </p>

        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto py-12 px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {products.map((product) => (
            <Link to={product.link} key={product.id}>
              <div className="bg-white rounded-md shadow-sm overflow-hidden cursor-pointer">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={product.img}
                    alt={`New Arrival ${product.id}`}
                    className="w-full h-[420px] object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Newarrivals;