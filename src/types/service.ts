import { ReactNode } from "react";

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ResearchArea {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface MindTouchFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ResearchPhase {
  phase: string;
  title: string;
  status: string;
  progress: number;
}
