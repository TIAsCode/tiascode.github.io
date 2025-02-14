import React, { useState } from "react";
import { ArrowRight, CheckCircle2, DollarSign } from "lucide-react";
import { PricingTier as PricingTierType } from "../../types/product";
import OrderForm from "./OrderForm";

interface PricingTierProps {
  tier: PricingTierType;
}

const PricingTier: React.FC<PricingTierProps> = ({ tier }) => {
  const [showOrderForm, setShowOrderForm] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group h-full w-full flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
            {tier.name}
          </h4>
          <div className="flex items-baseline gap-1 mb-4">
            <DollarSign className="w-5 h-5 text-primary" />
            <span className="text-4xl font-bold text-gray-900">
              {tier.price}
            </span>
          </div>
          <div className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium inline-block">
            {tier.capacity}
          </div>
        </div>

        {/* Features List */}
        <div className="flex-grow">
          <ul className="space-y-4 mb-8">
            {tier.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-600 group/item"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setShowOrderForm(true)}
          className="w-full bg-gray-50 text-gray-900 px-6 py-4 rounded-full hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:-translate-y-1 duration-300"
        >
          <span className="font-medium">Get Started</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <OrderForm
        isOpen={showOrderForm}
        onClose={() => setShowOrderForm(false)}
        productName={tier.name}
        productPrice={tier.price}
      />
    </>
  );
};

export default PricingTier;
