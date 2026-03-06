import React, { useState, useEffect } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <div
      className={`w-full z-50 transition-all duration-300 
      ${scrolled ? "fixed top-0 bg-white shadow-md py-3" : "relative bg-white shadow-md py-3"}`}
    >

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* MOBILE LOGO (ONLY ONE LOGO FOR MOBILE) */}
        <div className="md:hidden">
          <img
            src="/images/logo.webp"
            alt="logo"
            className="w-20"
          />
        </div>

        {/* DESKTOP BEFORE SCROLL */}
        {!scrolled && (
          <>
            {/* LEFT MENU */}
            <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

              <li className="relative cursor-pointer group">
                Home
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="relative cursor-pointer group">
                Our Products
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="relative cursor-pointer group">
                Silks Sarees
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="relative cursor-pointer group">
                New Arrivals
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>

            </ul>

            {/* CENTER LOGO */}
            <div className="hidden md:block">
              <img
                src="/images/logo.webp"
                alt="logo"
                className="w-20"
              />
            </div>

            {/* RIGHT CONTACT */}
            <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">

              <div className="flex items-center gap-2">
                <LuPhoneCall className="text-green-600 w-5 h-5"/>
                <span className="cursor-pointer hover:text-black">
                  +91 9443136387
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-green-600 w-5 h-5"/>
                <span className="cursor-pointer hover:text-black">
                  +91 9443136387
                </span>
              </div>

            </div>
          </>
        )}

        {/* DESKTOP AFTER SCROLL */}
        {scrolled && (
          <>
            {/* LEFT LOGO */}
            <div className="hidden md:block">
              <img
                src="/images/logo.webp"
                alt="logo"
                className="w-16"
              />
            </div>

            {/* RIGHT MENU */}
            <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

              <li className="relative cursor-pointer group">
                Home
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="relative cursor-pointer group">
                About
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="relative cursor-pointer group">
                Our Products
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="relative cursor-pointer group">
                Silks Sarees
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="relative cursor-pointer group">
                New Arrivals
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="relative cursor-pointer group">
                Contact
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>

            </ul>
          </>
        )}

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          {menuOpen ? (
            <HiX size={28} onClick={() => setMenuOpen(false)} />
          ) : (
            <HiMenu size={28} onClick={() => setMenuOpen(true)} />
          )}
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">

            <li>Home</li>
            <li>About</li>
            <li>Our Products</li>
            <li>Silks Sarees</li>
            <li>New Arrivals</li>
            <li>Contact</li>

          </ul>

        </div>
      )}

    </div>

  );
};

export default Navbar;