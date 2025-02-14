import React from "react";
import { ArrowRight, Briefcase } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[80vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="Careers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-12 h-12 text-primary" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Join Our Team
            </h1>
          </div>
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Build your career with a company that's shaping the future of
            infrastructure technology. Join our diverse team of innovators and
            make a lasting impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 group">
              View Open Positions
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/30">
              Learn About Culture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
