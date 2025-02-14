export interface DataCenterSpecs {
  servers: number;
  racks: number;
  coolingCapacity: number; // in MW
  backupGenerators: number;
}

export interface DataCenter {
  name: string;
  country: string;
  region: string;
  status: string;
  tier: string;
  certifications: string[];
  powerCapacity: number; // in MW
  redundancy: string;
  networkProviders: string[];
  load: number;
  lat: number;
  lng: number;
  totalStorage: number;
  usedStorage: number;
  specs: DataCenterSpecs;
}
