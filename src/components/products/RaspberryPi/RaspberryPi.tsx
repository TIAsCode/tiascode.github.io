import React, { useState, useEffect } from "react";
import {
  raspberryPiSpecs,
  raspberryPiPricingTiers,
} from "../../../data/raspberryPi";
import { X, ArrowRight, Cpu, Server, Cloud, Shield } from "lucide-react";
import CoolingSpecs from "../DesktopCooling/CoolingSpecs";
import PricingTier from "../PricingTier"; // Updated import path

const RaspberryPi = () => {
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
      url: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&q=80",
      title: "Edge Computing Cluster",
    },
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      title: "IoT Gateway Solution",
    },
    {
      url: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80",
      title: "Custom Hardware Setup",
    },
    {
      url: "https://images.unsplash.com/photo-1597838816882-4435b1977fbe?auto=format&fit=crop&q=80",
      title: "Development Platform",
    },
  ];

  const handleLightboxClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Custom Raspberry Pi Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade Raspberry Pi clusters and IoT solutions for edge
            computing, development, and custom infrastructure needs.
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
              Enterprise Pi Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our custom Raspberry Pi solutions combine the flexibility of
              single-board computing with enterprise-grade reliability. Perfect
              for edge computing, IoT deployments, and specialized
              infrastructure needs.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Cpu className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold">Edge Computing</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Distributed processing at the network edge
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold">IoT Gateway</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Centralized IoT device management
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Cloud className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold">Cloud Bridge</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Seamless cloud integration services
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold">Secure Platform</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Enterprise-grade security features
                </p>
              </div>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 group">
              Configure Your Solution
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <CoolingSpecs specs={raspberryPiSpecs} />
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Solution Packages
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {raspberryPiPricingTiers.map((tier, index) => (
              <PricingTier key={index} tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaspberryPi;
