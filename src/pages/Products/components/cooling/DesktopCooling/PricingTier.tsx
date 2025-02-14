import React from "react";
import { ArrowRight, CheckCircle2, DollarSign } from "lucide-react";
import { PricingTier as PricingTierType } from "../../../../../types/product";

interface PricingTierProps {
  tier: PricingTierType;
}

const PricingTier: React.FC<PricingTierProps> = ({ tier }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
      <h4 className="text-2xl font-bold mb-2 text-gray-900">{tier.name}</h4>
      <div className="flex items-baseline gap-2 mb-4 text-gray-900">
        <DollarSign className="text-primary" />
        <span className="text-4xl font-bold">{tier.price}</span>
      </div>
      <p className="text-gray-600 mb-6">{tier.capacity}</p>
      <ul className="space-y-4 mb-8">
        {tier.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-gray-600">
            <CheckCircle2 className="text-primary flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 hover:shadow-glow">
        Get Started
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default PricingTier;
