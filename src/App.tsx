import "./App.css";
import Hero from "@/components/landing-page/hero";
import Nav from "@/components/landing-page/nav";
import About from "./components/landing-page/about";
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />
      <Hero />
      <About />
      {/* <Features /> */}
      {/* <HowItWorks /> */}
      {/* <Benefits /> */}
      {/* <Cta /> */}
      {/* <Footer /> */}
    </div>
  );
}
