import React from "react";
import { ArrowRight, Building2, Users, Globe } from "lucide-react";

const CTA = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of a team that's shaping the future of infrastructure
              technology
            </p>
            <div className="flex flex-wrap justify-center gap-12 mb-12">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6" />
                <span>35+ Global Offices</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <span>1000+ Team Members</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6" />
                <span>30+ Countries</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-primary px-8 py-4 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-3 group">
                <span className="font-medium">View Careers</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-primary/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-primary/30 transition-all border border-white/30">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
