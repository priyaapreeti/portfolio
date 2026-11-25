import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-5 lg:px-6 pt-28 pb-20 space-y-20">
      <Hero />
      <About />
      <Experience />
      <Contact/>
    </div>
  );
}
