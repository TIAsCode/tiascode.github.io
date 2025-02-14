import React from "react";
import { Building2, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[80vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Company"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="fade-in max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-12 h-12 text-primary" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              About Us
            </h1>
          </div>
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            A global leader in innovative infrastructure solutions, pioneering
            the future of technology and sustainable development since 2008.
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-3 group">
            <span className="font-medium">Learn Our Story</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
