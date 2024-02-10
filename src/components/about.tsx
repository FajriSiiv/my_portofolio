import React, { useEffect, useRef } from "react";
import { PiFigmaLogo, PiHandFistFill } from "react-icons/pi";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaKeyboard,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { TbBrandNextjs, TbError404 } from "react-icons/tb";
import { IoCodeSlash } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { useInView, useScroll, useTransform } from "framer-motion";
import AllSkill from "./Parallax";

const About = () => {
  return (
    <div className="w-full h-full min-h-screen text-slate-900" id="about">
      <h2 className="text-3xl font-extrabold mb-5 uppercase">About me</h2>

      <div className="grid grid-cols-6 grid-rows-6 gap-3 max-lg:flex max-lg:flex-col">
        <div className="col-start-1 col-end-4 row-start-1 row-end-4 bg-slate-200  overflow-hidden p-4 rounded-md ">
          <FirstGrid />
        </div>
        <div className="col-start-4 col-end-7 row-start-1 row-end-4  bg-slate-200  overflow-hidden p-4 rounded-md ">
          <SecondGrid />
        </div>
        <div className="col-start-1 col-end-3 row-start-4 row-end-7 bg-slate-200  overflow-hidden p-4 rounded-md  ">
          <SmallGrid />
        </div>
        <div className="col-start-3 col-end-5 row-start-4 row-end-7 bg-slate-200  overflow-hidden p-4 rounded-md ">
          <SecondSmallGrid />
        </div>
        <div
          className="col-start-5 col-end-7 row-start-4 row-end-7 
        bg-slate-200  overflow-hidden p-4 rounded-md 
        "
        >
          <ThirdSmallGrid />
        </div>
      </div>
    </div>
  );
};

export const LinkMe = ({ icon, text, linkUrl }: any) => {
  return (
    <a
      href={linkUrl}
      className="flex items-center justify-center flex-col gap-y-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span className="uppercase font-bold">{text}</span>
    </a>
  );
};

const FirstGrid = () => {
  return (
    <div className="p-7 flex flex-col h-[300px] justify-center relative">
      <PiHandFistFill className="h-20 w-20" />
      <span className="text-3xl font-bold mt-2 mb-3">All the Projects</span>
      <p className="w-1/2 leading-relaxed">
        Get a snap shot of my project. Some project's took months, some took
        weeks, some took days.
      </p>
      <div className="absolute -top-40 -right-16">
        <AllSkill />
      </div>
    </div>
  );
};

const SecondGrid = () => {
  const CardSkill = ({ text }: any) => {
    return (
      <span className="py-2 px-5 bg-slate-600 text-slate-100 font-bold rounded-md ">
        {text}
      </span>
    );
  };

  return (
    <div className="p-7 flex flex-col h-[300px] justify-center relative ">
      <div className="absolute -top-10 -right-16 ">
        <AllSkill />
      </div>
      <FaKeyboard className="h-20 w-20" />
      <span className="text-3xl font-bold mt-2 mb-3">All Skills</span>
      <div className="flex flex-wrap gap-2 w-5/6 z-10">
        <CardSkill text="ReactJS" />
        <CardSkill text="NEXT.JS" />
        <CardSkill text="Node.JS" />
        <CardSkill text="Figma" />
        <CardSkill text="Javascript" />
        <CardSkill text="Zustand" />
        <CardSkill text="TailwindCSS" />
        <CardSkill text="MySQL" />
        <CardSkill text="Shadcn-UI" />
        <CardSkill text="MongoDB" />
      </div>
    </div>
  );
};

const SmallGrid = () => {
  return (
    <div className="p-4 flex flex-col h-[300px] justify-center items-center relative">
      <TbError404 className="h-20 w-20" />
      <span className="text-3xl font-bold mt-2 mb-2">Solving Problem</span>
      <p className="w-5/6 leading-normal text-center">
        Solving problems by searching on Google and community forums.
      </p>
    </div>
  );
};

const SecondSmallGrid = () => {
  return (
    <div className="p-4 flex flex-col h-[300px] justify-center items-center relative">
      <IoCodeSlash className="h-20 w-20" />
      <span className="text-3xl font-bold mt-2 mb-2">Code Review</span>
      <p className="w-5/6 leading-normal text-center">
        Proficient in conducting thorough code reviews to ensure code quality
        and maintain best practices.
      </p>
    </div>
  );
};

const ThirdSmallGrid = () => {
  return (
    <div className="p-4 flex flex-col h-[300px] justify-center items-center relative">
      <GiBlackBook className="h-20 w-20" />
      <span className="text-3xl font-bold mt-2 mb-2">Learning</span>
      <p className="w-5/6 leading-normal text-center">
        Engaged in continuous learning and improvement through ongoing code
        review processes.
      </p>
    </div>
  );
};

export const AllTheSkill = () => {
  return (
    <div className={`grid grid-rows-3 grid-cols-3 gap-4 `}>
      <div className="h-24 w1h-24 rounded-sm">
        <FaReact className="w-full h-full" />
      </div>
      <div className="h-24 w1h-24 rounded-sm">
        <TbBrandNextjs className="w-full h-full" />
      </div>
      <div className="h-24 w1h-24 rounded-sm">
        <FaNodeJs className="w-full h-full" />
      </div>
      <div className="h-24 w1h-24 rounded-sm">
        <PiFigmaLogo className="w-full h-full" />
      </div>
      <div className="h-24 w1h-24 rounded-sm">
        <SiTailwindcss className="w-full h-full" />
      </div>
      <div className="h-24 w1h-24 rounded-sm">
        <SiMysql className="w-full h-full" />
      </div>
      <div className="h-24 w1h-24 rounded-sm">
        <SiMongodb className="w-full h-full" />
      </div>
      <div className="h-24 w1h-24 rounded-sm">
        <FaHtml5 className="w-full h-full" />
      </div>
      <div className="h-24 w1h-24 rounded-sm">
        <FaCss3 className="w-full h-full" />
      </div>
    </div>
  );
};

export default About;
