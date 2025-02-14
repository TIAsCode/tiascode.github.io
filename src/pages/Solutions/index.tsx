import React, { useState, useEffect } from "react";
import { dataCenters } from "../../config/dataCenters";
import { DataCenter } from "../../types/dataCenter";
import Hero from "./components/Hero";
import SecurityOverview from "./components/SecurityOverview";
import DataCenterMap from "./components/DataCenterMap";
import DataCenterGrid from "./components/DataCenterGrid";
import CourierLogistics from "./components/CourierLogistics";
import CTA from "./components/CTA";

const Solutions = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [filteredDataCenters, setFilteredDataCenters] =
    useState<DataCenter[]>(dataCenters);
  const [totalStorage, setTotalStorage] = useState({
    total: 0,
    used: 0,
  });

  useEffect(() => {
    if (selectedRegion === "All") {
      setFilteredDataCenters(dataCenters);
    } else {
      setFilteredDataCenters(
        dataCenters.filter((dc) => dc.country === selectedRegion),
      );
    }

    const storageInfo = filteredDataCenters.reduce(
      (acc, dc) => ({
        total: acc.total + dc.totalStorage,
        used: acc.used + dc.usedStorage,
      }),
      { total: 0, used: 0 },
    );

    setTotalStorage(storageInfo);
  }, [selectedRegion]);

  const countries = ["All", ...new Set(dataCenters.map((dc) => dc.country))];

  return (
    <div className="min-h-screen font-ubuntu">
      <Hero />
      <SecurityOverview totalStorage={totalStorage} />
      <DataCenterMap
        countries={countries}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        filteredDataCenters={filteredDataCenters}
      />
      <DataCenterGrid filteredDataCenters={filteredDataCenters} />
      <CourierLogistics />
      <CTA />
    </div>
  );
};

export default Solutions;
