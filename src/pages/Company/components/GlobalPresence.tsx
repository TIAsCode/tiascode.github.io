import React from "react";
import { Globe, MapPin, Users, Building2 } from "lucide-react";

const regions = [
  {
    name: "North America",
    offices: 12,
    employees: "500+",
    countries: ["USA", "Canada"],
  },
  {
    name: "Europe",
    offices: 8,
    employees: "300+",
    countries: ["UK", "Germany", "France"],
  },
  {
    name: "Asia Pacific",
    offices: 10,
    employees: "400+",
    countries: ["Japan", "Singapore", "Australia"],
  },
  {
    name: "South Asia",
    offices: 5,
    employees: "200+",
    countries: ["India", "Bangladesh"],
  },
];

const GlobalPresence = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-gray-900">
              Global Presence
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving customers worldwide with local expertise and global
            capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region, index) => (
            <div
              key={index}
              className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-gray-900">
                  {region.name}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">
                    {region.offices} Offices
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">
                    {region.employees} Employees
                  </span>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
