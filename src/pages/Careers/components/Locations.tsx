import React from "react";
import { MapPin, Users, Building2 } from "lucide-react";

const locations = [
  {
    city: "New York",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80",
    employees: "250+",
    teams: ["Engineering", "Product", "Sales"],
  },
  {
    city: "London",
    country: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
    employees: "150+",
    teams: ["Engineering", "Marketing", "Support"],
  },
  {
    city: "Singapore",
    country: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80",
    employees: "100+",
    teams: ["Engineering", "Sales", "Operations"],
  },
];

const Locations = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Locations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our global team across these vibrant cities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="slide-in bg-white rounded-2xl shadow-lg overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{location.city}</h3>
                  <p className="text-white/90">{location.country}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">
                    {location.employees} Employees
                  </span>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">Teams</div>
                  <div className="flex flex-wrap gap-2">
                    {location.teams.map((team, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {team}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            We also support remote work across many locations!
          </p>
          <button className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <MapPin className="w-5 h-5" />
            View all locations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Locations;
