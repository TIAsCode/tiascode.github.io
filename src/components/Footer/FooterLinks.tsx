import React, { useState } from "react";
import {
  Thermometer,
  Network,
  Lock,
  Settings,
  MonitorSmartphone,
  Database,
  Workflow,
  Users,
  Clock,
  BarChart,
  Headphones,
  Globe,
  Boxes,
  Zap,
} from "lucide-react";
import OrderForm from "../products/OrderForm";

const FooterLinks = () => {
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    price: string;
  } | null>(null);

  const products = [
    {
      name: "Desktop Cooling",
      icon: <Thermometer className="w-4 h-4 text-primary" />,
      price: "299",
    },
    {
      name: "Immersion Cooling",
      icon: <Zap className="w-4 h-4 text-primary" />,
      price: "49,999",
    },
    {
      name: "Fiber Optics",
      icon: <Network className="w-4 h-4 text-primary" />,
      price: "15,999",
    },
    {
      name: "Security Systems",
      icon: <Lock className="w-4 h-4 text-primary" />,
      price: "9,999",
    },
    {
      name: "Cloud Solutions",
      icon: <Globe className="w-4 h-4 text-primary" />,
      price: "4,999",
    },
    {
      name: "Data Centers",
      icon: <Database className="w-4 h-4 text-primary" />,
      price: "99,999",
    },
  ];

  const services = [
    {
      name: "Infrastructure Planning",
      icon: <Settings className="w-4 h-4 text-primary" />,
    },
    {
      name: "Implementation",
      icon: <Workflow className="w-4 h-4 text-primary" />,
    },
    {
      name: "24/7 Monitoring",
      icon: <Clock className="w-4 h-4 text-primary" />,
    },
    { name: "Training", icon: <Users className="w-4 h-4 text-primary" /> },
    {
      name: "Optimization",
      icon: <BarChart className="w-4 h-4 text-primary" />,
    },
    { name: "Support", icon: <Headphones className="w-4 h-4 text-primary" /> },
  ];

  const solutions = [
    {
      name: "Enterprise Solutions",
      icon: <Boxes className="w-4 h-4 text-primary" />,
    },
    {
      name: "Cloud Integration",
      icon: <MonitorSmartphone className="w-4 h-4 text-primary" />,
    },
    {
      name: "Network Security",
      icon: <Lock className="w-4 h-4 text-primary" />,
    },
    {
      name: "Data Management",
      icon: <Database className="w-4 h-4 text-primary" />,
    },
    {
      name: "Infrastructure Automation",
      icon: <Settings className="w-4 h-4 text-primary" />,
    },
    {
      name: "Disaster Recovery",
      icon: <Boxes className="w-4 h-4 text-primary" />,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4">
      {/* Products */}
      <div className="hidden sm:block">
        <h3 className="text-lg font-bold mb-6 text-gray-900 flex items-center gap-2">
          <Boxes className="w-5 h-5 text-primary" />
          Products
        </h3>
        <ul className="space-y-4">
          {products.map((product, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedProduct(product)}
                className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group w-full text-left"
              >
                {product.icon}
                {product.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div className="hidden sm:block">
        <h3 className="text-lg font-bold mb-6 text-gray-900 flex items-center gap-2">
          <Settings className="w-5 h-5 text-primary" />
          Services
        </h3>
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
              >
                {service.icon}
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Solutions */}
      <div className="hidden sm:block">
        <h3 className="text-lg font-bold mb-6 text-gray-900 flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          Solutions
        </h3>
        <ul className="space-y-4">
          {solutions.map((solution, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
              >
                {solution.icon}
                {solution.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Order Form Popup */}
      {selectedProduct && (
        <OrderForm
          isOpen={true}
          onClose={() => setSelectedProduct(null)}
          productName={selectedProduct.name}
          productPrice={selectedProduct.price}
        />
      )}
    </div>
  );
};

export default FooterLinks;
