"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  DotsThreeOutlineVertical,
  Moon,
  Sun,
  X,
} from "@phosphor-icons/react";
import { assets } from "../../../assets/assets.js";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Subtle Top Gradient Accent */}
      {assets?.header_bg_color && (
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] pointer-events-none dark:hidden">
          <Image
            src={assets.header_bg_color}
            alt=""
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <nav className="max-w-4xl mx-auto flex items-center justify-between px-5 lg:px-6">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group inline-flex items-baseline text-2xl font-bold tracking-tight transition-opacity hover:opacity-85"
          >
            Preeti
            <span className="text-red-600 transition-transform duration-300 group-hover:scale-125">
              .
            </span>
          </Link>

          {/* Desktop Floating Glass Capsule */}
          <ul
            className={`hidden md:flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm transition-all duration-500 ${
              isScrolled
                ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-black/[0.04] dark:shadow-black/30 border border-gray-200/80 dark:border-white/15 ring-1 ring-inset ring-white/50 dark:ring-white/5"
                : "bg-white/65 dark:bg-white/[0.04] backdrop-blur-md shadow-sm border border-gray-200/60 dark:border-white/10"
            }`}
          >
            {/* Theme Toggle Inside Capsule */}
            <li>
              <button
                type="button"
                aria-label="Toggle dark mode"
                onClick={() => setIsDarkMode((prev) => !prev)}
                className="group p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-900/5 dark:hover:bg-white/10 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                {mounted && isDarkMode ? (
                  <Sun
                    size={17}
                    weight="duotone"
                    className="text-amber-400 transition-transform duration-300 group-hover:rotate-45"
                  />
                ) : (
                  <Moon
                    size={17}
                    weight="duotone"
                    className="transition-transform duration-300 group-hover:-rotate-12"
                  />
                )}
              </button>
            </li>

            {/* Hairline Divider */}
            <li aria-hidden="true" className="h-4 w-px bg-gray-300/70 dark:bg-white/15 mx-1" />

            {/* Navigation Links */}
            {NAV_LINKS.map((link) => {
              const isActive = mounted && pathname === link.href;

              return (
                <li key={link.href} className="font-ovo">
                  <Link
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full inline-flex items-center justify-center transition-all duration-200 active:scale-95 ${
                      isActive
                        ? "text-gray-950 dark:text-white font-medium bg-gray-900/[0.06] dark:bg-white/10"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-gray-900/[0.04] dark:hover:bg-white/[0.06]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Controls (Theme + Drawer Trigger) */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setIsDarkMode((prev) => !prev)}
              className="p-2 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-md border border-gray-200/60 dark:border-white/10 cursor-pointer"
            >
              {mounted && isDarkMode ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-md border border-gray-200/60 dark:border-white/10 cursor-pointer"
            >
              <DotsThreeOutlineVertical size={18} />
            </button>
          </div>
        </nav>

        {/* Mobile Backdrop */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40 md:hidden transition-opacity"
          />
        )}

        {/* Mobile Drawer */}
        <div
          className={`md:hidden fixed top-0 bottom-0 right-0 w-64 z-50 h-screen bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-l border-gray-200/60 dark:border-white/10 shadow-2xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-5 top-5 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer"
          >
            <X size={20} />
          </button>

          <ul className="flex flex-col gap-4 py-20 px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="font-ovo">
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
