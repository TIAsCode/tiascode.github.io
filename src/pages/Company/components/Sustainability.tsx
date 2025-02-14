import React from "react";
import { Leaf, Recycle, Sun, Wind } from "lucide-react";

const initiatives = [
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Renewable Energy",
    description: "100% renewable energy usage in all our facilities by 2025",
    progress: 75,
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: "Zero Waste",
    description: "Implementing circular economy principles across operations",
    progress: 60,
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Carbon Neutral",
    description: "Committed to becoming carbon neutral by 2030",
    progress: 45,
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Green Infrastructure",
    description: "Developing eco-friendly infrastructure solutions",
    progress: 80,
  },
];

const Sustainability = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Leaf className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-gray-900">Sustainability</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to building a sustainable future through responsible
            innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform text-primary">
                  {initiative.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-primary">
                        {initiative.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all duration-500"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Renewable Energy", value: "75%" },
              { label: "Waste Reduction", value: "60%" },
              { label: "Carbon Footprint", value: "-45%" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
