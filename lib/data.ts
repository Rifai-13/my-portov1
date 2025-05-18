import { Project } from "./types";

export const projects: Project[] = [
    {
    id: "project-1",
    title: "LabAku",
    description: "LabAku is a website used by accounting study program students to conduct accounting learning. Where on this website there are several features including dashboards, companies, journals, ledgers, advanced balance sheets, reports and profiles.",
    image: "/image/labaku.png",
    technologies: ["Next.Js", "TypeScript", "Tailwind CSS","Shadcn/ui", "Laravel", "MySQL"],
    demo: "https://akuntansi.devcomumm.site/login",
    github: "https://github.com/elgafr/akuntansi-web"
  },
  {
    id: "project-2",
    title: "Coffe Shop",
    description: "Coffee shop is a company profile website that explains details about the company. There are home, blog, product, about me and contact me.",
    image: "/image/coffe.png",
    technologies: ["Html", "CSS", "JavaScript"],
    demo: "https://coffe-pi-nine.vercel.app/",
    github: "https://github.com/Rifai-13/Coffe"
  },
  {
    id: "project-3",
    title: "ReparaTech",
    description: "ReparaTech is a website for ordering service for electronic goods, especially cellphones, laptops and tablets. where on this website there is an explanation of the profile and can order services at the same time.",
    image: "/image/reparatech.png",
    technologies: ["TypeScript", "PHP", "Tailwind CSS","Shadcn/ui", "Laravel", "MySQL"],
    demo: "https://v2.reparin.xyz/",
    github: "https://github.com/hisyam99/reparatech-web"
  },
  {
    id: "project-4",
    title: "Portfolio Website",
    description: "I created this portfolio website as a sign of my own portfolio where others can see about myself, see the skills I have and the projects or certificates I have obtained.",
    image: "/image/porto.png",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn/ui","Acerternity Ui", "TypeScript"],
    demo: "https://rifai-13.my.id/",
    github: "https://github.com/Rifai-13/my-portov1"
  }
];