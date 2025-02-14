import React from "react";
import Hero from "./Company/components/Hero";
import Stats from "./Company/components/Stats";
import Mission from "./Company/components/Mission";
import Values from "./Company/components/Values";
import History from "./Company/components/History";
import Leadership from "./Company/components/Leadership";
import Culture from "./Company/components/Culture";
import Sustainability from "./Company/components/Sustainability";
import GlobalPresence from "./Company/components/GlobalPresence";
import Awards from "./Company/components/Awards";
import CTA from "./Company/components/CTA";

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
