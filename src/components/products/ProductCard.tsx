import React from "react";
import { ArrowRight } from "lucide-react";
import { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <div
      className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-gray-100"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="mb-6 transform group-hover:scale-110 transition-transform text-primary">
        {product.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{product.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {product.description}
      </p>
      <ul className="space-y-3 mb-8">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-gray-50 text-gray-700 px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
        Learn More
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default ProductCard;
