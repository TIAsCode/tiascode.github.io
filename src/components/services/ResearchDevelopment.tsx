import React from "react";
import ResearchCard from "./ResearchCard";
import { researchAreas } from "../../data/services";

const ResearchDevelopment = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Research & Development</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pushing the boundaries of infrastructure technology through
            innovative research and development, creating solutions for
            tomorrow's challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <ResearchCard key={index} area={area} index={index} />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Active Research Projects" },
            { number: "25+", label: "Patents Filed" },
            { number: "100+", label: "Research Partners" },
            { number: "$50M+", label: "Annual R&D Investment" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center slide-in bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchDevelopment;
