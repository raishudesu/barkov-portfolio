import "./App.css";
import Hero from "@/components/landing-page/hero";
import Nav from "@/components/landing-page/nav";
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />
      <Hero />
      {/* <Features /> */}
      {/* <HowItWorks /> */}
      {/* <Benefits /> */}
      {/* <Cta /> */}
      {/* <Footer /> */}
    </div>
  );
}
