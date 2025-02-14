import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[60vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl max-w-2xl text-white/90">
            Discover our comprehensive range of infrastructure solutions
            designed to power the future of business and technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
