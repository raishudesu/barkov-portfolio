import Beams from "@/components/Beams";
import HeroCta from "./hero-cta";
import BlurText from "../BlurText";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full relative h-screen flex items-center justify-center overflow-hidden text-[#fafafa]"
    >
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={24}
        />
      </div>

      <div className="relative z-20 flex flex-col-reverse md:flex-row gap-4 justify-between items-center max-w-screen-lg px-4">
        <div className="flex flex-col gap-4">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white backdrop-blur-sm">
              🇵🇭 IT | Software Developer
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
