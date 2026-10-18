
import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frame = 0;

        const updateProgress = () => {
            cancelAnimationFrame(frame);

            frame = requestAnimationFrame(() => {
                const scrollableHeight =
                    document.documentElement.scrollHeight -
                    window.innerHeight;

                const nextProgress =
                    scrollableHeight > 0
                        ? (window.scrollY / scrollableHeight) * 100
                        : 0;

                setProgress(Math.min(100, Math.max(0, nextProgress)));
            });
        };

        updateProgress();

        window.addEventListener("scroll", updateProgress, {
            passive: true,
        });
        window.addEventListener("resize", updateProgress);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <div className="scroll-progress-track" aria-hidden="true">
            <div
                className="scroll-progress-bar"
                style={{ transform: `scaleX(${progress / 100})` }}
            />
        </div>
    );
}
