import ToolBubble from "./toolBubbles";
import Image from "next/image";
import { projectProps } from '@/types/project'

export default function Project({projectItems}: {projectItems: projectProps}){
    return (
        <div className="w-10/12   m-auto my-10 flex justify-between max-xl:flex-col">
                <div className="border-gray-500  rounded border shadow-glow text-center min-h-32 min-w-204 w-204 m-auto">
                    <Image src={projectItems.img} alt={projectItems.alt} height={126}></Image>
                </div>
                <div className="text-center text-xs mt-2">
                    <p className="mx-1">{projectItems.description}</p>

                    <div className="flex  w-fit m-auto">
                        {projectItems.tools.map((tool, index) => (<ToolBubble tool={tool} key={index}/>))}
                    </div>
                    <div className="w-5 h-5 my-auto ml-auto mt-auto">
                        <a href={projectItems.projURL} target="_blank" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-up-right hover:text-green hover:translate-x-1 hover:-translate-y-1 duration-100" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5" />
                                <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
    )
}