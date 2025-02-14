import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { DataCenter } from "../../types/dataCenter";
import { Server, Database, Shield, Wifi } from "lucide-react";

interface LiveMarkerProps {
  dataCenter: DataCenter;
}

const LiveMarker: React.FC<LiveMarkerProps> = ({ dataCenter }) => {
  const getLoadColor = (load: number) => {
    if (load < 70) return "#22c55e";
    if (load < 85) return "#eab308";
    return "#ef4444";
  };

  const formatStorage = (storage: number) => {
    return (storage / 1000).toFixed(1) + " PB";
  };

  const customIcon = L.divIcon({
    className: "custom-marker",
    html: `<div class="w-4 h-4 rounded-full" style="background-color: ${getLoadColor(dataCenter.load)}"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });

  return (
    <Marker position={[dataCenter.lat, dataCenter.lng]} icon={customIcon}>
      <Popup>
        <div className="p-4 min-w-[300px]">
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-1">{dataCenter.name}</h3>
            <p className="text-gray-600">{dataCenter.country}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-primary" />
              <span className="text-sm text-gray-700">
                {dataCenter.specs.servers.toLocaleString()} Servers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-gray-700">{dataCenter.tier}</span>
            </div>
          </div>

          <div className="space-y-3">
            {/* Load Status */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">System Load</span>
                <span className="font-medium">{dataCenter.load}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="rounded-full h-2 transition-all duration-300"
                  style={{
                    width: `${dataCenter.load}%`,
                    backgroundColor: getLoadColor(dataCenter.load),
                  }}
                ></div>
              </div>
            </div>

            {/* Storage Status */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Storage</span>
                <span className="font-medium">
                  {formatStorage(dataCenter.usedStorage)} /{" "}
                  {formatStorage(dataCenter.totalStorage)}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2 transition-all duration-300"
                  style={{
                    width: `${(dataCenter.usedStorage / dataCenter.totalStorage) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Network Status */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-2">
                <Wifi className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-600">Network Providers</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {dataCenter.networkProviders.map((provider, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                  >
                    {provider}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-600">Certifications</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {dataCenter.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default LiveMarker;
