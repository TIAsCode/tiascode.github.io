import React from "react";
import {
  Settings,
  Users,
  Wrench,
  Clock,
  BarChart,
  PhoneCall,
  Microscope,
  Lightbulb,
  Cpu,
  Rocket,
  Brain,
  Fingerprint,
  Network,
  Zap,
} from "lucide-react";
import {
  ServiceItem,
  ResearchArea,
  MindTouchFeature,
  ResearchPhase,
} from "../types/service";
import GradientWrapper from "../components/GradientWrapper";

export const services: ServiceItem[] = [
  {
    icon: (
      <GradientWrapper>
        <Settings />
      </GradientWrapper>
    ),
    title: "Infrastructure Planning",
    description:
      "Strategic planning and consulting for infrastructure projects",
  },
  {
    icon: (
      <GradientWrapper>
        <Wrench />
      </GradientWrapper>
    ),
    title: "Implementation",
    description: "Expert deployment and integration services",
  },
  {
    icon: (
      <GradientWrapper>
        <Clock />
      </GradientWrapper>
    ),
    title: "24/7 Monitoring",
    description: "Round-the-clock infrastructure monitoring and management",
  },
  {
    icon: (
      <GradientWrapper>
        <Users />
      </GradientWrapper>
    ),
    title: "Training",
    description: "Comprehensive training and knowledge transfer",
  },
  {
    icon: (
      <GradientWrapper>
        <BarChart />
      </GradientWrapper>
    ),
    title: "Optimization",
    description: "Performance optimization and efficiency improvements",
  },
  {
    icon: (
      <GradientWrapper>
        <PhoneCall />
      </GradientWrapper>
    ),
    title: "Support",
    description: "Dedicated technical support and maintenance",
  },
];

export const researchAreas: ResearchArea[] = [
  {
    icon: (
      <GradientWrapper size="lg">
        <Microscope />
      </GradientWrapper>
    ),
    title: "Advanced Materials",
    description:
      "Research into next-generation materials for infrastructure applications",
    features: [
      "Nano-engineered composites",
      "Smart materials development",
      "Sustainable alternatives",
      "Performance testing",
    ],
  },
  {
    icon: (
      <GradientWrapper size="lg">
        <Lightbulb />
      </GradientWrapper>
    ),
    title: "Innovation Lab",
    description:
      "Experimental development of cutting-edge infrastructure solutions",
    features: [
      "Prototype development",
      "Feasibility studies",
      "Technology validation",
      "Market analysis",
    ],
  },
  {
    icon: (
      <GradientWrapper size="lg">
        <Cpu />
      </GradientWrapper>
    ),
    title: "Digital Systems",
    description: "Research in advanced digital infrastructure technologies",
    features: [
      "AI/ML integration",
      "IoT platforms",
      "Edge computing",
      "Network optimization",
    ],
  },
  {
    icon: (
      <GradientWrapper size="lg">
        <Rocket />
      </GradientWrapper>
    ),
    title: "Future Tech",
    description: "Exploration of emerging technologies and their applications",
    features: [
      "Quantum computing",
      "6G networks",
      "Green technologies",
      "Space infrastructure",
    ],
  },
];

export const mindTouchFeatures: MindTouchFeature[] = [
  {
    icon: (
      <GradientWrapper>
        <Brain />
      </GradientWrapper>
    ),
    title: "Neural Interface",
    description:
      "Advanced brain-computer interface technology for seamless mind-to-machine interaction",
  },
  {
    icon: (
      <GradientWrapper>
        <Fingerprint />
      </GradientWrapper>
    ),
    title: "Biometric Authentication",
    description:
      "Multi-layer neural pattern recognition for unparalleled security",
  },
  {
    icon: (
      <GradientWrapper>
        <Network />
      </GradientWrapper>
    ),
    title: "Quantum Neural Networks",
    description:
      "Hybrid quantum-classical networks for enhanced processing capabilities",
  },
  {
    icon: (
      <GradientWrapper>
        <Zap />
      </GradientWrapper>
    ),
    title: "Real-time Processing",
    description:
      "Ultra-low latency neural signal processing and response generation",
  },
];

export const researchProgress: ResearchPhase[] = [
  {
    phase: "Phase 1",
    title: "Neural Signal Processing",
    status: "Completed",
    progress: 100,
  },
  {
    phase: "Phase 2",
    title: "Quantum Integration",
    status: "Completed",
    progress: 100,
  },
  {
    phase: "Phase 3",
    title: "Neural Pattern Recognition",
    status: "Completed",
    progress: 100,
  },
  {
    phase: "Phase 4",
    title: "Biometric Security Implementation",
    status: "In Progress",
    progress: 85,
  },
  {
    phase: "Phase 5",
    title: "Clinical Trials - Stage 1",
    status: "In Progress",
    progress: 60,
  },
  {
    phase: "Phase 6",
    title: "Real-time Processing Optimization",
    status: "In Progress",
    progress: 45,
  },
  {
    phase: "Phase 7",
    title: "Clinical Trials - Stage 2",
    status: "Upcoming",
    progress: 20,
  },
  {
    phase: "Phase 8",
    title: "Regulatory Compliance",
    status: "Upcoming",
    progress: 15,
  },
  {
    phase: "Phase 9",
    title: "Commercial Integration",
    status: "Upcoming",
    progress: 10,
  },
];
