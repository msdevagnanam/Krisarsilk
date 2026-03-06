import React, { useState, useEffect, useRef } from "react";

const CounterSection = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const counters = [
    { target: 65, label: "Years Of Experience" },
    { target: 3000, label: "Happy Customers" },
    { target: 400, label: "Workers Employed" },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounts();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out effect
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(
        counters.map((counter) => Math.round(counter.target * ease))
      );

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts(counters.map((counter) => counter.target));
      }
    }, 1000 / frameRate);
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full mt-10 sm:mt-16 lg:mt-20 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/images/count-bg.webp"
        alt="background"
        className="w-full h-[350px] sm:h-[250px] md:h-[300px] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Counters */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-around w-full max-w-6xl px-4 sm:px-6 gap-6 sm:gap-4">
          {counters.map((item, index) => (
            <div key={index} className="text-center">
              <span className="text-yellow-400 font-bold text-xl sm:text-4xl md:text-5xl lg:text-6xl">
                {counts[index]}
              </span>
              <span className="text-yellow-400 font-bold text-base sm:text-2xl md:text-3xl">
                +
              </span>
              <p className="text-white font-semibold text-xs sm:text-base md:text-lg mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
