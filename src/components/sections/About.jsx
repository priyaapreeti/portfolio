import Image from "next/image";
import { infoList } from "../../../assets/assets.js";
import Skills from "./Skills.jsx";

const About = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-5 lg:px-6" id="about">
      {/* Section Header */}
      <p className="text-center text-sm sm:text-base font-ovo uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
        Introduction
      </p>
      <h2 className="text-3xl sm:text-5xl font-ovo text-center text-gray-900 dark:text-white mb-10">
        About me
      </h2>

      {/* Bio Paragraph */}
      <div className="text-center mx-auto flex flex-col items-center">
        <p className="mb-12 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Experienced software engineer with nearly 4 years of professional
          experience building responsive, user-friendly applications. Over
          time, I&apos;ve expanded into full-stack development with the MERN
          stack, giving me end-to-end expertise in designing and delivering
          modern web solutions.
        </p>

        {/* Info Cards Grid */}
        <Skills/>
      </div>
    </div>
  );
};

export default About;
