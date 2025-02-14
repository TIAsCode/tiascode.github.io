import React, { useState } from "react";
import { X, User, Github, Gitlab as GitlabLogo } from "lucide-react";

const DirectoryNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-50 hidden md:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group relative"
      >
        <User className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* CEO Profile Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 w-80 overflow-hidden scale-in">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              alt="CEO Portrait"
              className="w-full h-32 object-cover"
            />
            <div className="absolute top-2 right-2">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="absolute -bottom-16 left-4">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt="CEO Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="pt-20 p-6">
            <h3 className="text-xl font-bold text-gray-900">Eshan Roy</h3>
            <p className="text-primary font-medium mb-4">
              Chief Executive Officer
            </p>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Visionary leader with 20+ years of experience in technology and
              infrastructure development. Committed to driving innovation and
              sustainable growth.
            </p>

            <div className="flex gap-3 mb-6">
              <a
                href="https://github.com/eshanized"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://gitlab.com/eshanized"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#FC6D26] text-white rounded-full hover:bg-[#E24329] transition-colors text-sm"
              >
                <GitlabLogo className="w-4 h-4" />
                GitLab
              </a>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Former CTO at TechGiant Inc.
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                MIT Graduate in Computer Science
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                15+ Patents in Infrastructure Tech
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <button className="w-full bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors text-sm">
                View Full Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectoryNav;
