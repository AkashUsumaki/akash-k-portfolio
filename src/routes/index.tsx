import { createFileRoute } from "@tanstack/react-router";
import { ParticlesBg } from "@/components/portfolio/ParticlesBg";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { HireMe } from "@/components/portfolio/HireMe";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { FloatingSocials } from "@/components/portfolio/FloatingSocials";
import { Chatbot } from "@/components/portfolio/Chatbot";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
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
        <Services />
        <Projects />
        <HireMe />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
