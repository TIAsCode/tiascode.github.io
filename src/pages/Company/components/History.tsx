import React from "react";
import { Clock, CheckCircle2 } from "lucide-react";

const milestones = [
  {
    year: "2008",
    title: "Company Founded",
    description:
      "Started with a vision to revolutionize infrastructure technology",
  },
  {
    year: "2012",
    title: "Global Expansion",
    description: "Opened first international offices in Europe and Asia",
  },
  {
    year: "2015",
    title: "Innovation Hub",
    description:
      "Launched our first R&D center focused on emerging technologies",
  },
  {
    year: "2018",
    title: "Sustainability Initiative",
    description: "Committed to 100% renewable energy for all operations",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Introduced AI-powered infrastructure solutions",
  },
  {
    year: "2023",
    title: "Market Leadership",
    description: "Became industry leader in sustainable infrastructure",
  },
];

const History = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-gray-900">Our Journey</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A timeline of innovation, growth, and impact
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`slide-in relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1 md:w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                </div>
                <div className="flex-1 md:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                    <div className="text-primary font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
