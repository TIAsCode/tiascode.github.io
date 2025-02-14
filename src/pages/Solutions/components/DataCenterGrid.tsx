import React from "react";
import {
  Server,
  Database,
  Cpu,
  Network,
  Building2,
  Shield,
  Zap,
  Cloud,
} from "lucide-react";
import { DataCenter } from "../../../types/dataCenter";

interface DataCenterGridProps {
  filteredDataCenters: DataCenter[];
}

const DataCenterGrid: React.FC<DataCenterGridProps> = ({
  filteredDataCenters,
}) => {
  const getStorageUsagePercentage = (used: number, total: number) => {
    return Math.round((used / total) * 100);
  };

  const getLoadColor = (load: number) => {
    if (load < 70) return "bg-green-500";
    if (load < 85) return "bg-yellow-500";
    return "bg-red-500";
  };

  const formatStorage = (storage: number) => {
    return (storage / 1000).toFixed(1) + " PB";
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-gray-900">Data Centers</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            State-of-the-art facilities providing enterprise-grade
            infrastructure solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDataCenters.map((dc, index) => (
            <div
              key={dc.name}
              className="slide-in bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {dc.name}
                    </h3>
                    <p className="text-sm text-gray-500">{dc.country}</p>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {dc.tier}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${dc.status === "Operational" ? "bg-green-500" : "bg-yellow-500"} animate-pulse`}
                  ></div>
                  <span className="text-sm text-gray-600">{dc.status}</span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Infrastructure Overview */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Server className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-gray-700">
                        Servers
                      </span>
                    </div>
                    <p className="text-lg font-semibold">
                      {dc.specs.servers.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-gray-700">
                        Redundancy
                      </span>
                    </div>
                    <p className="text-lg font-semibold">{dc.redundancy}</p>
                  </div>
                </div>

                {/* Storage Usage */}
                <div className="space-y-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-500">Storage Usage</span>
                    <span className="text-sm font-medium text-gray-900">
                      {formatStorage(dc.usedStorage)} /{" "}
                      {formatStorage(dc.totalStorage)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-primary rounded-full h-2 transition-all duration-500"
                      style={{
                        width: `${getStorageUsagePercentage(dc.usedStorage, dc.totalStorage)}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Power & Performance */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-sm text-gray-600">
                        Power Capacity
                      </span>
                    </div>
                    <p className="font-semibold">{dc.powerCapacity} MW</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-primary" />
                      <span className="text-sm text-gray-600">Cooling</span>
                    </div>
                    <p className="font-semibold">
                      {dc.specs.coolingCapacity} MW
                    </p>
                  </div>
                </div>

                {/* Current Load */}
                <div className="space-y-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-500">Current Load</span>
                    <span className="text-sm font-medium text-gray-900">
                      {dc.load}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className={`${getLoadColor(dc.load)} rounded-full h-2 transition-all duration-500`}
                      style={{ width: `${dc.load}%` }}
                    ></div>
                  </div>
                </div>

                {/* Network & Certifications */}
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500 block mb-2">
                      Network Providers
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {dc.networkProviders.map((provider) => (
                        <span
                          key={provider}
                          className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200"
                        >
                          {provider}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block mb-2">
                      Certifications
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {dc.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataCenterGrid;
