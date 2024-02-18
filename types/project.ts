import { StaticImageData } from "next/image";

export type projectProps = {
    img: StaticImageData;
    alt: string;
    projURL: string;
    description: string;
    tools: string[];
}