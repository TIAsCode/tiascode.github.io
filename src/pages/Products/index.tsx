import React from "react";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import FiberOptics from "./components/fiber/FiberOptics";
import ImmersionCooling from "./components/cooling/ImmersionCooling";
import DesktopCooling from "./components/cooling/DesktopCooling";

const Products = () => {
  return (
    <div className="min-h-screen font-ubuntu">
      <Hero />
      <FiberOptics />
      <ImmersionCooling />
      <DesktopCooling />
      <ProductGrid />
    </div>
  );
};

export default Products;
