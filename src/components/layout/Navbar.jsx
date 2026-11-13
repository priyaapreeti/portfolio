import {
  ArrowUpRight,
  DotsThreeOutlineVertical,
  Moon,
  X,
} from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../../assets/assets.js";

const Navbar = ({setIsDarkMode, isDarkMode}) => {
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className=" fixed top-0 right-0">
        <img className="w-full" src={assets.header_bg_color} alt="" />
      </div>
      <nav className={`w-full fixed flex justify-between px-5 lg:px-8 xl:px[8%] py-4 z-50 ${scroll? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm": ""} `}>
        <a href="#top">
          <div className="w-28 cursor-pointer mr-14 text-3xl font-bold">
            Preeti <span className="text-red-600">.</span>
          </div>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8rounded-full px-12 py-3 ${!scroll? "bg-white shadow-sm bg-opacity-50" : ""}`}>
          <li className="font-ovo">
            <a href="#top">Home</a>
          </li>
          <li className="font-ovo">
            <a href="#about">About me</a>
          </li>
          <li className="font-ovo">
            <a href="#exp">Experience</a>
          </li>
          <li className="font-ovo">
            <a href="#work">Work</a>
          </li>
          <li className="font-ovo">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <div className=" flex items-center gap-4">
          <button className="cursor-pointer">
            <Moon className="w-6" size={20} onClick={()=>setIsDarkMode(!isDarkMode)}/>
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact <ArrowUpRight size={20} />
          </a>
          <button
            className=" block md:hidden cursor-pointer"
            onClick={openMenu}
          >
            <DotsThreeOutlineVertical size={20} />
          </button>
        </div>
        {/* mobile menu */}
        <ul
          className="md:hidden flex flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 -right-64"
          ref={sideMenuRef}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <X className="w-5 cursor-pointer" size={20} />
          </div>
          <li className="font-ovo" onClick={closeMenu}>
            <a href="#top">Home</a>
          </li>
          <li className="font-ovo" onClick={closeMenu}>
            <a href="#about">About me</a>
          </li>
          <li className="font-ovo" onClick={closeMenu}>
            <a href="#exp">Experience</a>
          </li>
          <li className="font-ovo" onClick={closeMenu}>
            <a href="#work">Work</a>
          </li>
          <li className="font-ovo" onClick={closeMenu}>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
