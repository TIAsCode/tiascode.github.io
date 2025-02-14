import React from "react";
import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "John Smith",
    position: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: "20+ years of experience in technology and infrastructure development",
  },
  {
    name: "Sarah Johnson",
    position: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    bio: "Former Silicon Valley executive with expertise in AI and cloud computing",
  },
  {
    name: "Michael Chen",
    position: "Chief Operations Officer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    bio: "Specialized in global operations and supply chain optimization",
  },
  {
    name: "Emily Rodriguez",
    position: "Chief Innovation Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    bio: "Leading research and development in emerging technologies",
  },
];

const Leadership = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the visionaries driving our company's innovation and growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="slide-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-white hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-primary transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {leader.name}
              </h3>
              <p className="text-primary font-medium mb-2">{leader.position}</p>
              <p className="text-gray-600 text-sm">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
