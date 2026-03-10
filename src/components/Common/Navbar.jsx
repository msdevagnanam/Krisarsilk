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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Products", href: "/ourproducts" },
    { name: "Silksarees", href: "/silksarees" },
    { name: "New Arrivals", href: "/newarrivals" },
    { name: "Contact", href: "/contacts" },
  ];

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
            <ul className="hidden md:flex gap-8 text-gray-700 font-medium whitespace-nowrap">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.name} className="relative cursor-pointer group">
                  <a href={link.href}>{link.name}</a>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
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
              {navLinks.map((link) => (
                <li key={link.name} className="relative cursor-pointer group">
                  <a href={link.href}>{link.name}</a>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
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
        <div className="md:hidden bg-white border-t transition-all duration-300 overflow-hidden animate-fadeIn fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] z-50">
          
          <div className="flex flex-col h-full">
            <ul className="flex flex-col items-center gap-6 py-10 text-gray-700 font-medium text-lg">
              {navLinks.map((link) => (
                <li key={link.name} onClick={() => setMenuOpen(false)}>
                  <a href={link.href} className="hover:text-black transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t p-8 bg-gray-50">
              <p className="text-center text-gray-500 mb-6 font-semibold uppercase tracking-wider text-sm">Contact Us</p>
              <div className="flex flex-col gap-5 items-center">
                <div className="flex items-center gap-3 text-gray-700">
                  <LuPhoneCall className="text-green-600 w-6 h-6"/>
                  <span className="text-lg">+91 9443136387</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaWhatsapp className="text-green-600 w-6 h-6"/>
                  <span className="text-lg">+91 9443136387</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

    </div>

  );
};

export default Navbar;