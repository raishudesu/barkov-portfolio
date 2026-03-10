import { skillLogos } from "@/constants/data";

const SkillsSlider = () => {
  const loopedLogos = [...skillLogos, ...skillLogos];

  return (
    <section id="skills" className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="space-mono-regular mb-2 text-xl font-bold sm:text-2xl">
            Technical Skills
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Tools and technologies I use to build software.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="skills-marquee-track flex w-max items-center gap-4 py-2">
            {loopedLogos.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-border bg-card/80 p-4 backdrop-blur-sm"
                title={skill.name}
              >
                <img
                  src={skill.logoUrl}
                  alt={`${skill.name} logo`}
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSlider;
