import React from "react";
import { Globe, ArrowRight, Shield, Zap } from "lucide-react";

const CTA = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our team to learn more about our global infrastructure
              solutions and how we can help your business scale.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 text-gray-700">
                <Shield className="w-5 h-5 text-primary" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Globe className="w-5 h-5 text-primary" />
                <span>Global Network</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Zap className="w-5 h-5 text-primary" />
                <span>High Performance</span>
              </div>
            </div>
            <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-3 mx-auto group">
              <span className="font-medium">Contact Sales</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
