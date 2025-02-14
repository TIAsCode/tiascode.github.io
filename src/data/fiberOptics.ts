import { CoolingSpecifications, PricingTier } from "../types/product";

export const fiberOpticSpecs: CoolingSpecifications = {
  performance: [
    "Bandwidth up to 100 Tbps",
    "Ultra-low latency (<1ms)",
    "99.999% uptime guarantee",
    "Maximum range: 100km without amplification",
  ],
  technical: [
    "Single-mode and multi-mode options",
    "Advanced signal modulation",
    "Redundant path configuration",
    "Real-time monitoring system",
  ],
  environmental: [
    "Low power consumption",
    "Minimal electromagnetic interference",
    "Recyclable materials",
    "Extended lifecycle (25+ years)",
  ],
};

export const fiberOpticPricingTiers: PricingTier[] = [
  {
    name: "Campus Connect",
    price: "15,999",
    capacity: "Up to 10 Gbps",
    features: [
      "Single-mode fiber installation",
      "Basic monitoring tools",
      "Standard SLA",
      "8x5 support",
      "1-year warranty",
    ],
  },
  {
    name: "Enterprise Pro",
    price: "45,999",
    capacity: "Up to 100 Gbps",
    features: [
      "Multi-mode fiber deployment",
      "Advanced monitoring suite",
      "Enhanced SLA",
      "24/7 support",
      "Redundant paths",
      "5-year warranty",
    ],
  },
  {
    name: "Global Network",
    price: "Custom",
    capacity: "100+ Gbps",
    features: [
      "Custom fiber solution",
      "Global network integration",
      "Premium SLA",
      "Dedicated support team",
      "Full redundancy",
      "Lifetime warranty",
      "Quarterly optimization",
    ],
  },
];
