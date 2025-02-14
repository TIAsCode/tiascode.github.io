import React from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Mission from "./components/Mission";
import Values from "./components/Values";
import History from "./components/History";
import Leadership from "./components/Leadership";
import Culture from "./components/Culture";
import Sustainability from "./components/Sustainability";
import GlobalPresence from "./components/GlobalPresence";
import Awards from "./components/Awards";
import CTA from "./components/CTA";

const Company = () => {
  return (
    <div className="min-h-screen font-ubuntu">
      <Hero />
      <Stats />
      <Mission />
      <Values />
      <History />
      <Leadership />
      <Culture />
      <Sustainability />
      <GlobalPresence />
      <Awards />
      <CTA />
    </div>
  );
};

export default Company;
