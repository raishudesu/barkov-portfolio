import { projects } from "@/constants/data";
import SpotlightCard from "../SpotlightCard";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { GithubIcon, Link } from "lucide-react";

const Projects = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0C0D0C]">
      <div className="max-w-5xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4  space-mono-regular">
            Projects
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Here are some of my projects I'm proud of.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project, idx) => (
            <SpotlightCard key={idx}>
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition">
                <Avatar>
                  <AvatarImage
                    src={project.projectImageUrl}
                    alt={project.projectImageAlt}
                  />
                  <AvatarFallback>BK</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {project.projectName}
              </h3>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                {project.projectDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((stack) => (
                  <Badge variant={"outline"}>{stack}</Badge>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.links.live && (
                  <Button asChild>
                    <a href={project.links.live} target="_blank">
                      <Link />
                    </a>
                  </Button>
                )}
                {project.links.github && (
                  <Button asChild>
                    <a href={project.links.github} target="_blank">
                      <GithubIcon />
                    </a>
                  </Button>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
