import { createFileRoute } from "@tanstack/react-router";
import { ParticlesBg } from "@/components/portfolio/ParticlesBg";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { Projects } from "@/components/portfolio/Projects";
import { HireMe } from "@/components/portfolio/HireMe";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { FloatingSocials } from "@/components/portfolio/FloatingSocials";
import { Chatbot } from "@/components/portfolio/Chatbot";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akash K | MERN Stack Developer, AIML Engineer & Data Analyst" },
      { name: "description", content: "Explore Akash K's projects, technical skills and capabilities in MERN development, AI and data analysis. Contact Akash for opportunities." },
      { property: "og:title", content: "Akash K | Development, AI & Data Analysis Portfolio" },
      { property: "og:description", content: "Discover Akash K's work in MERN development, AI engineering and data analysis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Loader />
      <ParticlesBg />
      <Nav />
      <FloatingSocials />
      <main>
        <Hero />
        <About />
        <Skills />
        <Capabilities />
        <Projects />
        <HireMe />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
