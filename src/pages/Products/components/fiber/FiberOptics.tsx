import React, { useState, useEffect } from "react";
import {
  fiberOpticSpecs,
  fiberOpticPricingTiers,
} from "../../../../data/fiberOptics";
import { X, ArrowRight, Network, Zap, Cable } from "lucide-react";
import CoolingSpecs from "../cooling/DesktopCooling/CoolingSpecs";
import PricingTier from "../cooling/DesktopCooling/PricingTier";

const FiberOptics = () => {
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
      url: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80",
      title: "Fiber Optic Cables",
    },
    {
      url: "https://images.unsplash.com/photo-1620283085068-5aab84e2db8e?auto=format&fit=crop&q=80",
      title: "Network Infrastructure",
    },
    {
      url: "https://images.unsplash.com/photo-1586772002130-b0f3daa6288e?auto=format&fit=crop&q=80",
      title: "Data Transmission",
    },
    {
      url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
      title: "Optical Technology",
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
            Enterprise Fiber Optic Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-speed, reliable fiber optic infrastructure for modern
            enterprise connectivity needs, delivering unmatched performance and
            scalability.
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
              Advanced Fiber Optic Technology
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our enterprise-grade fiber optic solutions deliver lightning-fast
              connectivity with unparalleled reliability. Whether you're
              building a campus network or connecting data centers across
              continents, our fiber infrastructure ensures optimal performance
              and future-proof scalability.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <Network className="text-primary" />
                Ultra-high bandwidth capacity
              </li>
              <li className="flex items-center gap-3">
                <Zap className="text-primary" />
                Low latency performance
              </li>
              <li className="flex items-center gap-3">
                <Cable className="text-primary" />
                Advanced signal integrity
              </li>
            </ul>
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 group">
              Request Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <CoolingSpecs specs={fiberOpticSpecs} />
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Fiber Solutions
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {fiberOpticPricingTiers.map((tier, index) => (
              <PricingTier key={index} tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiberOptics;
