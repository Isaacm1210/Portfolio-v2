"use client";

import { useMouse } from "@/hooks/mouse-state";

export default function Cursor() {
    const { position } = useMouse();

    return (
        <div style={{
            left: `${position.x}px`,
            top: `${position.y}px`

        }}
            className="fixed z-50 transition will-change-transform ease-out -translate-x-1/2 -translate-y-1/2 duration-100 pointer-events-none h-6 w-6 border rounded-full border-white">
            </div>
    )
}