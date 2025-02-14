import { ReactNode } from "react";

export interface Product {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface CoolingSpecifications {
  performance: string[];
  technical: string[];
  environmental: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  capacity: string;
  features: string[];
}
