# TIVision.gitlab.io | THE WEB 🌐

Welcome to the official GitLab Pages site for TONMOY INFRASTRUCTURE! This repository hosts the source code and content for our website. Here, you'll find everything you need to know about contributing, setting up your development environment, and more.

## Table of Contents

1. [About](#about)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Features](#features)
4. [Project Structure](#project-structure)
5. [Contributing](#contributing)
6. [Code of Conduct](#code-of-conduct)
7. [License](#license)
8. [Contact](#contact)

## About 📜

TIDevOps.gitlab.io is the central hub for all things related to TONMOY INFRASTRUCTURE. Our website provides information about our services, projects, team, and more. We aim to deliver a seamless and informative experience to our visitors.

## Getting Started 🚀

### Prerequisites

Before you begin, ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (version 14 or later)
- [pnpm](https://pnpm.io/) (recommended) or [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the Repository**:
   ```sh
   git clone https://gitlab.com/TIVision/TIVision.gitlab.io.git
   cd TIVision.gitlab.io
   ```

2. **Install Dependencies**:
   - Using `pnpm`:
     ```sh
     pnpm install
     ```
   - Using `yarn`:
     ```sh
     yarn install
     ```
   - Using `npm`:
     ```sh
     npm install
     ```

3. **Start the Development Server**:
   - Using `pnpm`:
     ```sh
     pnpm start
     ```
   - Using `yarn`:
     ```sh
     yarn start
     ```
   - Using `npm`:
     ```sh
     npm start
     ```

4. **Open Your Browser**:
   Navigate to `http://localhost:3000` to see the website in action.

## Features ✨

- **Responsive Design**: Our website is fully responsive and looks great on all devices.
- **SEO Optimized**: We follow best practices for search engine optimization.
- **Fast Load Times**: Optimized for speed to ensure a quick and smooth user experience.
- **Accessible**: Designed with accessibility in mind to be usable by everyone.
- **Dynamic Content**: Easily update and manage content through markdown files and JSON configurations.
- **Customizable Themes**: Choose from various themes to match your branding.

## Project Structure 📁

Here's a brief overview of the project structure:

```
TIDevOps.gitlab.io/
.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── _redirects
│   └── sitemap.xml
├── README.md
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── DirectoryNav.tsx
│   │   ├── Footer
│   │   │   ├── ContactInfo.tsx
│   │   │   ├── FeatureIcons.tsx
│   │   │   ├── FooterLinks.tsx
│   │   │   ├── index.tsx
│   │   │   ├── Logo.tsx
│   │   │   └── SocialLinks.tsx
│   │   ├── Footer.tsx
│   │   ├── GradientWrapper.tsx
│   │   ├── hero
│   │   │   ├── ProductsHero.tsx
│   │   │   └── ServicesHero.tsx
│   │   ├── home
│   │   │   └── TransformCTA.tsx
│   │   ├── map
│   │   │   └── LiveMarker.tsx
│   │   ├── Navbar
│   │   │   ├── AuthModal.tsx
│   │   │   ├── index.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── types.ts
│   │   ├── Navbar.tsx
│   │   ├── products
│   │   │   ├── DesktopCooling
│   │   │   │   ├── CoolingSpecs.tsx
│   │   │   │   ├── DesktopCooling.tsx
│   │   │   │   └── PricingTier.tsx
│   │   │   ├── FiberOptics
│   │   │   │   └── FiberOptics.tsx
│   │   │   ├── ImmersionCooling
│   │   │   │   ├── CoolingSpecs.tsx
│   │   │   │   ├── ImmersionCooling.tsx
│   │   │   │   └── PricingTier.tsx
│   │   │   ├── OrderForm.tsx
│   │   │   ├── PricingTier.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   └── RaspberryPi
│   │   │       └── RaspberryPi.tsx
│   │   └── services
│   │       ├── Contact.tsx
│   │       ├── CoreServices.tsx
│   │       ├── Hero.tsx
│   │       ├── MindTouchAI.tsx
│   │       ├── ResearchCard.tsx
│   │       ├── ResearchDevelopment.tsx
│   │       └── ServiceCard.tsx
│   ├── config
│   │   ├── dataCenters
│   │   ├── dataCenters.ts
│   │   └── sitemap.ts
│   ├── data
│   │   ├── desktopCooling.ts
│   │   ├── fiberOptics.ts
│   │   ├── immersionCooling.ts
│   │   ├── products.tsx
│   │   ├── raspberryPi.ts
│   │   └── services.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   │   ├── Careers
│   │   │   ├── components
│   │   │   │   ├── Benefits.tsx
│   │   │   │   ├── CTA.tsx
│   │   │   │   ├── Culture.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Locations.tsx
│   │   │   │   ├── OpenPositions.tsx
│   │   │   │   ├── Perks.tsx
│   │   │   │   └── Testimonials.tsx
│   │   │   └── index.tsx
│   │   ├── Careers.tsx
│   │   ├── Company
│   │   │   ├── components
│   │   │   │   ├── Awards.tsx
│   │   │   │   ├── CTA.tsx
│   │   │   │   ├── Culture.tsx
│   │   │   │   ├── GlobalPresence.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── History.tsx
│   │   │   │   ├── Leadership.tsx
│   │   │   │   ├── Mission.tsx
│   │   │   │   ├── Stats.tsx
│   │   │   │   ├── Sustainability.tsx
│   │   │   │   └── Values.tsx
│   │   │   └── index.tsx
│   │   ├── Company.tsx
│   │   ├── Home
│   │   │   ├── components
│   │   │   │   ├── Benefits.tsx
│   │   │   │   ├── CTA.tsx
│   │   │   │   ├── Features.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── SnigdhaOS.tsx
│   │   │   │   └── Stats.tsx
│   │   │   └── index.tsx
│   │   ├── Home.tsx
│   │   ├── Products
│   │   │   ├── components
│   │   │   │   ├── cooling
│   │   │   │   │   ├── DesktopCooling
│   │   │   │   │   │   ├── CoolingSpecs.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   └── PricingTier.tsx
│   │   │   │   │   └── ImmersionCooling
│   │   │   │   │       └── index.tsx
│   │   │   │   ├── fiber
│   │   │   │   │   └── FiberOptics.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── ProductGrid.tsx
│   │   │   └── index.tsx
│   │   ├── Products.tsx
│   │   ├── Services
│   │   │   └── components
│   │   │       └── research
│   │   │           └── MicrochipResearch.tsx
│   │   ├── Services.tsx
│   │   ├── Solutions
│   │   │   ├── components
│   │   │   │   ├── CourierLogistics.tsx
│   │   │   │   ├── CTA.tsx
│   │   │   │   ├── DataCenterGrid.tsx
│   │   │   │   ├── DataCenterMap.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── SecurityOverview.tsx
│   │   │   └── index.tsx
│   │   └── Solutions.tsx
│   ├── types
│   │   ├── dataCenter.ts
│   │   ├── product.ts
│   │   ├── route.ts
│   │   └── service.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

37 directories, 119 files
```

## Contributing 🤝

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) for detailed information on how to contribute to this project.

![GitLab](https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white)
![Pull Request](https://img.shields.io/badge/Pull%20Request-181717?style=for-the-badge&logo=gitlab&logoColor=white)

## Code of Conduct 📜

Please review and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a respectful and inclusive environment for all contributors.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Contact 📞

If you have any questions, suggestions, or just want to say hi, feel free to reach out to us:

- **Email**: oss@tonmoyinfrastructure.org
- **GitLab Issues**: [Open an Issue](https://gitlab.com/TIVision/TIVision.gitlab.io/-/issues)
- **GitLab Discussions**: [Join the Discussion](https://gitlab.com/TIVision/TIVision.gitlab.io/-/discussions)

![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)
![GitLab Issues](https://img.shields.io/badge/Issues-181717?style=for-the-badge&logo=gitlab&logoColor=white)
![GitLab Discussions](https://img.shields.io/badge/Discussions-181717?style=for-the-badge&logo=gitlab&logoColor=white)

---

Thank you for visiting TIDevOps.gitlab.io! We hope you find the information and resources here valuable. Happy coding! 💻