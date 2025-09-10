'use client'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "");
    }
  }, [isDarkMode]);
  return (
    <>
    <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
    <Hero/>
    <About/>
    {/* <Work/> */}
    <Contact/>
    <Footer/>
    </>
  );
}
