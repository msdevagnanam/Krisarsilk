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
    <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col z-40">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.label}
          className={`w-10 h-10 flex items-center justify-center text-white transition-all duration-300 hover:w-12 group ${link.color} shadow-lg last:rounded-bl-md first:rounded-tl-md`}
        >
          <span className="text-xl group-hover:scale-110 transition-transform">
            {link.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
