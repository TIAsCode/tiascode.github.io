import { CoolingSpecifications, PricingTier } from "../types/product";

export const raspberryPiSpecs: CoolingSpecifications = {
  performance: [
    "Up to 72 nodes per cluster",
    "1.8GHz quad-core ARM CPU",
    "8GB LPDDR4 RAM per node",
    "10/100/1000 Ethernet",
  ],
  technical: [
    "Custom cluster management software",
    "Load balancing & failover",
    "Remote management interface",
    "Automated deployment tools",
  ],
  environmental: [
    "Low power consumption design",
    "Passive cooling options",
    "Compact form factor",
    "Recyclable components",
  ],
};

export const raspberryPiPricingTiers: PricingTier[] = [
  {
    name: "Edge Starter",
    price: "999",
    capacity: "4-Node Cluster",
    features: [
      "4x Raspberry Pi 4 8GB",
      "Managed network switch",
      "Basic monitoring",
      "Email support",
      "1-year warranty",
    ],
  },
  {
    name: "IoT Professional",
    price: "2,999",
    capacity: "12-Node Cluster",
    features: [
      "12x Raspberry Pi 4 8GB",
      "Managed PoE switch",
      "Advanced monitoring",
      "24/7 support",
      "Custom case solution",
      "3-year warranty",
    ],
  },
  {
    name: "Enterprise Cluster",
    price: "Custom",
    capacity: "24-72 Nodes",
    features: [
      "24-72x Raspberry Pi 4 8GB",
      "High-performance networking",
      "Enterprise monitoring",
      "Dedicated support team",
      "Custom rack integration",
      "5-year warranty",
      "Installation included",
    ],
  },
];
