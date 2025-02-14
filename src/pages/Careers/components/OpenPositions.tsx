import React, { useState } from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Search,
  Filter,
} from "lucide-react";

const departments = [
  "All Departments",
  "Engineering",
  "Product",
  "Design",
  "Sales",
  "Marketing",
  "Operations",
];

const locations = [
  "All Locations",
  "New York, USA",
  "London, UK",
  "Singapore",
  "Tokyo, Japan",
  "Remote",
];

const jobs = [
  {
    title: "Senior Infrastructure Engineer",
    location: "New York, USA",
    type: "Full-time",
    salary: "$120K - $180K",
    department: "Engineering",
    description:
      "Lead the development and optimization of our cloud infrastructure systems.",
  },
  {
    title: "Product Manager - Cloud Solutions",
    location: "London, UK",
    type: "Full-time",
    salary: "£80K - £120K",
    department: "Product",
    description: "Drive the strategy and roadmap for our cloud-based products.",
  },
  {
    title: "UX/UI Designer",
    location: "Singapore",
    type: "Full-time",
    salary: "$90K - $130K",
    department: "Design",
    description:
      "Create intuitive and beautiful interfaces for our enterprise products.",
  },
  {
    title: "Solutions Architect",
    location: "Remote",
    type: "Full-time",
    salary: "$130K - $180K",
    department: "Engineering",
    description:
      "Design and implement scalable infrastructure solutions for enterprise clients.",
  },
  {
    title: "DevOps Engineer",
    location: "Tokyo, Japan",
    type: "Full-time",
    salary: "¥10M - ¥15M",
    department: "Engineering",
    description:
      "Build and maintain our CI/CD pipelines and deployment infrastructure.",
  },
  {
    title: "Technical Account Manager",
    location: "Remote",
    type: "Full-time",
    salary: "$90K - $140K",
    department: "Sales",
    description: "Manage and grow relationships with our enterprise clients.",
  },
];

const OpenPositions = () => {
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment =
      selectedDepartment === "All Departments" ||
      job.department === selectedDepartment;
    const matchesLocation =
      selectedLocation === "All Locations" || job.location === selectedLocation;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our team and help build the future of infrastructure technology
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <select
              className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <select
              className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="slide-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer group border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                </div>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {job.department}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  {job.type}
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="w-5 h-5 mr-3 text-primary" />
                  {job.salary}
                </div>
              </div>

              <button className="mt-8 w-full bg-gray-50 text-gray-900 px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:-translate-y-1 duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
