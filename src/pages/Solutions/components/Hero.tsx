import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[70vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
          alt="Data Centers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="fade-in max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Global Infrastructure Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
            Experience unparalleled security and performance with our worldwide
            network of data centers and cutting-edge infrastructure solutions.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 group">
              Explore Solutions
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/30">
              View Network Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
