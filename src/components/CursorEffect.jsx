
import { useEffect } from "react";

export default function CursorEffect() {
    useEffect(() => {
        // Keep the native cursor on touch devices.
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const cursor = document.querySelector(".custom-cursor");

        if (!cursor) return;

        const handleMouseMove = (event) => {
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
            cursor.classList.add("cursor-visible");
        };

        const handleMouseDown = () => {
            cursor.classList.add("cursor-click");
        };

        const handleMouseUp = () => {
            cursor.classList.remove("cursor-click");
        };

        const handleMouseLeave = () => {
            cursor.classList.remove("cursor-visible");
        };

        const handleMouseEnter = () => {
            cursor.classList.add("cursor-visible");
        };

        const handleHover = (event) => {
            const target = event.target;

            if (!(target instanceof Element)) return;

            const interactive = target.closest(
                "a, button, input, textarea, select, [role='button'], .project-card, .journey-card"
            );

            cursor.classList.toggle("cursor-hover", Boolean(interactive));
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseover", handleHover);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseover", handleHover);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    return (
        <div className="custom-cursor" aria-hidden="true">
            <span className="cyber-arrow">
                <svg
                    viewBox="0 0 32 40"
                    width="32"
                    height="40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 2L3 29L10 22L16 35L22 32L16 19L27 19L3 2Z"
                        fill="#07131F"
                        stroke="#22D3EE"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 6L6 24L11 19L17 31"
                        stroke="#67E8F9"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        opacity="0.9"
                    />
                </svg>
            </span>

            <span className="cyber-cursor-glow" />
        </div>
    );
}
