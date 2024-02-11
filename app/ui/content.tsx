import Hero from "./content/hero";
import About from "./content/about";
export default function Content(){
    return(
        <div className="w-3/5 m-auto min-w-80 h-full flex flex-col justify-between">
        <Hero/>
        <About/>
        </div>
    )
}