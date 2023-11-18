import { nanoid } from "nanoid";
import { FaReact, FaNodeJs, FaDocker, FaGitSquare } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiHtml5, SiTurborepo, SiMongodb, SiGithubactions, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript, BiLogoPostgresql, BiLogoGoLang } from "react-icons/bi";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#tech-stack", text: "techStack" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const techStacks = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <SiHtml5 className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },

  {
    id: nanoid(),
    title: "TypeScript",
    icon: <BiLogoTypescript className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Expertise in TypeScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "NodeJS",
    icon: <FaNodeJs className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Ability to leverage NodeJS to build highly robust, secure ServerSide API's with either Monolithic or MicroServices architectures.",
  },
  {
    id: nanoid(),
    title: "Go (Coming Soon)",
    icon: <BiLogoGoLang className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Next JS",
    icon: <TbBrandNextjs className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Turborepo",
    icon: <SiTurborepo className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "PostgreSQL",
    icon: <BiLogoPostgresql className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Docker",
    icon: <FaDocker className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Git",
    icon: <FaGitSquare className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "GitHub Actions (Coming Soon)",
    icon: <SiGithubactions className="h-14 w-14 text-sky-400 rounded shadow shadow-sky-600/40" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/devbyvan",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/devbyvan",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/devbyvan",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
