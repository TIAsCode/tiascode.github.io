export interface ComponentConfig {
  name: string;
  path: string;
}

export interface RouteConfig {
  path: string;
  name: string;
  components: ComponentConfig[];
  priority?: number;      // Optional priority for sitemap
  changefreq?: string;   // Optional change frequency for sitemap
}
