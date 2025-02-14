import React from "react";
import ProductsHero from "../components/hero/ProductsHero";
import FiberOptics from "../components/products/FiberOptics/FiberOptics";
import ImmersionCooling from "../components/products/ImmersionCooling/ImmersionCooling";
import DesktopCooling from "../components/products/DesktopCooling/DesktopCooling";
import RaspberryPi from "../components/products/RaspberryPi/RaspberryPi";
import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";

const Products = () => {
  return (
    <div className="min-h-screen font-ubuntu">
      <ProductsHero />
      <FiberOptics />
      <ImmersionCooling />
      <DesktopCooling />
      <RaspberryPi />

      {/* Additional Products Grid */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Complete Product Suite</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive infrastructure solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
