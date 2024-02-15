import { MouseCoords } from "@/types/position";
import { useState, useEffect } from "react";

const CLICKABLE_HTML = ["BUTTON", "A"];

type MouseHoverEvent = MouseEvent & { path: HTMLCollection };

/**
 * return a boolean value based on whether the event target is a clickable element defined in the constant CLICKABLE_HTML
 * @param target 
 * @returns boolean value
 */
const isClickable = (target: EventTarget) => {
    if(target instanceof HTMLElement){
        return CLICKABLE_HTML.includes(target.tagName);
    }
    return false
}

/**
 * A hook that will return a boolean based on whether the element the cursor is
 *  over is a CLICKABLE_HTML
 * @returns Boolean 
 */
const useCanClick = () => {
    const [ canClick, setCanClick ] = useState<boolean>(false);

    useEffect(() => {
        const handleMouseMove = ((event: MouseHoverEvent) => {
            const containsClickable = Array.from(event.composedPath()).some(isClickable);
            setCanClick(containsClickable);
        }) as (event: MouseEvent) => void;

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.addEventListener("mousemove", handleMouseMove);
    });
    return {canClick}
};

/** 
 * a hook that returns the current position of the cursor
 * @returns a value of type MouseCoords
 */ 
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

/**
 * a hoot that returns objects containting cursor data
 * @returns an object containing cursor position, if it can click
 */
export const useMouse = () => {
    const { position } = useMousePosition();
    const { canClick } = useCanClick();

    return { position, canClick };
}