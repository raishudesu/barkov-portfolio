import fundrLogo from "@/assets/logos/fundr-logo.svg";
import rentaLogo from "@/assets/logos/renta-logo.svg";
import parksuLogo from "@/assets/logos/parksu.svg";
import devfolioPfp from "@/assets/logos/devfolio.svg";
import popchainPfp from "@/assets/logos/popchain_logo.png";
import suiBuilderProgramCertificate from "@/assets/certificates/sui-certificate.png";

type SkillLogo = {
  name: string;
  logoUrl: string;
};

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

export const skillLogos: SkillLogo[] = [
  {
    name: "TypeScript",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Tailwind CSS",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Supabase",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "PostgreSQL",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Laravel",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "DotNet",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    name: "AWS",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Firebase",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Linux",
    logoUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
];

export const freelanceProjects = [
  {
    projectName: "Mobeam",
    projectDescription:
      "An engineering calculator for structural engineers. It is a mobile app designed to perform analysis and design of structural beams efficiently. It provides step-by-step calculation results and PDF export for convenient sharing and documentation.",
    projectImageAssets: [
      {
        imageUrl: "/projects/Mobeam/mobeam-1.jpg",
        imageAlt: "mobeam-1",
      },
      {
        imageUrl: "/projects/Mobeam/mobeam-2.jpg",
        imageAlt: "mobeam-2",
      },
    ],
    stack: ["Expo Go"],
  },
];
