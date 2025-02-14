import React from "react";
import { Box, Shield, Cloud, Database, Cpu, Network } from "lucide-react";
import { Product } from "../types/product";
import GradientWrapper from "../components/GradientWrapper";

export const products: Product[] = [
  {
    icon: (
      <GradientWrapper>
        <Shield />
      </GradientWrapper>
    ),
    title: "Security Infrastructure",
    description:
      "Advanced security solutions for modern infrastructure protection",
    features: [
      "Access Control",
      "Surveillance Systems",
      "Biometric Integration",
    ],
  },
  {
    icon: (
      <GradientWrapper>
        <Cloud />
      </GradientWrapper>
    ),
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure for enterprise needs",
    features: ["Hybrid Cloud", "Cloud Migration", "Disaster Recovery"],
  },
  {
    icon: (
      <GradientWrapper>
        <Database />
      </GradientWrapper>
    ),
    title: "Data Centers",
    description: "State-of-the-art data center solutions",
    features: ["Cooling Systems", "Power Management", "Network Infrastructure"],
  },
  {
    icon: (
      <GradientWrapper>
        <Cpu />
      </GradientWrapper>
    ),
    title: "Smart Systems",
    description: "Intelligent automation and control systems",
    features: ["Building Automation", "Energy Management", "IoT Integration"],
  },
  {
    icon: (
      <GradientWrapper>
        <Network />
      </GradientWrapper>
    ),
    title: "Network Infrastructure",
    description: "Enterprise-grade networking solutions",
    features: ["5G Networks", "Fiber Optics", "Network Security"],
  },
  {
    icon: (
      <GradientWrapper>
        <Box />
      </GradientWrapper>
    ),
    title: "Hardware Solutions",
    description: "Custom hardware for specific infrastructure needs",
    features: ["Servers", "Storage", "Network Equipment"],
  },
];
