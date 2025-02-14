import React from "react";
import { PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Need Custom Services?</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Contact us to discuss your specific infrastructure requirements and
          discover how we can help transform your business.
        </p>
        <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all hover:shadow-glow transform hover:-translate-y-1 flex items-center gap-3 mx-auto">
          <PhoneCall size={20} />
          <span className="font-medium">Get in Touch</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
