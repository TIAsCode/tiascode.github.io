import React from "react";
import Hero from "./components/Hero";
import SnigdhaOS from "./components/SnigdhaOS";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";

const Home = () => {
  return (
    <div className="min-h-screen font-ubuntu">
      <Hero />
      <SnigdhaOS />
      <Stats />
      <Features />
      <Benefits />
      <CTA />
    </div>
  );
};

export default Home;
