import Hero from "./content/hero";
import About from "./content/about";
import Projects from "./content/projects";
import Education from "./content/education";
import Connect from "./content/connect";
export default function Content(){
    return(
        <div className="w-2/5 m-auto min-w-80 h-full flex flex-col justify-between">
        <Hero/>
        <About/>
        <Projects/>
        <Education/>
        <Connect/>
        </div>
    )
}