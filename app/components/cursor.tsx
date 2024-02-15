"use client";

import { useMouse } from "@/hooks/mouse-state";
import { MouseCoords } from "@/types/position";
import { useState, useEffect } from "react";

const CURSOR_SPEED = 0.05;

export default function Cursor() {
    const { position, canClick } = useMouse();
    const [ CursorPosition, setCursorPosition ] = useState<MouseCoords>({
        x: 0,
        y: 0,
      });


    useEffect(() => {
        let frame: number;
    
        const animate = () => {
          frame = requestAnimationFrame(animate);
    
          setCursorPosition((previous) => {
            const distance: MouseCoords = {
              x: (position.x - previous.x) * CURSOR_SPEED,
              y: (position.y - previous.y) * CURSOR_SPEED,
            };
    
            const newCursorPosition = {
              x: Math.floor((previous.x + distance.x) * 10) / 10,
              y: Math.floor((previous.y + distance.y) * 10) / 10,
            };
    
            if (
              newCursorPosition.x === previous.x &&
              newCursorPosition.y === previous.y
            )
              return previous;
    
            return newCursorPosition;
          });
        };
    
        animate();
        return () => cancelAnimationFrame(frame);
      }, [position]);

    return (
        <>
        <div style={{
            left: `${CursorPosition.x}px`,
            top: `${CursorPosition.y}px`,
            opacity: canClick ? ".2" : "1"

        }}
            className="fixed z-50 transition will-change-transform ease-out -translate-x-1/2 -translate-y-1/2 duration-100 pointer-events-none h-6 w-6 border rounded-full border-white flex justify-evenly items-center">
                <div className=" border h-1 w-1 rounded-full border-white bg-white">
                </div>
            </div>
            
    </>
    )
}