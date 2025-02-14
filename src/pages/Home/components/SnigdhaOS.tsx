import React, { useState, useEffect } from "react";
import {
  Download,
  ArrowRight,
  Shield,
  Zap,
  Layers,
  Terminal,
  X,
  Code,
  Cpu,
  Cloud,
  Lock,
  CheckCircle2,
  Server,
  Globe,
  Info,
  Settings,
  List,
} from "lucide-react";

const osFeatures = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Enhanced Security",
    description:
      "Built-in security features with advanced encryption and real-time threat detection",
    stats: ["99.99% Uptime", "Zero-Day Protection", "Real-time Monitoring"],
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Lightning Fast",
    description:
      "Optimized kernel performance with advanced resource management",
    stats: ["50% Faster Boot", "30% Less Memory", "Quick Response"],
  },
  {
    icon: <Layers className="w-12 h-12" />,
    title: "Modern Architecture",
    description:
      "Built on cutting-edge technology stack with microservices support",
    stats: ["Microservices", "Containerization", "Cloud-Native"],
  },
  {
    icon: <Terminal className="w-12 h-12" />,
    title: "Developer Friendly",
    description: "Integrated development tools and containerization support",
    stats: ["Built-in IDE", "Git Integration", "Package Manager"],
  },
];

const technicalSpecs = [
  {
    icon: <Cpu />,
    label: "System Requirements",
    specs: [
      "64-bit processor",
      "4GB RAM minimum",
      "20GB storage",
      "TPM 2.0 support",
    ],
  },
  {
    icon: <Code />,
    label: "Development Tools",
    specs: [
      "Native container support",
      "Built-in package manager",
      "Multiple language SDKs",
      "CI/CD integration",
    ],
  },
  {
    icon: <Cloud />,
    label: "Cloud Features",
    specs: [
      "Cloud-native architecture",
      "Kubernetes integration",
      "Auto-scaling support",
      "Multi-cloud deployment",
    ],
  },
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80",
    title: "Modern Interface",
    description: "Sleek and intuitive user interface designed for productivity",
  },
  {
    url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80",
    title: "Development Environment",
    description: "Integrated development tools for seamless coding experience",
  },
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    title: "Cloud Integration",
    description: "Native cloud support for modern infrastructure",
  },
  {
    url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80",
    title: "Security Dashboard",
    description: "Advanced security monitoring and threat detection",
  },
];

const SnigdhaOS = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "specs">(
    "overview",
  );
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    downloads: 0,
    rating: 0,
  });

  const tabs = [
    { id: "overview", label: "Overview", icon: <Info className="w-4 h-4" /> },
    { id: "features", label: "Features", icon: <List className="w-4 h-4" /> },
    { id: "specs", label: "Specs", icon: <Settings className="w-4 h-4" /> },
  ] as const;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats((prev) => ({
        users: prev.users < 100000 ? prev.users + 1000 : prev.users,
        downloads:
          prev.downloads < 500000 ? prev.downloads + 5000 : prev.downloads,
        rating:
          prev.rating < 4.9
            ? parseFloat((prev.rating + 0.1).toFixed(1))
            : prev.rating,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleLightboxClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6 slide-in">
            <div className="relative">
              <Shield className="w-12 h-12 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Introducing <span className="text-primary">Snigdha OS</span>
            </h2>
          </div>
          <p
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            Experience the next generation of enterprise operating systems.
            Snigdha OS combines powerful performance, enhanced security, and
            seamless integration capabilities in one comprehensive solution.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            {[
              { label: "Active Users", value: animatedStats.users, suffix: "+" },
              { label: "Downloads", value: animatedStats.downloads, suffix: "+" },
              { label: "User Rating", value: animatedStats.rating, suffix: "/5.0" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all group"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
                  {typeof stat.value === "number" && stat.suffix === "/5.0"
                    ? stat.value.toFixed(1)
                    : stat.value.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 group-hover:text-primary transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg border border-gray-100 flex flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-24">
          {/* Overview Section */}
          <div
            className={`transition-all duration-500 ${activeTab === "overview" ? "opacity-100" : "opacity-0 hidden"}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Next-Gen Operating System
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Snigdha OS redefines enterprise computing with its innovative
                  approach to security, performance, and user experience. Built
                  for modern businesses, it seamlessly integrates with your
                  existing infrastructure while providing cutting-edge features.
                </p>
                <ul className="space-y-4">
                  {[
                    "Enterprise-grade security out of the box",
                    "Cloud-native architecture for modern deployments",
                    "Advanced development tools and environments",
                    "Real-time monitoring and threat detection",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700 group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">
                      {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 group">
                    <Download className="w-5 h-5" />
                    Download Now
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-200 transition-all flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="text-white">
                        <h4 className="font-semibold mb-1">{image.title}</h4>
                        <p className="text-sm text-white/80">
                         {image.description}
                         </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div
            className={`transition-all duration-500 ${activeTab === "features" ? "opacity-100" : "opacity-0 hidden"}`}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {osFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-gray-100"
                >
                  <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {feature.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 p-3 rounded-xl text-center"
                      >
                        <span className="text-sm font-medium text-gray-700">
                          {stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Section */}
          <div
            className={`transition-all duration-500 ${activeTab === "specs" ? "opacity-100" : "opacity-0 hidden"}`}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {technicalSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform text-primary">
                      {spec.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {spec.label}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {spec.specs.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="mt-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Enterprise-Ready Features
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Server className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold">Infrastructure</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  Scalable architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  High availability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  Load balancing
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold">Global Network</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  CDN integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  Edge computing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  Multi-region support
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold">Security</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  End-to-end encryption
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  Threat detection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  Compliance tools
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full scale-in">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
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

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-wrap gap-6 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all hover:shadow-glow transform hover:-translate-y-1 flex items-center gap-3">
              <Download size={20} />
              <span className="font-medium">Download Now</span>
            </button>
            <button className="bg-white text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all border border-gray-200 flex items-center gap-3">
              <span className="font-medium">Documentation</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnigdhaOS;
