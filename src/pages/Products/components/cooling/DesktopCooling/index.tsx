import React, { useState, useEffect } from "react";
import {
  desktopCoolingSpecs,
  desktopPricingTiers,
} from "../../../../../data/desktopCooling";
import { X, ArrowRight } from "lucide-react";
import CoolingSpecs from "./CoolingSpecs";
import PricingTier from "./PricingTier";

const DesktopCooling = () => {
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
      url: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80",
      title: "Liquid Cooling System",
    },
    {
      url: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80",
      title: "Custom RGB Setup",
    },
    {
      url: "https://images.unsplash.com/photo-1600348712270-5af9e3590f66?auto=format&fit=crop&q=80",
      title: "Advanced Airflow Design",
    },
    {
      url: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?auto=format&fit=crop&q=80",
      title: "Thermal Management",
    },
  ];

  const handleLightboxClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Custom Desktop Cooling Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional-grade cooling systems for high-performance desktop
            computers, designed for gamers, content creators, and power users.
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
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900">
              Advanced Desktop Cooling
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our custom desktop cooling solutions combine cutting-edge
              technology with precision engineering to deliver optimal thermal
              performance for high-end desktop systems. Whether you're running
              intensive gaming sessions, rendering complex 3D models, or
              handling heavy computational tasks, our cooling systems ensure
              your hardware operates at peak efficiency.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                • Custom loop liquid cooling systems
              </li>
              <li className="flex items-center gap-3">
                • RGB lighting integration
              </li>
              <li className="flex items-center gap-3">
                • Advanced airflow optimization
              </li>
              <li className="flex items-center gap-3">
                • Noise reduction technology
              </li>
            </ul>
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 group">
              Configure Your System
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <CoolingSpecs specs={desktopCoolingSpecs} />
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Cooling Packages
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {desktopPricingTiers.map((tier, index) => (
              <PricingTier key={index} tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopCooling;
