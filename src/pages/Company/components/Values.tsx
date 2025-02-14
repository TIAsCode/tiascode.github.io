import React from "react";
import { Target, Users, Globe, Award, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: <Target className="w-12 h-12 text-primary" />,
    title: "Innovation",
    description:
      "Pushing boundaries in infrastructure solutions with cutting-edge technology",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Collaboration",
    description:
      "Working together across teams and borders to achieve excellence",
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "Sustainability",
    description:
      "Committed to environmental responsibility and sustainable practices",
  },
  {
    icon: <Award className="w-12 h-12 text-primary" />,
    title: "Excellence",
    description: "Delivering superior quality in every project and service",
  },
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "Integrity",
    description:
      "Maintaining the highest standards of business ethics and transparency",
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Agility",
    description: "Adapting quickly to changing technologies and market needs",
  },
];

const Values = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our decisions and shape our culture
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="slide-in group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
