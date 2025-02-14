import React from "react";
import { Building2, Globe2, Users, Award } from "lucide-react";

const stats = [
  {
    icon: <Building2 size={32} />,
    number: "500+",
    label: "Projects Completed",
  },
  { icon: <Globe2 size={32} />, number: "30+", label: "Countries Served" },
  { icon: <Users size={32} />, number: "1000+", label: "Team Members" },
  { icon: <Award size={32} />, number: "50+", label: "Industry Awards" },
];

const Stats = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="slide-in bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 flex justify-center transform group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 text-center">
                {stat.number}
              </div>
              <div className="text-gray-400 text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
