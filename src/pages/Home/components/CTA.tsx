import React from "react";
import { PhoneCall, Clock, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

const CTA = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full transform -translate-y-12 translate-x-12"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-tr-full transform translate-y-12 -translate-x-12"></div>

          <div className="text-center relative z-10">
            {/* Enhanced Title */}
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary animate-pulse" />
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ready to Transform Your Infrastructure?
              </h2>
              <Zap className="w-8 h-8 text-primary animate-pulse" />
            </div>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our experts to discuss your infrastructure needs
              and discover how we can help you achieve your goals.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {/* Enhanced Call Button */}
              <button className="group bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all hover:scale-105 transform hover:-translate-y-1 flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-full group-hover:scale-110 transition-transform">
                  <PhoneCall size={20} />
                </div>
                <span className="font-medium">Schedule a Call</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>

              {/* Enhanced Demo Button */}
              <button className="group bg-white text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all border border-gray-200 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
                  <Clock size={20} className="text-primary" />
                </div>
                <span className="font-medium">Request Demo</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Added Features List */}
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {[
                "Instant Setup",
                "24/7 Support",
                "Free Consultation",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
