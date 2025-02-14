import React, { useState, useEffect } from "react";
import {
  Heart,
  Globe,
  Book,
  Coffee,
  Gift,
  Zap,
  Leaf,
  Shield,
  DollarSign,
  Plane,
  Baby,
  Laptop,
  Dumbbell,
  Clock,
  Smile,
  PlusCircle,
} from "lucide-react";

const Benefits = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [animatedStats, setAnimatedStats] = useState({
    satisfaction: 0,
    coverage: 0,
    budget: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats((prev) => ({
        satisfaction:
          prev.satisfaction < 96 ? prev.satisfaction + 1 : prev.satisfaction,
        coverage: prev.coverage < 100 ? prev.coverage + 1 : prev.coverage,
        budget: prev.budget < 5000 ? prev.budget + 50 : prev.budget,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: "all", label: "All Benefits" },
    { id: "health", label: "Health & Wellness" },
    { id: "work", label: "Work Life" },
    { id: "growth", label: "Growth" },
    { id: "perks", label: "Lifestyle Perks" },
  ];

  const benefits = [
    {
      icon: <Heart />,
      title: "Comprehensive Healthcare",
      description:
        "Full medical, dental, and vision coverage for you and your family",
      category: "health",
      highlights: ["100% Coverage", "Family Plans", "Mental Health Support"],
    },
    {
      icon: <Globe />,
      title: "Remote Work Options",
      description: "Flexibility to work from anywhere in the world",
      category: "work",
      highlights: ["Home Office Setup", "Flexible Hours", "Global Team"],
    },
    {
      icon: <Book />,
      title: "Learning & Development",
      description: "Annual budget for courses, conferences, and certifications",
      category: "growth",
      highlights: ["$5,000 Budget", "Online Courses", "Conference Passes"],
    },
    {
      icon: <Gift />,
      title: "Equity Package",
      description: "Competitive stock options and 401(k) matching",
      category: "perks",
      highlights: ["Stock Options", "401(k) Match", "Financial Planning"],
    },
    {
      icon: <Baby />,
      title: "Family Support",
      description: "Generous parental leave and family planning benefits",
      category: "health",
      highlights: [
        "6 Months Leave",
        "Fertility Support",
        "Adoption Assistance",
      ],
    },
    {
      icon: <Laptop />,
      title: "Tech Allowance",
      description: "Budget for your perfect work setup",
      category: "work",
      highlights: ["Hardware", "Software", "Accessories"],
    },
    {
      icon: <Dumbbell />,
      title: "Wellness Programs",
      description: "Gym memberships and wellness activities",
      category: "health",
      highlights: ["Gym Access", "Wellness Apps", "Health Coaching"],
    },
    {
      icon: <Clock />,
      title: "Flexible Time Off",
      description: "Unlimited PTO and flexible working hours",
      category: "work",
      highlights: ["Unlimited PTO", "Flexible Hours", "Sabbatical Option"],
    },
    {
      icon: <Plane />,
      title: "Travel Benefits",
      description: "Annual travel stipend and workation support",
      category: "perks",
      highlights: ["Travel Budget", "Workations", "Team Retreats"],
    },
    {
      icon: <DollarSign />,
      title: "Competitive Pay",
      description: "Top-tier compensation and regular reviews",
      category: "perks",
      highlights: ["Market Rate+", "Regular Reviews", "Performance Bonus"],
    },
    {
      icon: <Smile />,
      title: "Social Events",
      description: "Regular team activities and celebrations",
      category: "perks",
      highlights: ["Team Events", "Celebrations", "Community"],
    },
    {
      icon: <PlusCircle />,
      title: "Health & Wellness",
      description: "Comprehensive wellness programs and support",
      category: "health",
      highlights: ["Mental Health", "Fitness Classes", "Nutrition"],
    },
  ];

  const filteredBenefits =
    selectedCategory === "all"
      ? benefits
      : benefits.filter((benefit) => benefit.category === selectedCategory);

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Benefits & Perks</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe in taking care of our team with comprehensive benefits
            that matter most to you
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-primary mb-2">
              {animatedStats.satisfaction}%
            </div>
            <div className="text-gray-600">Employee Satisfaction</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-primary mb-2">
              {animatedStats.coverage}%
            </div>
            <div className="text-gray-600">Healthcare Coverage</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-primary mb-2">
              ${animatedStats.budget}
            </div>
            <div className="text-gray-600">Learning Budget</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBenefits.map((benefit, index) => (
            <div
              key={index}
              className="slide-in group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>

              {/* Highlights */}
              <div className="space-y-2">
                {benefit.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Our benefits package is constantly evolving based on team feedback
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all hover:shadow-lg transform hover:-translate-y-1">
            View Full Benefits Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
