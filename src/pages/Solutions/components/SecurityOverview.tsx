import React from "react";
import { Shield, HardDrive, Activity, Wifi } from "lucide-react";

interface SecurityOverviewProps {
  totalStorage: {
    total: number;
    used: number;
  };
}

const SecurityOverview: React.FC<SecurityOverviewProps> = ({
  totalStorage,
}) => {
  const getStorageUsagePercentage = (used: number, total: number) => {
    return Math.round((used / total) * 100);
  };

  const formatStorage = (storage: number) => {
    return (storage / 1000).toFixed(1) + " PB";
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Infrastructure Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time monitoring of our enterprise-grade infrastructure ensuring
            maximum protection and optimal performance
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Security</h3>
                <p className="text-sm text-gray-500">System Status</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-gray-700 font-medium">
                All Systems Operational
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                <HardDrive className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Storage</h3>
                <p className="text-sm text-gray-500">Total Capacity</p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-gray-900">
                {formatStorage(totalStorage.total)}
              </div>
              <div className="text-sm text-gray-500">Available Capacity</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Usage</h3>
                <p className="text-sm text-gray-500">Current Load</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-gray-900">
                {getStorageUsagePercentage(
                  totalStorage.used,
                  totalStorage.total,
                )}
                %
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className="bg-primary rounded-full h-2.5 transition-all duration-500"
                  style={{
                    width: `${getStorageUsagePercentage(totalStorage.used, totalStorage.total)}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                <Wifi className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Network</h3>
                <p className="text-sm text-gray-500">System Uptime</p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-gray-900">99.999%</div>
              <div className="text-sm text-gray-500">Last 30 Days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityOverview;
