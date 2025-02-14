import React from "react";
import Hero from "./Home/components/Hero";
import SnigdhaOS from "./Home/components/SnigdhaOS";
import Stats from "./Home/components/Stats";
import Features from "./Home/components/Features";
import Benefits from "./Home/components/Benefits";
import TransformCTA from "../components/home/TransformCTA";

const Home = () => {
  return (
    <div className="min-h-screen font-ubuntu">
      <Hero />
      <SnigdhaOS />
      <Stats />
      <Features />
      <Benefits />
      <TransformCTA />
    </div>
  );
};

export default Home;
