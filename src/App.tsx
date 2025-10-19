import "./App.css";
import Hero from "@/components/landing-page/hero";
import Nav from "@/components/landing-page/nav";
import About from "./components/landing-page/about";
import Projects from "./components/landing-page/projects";
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Projects />
      {/* <Features /> */}
      {/* <HowItWorks /> */}
      {/* <Benefits /> */}
      {/* <Cta /> */}
      {/* <Footer /> */}
    </div>
  );
}
