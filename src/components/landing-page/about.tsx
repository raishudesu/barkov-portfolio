import BlurText from "../BlurText";
import SpotlightCard from "../SpotlightCard";
import { AspectRatio } from "../ui/aspect-ratio";

const About = () => {
  return (
    <section
      id="about"
      className="bg-background py-20 px-4 text-foreground sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4  space-mono-regular">
          About Me
        </h2>
      </div>
      <SpotlightCard className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <AspectRatio ratio={1 / 1} className="rounded-full overflow-hidden">
            <img
              src="/me.png"
              alt="me-image"
              className="h-full w-full rounded-lg object-cover"
            />
          </AspectRatio>
          <div className="flex items-center">
            <BlurText
              text="An IT Graduate. Technology Enthusiast with a touch of business concepts. Loves to build, putting ideas into reality. Has attention to detail."
              animateBy="words"
              direction="top"
              className="leading-7 [&:not(:first-child)]:mt-6"
              delay={50}
            />
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};

export default About;
