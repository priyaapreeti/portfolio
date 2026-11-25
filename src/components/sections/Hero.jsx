"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";
import { assets } from "../../../assets/assets.js";

const Hero = () => {
  return (
    <div className="w-full max-w-3xl mx-auto text-center min-h-[85vh] flex flex-col items-center justify-center pt-28 pb-12 px-4 gap-5">
      {/* Profile Avatar */}
      <div className="relative group">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-red-500/20 via-amber-500/20 to-rose-500/20 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
        <Image
          src={assets.profile_img}
          alt="Preeti Priya"
          priority
          className="relative rounded-full w-28 h-28 sm:w-32 sm:h-32 object-cover border-2 border-white dark:border-gray-800 shadow-md"
        />
      </div>

      {/* Greeting */}
      <p className="flex items-center justify-center gap-2 text-lg sm:text-xl font-ovo text-gray-700 dark:text-gray-300 mt-1">
        Hey, I am Preeti Priya
        {assets?.hand_icon && (
          <Image
            src={assets.hand_icon}
            alt="Waving hand"
            className="w-6 h-6 inline-block"
          />
        )}
      </p>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-ovo font-normal tracking-tight leading-[1.15] text-gray-900 dark:text-white">
        Software Developer based out of India.
      </h1>

      {/* Bio Summary */}
      <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        I’m a frontend-focused web developer with nearly 4 years of professional
        experience building responsive, user-friendly applications. Over time,
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
        <Link
          href="/#contact"
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-ovo text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-sm"
        >
          Contact me <ArrowUpRight size={18} />
        </Link>

        <a
          href="/preeti_priya.pdf"
          download
          className="w-full sm:w-auto px-8 py-3 rounded-full border border-gray-300 dark:border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur-sm text-gray-800 dark:text-gray-200 font-ovo text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:border-gray-900 dark:hover:border-white/50 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
        >
          Resume <ArrowDown size={18} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
