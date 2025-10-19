import { AspectRatio } from "../ui/aspect-ratio";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0C0D0C] space-mono-regular"
    >
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AspectRatio ratio={1 / 1} className="rounded-full overflow-hidden">
            <img
              src="/me.png"
              alt="me-image"
              className="h-full w-full rounded-lg object-cover"
            />
          </AspectRatio>
          <div className="flex items-center">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              An IT Graduate. Technology Enthusiast with a touch of business
              concepts. Loves to build, putting ideas into reality. Has
              attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
