"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  MapPin,
  Pause,
  Play,
} from "@phosphor-icons/react";
import { EXPERIENCES } from "@/data/experience";

const AUTO_SCROLL_INTERVAL = 6000; // 6 seconds per company

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = EXPERIENCES.length;
  const currentExp = EXPERIENCES[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-advance timer (pauses on hover or manual pause)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  return (
    <section
      id="experience"
      className="w-full max-w-3xl mx-auto py-16 px-5 lg:px-6 scroll-mt-24"
    >
      {/* Section Header */}
      <p className="text-center text-sm sm:text-base font-ovo uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
        Career Journey
      </p>
      <h2 className="text-3xl sm:text-5xl font-ovo text-center text-gray-900 dark:text-white mb-10">
        Work Experience
      </h2>

      {/* Company Switcher Pills */}
      {/* <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {EXPERIENCES.map((exp, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <button
              key={exp.company}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-ovo transition-all duration-300 cursor-pointer border ${
                isSelected
                  ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white shadow-sm"
                  : "bg-white/60 dark:bg-white/[0.03] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/15 hover:border-gray-400 dark:hover:border-white/30"
              }`}
            >
              {exp.company.split(" (")[0]}
            </button>
          );
        })}
      </div> */}

      {/* Main Carousel Card */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative overflow-hidden rounded-3xl border border-gray-200/90 dark:border-white/15 bg-white/75 dark:bg-white/[0.03] backdrop-blur-md p-6 sm:p-9 shadow-sm transition-all duration-300"
      >
        {/* Top Row: Role, Company & Period */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-6 border-b border-gray-200/70 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="text-xl sm:text-2xl font-ovo font-semibold text-gray-900 dark:text-white">
                {currentExp.role}
              </h3>
              {currentExp.current && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Current
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-sm text-gray-600 dark:text-gray-300">
              <span className="inline-flex items-center gap-1.5 font-medium text-gray-800 dark:text-gray-200">
                <Briefcase size={16} className="text-red-600 dark:text-red-400" />
                {currentExp.companyUrl ? (
                  <a
                    href={currentExp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    {currentExp.company}
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  currentExp.company
                )}
              </span>

              <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <MapPin size={15} />
                {currentExp.location}
              </span>
            </div>
          </div>

          <span className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 self-start shrink-0">
            {currentExp.period}
          </span>
        </div>

        {/* Bullet Highlights */}
        <ul
          key={activeIndex}
          className="mt-6 space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed animate-fadeIn"
        >
          {currentExp.highlights.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-400 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-gray-200/70 dark:border-white/10">
          {currentExp.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs bg-gray-100/90 dark:bg-white/[0.06] text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Carousel Controls */}
        <div className="flex items-center justify-between mt-7 pt-4 border-t border-gray-200/70 dark:border-white/10">
          {/* Slide Dots + Auto-play Status */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {EXPERIENCES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to experience ${idx + 1}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-7 bg-red-600 dark:bg-red-400"
                      : "w-2 bg-gray-300 dark:bg-white/25 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer ml-1"
            >
              {isPaused ? <Play size={13} weight="fill" /> : <Pause size={13} weight="fill" />}
              <span>{isPaused ? "Paused" : "Auto"}</span>
            </button>
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous company"
              onClick={handlePrev}
              className="p-2 rounded-full border border-gray-200 dark:border-white/15 hover:bg-gray-100 dark:hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next company"
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-200 dark:border-white/15 hover:bg-gray-100 dark:hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
