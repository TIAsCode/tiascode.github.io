import React, { useState, useEffect } from "react";
import CoolingSpecs from "./CoolingSpecs";
import PricingTier from "./PricingTier";
import {
  coolingSpecs,
  pricingTiers,
} from "../../../../../data/immersionCooling";
import { X } from "lucide-react";

const ImmersionCooling = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80",
      title: "Primary Cooling System",
    },
    {
      url: "https://images.unsplash.com/photo-1588382472578-8d8b337b277a?auto=format&fit=crop&q=80",
      title: "Server Immersion",
    },
    {
      url: "https://images.unsplash.com/photo-1580716937776-3666ce0c7cf5?auto=format&fit=crop&q=80",
      title: "Cooling Infrastructure",
    },
    {
      url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      title: "Data Center Integration",
    },
  ];

  const handleLightboxClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Custom Immersion Cooling
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Next-generation cooling solution for high-performance computing
            environments, offering unparalleled efficiency and reliability.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="slide-in relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={handleLightboxClick}
          >
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Close lightbox"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-auto rounded-lg scale-in cursor-default"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="text-white/70 text-center mt-4 text-sm">
                Press ESC or click outside the image to close
              </p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <CoolingSpecs specs={coolingSpecs} />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Advanced Cooling Technology
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our immersion cooling solution represents the cutting edge of data
              center thermal management. By submerging servers directly in
              dielectric fluid, we achieve optimal heat dissipation while
              significantly reducing energy consumption and environmental
              impact.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                • Up to 95% reduction in cooling energy costs
              </li>
              <li className="flex items-center gap-3">
                • Increased server density and performance
              </li>
              <li className="flex items-center gap-3">
                • Extended hardware lifespan
              </li>
              <li className="flex items-center gap-3">
                • Minimal maintenance requirements
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Pricing Plans
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingTier key={index} tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmersionCooling;
