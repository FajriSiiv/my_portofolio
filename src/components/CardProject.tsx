import React, { useEffect, useState } from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { motion } from "framer-motion";

const CardProject = ({ srcImg }: any) => {
  const [visibleCard, setVisibleCard] = useState(false);

  const [averageColor, setAverageColor] = useState<string>("");

  useEffect(() => {
    const image = new Image();
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Adobe_Animate_CC_icon_%282020%29.svg/1200px-Adobe_Animate_CC_icon_%282020%29.svg.png" ||
      srcImg;
    image.crossOrigin = "anonymous";

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context: any = canvas.getContext("2d");
      context.drawImage(image, 0, 0, image.width, image.height);
      const imageData = context.getImageData(
        0,
        0,
        image.width,
        image.height
      ).data;

      let r = 0,
        g = 0,
        b = 0;
      for (let i = 0; i < imageData.length; i += 4) {
        r += imageData[i];
        g += imageData[i + 1];
        b += imageData[i + 2];
      }
      r = Math.floor(r / (imageData.length / 4));
      g = Math.floor(g / (imageData.length / 4));
      b = Math.floor(b / (imageData.length / 4));

      setAverageColor(`rgb(${r},${g},${b})`);
    };
  }, []);

  return (
    <motion.div
      className="w-full rounded-md h-[400px] p-10 relative overflow-hidden cursor-pointer"
      whileHover={{
        padding: 0,
      }}
      style={{
        backgroundColor: averageColor,
      }}
      onHoverStart={() => setVisibleCard(true)}
      onHoverEnd={() => setVisibleCard(false)}
    >
      <div className="bg-black opacity-50 w-full h-full absolute top-0 right-0 left-0 bottom-0"></div>
      <motion.div
        className={`flex flex-col justify-start  bg-transparent absolute p-5 `}
        initial={{ opacity: 0 }}
        animate={visibleCard ? { opacity: 1 } : { opacity: 0 }}
      >
        <h3 className="text-4xl text-slate-100 font-medium">Project</h3>
        <div className="flex gap-2 items-center mt-5">
          <span className="py-2 px-7 rounded-full bg-slate-100">React</span>
          <span className="py-2 px-7 rounded-full bg-slate-100">Node.JS</span>
        </div>
      </motion.div>
      <div className=" w-full h-full overflow-hidden rounded-md">
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Adobe_Animate_CC_icon_%282020%29.svg/1200px-Adobe_Animate_CC_icon_%282020%29.svg.png"
          className="w-full h-full object-cover"
          alt=""
          whileHover={{ scale: 1.1 }}
        />
      </div>
      <motion.div
        className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={visibleCard ? { opacity: 1 } : { opacity: 0 }}
      >
        <ImArrowUpRight2 />
      </motion.div>
    </motion.div>
  );
};

export default CardProject;
