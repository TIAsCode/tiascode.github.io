import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DirectoryNav from "./components/DirectoryNav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import Company from "./pages/Company";
import Careers from "./pages/Careers";
import { Code2, FileJson, Braces, Palette, X } from "lucide-react";

// ScrollToTop component that handles scrolling on route change
function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return null;
}

// Main App component
function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown before
    const hasSeenPopup = localStorage.getItem("hasSeenTechPopup");
    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem("hasSeenTechPopup", "true");
    }
  }, []);

  const technologies = [
    {
      name: "TypeScript",
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      lines: 12458,
      color: "bg-blue-500",
    },
    {
      name: "React",
      icon: <Braces className="w-5 h-5 text-cyan-500" />,
      lines: 8924,
      color: "bg-cyan-500",
    },
    {
      name: "JSON/Config",
      icon: <FileJson className="w-5 h-5 text-yellow-500" />,
      lines: 1245,
      color: "bg-yellow-500",
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className="w-5 h-5 text-pink-500" />,
      lines: 2876,
      color: "bg-pink-500",
    },
  ];

  const totalLines = technologies.reduce((acc, tech) => acc + tech.lines, 0);

  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/company" element={<Company />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
        <DirectoryNav />

        {/* Tech Stack Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 scale-in relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  Built with Modern Tech Stack
                </h2>
                <p className="text-gray-600">
                  This website is crafted using cutting-edge technologies
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        {tech.icon}
                      </div>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${tech.color}`}
                      ></div>
                      <span className="text-gray-600">
                        {tech.lines.toLocaleString()} lines
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total Lines of Code:</span>
                  <span className="text-lg font-bold text-primary">
                    {totalLines.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </HashRouter>
  );
}

export default App;
