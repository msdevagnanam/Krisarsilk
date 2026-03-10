import React from "react";
import { Link } from "react-router-dom";

const products = [
{ id: 1, img: "/images/silk-sarees/silk-sarees-1.webp", link: "/Silksareespage" },
{ id: 2, img: "/images/silk-sarees/silk-sarees-2.webp", link: "/Silksareespage" },
{ id: 3, img: "/images/silk-sarees/silk-sarees-3.webp", link: "/Silksareespage" },
{ id: 4, img: "/images/silk-sarees/silk-sarees-4.webp", link: "/Silksareespage" },
{ id: 5, img: "/images/silk-sarees/silk-sarees-5.webp", link: "/Silksareespage" },
{ id: 6, img: "/images/silk-sarees/silk-sarees-6.webp", link: "/Silksareespage" },
{ id: 7, img: "/images/silk-sarees/silk-sarees-7.webp", link: "/Silksareespage" },
{ id: 8, img: "/images/silk-sarees/silk-sarees-8.webp", link: "/Silksareespage" },
{ id: 9, img: "/images/silk-sarees/silk-sarees-9.webp", link: "/Silksareespage" },
{ id: 10, img: "/images/silk-sarees/silk-sarees-10.webp", link: "/Silksareespage" },

{ id: 11, img: "/images/silk-sarees/silk-sarees-11.webp", link: "/Silksareespage" },
{ id: 12, img: "/images/silk-sarees/silk-sarees-12.webp", link: "/Silksareespage" },
{ id: 13, img: "/images/silk-sarees/silk-sarees-13.webp", link: "/Silksareespage" },
{ id: 14, img: "/images/silk-sarees/silk-sarees-14.webp", link: "/Silksareespage" },
{ id: 15, img: "/images/silk-sarees/silk-sarees-15.webp", link: "/Silksareespage" },

{ id: 16, img: "/images/silk-sarees/silk-sarees-16.webp", link: "/Silksareespage" },
{ id: 17, img: "/images/silk-sarees/silk-sarees-17.webp", link: "/Silksareespage" },
{ id: 18, img: "/images/silk-sarees/silk-sarees-18.webp", link: "/Silksareespage" },
{ id: 19, img: "/images/silk-sarees/silk-sarees-19.webp", link: "/Silksareespage" },
{ id: 20, img: "/images/silk-sarees/silk-sarees-20.webp", link: "/Silksareespage" },

{ id: 21, img: "/images/silk-sarees/silk-sarees-21.webp", link: "/Silksareespage" },
{ id: 22, img: "/images/silk-sarees/silk-sarees-22.webp", link: "/Silksareespage" },
{ id: 23, img: "/images/silk-sarees/silk-sarees-23.webp", link: "/Silksareespage" },
{ id: 24, img: "/images/silk-sarees/silk-sarees-24.webp", link: "/Silksareespage" },
{ id: 25, img: "/images/silk-sarees/silk-sarees-25.webp", link: "/Silksareespage" },

{ id: 26, img: "/images/silk-sarees/silk-sarees-26.webp", link: "/Silksareespage" },
{ id: 28, img: "/images/silk-sarees/silk-sarees-28.webp", link: "/Silksareespage" },
{ id: 29, img: "/images/silk-sarees/silk-sarees-29.webp", link: "/Silksareespage" },
{ id: 30, img: "/images/silk-sarees/silk-sarees-30.webp", link: "/Silksareespage" },

{ id: 31, img: "/images/silk-sarees/silk-sarees-31.webp", link: "/Silksareespage" },
{ id: 32, img: "/images/silk-sarees/silk-sarees-32.webp", link: "/Silksareespage" },
{ id: 33, img: "/images/silk-sarees/silk-sarees-33.webp", link: "/Silksareespage" },
{ id: 34, img: "/images/silk-sarees/silk-sarees-34.webp", link: "/Silksareespage" },
{ id: 35, img: "/images/silk-sarees/silk-sarees-35.webp", link: "/Silksareespage" },

{ id: 36, img: "/images/silk-sarees/silk-sarees-36.webp", link: "/Silksareespage" },
{ id: 37, img: "/images/silk-sarees/silk-sarees-37.webp", link: "/Silksareespage" },
{ id: 38, img: "/images/silk-sarees/silk-sarees-38.webp", link: "/Silksareespage" },
{ id: 39, img: "/images/silk-sarees/silk-sarees-39.webp", link: "/Silksareespage" },
{ id: 40, img: "/images/silk-sarees/silk-sarees-40.webp", link: "/Silksareespage" },

{ id: 41, img: "/images/silk-sarees/silk-sarees-41.webp", link: "/Silksareespage" },
{ id: 42, img: "/images/silk-sarees/silk-sarees-42.webp", link: "/Silksareespage" },
{ id: 43, img: "/images/silk-sarees/silk-sarees-43.webp", link: "/Silksareespage" },
{ id: 44, img: "/images/silk-sarees/silk-sarees-44.webp", link: "/Silksareespage" },
{ id: 45, img: "/images/silk-sarees/silk-sarees-45.webp", link: "/Silksareespage" },

{ id: 46, img: "/images/silk-sarees/silk-sarees-46.webp", link: "/Silksareespage" },
{ id: 47, img: "/images/silk-sarees/silk-sarees-47.webp", link: "/Silksareespage" },
{ id: 48, img: "/images/silk-sarees/silk-sarees-48.webp", link: "/Silksareespage" },
{ id: 49, img: "/images/silk-sarees/silk-sarees-49.webp", link: "/Silksareespage" },
];

const Silksarees = () => {
  return (
    <div>

      {/* Banner */}
      <div
        className="w-full h-[180px] md:h-[220px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/silk-sarees/silk-sarees-banner.png')" }}
      >
        <div className="max-w-7xl mx-auto w-full px-6">

          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Silk Sarees
          </h1>

          <p className="text-white mt-2 text-sm md:text-base">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="font-semibold">Silk Sarees</span>
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
                    alt={`Silk Saree ${product.id}`}
className="w-full h-[420px] object-contain transition-transform duration-500 hover:scale-110"                  />
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Silksarees;