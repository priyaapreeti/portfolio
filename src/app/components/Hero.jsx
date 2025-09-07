import Image from "next/image";
import { assets } from "../../../assets/assets.js";
import { ArrowDown, ArrowUpRight } from "phosphor-react";

const Hero = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
      <div className="">
        <Image
          src={assets.profile_img}
          alt="preeti"
          className="rounded-full w-32 "
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo ">
        Hey, I am Preeti Priya<Image src={assets.hand_icon} alt="" />{" "}
      </h3>
      <h1 className="text-xl sm:text-6xl lg:text:[66px] max-auto ">
        Software Developer based in Bangalore.
      </h1>
      <p className="max-w-2xl mx-auto ">
        I’m a frontend-focused web developer with nearly 3 years of professional
        experience building responsive, user-friendly applications. Over time,
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
        <a
          href="#contact"
          className="px-10 py-3 flex border rounded-full border-gray-500 items-center hover:scale-105"
        >
          Contact me <ArrowUpRight size={20} />{" "}
        </a>
        <a
          href="/preeti_priya.pdf"
          className="px-10 py-3 border rounded-full flex border-gray-500 items-center hover:scale-105"
          download
        >
          Resume <ArrowDown size={20} />{" "}
        </a>
      </div>
    </div>
  );
};

export default Hero;
