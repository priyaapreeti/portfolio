import React from "react";
import { SKILL_CATEGORIES } from "@/data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full max-w-3xl mx-auto py-16 px-5 lg:px-6 scroll-mt-24"
    >
      {/* Section Header */}
      <p className="text-center text-sm sm:text-base font-ovo uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
        Technical Stack
      </p>
      <h2 className="text-3xl sm:text-5xl font-ovo text-center text-gray-900 dark:text-white mb-12">
        Skills &amp; Expertise
      </h2>

      {/* Domain-Wise Rows */}
      <div className="divide-y divide-gray-200/80 dark:divide-white/10 border-y border-gray-200/80 dark:border-white/10">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 group"
          >
            {/* Left Column: Category Title */}
            <h3 className="sm:w-52 shrink-0 font-ovo text-base sm:text-lg font-medium text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {category.title}
            </h3>

            {/* Right Column: Dot-Separated Skills */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {category.skills.map((skill, index) => (
                <React.Fragment key={skill}>
                  <span className="inline-block hover:text-gray-950 dark:hover:text-white transition-colors">
                    {skill}
                  </span>
                  {index < category.skills.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mx-2 text-gray-400 dark:text-gray-600 select-none"
                    >
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
