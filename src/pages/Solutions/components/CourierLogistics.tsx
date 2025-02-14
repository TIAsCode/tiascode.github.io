import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import {
  Truck,
  Package,
  Globe,
  Clock,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import LiveMarker from "../../../components/map/LiveMarker";

const CourierLogistics = () => {
  const countries = [
    { name: "United States", lat: 37.0902, lng: -95.7129 },
    { name: "United Kingdom", lat: 55.3781, lng: -3.436 },
    { name: "Germany", lat: 51.1657, lng: 10.4515 },
    { name: "France", lat: 46.2276, lng: 2.2137 },
    { name: "Spain", lat: 40.4637, lng: -3.7492 },
    { name: "Italy", lat: 41.8719, lng: 12.5674 },
    { name: "Japan", lat: 36.2048, lng: 138.2529 },
    { name: "South Korea", lat: 35.9078, lng: 127.7669 },
    { name: "China", lat: 35.8617, lng: 104.1954 },
    { name: "India", lat: 20.5937, lng: 78.9629 },
    { name: "Australia", lat: -25.2744, lng: 133.7751 },
    { name: "Brazil", lat: -14.235, lng: -51.9253 },
    { name: "Canada", lat: 56.1304, lng: -106.3468 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { name: "UAE", lat: 23.4241, lng: 53.8478 },
    { name: "South Africa", lat: -30.5595, lng: 22.9375 },
    { name: "Bangladesh", lat: 23.685, lng: 90.3563 },
  ];

  // Create connections between countries
  const connections = countries.flatMap((country, i) =>
    countries.slice(i + 1).map((otherCountry) => ({
      from: country,
      to: otherCountry,
      color: "#6495ED",
      weight: 1,
      opacity: 0.3,
    })),
  );

  const stats = [
    { icon: <Package />, label: "Daily Shipments", value: "50,000+" },
    { icon: <Globe />, label: "Countries Served", value: "17" },
    { icon: <Clock />, label: "Average Delivery Time", value: "48h" },
    { icon: <BarChart3 />, label: "Success Rate", value: "99.9%" },
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Truck className="w-12 h-12 text-primary" />
            <h2 className="text-4xl font-bold text-gray-900">
              Global Courier Network
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamless logistics solutions connecting 17 countries with reliable
            and efficient delivery services
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="slide-in bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform text-primary">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Network Map */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
          <div className="h-[600px] rounded-xl overflow-hidden">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: "100%", width: "100%" }}
              className="z-10"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {countries.map((country) => (
                <LiveMarker
                  key={country.name}
                  dataCenter={{
                    name: country.name,
                    country: country.name,
                    lat: country.lat,
                    lng: country.lng,
                    status: "Operational",
                    tier: "Active Hub",
                    certifications: ["ISO 9001", "GDP"],
                    powerCapacity: 0,
                    redundancy: "N/A",
                    networkProviders: ["Local Partners"],
                    load: 85,
                    totalStorage: 1000,
                    usedStorage: 850,
                    specs: {
                      servers: 0,
                      racks: 0,
                      coolingCapacity: 0,
                      backupGenerators: 0,
                    },
                    region: "",
                  }}
                />
              ))}
              {connections.map((connection, index) => (
                <Polyline
                  key={index}
                  positions={[
                    [connection.from.lat, connection.from.lng],
                    [connection.to.lat, connection.to.lng],
                  ]}
                  color={connection.color}
                  weight={connection.weight}
                  opacity={connection.opacity}
                />
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Service Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Express Delivery",
              description:
                "48-hour delivery guarantee to major cities worldwide",
              features: [
                "Door-to-door service",
                "Real-time tracking",
                "Insurance included",
              ],
            },
            {
              title: "Customs Clearance",
              description:
                "Hassle-free customs processing with local expertise",
              features: [
                "Documentation support",
                "Duty calculation",
                "Compliance handling",
              ],
            },
            {
              title: "Specialized Handling",
              description: "Custom solutions for unique shipping requirements",
              features: [
                "Temperature control",
                "Fragile items",
                "Oversized cargo",
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourierLogistics;
