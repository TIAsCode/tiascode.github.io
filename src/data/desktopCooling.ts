import { CoolingSpecifications, PricingTier } from "../types/product";

export const desktopCoolingSpecs: CoolingSpecifications = {
  performance: [
    "Thermal capacity up to 1000W",
    "Temperature delta: 5-15°C above ambient",
    "Flow rate: 2-4 L/min",
    "Ultra-quiet operation: 15-30 dB",
  ],
  technical: [
    "Premium copper radiators",
    "High-static pressure fans",
    "D5 pump technology",
    "Hardline or soft tubing options",
  ],
  environmental: [
    "Eco-friendly coolant options",
    "Recyclable components",
    "Energy-efficient design",
    "Long-term durability",
  ],
};

export const desktopPricingTiers: PricingTier[] = [
  {
    name: "Air Cooling Pro",
    price: "299",
    capacity: "Up to 250W TDP",
    features: [
      "Premium air cooler",
      "Optimized fan configuration",
      "Custom fan curves",
      "Anti-vibration mounts",
    ],
  },
  {
    name: "Liquid Elite",
    price: "599",
    capacity: "Up to 500W TDP",
    features: [
      "360mm AIO liquid cooler",
      "RGB integration",
      "Push-pull configuration",
      "Advanced thermal paste",
      "Fan controller included",
    ],
  },
  {
    name: "Custom Loop Ultimate",
    price: "1,299",
    capacity: "Up to 1000W TDP",
    features: [
      "Full custom loop solution",
      "Multiple radiator setup",
      "Premium fittings and tubing",
      "Advanced flow monitoring",
      "Temperature sensors",
      "RGB/ARGB integration",
    ],
  },
];
