import React from "react";
import { ResearchArea } from "../../types/service";

interface ResearchCardProps {
  area: ResearchArea;
  index: number;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ area, index }) => {
  return (
    <div
      className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-6 mb-6">
        <div className="transform group-hover:scale-110 transition-transform">
          {area.icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
          <p className="text-gray-600">{area.description}</p>
        </div>
      </div>
      <ul className="space-y-3">
        {area.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-gray-600">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchCard;
