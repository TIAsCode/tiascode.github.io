import { ArrowRight, Play, Shield, Globe, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[100vh] md:min-h-[85vh] pt-16 md:pt-20 overflow-hidden">
      {/* Animated Background with Multiple Layers */}
      <div className="absolute inset-0">
        <img
          src="/images/home-hero.jpg?auto=format&fit=crop&q=80"
          alt="Infrastructure"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60"></div>
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-600/20 animate-pulse"></div>
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-0">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="slide-in-left bg-white/10 backdrop-blur-sm w-fit px-4 py-2 rounded-full border border-white/20 hover:scale-105 transition-transform">
              <span className="text-white/90 font-medium text-sm md:text-base">
                Innovating Infrastructure for Tomorrow - Eshan Roy
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="slide-in-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-6 animate-gradient-text">
              Building the Future of
              <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-gradient">
                {" "}
                Digital Infrastructure
              </span>
            </h1>

            {/* Description */}
            <p className="slide-in-left text-base md:text-xl text-white/80 max-w-2xl leading-relaxed mt-6 animate-fade-in">
              TONMOY INFRASTRUCTURE delivers cutting-edge solutions for
              sustainable development and modern infrastructure needs, powering
              the next generation of enterprise technology.
            </p>

            {/* CTA Buttons */}
            <div className="slide-in-left flex flex-col sm:flex-row gap-4 mt-8">
              <button className="group w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-glow transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                <span className="font-medium">Get Started</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center gap-3 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Watch Demo?</span>
              </button>
            </div>

            {/* Key Features */}
            <div className="slide-in-left pt-12 flex flex-col sm:flex-row gap-6 sm:gap-8">
              {[
                { icon: Shield, text: "Enterprise Security" },
                { icon: Globe, text: "Global Network" },
                { icon: Zap, text: "High Performance" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <feature.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2 hover:border-white/50 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
