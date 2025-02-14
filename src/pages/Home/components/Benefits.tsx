import React, { useState, useEffect } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "24/7 Technical Support",
    description: "Round-the-clock expert assistance for your infrastructure needs",
    color: "from-blue-500 to-primary",
  },
  {
    title: "Scalable Solutions",
    description: "Flexible infrastructure that grows with your business",
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "Custom Implementation",
    description: "Tailored solutions designed for your specific requirements",
    color: "from-primary to-cyan-500",
  },
  {
    title: "Regular Updates",
    description: "Stay ahead with the latest technology and security updates",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Cost Efficiency",
    description: "Optimize your infrastructure spending with smart solutions",
    color: "from-blue-600 to-primary",
  },
  {
    title: "Sustainable Practices",
    description: "Eco-friendly infrastructure solutions for a better future",
    color: "from-primary to-blue-500",
  },
];

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("benefits-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div id="benefits-section" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Benefits
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for successful infrastructure management, delivered
            with excellence and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`slide-in transform transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 group relative overflow-hidden border border-gray-100">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CheckCircle2 className="w-8 h-8 text-primary transform group-hover:scale-110 transition-transform relative z-10" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-tl-full transform translate-x-8 translate-y-8 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all group">
            <span className="font-medium">Explore All Benefits</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
