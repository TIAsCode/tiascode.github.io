import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { DataCenter } from "../../../types/dataCenter";
import LiveMarker from "../../../components/map/LiveMarker";
import { Globe } from "lucide-react";

interface DataCenterMapProps {
  countries: string[];
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  filteredDataCenters: DataCenter[];
}

const DataCenterMap: React.FC<DataCenterMapProps> = ({
  countries,
  selectedRegion,
  setSelectedRegion,
  filteredDataCenters,
}) => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-gray-900">Global Network</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our strategically positioned data centers ensure optimal performance
            and reliability worldwide
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedRegion(country)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedRegion === country
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border border-gray-100">
          <div className="h-[600px] rounded-2xl overflow-hidden">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {filteredDataCenters.map((dc) => (
                <LiveMarker key={dc.name} dataCenter={dc} />
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCenterMap;
