import React from "react";
import { Shield, Server, Cloud, Cpu } from "lucide-react";
import IconWrapper from "../GradientWrapper";

const FeatureIcons = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-200 my-12">
      <div className="flex items-center gap-4">
        <IconWrapper>
          <Shield />
        </IconWrapper>
        <div>
          <h4 className="font-semibold text-gray-900">Enterprise Security</h4>
          <p className="text-sm text-gray-600">Advanced Protection</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <IconWrapper>
          <Server />
        </IconWrapper>
        <div>
          <h4 className="font-semibold text-gray-900">99.99% Uptime</h4>
          <p className="text-sm text-gray-600">Reliable Infrastructure</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <IconWrapper>
          <Cloud />
        </IconWrapper>
        <div>
          <h4 className="font-semibold text-gray-900">Cloud Solutions</h4>
          <p className="text-sm text-gray-600">Scalable Services</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <IconWrapper>
          <Cpu />
        </IconWrapper>
        <div>
          <h4 className="font-semibold text-gray-900">Smart Systems</h4>
          <p className="text-sm text-gray-600">Intelligent Automation</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureIcons;
