import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LinkMe } from "../about";

const Footer = () => {
  return (
    <footer className=" pb-10 font-lexend text-center ">
      <div className="flex justify-center items-center gap-10 pb-5">
        <LinkMe
          linkUrl="https://github.com/FajriSiiv"
          icon={<FaGithub className="h-14 w-14" />}
          text="Github"
        />
        <LinkMe
          linkUrl="https://www.linkedin.com/in/muhammad-fajri-8741031ba/"
          icon={<FaLinkedin className="h-14 w-14" />}
          text="LinkedIn"
        />
      </div>
      <span className="font-semibold ">fajrijijin@gmail.com</span>
    </footer>
  );
};

export default Footer;
