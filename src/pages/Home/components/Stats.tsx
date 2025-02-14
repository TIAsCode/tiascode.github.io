import { useState, useEffect } from "react";
import { Building2, Globe2, Users, Award } from "lucide-react";

const stats = [
  {
    icon: <Building2 size={32} />,
    number: 52,
    label: "Projects Completed",
    color: "from-blue-500 to-primary",
  },
  {
    icon: <Globe2 size={32} />,
    number: 18,
    label: "Countries Served",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: <Users size={32} />,
    number: 90,
    label: "Team Members",
    color: "from-primary to-cyan-500",
  },
  {
    icon: <Award size={32} />,
    number: 2,
    label: "Industry Awards",
    color: "from-cyan-500 to-blue-500",
  },
];

const Stats = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const duration = 2000; // 2 seconds
      const steps = 50;
      const stepValue = stat.number / steps;
      let currentStep = 0;

      return setInterval(() => {
        if (currentStep < steps) {
          setAnimatedNumbers(prev => {
            const newNumbers = [...prev];
            newNumbers[index] = Math.round(stepValue * currentStep);
            return newNumbers;
          });
          currentStep++;
        } else {
          setAnimatedNumbers(prev => {
            const newNumbers = [...prev];
            newNumbers[index] = stat.number;
            return newNumbers;
          });
        }
      }, duration / steps);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  return (
    <div id="stats-section" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Icon with Animation */}
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-500 relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {stat.icon}
              </div>

              {/* Animated Number */}
              <div className="relative">
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {animatedNumbers[index].toLocaleString()}
                  {stat.label.includes("Countries") ? "+" : ""}
                </div>

                {/* Progress Bar */}
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden mb-3">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000`}
                    style={{
                      width: `${(animatedNumbers[index] / stat.number) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* Label */}
                <div className="text-gray-600 group-hover:text-gray-900 transition-colors">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
