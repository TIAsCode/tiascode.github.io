import React from "react";
import {
  Coffee,
  Plane,
  Laptop,
  Zap,
  Gift,
  Book,
  Heart,
  DollarSign,
  Clock,
  Dumbbell,
  Leaf,
  Globe2,
} from "lucide-react";

const perks = [
  {
    icon: <Coffee />,
    title: "Flexible Hours",
    description: "Work when you're most productive",
    category: "Work-Life Balance",
  },
  {
    icon: <Heart />,
    title: "Health Benefits",
    description: "Comprehensive medical coverage",
    category: "Health & Wellness",
  },
  {
    icon: <DollarSign />,
    title: "Competitive Pay",
    description: "Above market compensation",
    category: "Compensation",
  },
  {
    icon: <Plane />,
    title: "Travel Opportunities",
    description: "Global offices and team meetups",
    category: "Growth",
  },
  {
    icon: <Laptop />,
    title: "Remote Work",
    description: "Work from anywhere setup",
    category: "Work-Life Balance",
  },
  {
    icon: <Book />,
    title: "Learning Budget",
    description: "$5000 annual education allowance",
    category: "Growth",
  },
  {
    icon: <Dumbbell />,
    title: "Wellness Program",
    description: "Gym memberships and health apps",
    category: "Health & Wellness",
  },
  {
    icon: <Clock />,
    title: "Flexible PTO",
    description: "Unlimited vacation policy",
    category: "Work-Life Balance",
  },
  {
    icon: <Gift />,
    title: "Birthday Leave",
    description: "Paid day off on your birthday",
    category: "Perks",
  },
  {
    icon: <Leaf />,
    title: "Sustainability",
    description: "Green commuter benefits",
    category: "Perks",
  },
  {
    icon: <Globe2 />,
    title: "Global Team",
    description: "International work culture",
    category: "Culture",
  },
  {
    icon: <Zap />,
    title: "Career Growth",
    description: "Clear advancement paths",
    category: "Growth",
  },
];

const categories = [
  { name: "All", color: "primary" },
  { name: "Work-Life Balance", color: "blue-500" },
  { name: "Health & Wellness", color: "green-500" },
  { name: "Growth", color: "purple-500" },
  { name: "Perks", color: "orange-500" },
];

const Perks = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPerks = perks.filter(
    (perk) => selectedCategory === "All" || perk.category === selectedCategory,
  );

  return (
    <div className="py-24 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Benefits & Perks</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe in taking care of our team with comprehensive benefits
            that matter most to you
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === category.name
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPerks.map((perk, index) => (
            <div
              key={index}
              className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                {perk.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                {perk.title}
              </h3>
              <p className="text-gray-600">{perk.description}</p>
              <div className="mt-4">
                <span className="text-xs font-medium text-primary/80 bg-primary/5 px-3 py-1 rounded-full">
                  {perk.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold text-primary mb-2">94%</div>
            <div className="text-gray-600">Employee Satisfaction</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-600">Healthcare Coverage</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold text-primary mb-2">$5000</div>
            <div className="text-gray-600">Learning Budget</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;
