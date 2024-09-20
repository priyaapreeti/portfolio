import React from "react";
import pdfFile from "../assets/Preeti_Priya.pdf"
const Header = () => {
  return (
    <nav className="fixed w-full top-0">
      <ul className="flex p-3 w-full bg-black text-white">
        <li className="p-2  hover:bg-transparent rounded-lg hover:text-blue-500">
          <a href="/">Home</a>
        </li>
        <li className="p-2 hover:bg-transparent rounded-lg hover:text-blue-500">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-2 hover:bg-transparent rounded-lg hover:text-blue-500">
          <a href="https://github.com/priyaapreeti" target="_blank">
            Github
          </a>
        </li>
        <li className="p-2 hover:bg-transparent rounded-lg hover:text-blue-500">
          <a href={pdfFile} download="Preeti_Priya.pdf">Resume</a>
        </li>
        {/* <li className="p-2 hover:bg-transparent rounded-lg hover:text-blue-500">
          <a href="#contact">Contact me</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Header;
