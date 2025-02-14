import React from "react";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "../../types/service";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <div
      className="slide-in group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="mb-6 transform group-hover:scale-110 transition-transform">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        {service.description}
      </p>
      <button className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
        Learn More <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ServiceCard;
