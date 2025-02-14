import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";
import FeatureIcons from "./FeatureIcons";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8 sm:pb-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="text-primary">
                <Logo />
              </div>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Innovating infrastructure solutions for tomorrow's challenges,
              delivering excellence in technology and service.
            </p>
            <SocialLinks />
          </div>

          <FooterLinks />
        </div>

        <FeatureIcons />

        {/* Contact Info & Copyright */}
        <div className="pt-8">
          <ContactInfo />

          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} TONMOY INFRASTRUCTURE. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
