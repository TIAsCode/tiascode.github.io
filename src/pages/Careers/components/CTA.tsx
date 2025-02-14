import React from "react";
import { ArrowRight, Mail, Briefcase, Users } from "lucide-react";

const CTA = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Take the next step in your career and help us shape the future of
          infrastructure technology
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            <span>20+ Open Positions</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>1000+ Team Members</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>Fast Response Time</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-white text-primary px-8 py-4 rounded-full hover:bg-opacity-90 transition-all hover:shadow-glow transform hover:-translate-y-1 flex items-center gap-2 group">
            <span className="font-medium">View All Positions</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-primary/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-primary/30 transition-all border border-white/30">
            Learn About Benefits
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
