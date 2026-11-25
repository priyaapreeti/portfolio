import React from "react";
import Link from "next/link";
import {
  Copyright,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/priyaapreeti",
    icon: GithubLogo,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/preetiipriya/",
    icon: LinkedinLogo,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/preetistful",
    icon: XLogo,
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 pt-10 pb-8 border-t border-gray-200/80 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-5 lg:px-6">
        {/* Top Centered Brand & Email */}
        <div className="flex flex-col items-center text-center mb-8">
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-2"
          >
            Preeti<span className="text-red-600">.</span>
          </Link>

          <a
            href="mailto:preetiipriyaa@gmail.com"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
          >
            <EnvelopeSimple size={18} />
            <span>preetiipriyaa@gmail.com</span>
          </a>
        </div>

        {/* Bottom Copyright & Social Icons */}
        <div className="pt-6 border-t border-gray-200/60 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p className="inline-flex items-center gap-1.5">
            <Copyright size={15} />
            <span>{new Date().getFullYear()} Preeti Priya. All rights reserved.</span>
          </p>

          <ul className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full inline-flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
