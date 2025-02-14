import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {[
        { icon: Facebook, href: "#" },
        { icon: Twitter, href: "#" },
        { icon: Linkedin, href: "#" },
        { icon: Instagram, href: "#" },
      ].map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group transition-all hover:shadow-lg hover:-translate-y-1"
        >
          <social.icon className="w-5 h-5 text-primary" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
