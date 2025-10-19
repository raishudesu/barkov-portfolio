import fundrLogo from "@/assets/logos/fundr-logo.svg";
import rentaLogo from "@/assets/logos/renta-logo.svg";
import parksuLogo from "@/assets/logos/parksu.svg";
import devfolioPfp from "@/assets/logos/devfolio.svg";

export const projects = [
  {
    projectName: "Renta",
    projectDescription:
      "The simplest way to rent vehicles. Owners list their cars, renters book instantly, and QR codes make pickup seamless. No paperwork, no hassle.",
    projectImageUrl: rentaLogo,
    projectImageAlt: "renta-icon",
    stack: ["NextJS", "ASP.NET Core", "ShadcnUI", "AWS"],
    links: {
      github: "https://github.com/raishudesu/renta-frontend",
      live: "https://renta-prod.vercel.app",
    },
  },
  {
    projectName: "Fundr Business Support Services",
    projectDescription:
      "A Platform to provide financial information and transparency to Fundr Clients.",
    projectImageUrl: fundrLogo,
    projectImageAlt: "fundr-icon",
    stack: ["NextJS", "Supabase", "ShadcnUI"],
    links: {
      github: null,
      live: "https://fundrph.org",
    },
  },
  {
    projectName: "ParkSU",
    projectDescription:
      "A Realtime Parking Monitoring System with Data Analytics and Visualization for Palawan State University campus.",
    projectImageUrl: parksuLogo,
    projectImageAlt: "parksu-icon",
    stack: ["NextJS", "Supabase", "ShadcnUI"],
    links: {
      github: "https://github.com/raishudesu/parking-monitoring",
      live: "https://parksu.vercel.app",
    },
  },
  {
    projectName: "Devfolio",
    projectDescription:
      "A platform for developers to generate ideas with the help of a Generative AI and share their projects as development inspiration to increase their employment probability.",
    projectImageUrl: devfolioPfp,
    projectImageAlt: "quillify-pfp",
    stack: ["NextJS", "Supabase", "ShadcnUI"],
    links: {
      github: "https://github.com/raishudesu/devfolio",
      live: "https://devfolio-prod.vercel.app",
    },
  },
];
