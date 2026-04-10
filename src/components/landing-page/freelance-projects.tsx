import { useState } from "react";
import { freelanceProjects } from "@/constants/data";
import SpotlightCard from "../SpotlightCard";
import { Badge } from "../ui/badge";
import BlurText from "../BlurText";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxState = {
  projectIdx: number;
  imageIdx: number;
} | null;

const FreelanceProjects = () => {
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const openLightbox = (projectIdx: number, imageIdx: number) => {
    setLightbox({ projectIdx, imageIdx });
  };

  const closeLightbox = () => setLightbox(null);

  const navigate = (direction: "prev" | "next") => {
    if (!lightbox) return;
    const assets = freelanceProjects[lightbox.projectIdx].projectImageAssets;
    const total = assets.length;
    const next =
      direction === "prev"
        ? (lightbox.imageIdx - 1 + total) % total
        : (lightbox.imageIdx + 1) % total;
    setLightbox({ ...lightbox, imageIdx: next });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      navigate(delta > 0 ? "next" : "prev");
    }
    setTouchStartX(null);
  };

  const activeImage =
    lightbox !== null
      ? freelanceProjects[lightbox.projectIdx].projectImageAssets[
          lightbox.imageIdx
        ]
      : null;

  const hasMultiple =
    lightbox !== null &&
    freelanceProjects[lightbox.projectIdx].projectImageAssets.length > 1;

  return (
    <section
      id="projects"
      className="bg-background py-20 px-4 text-foreground sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 space-mono-regular">
            Freelance Projects
          </h2>
          <span className="flex justify-center">
            <BlurText
              text="Here's some of the projects I've worked on for my clients."
              animateBy="words"
              direction="top"
              className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground"
              delay={50}
            />
          </span>
        </div>

        <div className="grid gap-8 ">
          {freelanceProjects.map((freelanceProject, pIdx) => (
            <SpotlightCard key={pIdx}>
              <div className="mb-4">
                <div className={`grid sm:grid-cols-2 gap-2`}>
                  {freelanceProject.projectImageAssets.map(
                    (imageAsset, iIdx) => (
                      <button
                        key={iIdx}
                        onClick={() => openLightbox(pIdx, iIdx)}
                        className="group relative overflow-hidden rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
                          <img
                            src={imageAsset.imageUrl}
                            alt={imageAsset.imageAlt}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                          <span className="scale-75 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                            View
                          </span>
                        </div>
                      </button>
                    ),
                  )}
                </div>
              </div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {freelanceProject.projectName}
              </h3>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                {freelanceProject.projectDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {freelanceProject.stack.map((stack, idx) => (
                  <Badge key={idx} variant={"outline"}>
                    {stack}
                  </Badge>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {lightbox !== null && activeImage && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/80 px-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-black/80"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image with swipe support */}
          <div
            className="relative flex max-h-[75vh] max-w-[90vw] select-none items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={activeImage.imageUrl}
              alt={activeImage.imageAlt}
              className="max-h-[75vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
          </div>

          {hasMultiple && (
            <div
              className="flex items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => navigate("prev")}
                className="rounded-full border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-black/80"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-sm text-white/60">
                {lightbox.imageIdx + 1} /{" "}
                {
                  freelanceProjects[lightbox.projectIdx].projectImageAssets
                    .length
                }
              </span>
              <button
                onClick={() => navigate("next")}
                className="rounded-full border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-black/80"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default FreelanceProjects;
