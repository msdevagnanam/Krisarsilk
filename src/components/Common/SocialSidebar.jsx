import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: <FaXTwitter />,
      color: "bg-black",
      label: "Twitter/X",
      href: "#",
    },
    {
      icon: <FaInstagram />,
      color: "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600",
      label: "Instagram",
      href: "#",
    },
    {
      icon: <FaYoutube />,
      color: "bg-[#FF0000]",
      label: "YouTube",
      href: "#",
    },
    {
      icon: <FaFacebookF />,
      color: "bg-[#1877F2]",
      label: "Facebook",
      href: "#",
    },
    {
      icon: <FaWhatsapp />,
      color: "bg-[#25D366]",
      label: "WhatsApp",
      href: "#",
    },
  ];

  return (
    <div className="fixed bottom-4 right-2 md:bottom-auto md:right-0 md:top-1/2 md:-translate-y-1/2 flex flex-col z-40 items-center justify-center gap-1 md:gap-0 bg-white/20 backdrop-blur-sm md:bg-transparent p-1 md:p-0 rounded-xl md:rounded-none shadow-xl md:shadow-none border border-white/30 md:border-none">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.label}
          className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white transition-all duration-300 md:hover:w-12 group ${link.color} shadow-lg rounded-lg md:rounded-none md:last:rounded-bl-md md:first:rounded-tl-md`}
        >
          <span className="text-lg md:text-xl md:group-hover:scale-110 transition-transform">
            {link.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
