import Hero from "./content/hero";
import About from "./content/about";
import Projects from "./content/projects";
import Education from "./content/education";
import Connect from "./content/connect";
import Footer from "./content/footer";
export default function Content() {
    return (
        <div className="w-full m-auto min-w-80 h-full flex flex-col justify-between">
            <Hero />
            <div className="w-full bg-section-gradient">
                <About />
            </div>
            <Projects />
            <Connect />
            <Footer/>
        </div>
    )
}