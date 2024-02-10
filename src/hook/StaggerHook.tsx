import React from "react";
import { motion } from "framer-motion";

const StaggeredText = ({ text, delay }: any) => {
  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05, // Waktu delay antara setiap huruf
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Waktu delay antara setiap huruf
        delayChildren: delay, // Delay animasi
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      {text.split("").map((letter: any, index: number) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ display: "inline-block" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaggeredText;
