import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <div className="flex items-center gap-3 text-gray-600">
        <Mail className="w-5 h-5 text-primary flex-shrink-0" />
        <span className="text-sm">contact@tonmoy.com</span>
      </div>
      <div className="flex items-center gap-3 text-gray-600">
        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
        <span className="text-sm">+1 (555) 123-4567</span>
      </div>
      <div className="flex items-center gap-3 text-gray-600 col-span-1 lg:col-span-2">
        <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
        <span className="text-sm">
          123 Innovation Drive, Tech Valley, CA 94043, United States
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
