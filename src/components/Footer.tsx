import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Shield,
  Server,
  Cloud,
  Cpu,
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
import IconWrapper from "./GradientWrapper";

const Footer = () => {
  const products = [
    {
      name: "Desktop Cooling",
      icon: <Thermometer className="w-4 h-4 text-primary" />,
    },
    {
      name: "Immersion Cooling",
      icon: <Zap className="w-4 h-4 text-primary" />,
    },
    {
      name: "Fiber Optics",
      icon: <Network className="w-4 h-4 text-primary" />,
    },
    {
      name: "Security Systems",
      icon: <Lock className="w-4 h-4 text-primary" />,
    },
    {
      name: "Cloud Solutions",
      icon: <Cloud className="w-4 h-4 text-primary" />,
    },
    {
      name: "Data Centers",
      icon: <Database className="w-4 h-4 text-primary" />,
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
      icon: <Building2 className="w-4 h-4 text-primary" />,
    },
    {
      name: "Cloud Integration",
      icon: <MonitorSmartphone className="w-4 h-4 text-primary" />,
    },
    {
      name: "Network Security",
      icon: <Shield className="w-4 h-4 text-primary" />,
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
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-black tracking-tight text-primary">
                TONMOY
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Innovating infrastructure solutions for tomorrow's challenges,
              delivering excellence in technology and service.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="hidden sm:block">
            <h3 className="text-lg font-bold mb-6 text-gray-900 flex items-center gap-2">
              <Boxes className="w-5 h-5 text-primary" />
              Products
            </h3>
            <ul className="space-y-4">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    {product.icon}
                    {product.name}
                  </a>
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
        </div>

        {/* Mobile Navigation Accordion */}
        <div className="sm:hidden mt-8 space-y-6">
          {/* Products Section */}
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Boxes className="w-5 h-5 text-primary" />
                Products
              </h3>
              <span className="transition-transform group-open:rotate-180">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <ul className="mt-4 space-y-4 pl-2">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {product.icon}
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>

          {/* Services Section */}
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                Services
              </h3>
              <span className="transition-transform group-open:rotate-180">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <ul className="mt-4 space-y-4 pl-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {service.icon}
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>

          {/* Solutions Section */}
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Solutions
              </h3>
              <span className="transition-transform group-open:rotate-180">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <ul className="mt-4 space-y-4 pl-2">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {solution.icon}
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-200 my-12">
          <div className="flex items-center gap-4">
            <IconWrapper>
              <Shield />
            </IconWrapper>
            <div>
              <h4 className="font-semibold text-gray-900">
                Enterprise Security
              </h4>
              <p className="text-sm text-gray-600">Advanced Protection</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <IconWrapper>
              <Server />
            </IconWrapper>
            <div>
              <h4 className="font-semibold text-gray-900">99.99% Uptime</h4>
              <p className="text-sm text-gray-600">Reliable Infrastructure</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <IconWrapper>
              <Cloud />
            </IconWrapper>
            <div>
              <h4 className="font-semibold text-gray-900">Cloud Solutions</h4>
              <p className="text-sm text-gray-600">Scalable Services</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <IconWrapper>
              <Cpu />
            </IconWrapper>
            <div>
              <h4 className="font-semibold text-gray-900">Smart Systems</h4>
              <p className="text-sm text-gray-600">Intelligent Automation</p>
            </div>
          </div>
        </div>

        {/* Contact Info & Copyright */}
        <div className="pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm">contact@tonmoy.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 col-span-1 lg:col-span-2">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm break-words">
                123 Innovation Drive, Tech Valley, CA 94043, United States
              </span>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} TONMOY INFRASTRUCTURE. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
