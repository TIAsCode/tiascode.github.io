import React from "react";
import ServicesHero from "../components/hero/ServicesHero";
import CoreServices from "../components/services/CoreServices";
import ResearchDevelopment from "../components/services/ResearchDevelopment";
import MindTouchAI from "../components/services/MindTouchAI";
import MicrochipResearch from "./Services/components/research/MicrochipResearch";
import Contact from "../components/services/Contact";

const Services = () => {
  return (
    <div className="min-h-screen font-ubuntu">
      <ServicesHero />
      <CoreServices />
      <ResearchDevelopment />
      <MicrochipResearch />
      <MindTouchAI />
      <Contact />
    </div>
  );
};

export default Services;
