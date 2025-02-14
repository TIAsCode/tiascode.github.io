import React from "react";
import { ArrowRight, Wrench, Shield, Clock, Users, Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80"
          alt="Services"
          className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="fade-in max-w-3xl">
          <div className="slide-in-left bg-white/10 backdrop-blur-sm w-fit px-4 py-2 rounded-full border border-white/20">
            <span className="text-white/90 font-medium">
              Comprehensive Service Solutions
            </span>
          </div>

          <h1
            className="slide-in-left text-6xl md:text-7xl font-bold text-white leading-tight mt-6"
            style={{ animationDelay: "0.2s" }}
          >
            Expert Services for
            <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
              {" "}
              Modern Infrastructure
            </span>
          </h1>

          <p
            className="slide-in-left text-xl text-white/80 max-w-2xl leading-relaxed mt-6"
            style={{ animationDelay: "0.4s" }}
          >
            From implementation to optimization, our comprehensive range of
            services ensures your infrastructure performs at its peak.
          </p>

          <div
            className="slide-in-left flex flex-wrap gap-6 mt-8"
            style={{ animationDelay: "0.6s" }}
          >
            <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all hover:shadow-glow transform hover:-translate-y-1 flex items-center gap-3 group">
              <span className="font-medium">Explore Services</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/30 flex items-center gap-3">
              <Play className="w-5 h-5" />
              <span className="font-medium">Watch Overview</span>
            </button>
          </div>

          <div
            className="slide-in-left pt-12 flex flex-wrap gap-8"
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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
