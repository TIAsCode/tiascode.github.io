import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working here has been an incredible journey of growth and innovation. The team is supportive, and we're always pushing the boundaries of what's possible.",
    author: "Sarah Chen",
    role: "Senior Infrastructure Engineer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The culture of continuous learning and the opportunity to work with cutting-edge technology makes every day exciting. It's more than just a job.",
    author: "Michael Rodriguez",
    role: "Cloud Architect",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The work-life balance and flexibility here is unmatched. I feel valued as both a professional and a person.",
    author: "Emily Thompson",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
  },
];

const Testimonials = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Employee Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our team members about their experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="slide-in bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                />
              </div>
              <blockquote className="text-gray-600 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-primary text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
