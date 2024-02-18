import Project from "@/app/components/project";
import { projData } from "@/data/projectData";

export default function Projects() {
    return (

        <section id="projects" className=" mb-8 m-auto pt-32 w-2/5 min-w-80 min-h-128h">
            <div>
                <h2 className="text-3xl font-medium text-center"><span className="text-green">02. </span>Projects</h2>
                {projData.map((proj, index) => (
                    <Project projectItems={proj} key={index} />
                ))}
            </div>
        </section>
    )
}