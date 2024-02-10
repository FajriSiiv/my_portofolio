import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImArrowRight2 } from "react-icons/im";
import { Projects } from "../data/project";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const Work = () => {
  const dataProject = Projects;

  return (
    <div className={`min-h-screen py-20 relative max-sm:py-5 `}>
      <h2 className="text-3xl font-extrabold mb-5 uppercase">Project</h2>

      <div className="grid grid-cols-project gap-5 text-slate-900 max-sm:flex max-sm:flex-col">
        {dataProject.map((project, index) => (
          <CardProject
            key={index}
            titleProject={project.title}
            tags={project.tags}
            linkUrl={project.source}
          />
        ))}
      </div>
    </div>
  );
};

const CardProject = ({ titleProject, tags, linkUrl }: any) => {
  return (
    <div className="bg-slate-200 bg-opacity-70 p-5 rounded-md min-h-[300px] relative">
      <h2 className="text-2xl font-semibold">{titleProject}</h2>
      <div className="flex gap-2 items-center mt-5 flex-wrap">
        {tags?.map((tag: any, index: number) => (
          <span
            key={index}
            className="py-1 px-5 rounded-md bg-slate-100 cursor-default"
          >
            {tag}
          </span>
        ))}
        {/* <span className="py-1 px-5 rounded-md bg-slate-100">React</span> */}
      </div>
      <motion.a
        href={linkUrl}
        className="flex gap-2 items-center justify-center mt-5 absolute bottom-3 right-3
      py-2 px-7 rounded-md bg-slate-100
      hover:bg-emerald-500 hover:text-slate-100 transition-all duration-400 
      "
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Source</span>
        <ImArrowRight2 />
      </motion.a>
    </div>
  );
};

export default Work;
