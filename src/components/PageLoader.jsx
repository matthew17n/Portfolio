
import { useEffect, useState } from "react";
import "./PageLoader.css";

export default function PageLoader({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2200;
        const start = performance.now();
        let frame;
        let finishTimer;

        const animate = (now) => {
            const next = Math.min(
                100,
                Math.round(((now - start) / duration) * 100)
            );

            setProgress(next);

            if (next < 100) {
                frame = requestAnimationFrame(animate);
            } else {
                finishTimer = setTimeout(() => {
                    onComplete();
                }, 350);
            }
        };

        frame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(frame);
            clearTimeout(finishTimer);
        };
    }, [onComplete]);

    return (
        <div className="page-loader">
            <div className="loader-glow" />
            <div className="loader-content">
                <div className="loader-symbol">{"< />"}</div>
                <h1 className="loader-title">MY PORTFOLIO</h1>
                <p className="loader-subtitle">
                    CRAFTING DIGITAL EXPERIENCES
                </p>
                <div className="loader-track">
                    <div
                        className="loader-progress"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="loader-status">
                    <span>INITIALIZING EXPERIENCE</span>
                    <span>{progress}%</span>
                </div>
            </div>
        </div>
    );
}
