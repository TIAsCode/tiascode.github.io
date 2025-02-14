import React from "react";
import { CheckCircle2, Thermometer, Cpu, Wind } from "lucide-react";
import { CoolingSpecifications } from "../../../../../types/product";

interface CoolingSpecsProps {
  specs: CoolingSpecifications;
}

const CoolingSpecs: React.FC<CoolingSpecsProps> = ({ specs }) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
          <Thermometer className="text-primary" />
          Performance Specifications
        </h3>
        <ul className="space-y-3">
          {specs.performance.map((spec, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-600">
              <CheckCircle2 className="text-primary flex-shrink-0" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
          <Cpu className="text-primary" />
          Technical Details
        </h3>
        <ul className="space-y-3">
          {specs.technical.map((spec, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-600">
              <CheckCircle2 className="text-primary flex-shrink-0" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
          <Wind className="text-primary" />
          Environmental Impact
        </h3>
        <ul className="space-y-3">
          {specs.environmental.map((spec, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-600">
              <CheckCircle2 className="text-primary flex-shrink-0" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoolingSpecs;
