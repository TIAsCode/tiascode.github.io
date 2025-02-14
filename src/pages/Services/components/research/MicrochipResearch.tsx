import React from "react";
import { Cpu, Zap, Workflow, Shield, ArrowRight } from "lucide-react";

const MicrochipResearch = () => {
  const researchAreas = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Quantum Integration",
      description:
        "Developing next-generation quantum-classical hybrid processors",
      progress: 75,
      status: "In Progress",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Neural Processing",
      description: "Advanced neural network acceleration architectures",
      progress: 60,
      status: "Active Research",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Bio-Integration",
      description: "Biological-electronic interface systems",
      progress: 45,
      status: "Early Stage",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Computing",
      description: "Hardware-level security implementations",
      progress: 85,
      status: "Near Completion",
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Cpu className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Microchip Research</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pioneering the future of computing through advanced microchip
            research and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary transform group-hover:scale-110 transition-transform">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {area.title}
                  </h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Research Progress
                  </span>
                  <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {area.status}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all duration-500"
                    style={{ width: `${area.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { number: "50+", label: "Patents Filed" },
            { number: "25+", label: "Research Partners" },
            { number: "$100M+", label: "R&D Investment" },
          ].map((stat, index) => (
            <div
              key={index}
              className="slide-in text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Research Details */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Research Focus Areas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">
                Quantum Computing Integration
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Quantum-classical hybrid architectures
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Error correction systems
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Quantum memory interfaces
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Neural Processing Units</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Advanced neural architectures
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  On-chip learning systems
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Energy-efficient computing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrochipResearch;
