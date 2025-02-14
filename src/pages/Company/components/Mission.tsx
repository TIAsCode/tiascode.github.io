import React from "react";
import { Target, Lightbulb, Rocket } from "lucide-react";

const Mission = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Mission */}
          <div className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize global infrastructure through innovative
              technology solutions while maintaining the highest standards of
              sustainability and efficiency.
            </p>
          </div>

          {/* Vision */}
          <div
            className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the world's leading provider of sustainable infrastructure
              solutions, driving positive change in how businesses and
              communities connect and operate.
            </p>
          </div>

          {/* Purpose */}
          <div
            className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-gray-900">Our Purpose</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To create lasting positive impact through technological
              innovation, empowering businesses and communities to thrive in a
              connected world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
