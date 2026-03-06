import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const HeroBanner = () => {

const images = [
  "/images/herobanner1.webp",
  "/images/herobanner2.webp"
];

const [current, setCurrent] = useState(0);

useEffect(() => {

const interval = setInterval(() => {
  setCurrent((prev) => (prev + 1) % images.length);
}, 5000);

return () => clearInterval(interval);

}, []);

const nextSlide = () => {
  setCurrent((prev) => (prev + 1) % images.length);
};

const prevSlide = () => {
  setCurrent((prev) => (prev - 1 + images.length) % images.length);
};

return (

<div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">

{/* Images */}
{images.map((img, index) => (

<img
key={index}
src={img}
alt="banner"
className={`absolute object-cover transition-opacity duration-1000 ease-in-out
${index === current ? "opacity-100" : "opacity-0"}`}
/>

))}

{/* LEFT ARROW */}
<button
onClick={prevSlide}
className="absolute left-3 sm:left-5 md:left-8 top-1/2 -translate-y-1/2
bg-white/90 hover:bg-white
w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
rounded-full flex items-center justify-center
shadow-lg transition-transform hover:scale-110"
>
<SlArrowLeft className="text-gray-700 text-xs sm:text-sm md:text-lg" />
</button>

{/* RIGHT ARROW */}
<button
onClick={nextSlide}
className="absolute right-3 sm:right-5 md:right-8 top-1/2 -translate-y-1/2
bg-white/90 hover:bg-white
w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
rounded-full flex items-center justify-center
shadow-lg transition-transform hover:scale-110"
>
<SlArrowRight className="text-gray-700 text-xs sm:text-sm md:text-lg" />
</button>

</div>

);

};

export default HeroBanner;


// import React, { useState, useEffect } from "react";
// import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// const HeroBanner = () => {

//   const images = [
//     "/images/herobanner1.webp",
//     "/images/herobanner2.webp"
//   ];

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {

//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);

//   }, [current]);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (

//     <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[80vh] overflow-hidden">

//       {/* SLIDER TRACK */}
//       <div
//         className="flex h-full transition-transform duration-1000 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >

//         {images.map((img, index) => (

//           <img
//             key={index}
//             src={img}
//             alt="banner"
//             className="w-full h-full object-cover flex-shrink-0"
//           />

//         ))}

//       </div>

//       {/* LEFT ARROW */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 
//         bg-white w-10 h-10 md:w-12 md:h-12 rounded-full 
//         flex items-center justify-center shadow-lg 
//         hover:scale-110 transition"
//       >
//         <SlArrowLeft />
//       </button>

//       {/* RIGHT ARROW */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 
//         bg-white w-10 h-10 md:w-12 md:h-12 rounded-full 
//         flex items-center justify-center shadow-lg 
//         hover:scale-110 transition"
//       >
//         <SlArrowRight />
//       </button>

//     </div>

//   );

// };

// export default HeroBanner;