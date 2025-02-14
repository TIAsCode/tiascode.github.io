import React from "react";
import { Brain, Share2, Cpu, ShieldCheck } from "lucide-react";
import { mindTouchFeatures, researchProgress } from "../../data/services";

const MindTouchAI = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 text-primary">
              <Brain className="w-8 h-8" />
              <Share2 className="w-8 h-8" />
              <Cpu className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6">Mind Touch AI Research</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of human-machine interaction through
            groundbreaking research in neural interfaces and artificial
            intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mindTouchFeatures.map((feature, index) => (
            <div
              key={index}
              className="slide-in bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 text-primary transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <ShieldCheck className="text-primary" />
            Research Progress
          </h3>
          <div className="space-y-8">
            {researchProgress.map((phase, index) => (
              <div
                key={index}
                className="slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-sm text-primary font-medium">
                      {phase.phase}
                    </span>
                    <h4 className="text-lg font-semibold">{phase.title}</h4>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      phase.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : phase.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all duration-1000"
                    style={{ width: `${phase.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "15+", label: "Patents Filed" },
            { value: "98%", label: "Accuracy Rate" },
            { value: "5ms", label: "Response Time" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center slide-in bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MindTouchAI;
