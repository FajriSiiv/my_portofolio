import { useRef, useState } from "react";
import { MdOutlineJavascript } from "react-icons/md";
import { FaReact, FaFigma } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiMysql, SiMongodb } from "react-icons/si";

import About from "./components/about";
import Navbar from "./components/layout/Navbar";
import Work from "./components/work";
import StaggeredText from "./hook/StaggerHook";
import { motion } from "framer-motion";
import Footer from "./components/layout/Footer";

function App() {
  const el = useRef(null);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const dataSkillBlob = [
    {
      icon: <MdOutlineJavascript className="w-20 h-20" />,
      positionDiv: "top-2/3 right-1/3",
    },
    {
      icon: <FaReact className="w-20 h-20" />,
      positionDiv: "top-10 right-2/3",
    },
    {
      icon: <TbBrandNextjs className="w-20 h-20" />,
      positionDiv: "right-16 bottom-28",
    },
    {
      icon: <TbBrandTailwind className="w-20 h-20" />,
      positionDiv: "left-24 bottom-10",
    },
    {
      icon: <FaFigma className="w-20 h-20" />,
      positionDiv: "left-1/4 bottom-1/3",
    },
    {
      icon: <SiMysql className="w-20 h-20" />,
      positionDiv: "right-32 top-24",
    },
    {
      icon: <SiMongodb className="w-20 h-20" />,
      positionDiv: "right-1/3 top-24",
    },
  ];

  return (
    <div className="w-full bg-[#f1f1f1] min-h-screen">
      <main
        className="w-full px-10 pt-5 min-h-screen relative max-sm:p-2"
        ref={el}
      >
        <Navbar />
        <div>
          {dataSkillBlob.map((blob, index) => {
            return (
              <DragSkills
                parentDiv={el}
                positionDiv={blob.positionDiv}
                icon={blob.icon}
                delayAnimate={`0.${index + 1}`}
                key={index}
              />
            );
          })}
        </div>
        <div className="min-h-[calc(100vh-120px)] flex justify-center flex-col items-center ">
          <h1 className="font-extrabold text-[60px] uppercase flex gap-x-5 overflow-hidden">
            <StaggeredText text="Fullstack" delay={0} />
            <StaggeredText text="Javascript" delay={0.5} />
          </h1>
          <p className="max-w-[400px] text-center font-poppins">
            I'm a Indonesian-Based Fullstack Javascript using React.JS and
            Nodejs
          </p>
        </div>
      </main>
      <div className="w-full px-10 pt-5 font-lexend overflow-hidden max-sm:p-2">
        <About />
        <br />
        <Work />
      </div>
      <Footer />
    </div>
  );
}

const DragSkills = ({ parentDiv, positionDiv, icon, delayAnimate }: any) => {
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className={`absolute ${
        positionDiv ? positionDiv : "top-2/3 right-1/3"
      } cursor-pointer`}
      variants={item}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: delayAnimate }}
    >
      <motion.div
        drag
        dragConstraints={parentDiv}
        className="w-24 h-24 flex justify-center items-center rounded-full"
        whileHover={{ opacity: 1 }}
        whileTap={{
          opacity: 1,
          scale: 1.05,
          boxShadow: "0px 2px 3px #222",
        }}
        whileDrag={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};

export default App;
