import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>

      {/* Banner */}
      <div
  className="w-full h-[160px] flex items-center bg-cover bg-center"
  style={{ backgroundImage: "url('/images/contact/contact-banner.png')" }}
>
  <div className="max-w-7xl mx-auto w-full px-6 text-white">

    <h1 className="text-3xl md:text-5xl font-bold">
      Contact Us
    </h1>

    <p className="mt-2 text-sm md:text-base">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <span className="mx-2">›</span>
      <span className="font-semibold">Contact Us</span>
    </p>

  </div>
</div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto py-12 px-6">

        {/* Contact Info + Map */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold text-lg border-b pb-2 mb-4">
              Contact Information
            </h2>

            <p className="text-sm text-orange-600 font-semibold mb-1">Call Us</p>
            <p className="text-sm">+91 9443181587</p>
            <p className="text-sm">0473 2228587</p>
            <p className="text-sm mb-4">0473 2223387</p>

            <p className="text-sm text-orange-600 font-semibold mb-1">Address</p>
            <p className="text-sm mb-4">
             #418/191-A, Big Sourashtra St., Sathyamoorthy Road, Arani - 632301.
            </p>

            <p className="text-sm text-orange-600 font-semibold mb-1">Email</p>
            <p className="text-sm">info@krisarsilkcreations.com</p>
            <p className="text-sm mb-4">kkrajan1982@gmail.com</p>

            <p className="text-sm text-orange-600 font-semibold mb-1">
              Working Hours
            </p>
            <p className="text-sm">Mon – Sat 10AM – 8PM</p>
            <p className="text-sm">Sunday Holiday</p>
          </div>

          {/* Map */}
          <div>
  <iframe
    title="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.751606661048!2d79.2899509!3d12.664284799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad295766e8bc75%3A0x11207fa8f7f965e9!2sKrisar%20Silk%20Creations%20-%20KKEV%20Creations%20-%20Exclusive%20Designer%20Pure%20Silk%20Saree%20Manufacturer!5e0!3m2!1sen!2sin!4v1772883913524!5m2!1sen!2sin"
    className="w-full h-[400px] border"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  ></iframe>
</div>
        </div>

        {/* Form + Image */}
        <div className="grid md:grid-cols-2 gap-10 mt-12 bg-gray-100 p-8 rounded">

          {/* Form */}
          <div class="mt-16">
            <h3 className="font-semibold mb-4">Send us a message</h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded px-3 py-2 text-sm"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded px-3 py-2 text-sm"
              />

              <input
                type="text"
                placeholder="Your Mobile No"
                className="w-full border rounded px-3 py-2 text-sm"
              />

              <input
                type="text"
                placeholder="Description"
                className="w-full border rounded px-3 py-2 text-sm"
              />

              <input
                type="text"
                placeholder="Captcha Code"
                className="w-full border rounded px-3 py-2 text-sm"
              />

              <button
                type="submit"
                className="w-full bg-gray-300 text-sm py-2 rounded hover:bg-gray-400"
              >
                SEND
              </button>
            </form>
          </div>

          {/* Image */}
          <div>
            <img
              src="/images/contact/Contact-Img.webp"
              alt="saree models"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;