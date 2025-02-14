import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  PhoneCall,
  Globe,
  Shield,
  Zap,
  CheckCircle2,
  Users,
  Building2,
  Clock,
  Sparkles,
} from "lucide-react";

const TransformCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [stats, setStats] = useState({
    clients: 0,
    countries: 0,
    uptime: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("transform-cta");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setStats((prev) => ({
          clients: prev.clients < 500 ? prev.clients + 5 : prev.clients,
          countries: prev.countries < 30 ? prev.countries + 1 : prev.countries,
          uptime:
            prev.uptime < 99.99
              ? parseFloat((prev.uptime + 0.5).toFixed(2))
              : prev.uptime,
        }));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Advanced protection for your infrastructure",
      color: "from-blue-500 to-primary",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Network",
      description: "Worldwide presence and connectivity",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Lightning-fast response times",
      color: "from-primary to-cyan-500",
    },
  ];

  return (
    <div id="transform-cta" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/80">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("/images/home-cta.jpg?auto=format&fit=crop&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          {/* Enhanced Title */}
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Ready to Transform Your Infrastructure?
            </h2>
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </div>

          {/* Enhanced Description */}
          <p
            className={`text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Join hundreds of companies that have already revolutionized their
            infrastructure with our solutions
          </p>

          {/* Enhanced Stats */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 transform transition-all duration-700 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                value: stats.clients,
                label: "Enterprise Clients",
                suffix: "+",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                value: stats.countries,
                label: "Countries Served",
                suffix: "+",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                value: stats.uptime,
                label: "System Uptime",
                suffix: "%",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-glow"
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="text-white group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {typeof stat.value === "number" && stat.suffix === "%"
                      ? stat.value.toFixed(2)
                      : stat.value}
                    {stat.suffix}
                  </div>
                </div>
                <p className="text-white/80 group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced Features */}
          <div
            className={`flex justify-center mb-12 transform transition-all duration-700 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 group ${
                      activeFeature === index
                        ? "text-white scale-110"
                        : "text-white/60 scale-90"
                    }`}
                  >
                    <div className={`bg-gradient-to-r ${feature.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-sm sm:text-base font-medium">
                        {feature.title}
                      </div>
                      <div className="text-xs text-white/70">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 transform transition-all duration-700 delay-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <button className="group w-full sm:w-auto bg-white text-primary px-6 sm:px-8 py-4 rounded-full hover:bg-opacity-90 transition-all hover:shadow-glow hover:scale-105 flex items-center justify-center gap-3">
              <PhoneCall className="w-5 h-5" />
              <span className="font-medium">Schedule a Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group w-full sm:w-auto bg-primary/20 backdrop-blur-sm text-white px-6 sm:px-8 py-4 rounded-full hover:bg-primary/30 transition-all border border-white/30 hover:scale-105 flex items-center justify-center gap-3">
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Request Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div
            className={`mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 transform transition-all duration-700 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {[
              "24/7 Support",
              "Custom Solutions",
              "Flexible Scaling",
              "Enterprise Security",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90 group hover:text-white transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformCTA;
