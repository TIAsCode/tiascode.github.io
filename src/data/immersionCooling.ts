import { CoolingSpecifications, PricingTier } from "../types/product";

export const coolingSpecs: CoolingSpecifications = {
  performance: [
    "Cooling capacity: Up to 100kW per rack",
    "Temperature range: 18°C to 24°C",
    "Flow rate: 200-400 liters per minute",
    "Heat dissipation efficiency: 99%",
  ],
  technical: [
    "Dielectric fluid type: Engineered synthetic",
    "Fluid lifetime: 8-10 years",
    "Filtration: Multi-stage with particle capture",
    "Monitoring: Real-time sensors with IoT integration",
  ],
  environmental: [
    "Power usage effectiveness (PUE): 1.03",
    "Zero water consumption",
    "Biodegradable cooling fluid",
    "Heat recovery ready",
  ],
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "49,999",
    capacity: "Up to 30kW",
    features: [
      "Single-phase cooling system",
      "Basic monitoring",
      "Standard warranty",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "89,999",
    capacity: "Up to 60kW",
    features: [
      "Dual-phase cooling system",
      "Advanced monitoring",
      "Extended warranty",
      "24/7 phone support",
      "Installation included",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    capacity: "100kW+",
    features: [
      "Custom cooling solution",
      "Full IoT integration",
      "Lifetime warranty",
      "Dedicated support team",
      "Installation & maintenance",
      "Heat recovery system",
    ],
  },
];
