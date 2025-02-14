import React, { useState, useEffect } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Github,
  Gitlab,
  Code2,
  FileJson,
  Braces,
  Palette,
  X,
} from "lucide-react";
import Hero from "./Careers/components/Hero";
import OpenPositions from "./Careers/components/OpenPositions";
import Benefits from "./Careers/components/Benefits";
import Culture from "./Careers/components/Culture";
import Perks from "./Careers/components/Perks";
import Testimonials from "./Careers/components/Testimonials";
import Locations from "./Careers/components/Locations";
import CTA from "./Careers/components/CTA";

const Careers = () => {
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
      lines: 8524,
      color: "bg-blue-500",
    },
    {
      name: "React",
      icon: <Braces className="w-5 h-5 text-cyan-500" />,
      lines: 6238,
      color: "bg-cyan-500",
    },
    {
      name: "JSON/Config",
      icon: <FileJson className="w-5 h-5 text-yellow-500" />,
      lines: 892,
      color: "bg-yellow-500",
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className="w-5 h-5 text-pink-500" />,
      lines: 1435,
      color: "bg-pink-500",
    },
  ];

  const totalLines = technologies.reduce((acc, tech) => acc + tech.lines, 0);

  return (
    <div className="min-h-screen font-ubuntu">
      <Hero />
      <OpenPositions />
      <Benefits />
      <Culture />
      <Perks />
      <Testimonials />
      <Locations />
      <CTA />

      {/* Developer Info Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full scale-in relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="p-8">
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
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">Total Lines of Code:</span>
                  <span className="text-lg font-bold text-primary">
                    {totalLines.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-lg">Developer</h3>
                  <p className="text-primary">Eshan Roy</p>
                </div>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/eshanized"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://gitlab.com/eshanized"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#FC6D26] text-white rounded-full hover:bg-[#E24329] transition-colors"
                  >
                    <Gitlab className="w-4 h-4" />
                    GitLab
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
