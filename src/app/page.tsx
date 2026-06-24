import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio-page";

export const metadata: Metadata = {
  title: "Siddharth Pulugujja | Freelance Full Stack Developer",
  description:
    "Freelance Full Stack Developer in India building websites, dashboards, admin panels, and custom web applications for startups and businesses.",
  keywords: [
    "Freelance Full Stack Developer",
    "React Developer India",
    "Node.js Developer",
    "Web Application Developer",
    "NIT Warangal Developer",
  ],
  openGraph: {
    title: "Siddharth Pulugujja | Full Stack Developer",
    description:
      "Modern freelance portfolio for websites, dashboards, admin panels, and custom software.",
    type: "website",
  },
};

export default function Home() {
  return <PortfolioPage />;
}
