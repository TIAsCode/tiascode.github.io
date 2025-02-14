import { RouteConfig } from "../types/route";

// Define base configuration for the site
export const siteConfig = {
  baseUrl: 'https://tidevops.gitlab.io',
  defaultChangeFreq: 'weekly',
  defaultPriority: 0.8
};

// Define site routes with improved structure
export const siteRoutes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    priority: 1.0,
    changefreq: 'daily',
    components: [
      { name: "Hero", path: "/src/pages/Home/components/Hero" },
      { name: "SnigdhaOS", path: "/src/pages/Home/components/SnigdhaOS" },
      { name: "Stats", path: "/src/pages/Home/components/Stats" },
      { name: "Features", path: "/src/pages/Home/components/Features" },
      { name: "Benefits", path: "/src/pages/Home/components/Benefits" },
      { name: "CTA", path: "/src/pages/Home/components/CTA" },
    ],
  },
  {
    path: "/products",
    name: "Products",
    priority: 0.9,
    changefreq: 'weekly',
    components: [
      { name: "Hero", path: "/src/pages/Products/components/Hero" },
      { name: "ProductGrid", path: "/src/pages/Products/components/ProductGrid" },
      { name: "FiberOptics", path: "/src/pages/Products/components/fiber/FiberOptics" },
      { name: "ImmersionCooling", path: "/src/pages/Products/components/cooling/ImmersionCooling" },
      { name: "DesktopCooling", path: "/src/pages/Products/components/cooling/DesktopCooling" },
      { name: "ProductCard", path: "/src/components/products/ProductCard" },
    ],
  },
  {
    path: "/solutions",
    name: "Solutions",
    priority: 0.9,
    changefreq: 'weekly',
    components: [
      { name: "Hero", path: "/src/pages/Solutions/components/Hero" },
      { name: "SecurityOverview", path: "/src/pages/Solutions/components/SecurityOverview" },
      { name: "DataCenterMap", path: "/src/pages/Solutions/components/DataCenterMap" },
      { name: "DataCenterGrid", path: "/src/pages/Solutions/components/DataCenterGrid" },
      { name: "CourierLogistics", path: "/src/pages/Solutions/components/CourierLogistics" },
      { name: "CTA", path: "/src/pages/Solutions/components/CTA" },
    ],
  },
  {
    path: "/services",
    name: "Services",
    priority: 0.9,
    changefreq: 'weekly',
    components: [
      { name: "Hero", path: "/src/components/services/Hero" },
      { name: "CoreServices", path: "/src/components/services/CoreServices" },
      { name: "ResearchDevelopment", path: "/src/components/services/ResearchDevelopment" },
      { name: "MindTouchAI", path: "/src/components/services/MindTouchAI" },
      { name: "MicrochipResearch", path: "/src/pages/Services/components/research/MicrochipResearch" },
      { name: "Contact", path: "/src/components/services/Contact" },
    ],
  },
  {
    path: "/company",
    name: "Company",
    priority: 0.8,
    changefreq: 'monthly',
    components: [
      { name: "Hero", path: "/src/pages/Company/components/Hero" },
      { name: "Stats", path: "/src/pages/Company/components/Stats" },
      { name: "Mission", path: "/src/pages/Company/components/Mission" },
      { name: "Values", path: "/src/pages/Company/components/Values" },
      { name: "History", path: "/src/pages/Company/components/History" },
      { name: "Leadership", path: "/src/pages/Company/components/Leadership" },
      { name: "Culture", path: "/src/pages/Company/components/Culture" },
      { name: "Sustainability", path: "/src/pages/Company/components/Sustainability" },
      { name: "GlobalPresence", path: "/src/pages/Company/components/GlobalPresence" },
      { name: "Awards", path: "/src/pages/Company/components/Awards" },
      { name: "CTA", path: "/src/pages/Company/components/CTA" },
    ],
  },
  {
    path: "/careers",
    name: "Careers",
    priority: 0.9,
    changefreq: 'daily',
    components: [
      { name: "Hero", path: "/src/pages/Careers/components/Hero" },
      { name: "OpenPositions", path: "/src/pages/Careers/components/OpenPositions" },
      { name: "Benefits", path: "/src/pages/Careers/components/Benefits" },
      { name: "Culture", path: "/src/pages/Careers/components/Culture" },
      { name: "Perks", path: "/src/pages/Careers/components/Perks" },
      { name: "Testimonials", path: "/src/pages/Careers/components/Testimonials" },
      { name: "Locations", path: "/src/pages/Careers/components/Locations" },
      { name: "CTA", path: "/src/pages/Careers/components/CTA" },
    ],
  },
];
