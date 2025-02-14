import React from "react";
import Hero from "./components/Hero";
import OpenPositions from "./components/OpenPositions";
import Benefits from "./components/Benefits";
import Culture from "./components/Culture";
import Perks from "./components/Perks";
import Testimonials from "./components/Testimonials";
import Locations from "./components/Locations";
import CTA from "./components/CTA";

const Careers = () => {
  return (
    <div className="min-h-screen font-ubuntu">
      <Hero />
      <OpenPositions />
      <Benefits />
      <Culture />
      <Perks />
      <Testimonials />
      <Locations />
      <CTA />
    </div>
  );
};

export default Careers;
