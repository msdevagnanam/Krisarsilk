import React from "react";
import { Link } from "react-router-dom";

const Refundpolicy = () => {
  return (
    <div>

      {/* Banner */}
      <div
        className="w-full h-[180px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/refund-policy/refund-policy-banner.png')" }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 text-white">

          <h1 className="text-3xl md:text-5xl font-bold">
            Return Policy
          </h1>

          <p className="mt-2 text-sm md:text-base">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="font-semibold">Return Policy</span>
          </p>

        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Return Policy
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Before you make a decision to return our saree, please note the time and effort
          that goes into making each of our handcrafted kanjivaram sarees. Our artisans
          work efficiently, and pay individual attention to all the details in the making
          of each saree.
        </p>

        <ul className="list-disc pl-6 text-gray-600 text-sm space-y-3 leading-relaxed">

          <li>
            We Have A NO RETURN NO EXCHANGE Policy on All Our Products as each of our
            products are bespoke from the other.
          </li>

          <li>
            Our product goes through two levels of quality check to ensure zero defect
            or damage before the shipments dispatched from our facility.
          </li>

          <li>
            In a case of rarity, a manufacturing defect is found upon delivery you can
            raise a complaint with our customer support team to reach an amicable
            resolution.
          </li>

          <li>
            Please note Colour rendition of the sarees might slightly vary from the
            image on the screen, due to lighting and LED screen brightness of
            individual screens and returns will not be accepted for the above
            stated reason.
          </li>

          <li>
            Once the order is confirmed, refund or cancellation of the order is
            not possible.
          </li>

          <li>
            In a case of rarity an order is double booked the amount charged will
            be credited back to the customers source account.
          </li>

        </ul>

      </div>

    </div>
  );
};

export default Refundpolicy;