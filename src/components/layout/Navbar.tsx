import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[40px] flex justify-between items-center font-lexend z-10 max-sm:flex-col max-sm:gap-2 max-sm:h-fit">
      <div className="">
        <span className="font-bold font-lexend text-3xl cursor-default">
          Fajri
        </span>
      </div>
      <ul className="flex items-center gap-x-10 text-xl">
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
