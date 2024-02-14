import { MouseCoords } from "@/types/position";
import { useState, useEffect } from "react";
type MouseHoverEvent = MouseEvent & { path: HTMLCollection };

const useMousePosition = () => {
    const [position, setPosition] = useState<MouseCoords>({ x: 0, y: 0 });

    useEffect(() => {
            const handleMouseMove = (({ clientX: x, clientY: y }: MouseHoverEvent) => {
                setPosition({ x, y });
            }) as (event: MouseEvent) => void;

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.addEventListener("mousemove", handleMouseMove)
    });

    return { position };
};


export const useMouse = () => {
    const { position } = useMousePosition();

    return { position };
}