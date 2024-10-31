import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaBootstrap,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoJavascript,
  IoLogoSass,
} from "react-icons/io5";
import {
  RiAngularjsLine,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiJquery, SiLumen, SiMui, SiPhp, SiTypescript } from "react-icons/si";

const languaguesList = {
  front: [
    {
      title: "ReactJS",
      stars: 5,
      icon: (
        <FaReact
          title="ReactJS"
          key="ReactJS"
          aria-label="ReactJS"
          className="text-[#087ca3]"
        />
      ),
    },
    {
      title: "NextJS",
      stars: 4,
      icon: (
        <RiNextjsLine
          title="NextJS"
          key="NextJS"
          aria-label="NextJS"
          className="text-[#000000]"
        />
      ),
    },
    {
      title: "Angular",
      stars: 3,
      icon: (
        <RiAngularjsLine
          title="AngularJS"
          key="AngularJS"
          aria-label="AngularJS"
          className="text-[#e80262]"
        />
      ),
    },
    {
      title: "JavaScript",
      stars: 5,
      icon: (
        <IoLogoJavascript
          title="JavaScript"
          key="JavaScript"
          aria-label="JavaScript"
          className="text-[#f0d71d] bg-black block"
        />
      ),
    },
    {
      title: "TypeScript",
      stars: 4,
      icon: (
        <SiTypescript
          title="TypeScript"
          key="TypeScript"
          aria-label="TypeScript"
          className="text-[#2e74bf]"
        />
      ),
    },
    {
      title: "jQuery",
      stars: 4,
      icon: (
        <SiJquery
          title="jQuery"
          key="jQuery"
          aria-label="jQuery"
          className="text-[#78cff5]"
        />
      ),
    },
    {
      title: "HTML5",
      stars: 5,
      icon: (
        <FaHtml5
          title="HTML5"
          key="HTML5"
          aria-label="HTML5"
          className="text-[#e86127]"
        />
      ),
    },
    {
      title: "CSS3",
      stars: 5,
      icon: (
        <IoLogoCss3
          title="CSS3"
          key="CSS3"
          aria-label="CSS3"
          className="text-[#22a9e3]"
        />
      ),
    },
    {
      title: "SASS",
      stars: 4,
      icon: (
        <IoLogoSass
          title="SASS"
          key="SASS"
          aria-label="SASS"
          className="text-[#cf6399]"
        />
      ),
    },
    {
      title: "Tailwind",
      stars: 5,
      icon: (
        <RiTailwindCssFill
          title="Tailwind"
          key="Tailwind"
          aria-label="Tailwind"
          className="text-[#39bef7]"
        />
      ),
    },
    {
      title: "Bootstrap",
      stars: 5,
      icon: (
        <FaBootstrap
          title="Bootstrap"
          key="Bootstrap"
          aria-label="Bootstrap"
          className="text-[#7611f2]"
        />
      ),
    },
    {
      title: "MUI",
      stars: 4,
      icon: (
        <SiMui
          title="MUI"
          key="MUI"
          aria-label="MUI"
          className="text-[#007cf7]"
        />
      ),
    },
  ],
  back: [
    {
      title: "PHP",
      stars: 4,
      icon: (
        <SiPhp
          title="PHP"
          key="PHP"
          aria-label="PHP"
          className="text-[#7276ad]"
        />
      ),
    },
    {
      title: "Laravel",
      stars: 3,
      icon: (
        <FaLaravel
          title="Laravel"
          key="Laravel"
          aria-label="Laravel"
          className="text-[#f72f20]"
        />
      ),
    },
    {
      title: "Lumen",
      stars: 3,
      icon: (
        <SiLumen
          title="Lumen Framewor"
          key="Lumen Framework"
          aria-label="Lumen Framework"
          className="text-[#f74231]"
        />
      ),
    },
    {
      title: "MySQL",
      stars: 4,
      icon: (
        <GrMysql
          title="MySQL"
          key="MySQL"
          aria-label="MySQL"
          className="text-[#00608a]"
        />
      ),
    },
    {
      title: "PostgreSQL",
      stars: 3,
      icon: (
        <BiLogoPostgresql
          title="PostgreSQL"
          key="PostgreSQL"
          aria-label="PostgreSQL"
          className="text-[#31658c]"
        />
      ),
    },
    {
      title: "Google Firebase",
      stars: 3,
      icon: (
        <IoLogoFirebase
          title="Google Firebase"
          key="Google Firebase"
          aria-label="Google Firebase"
          className="text-[#f79d00]"
        />
      ),
    },
    {
      title: "NodeJS",
      stars: 2,
      icon: (
        <FaNodeJs
          title="NodeJS"
          key="NodeJS"
          aria-label="NodeJS"
          className="text-[#7ebd40]"
        />
      ),
    },
    {
      title: "Python",
      stars: 2,
      icon: (
        <FaPython
          title="Python"
          key="Python"
          aria-label="Python"
          className="text-[#376e9e]"
        />
      ),
    },
  ],
};

export default languaguesList;
