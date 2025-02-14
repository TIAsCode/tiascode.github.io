import React from "react";
import { Award, Star } from "lucide-react";

const awards = [
  {
    year: "2023",
    title: "Infrastructure Innovation Award",
    organization: "Tech Excellence Awards",
    description:
      "Recognition for groundbreaking advancements in sustainable infrastructure",
  },
  {
    year: "2022",
    title: "Global Leadership Award",
    organization: "Infrastructure World",
    description: "Excellence in international infrastructure development",
  },
  {
    year: "2022",
    title: "Sustainability Champion",
    organization: "Green Tech Alliance",
    description: "Outstanding commitment to environmental sustainability",
  },
  {
    year: "2021",
    title: "Best Workplace Culture",
    organization: "Corporate Excellence Awards",
    description: "Creating an innovative and inclusive work environment",
  },
];

const Awards = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-gray-900">
              Recognition & Awards
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating our commitment to excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-primary font-medium mb-2">
                    {award.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {award.title}
                  </h3>
                  <p className="text-gray-500 mb-3">{award.organization}</p>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
