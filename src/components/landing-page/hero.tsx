// import Beams from "@/components/Beams";
import HeroCta from "./hero-cta";
import BlurText from "../BlurText";
import { useEffect, useState } from "react";
import ColorBends from "../color-bends";
const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;
    const updateMode = () => setIsDark(root.classList.contains("dark"));
    updateMode();

    const observer = new MutationObserver(updateMode);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="home"
      className={`w-full relative h-screen flex items-center justify-center overflow-hidden ${
        isDark ? "text-[#fafafa]" : "text-[#0C0D0C]"
      }`}
    >
      <div className="absolute inset-0 z-0">
        {/* <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor={"#ffffff"}
          // backgroundColor={isDark ? "#000000" : "#fafafa"}
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={24}
        /> */}
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
        />
      </div>

      <div className="relative z-20 flex flex-col-reverse md:flex-row gap-4 justify-between items-center max-w-screen-lg px-4">
        <div className="flex flex-col gap-4">
          <div className="mb-6 inline-block">
            <span
              className={`px-4 py-2 rounded-full text-sm backdrop-blur-sm ${
                isDark
                  ? "bg-white/10 border border-white/20 text-white"
                  : "bg-black/10 border border-black/20 text-black"
              }`}
            >
              IT | Software Developer
            </span>
          </div>

          <h1>
            <BlurText
              text="Always think outside the box."
              delay={150}
              animateBy="words"
              direction="top"
              className="space-mono-regular font-medium text-5xl md:text-7xl tracking-wider"
            />
          </h1>
          <span className="gap-2">
            <p className="font-mono text-md md:text-lg tracking-tight">
              Hey there! I am Barysh Bacaltos, a Software Developer.
            </p>
          </span>
          <div className="relative z-20 mt-4 grid md:flex gap-2">
            <HeroCta />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
