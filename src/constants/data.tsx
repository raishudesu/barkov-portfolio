import fundrLogo from "@/assets/logos/fundr-logo.svg";
import rentaLogo from "@/assets/logos/renta-logo.svg";
import parksuLogo from "@/assets/logos/parksu.svg";
import devfolioPfp from "@/assets/logos/devfolio.svg";
import popchainPfp from "@/assets/logos/popchain_logo.png";
import suiBuilderProgramCertificate from "@/assets/certificates/sui-certificate.png";

export const projects = [
  {
    projectName: "PopChain",
    projectDescription:
      "PopChain lets you prove you were there. Scan, mint, collect. Your attendance, secured forever on the blockchain.",
    projectImageUrl: popchainPfp,
    projectImageAlt: "popchain-pfp",
    stack: ["NextJS", "Sui Blockchain", "Tusky", "ShadcnUI", "Supabase"],
    links: {
      github: "https://github.com/raishudesu/popchain-dapp",
      live: "https://popchain.vercel.app",
    },
  },
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

export const certificates = [
  {
    certificateName: "Sui Builder Program",
    certificateImageUrl: suiBuilderProgramCertificate,
    certificateImageAlt: "sui-builder-program-certificate",
    certificateDescription: "Sui Builder Program by YGG Pilipinas",
  },
];
