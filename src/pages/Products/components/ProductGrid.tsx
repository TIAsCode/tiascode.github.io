import React from "react";
import ProductCard from "../../../components/products/ProductCard";
import { products } from "../../../data/products";

const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
