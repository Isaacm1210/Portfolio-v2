import Image from "next/image";
import CapstoneIMG from "@/public/capstone.png";
import ToolBubble from "@/app/components/toolBubbles";
export default function Projects() {
    return (
        <section id="projects" className="h-128h mb-8 m-auto pt-32 w-2/5 min-w-80 min-h-128h">
            <h2 className="text-3xl font-medium text-center"><span className="text-green">02. </span>Projects</h2>
            <div className="w-10/12   m-auto my-10 flex justify-between max-xl:flex-col">
                <div className="border-gray-500  rounded border shadow-glow text-center min-h-32 min-w-204 w-204 m-auto">
                    <Image src={CapstoneIMG} alt="Capstone Image" height={126}></Image>
                </div>
                <div className="text-center text-xs mt-2">
                    <p>Web application built for Sewer and Drain Plumbing Services LTD. Aimed at improving data organization and employee scheduling</p>

                    <div className="flex mt-auto w-fit m-auto">
                        <ToolBubble tool={"React"} />
                        <ToolBubble tool={"Node"} />
                        <ToolBubble tool={"Express"} />
                        <ToolBubble tool={"MongoDB"} />
                    </div>
                    <div className="w-5 h-5 my-auto ml-auto mt-auto">
                        <a href="https://github.com/Plumbing-Scheduler/CapStone" target="_blank" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-up-right hover:text-green hover:translate-x-1 hover:-translate-y-1 duration-100" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5" />
                                <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-10/12 h-32 border-gray-500 rounded border m-auto my-10 bg-white-2 shadow-glow flex justify-evenly">
                <div className="w-1/4 text-center">
                    Home Inventory
                </div>
                <div className="w-3/4 text-center">
                    Description
                </div>
            </div>
            <div className="w-10/12 h-32 border-gray-500 rounded border m-auto my-10 bg-white-2 shadow-glow flex justify-evenly">
                <div className="w-1/4 text-center">
                    Polygon Sorter
                </div>
                <div className="w-3/4 text-center">
                    Description
                </div>
            </div>

        </section>
    )
}