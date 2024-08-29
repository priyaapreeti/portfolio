import Header from "./components/Header";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Github from "./components/Github"
import Resume from "./components/Resume";
import Contact from "./components/Contact"

export default function App() {
  return (
    <h1 className="p-2">
      <Header/>
      {/* <Hero/>  */}
       {/* <Projects/> */}
      {/* <Github/> */}
      {/* <Resume/> */}
      <Contact/> 
    </h1>
  )
}