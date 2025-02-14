import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  Shield,
  Cloud,
  Database,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

const ProductsHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Enterprise Security",
      color: "from-blue-500 to-primary",
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      text: "Cloud Integration",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: <Database className="w-5 h-5" />,
      text: "Scalable Storage",
      color: "from-primary to-cyan-500",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      text: "99.99% Uptime",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <div className="relative min-h-[100vh] md:min-h-[85vh] overflow-hidden pt-16 md:pt-20">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        <img
          src="/images/products-hero.jpg?auto=format&fit=crop&q=80"
          alt="Products"
          className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-600/20 animate-pulse"></div>
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-0">
          <div className="max-w-3xl">
            {/* Enhanced Badge */}
            <div className="slide-in-left bg-white/10 backdrop-blur-sm w-fit px-4 py-2 rounded-full border border-white/20 hover:scale-105 transition-transform">
              <span className="text-white/90 font-medium text-sm md:text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                Enterprise-Grade Solutions
              </span>
            </div>

            {/* Enhanced Heading */}
            <h1
              className={`slide-in-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-6 ${
                isVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000`}
              style={{ animationDelay: "0.2s" }}
            >
              Transform Your
              <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-gradient">
                {" "}
                Infrastructure
              </span>
            </h1>

            {/* Enhanced Description */}
            <p
              className="slide-in-left text-base md:text-xl text-white/80 max-w-2xl leading-relaxed mt-6"
              style={{ animationDelay: "0.4s" }}
            >
              Discover our comprehensive suite of enterprise solutions designed
              to elevate your business with cutting-edge technology and
              unmatched reliability.
            </p>

            {/* Enhanced CTA Buttons */}
            <div
              className="slide-in-left flex flex-col sm:flex-row gap-4 mt-8"
              style={{ animationDelay: "0.6s" }}
            >
              <button className="group w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-glow transition-all hover:scale-105 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                <span className="font-medium">Explore Products</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/30 hover:scale-105 flex items-center justify-center gap-3">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Watch Overview</span>
              </button>
            </div>

            {/* Enhanced Features Grid */}
            <div
              className="slide-in-left mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
              style={{ animationDelay: "0.8s" }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all ${
                    activeFeature === index ? "scale-105" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 text-white/80 group-hover:text-white">
                    <div className={`bg-gradient-to-r ${feature.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <span className="text-sm md:text-base group-hover:translate-x-1 transition-transform">
                      {feature.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2 hover:border-white/50 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
