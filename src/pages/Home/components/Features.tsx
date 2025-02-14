import { useState, useEffect } from "react";
import { Shield, Cpu, BarChart3, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security solutions for critical systems",
    stats: ["99.9% Uptime", "24/7 Monitoring", "Zero-Day Protection"],
    color: "from-blue-500 to-primary",
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "Smart Technology",
    description: "Advanced automation and IoT integration",
    stats: ["AI-Powered", "Smart Analytics", "Real-time Data"],
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: "Performance Optimization",
    description: "Maximize efficiency and reduce operational costs",
    stats: ["50% Faster", "30% Cost Reduction", "Improved ROI"],
    color: "from-primary to-cyan-500",
  },
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("features-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div id="features-section" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative solutions for modern infrastructure challenges, backed by
            cutting-edge technology and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`slide-in transform transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 group relative overflow-hidden border border-gray-100">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className="relative mb-8">
                  <div className={`text-primary transform group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                    {feature.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="space-y-3">
                  {feature.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {stat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Button */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <button className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
