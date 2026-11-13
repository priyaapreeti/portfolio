'use client'
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import About from "./about/About"
import Contact from './contact/Contact'
import Footer from '../components/layout/Footer'
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
