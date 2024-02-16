import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import About, { AllTheSkill } from "./about";

const AllSkill = () => {
  const containerRef = useRef<any>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const posY = window.scrollY - containerRef?.current.offsetTop;
      setScrollY(posY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY);

  const parallaxStyle = useSpring({
    transform: `translate3d(0px, ${scrollY * 0.1}px, 0px)`,
  });

  return (
    <div ref={containerRef}>
      <animated.div style={parallaxStyle} className="w-[300px]">
        <AllTheSkill />
      </animated.div>
    </div>
  );
};

export default AllSkill;
