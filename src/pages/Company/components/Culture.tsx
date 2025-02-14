import React from "react";
import { Heart, Coffee, Smile, Book } from "lucide-react";

const Culture = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-gray-900">Our Culture</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building an inclusive, innovative, and inspiring workplace
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Work Life Balance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Coffee className="w-6 h-6 text-primary" />
                  <span className="text-gray-600">Flexible working hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smile className="w-6 h-6 text-primary" />
                  <span className="text-gray-600">Remote work options</span>
                </div>
                <div className="flex items-center gap-3">
                  <Book className="w-6 h-6 text-primary" />
                  <span className="text-gray-600">Learning & development</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Employee Satisfaction", value: "94%" },
                { label: "Training Hours/Year", value: "100+" },
                { label: "Internal Promotions", value: "60%" },
                { label: "Diversity Score", value: "85%" },
              ].map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image:
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
              title: "Team Building",
            },
            {
              image:
                "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
              title: "Innovation Labs",
            },
            {
              image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80",
              title: "Collaborative Spaces",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="slide-in relative group overflow-hidden rounded-2xl shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6">
                  <h4 className="text-white text-xl font-bold">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Culture;
