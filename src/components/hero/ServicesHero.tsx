import React from "react";
import { ArrowRight, Play, Shield, Clock, Users } from "lucide-react";

const ServicesHero = () => {
  return (
    <div className="relative min-h-[100vh] md:min-h-[85vh] overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80"
          alt="Services"
          className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-0">
          <div className="max-w-3xl">
            <div className="slide-in-left bg-white/10 backdrop-blur-sm w-fit px-4 py-2 rounded-full border border-white/20">
              <span className="text-white/90 font-medium text-sm md:text-base">
                Comprehensive Service Solutions
              </span>
            </div>

            <h1
              className="slide-in-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-6"
              style={{ animationDelay: "0.2s" }}
            >
              Expert Services for
              <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
                {" "}
                Modern Infrastructure
              </span>
            </h1>

            <p
              className="slide-in-left text-base md:text-xl text-white/80 max-w-2xl leading-relaxed mt-6"
              style={{ animationDelay: "0.4s" }}
            >
              From implementation to optimization, our comprehensive range of
              services ensures your infrastructure performs at its peak.
            </p>

            <div
              className="slide-in-left flex flex-col sm:flex-row gap-4 mt-8"
              style={{ animationDelay: "0.6s" }}
            >
              <button className="w-full sm:w-auto bg-primary text-white px-6 py-4 rounded-full hover:bg-opacity-90 transition-all hover:shadow-glow transform hover:-translate-y-1 flex items-center justify-center gap-3 group">
                <span className="font-medium">Explore Services</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-full hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center gap-3">
                <Play className="w-5 h-5" />
                <span className="font-medium">Watch Overview</span>
              </button>
            </div>

            <div
              className="slide-in-left pt-8 md:pt-12 flex flex-col sm:flex-row gap-4 sm:gap-8"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-3 text-white/80">
                <Shield className="w-5 h-5 text-primary" />
                <span>Enterprise Support</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 text-primary" />
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Users className="w-5 h-5 text-primary" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
