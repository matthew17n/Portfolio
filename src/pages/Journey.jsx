```jsx
import { useEffect, useRef, useState } from "react";
import { LuCode, LuBug, LuLayers, LuRocket } from "react-icons/lu";

const milestones = [
    {
        number: "01",
        label: "THE BEGINNING",
        title: "Where It All Started",
        description:
            "My coding journey began through school and self-learning. As I explored web development, I discovered how code could turn simple ideas into interactive digital experiences.",
        detail: "Learning through practice",
        icon: LuCode,
    },
    {
        number: "02",
        label: "THE FOUNDATION",
        title: "HTML, CSS & The First Challenges",
        description:
            "I started with HTML and CSS, learning how to structure web pages and bring them to life with design. Along the way, debugging errors taught me to be patient, investigate problems, and keep trying until things worked.",
        detail: "Building and debugging",
        icon: LuBug,
    },
    {
        number: "03",
        label: "PUTTING KNOWLEDGE TO WORK",
        title: "From Lessons to Projects",
        description:
            "As I continued learning, I began applying my knowledge to projects. Each build gave me a chance to experiment, solve problems, and better understand how different parts of an application work together.",
        detail: "Learning by building",
        icon: LuLayers,
    },
    {
        number: "04",
        label: "THE JOURNEY CONTINUES",
        title: "Building with Purpose",
        description:
            "My work now includes VOTARA, an online voting system developed with my group, my personal portfolio, and an XSS Training Lab. These projects represent opportunities to practice, explore new technologies, and continue growing as a developer.",
        detail: "Always learning",
        icon: LuRocket,
    },
];

export default function Journey() {
    const sectionRef = useRef(null);
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const items = section.querySelectorAll("[data-journey-item]");

        if (!("IntersectionObserver" in window)) {
            setVisibleItems(milestones.map((_, index) => index));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(
                            entry.target.getAttribute("data-journey-item")
                        );

                        setVisibleItems((current) =>
                            current.includes(index)
                                ? current
                                : [...current, index]
                        );

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="journey"
            className="journey-section relative isolate w-full min-w-0 overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-32 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[110px]"
            />

            <div className="mx-auto w-full max-w-4xl">
                <div className="journey-heading mb-14 text-center sm:mb-20">
                    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs tracking-[0.2em] text-cyan-300 sm:text-sm">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        MY DEVELOPMENT STORY
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        My Coding{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                            Journey
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                        Every line of code is part of the process. Explore
                        how learning, debugging, and building projects have
                        shaped my journey in technology.
                    </p>
                </div>

                <div className="journey-timeline relative">
                    <div
                        aria-hidden="true"
                        className="journey-track absolute bottom-8 left-5 top-8 w-px sm:left-7"
                    />

                    {milestones.map((milestone, index) => {
                        const Icon = milestone.icon;
                        const isVisible = visibleItems.includes(index);

                        return (
                            <article
                                key={milestone.number}
                                data-journey-item={index}
                                className={`journey-item relative pb-10 pl-14 transition-all duration-700 sm:pb-14 sm:pl-20 ${
                                    isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-8 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: isVisible ? "80ms" : "0ms",
                                }}
                            >
                                <div className="journey-node absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-zinc-950 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.12)] sm:left-1 sm:h-12 sm:w-12">
                                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>

                                <div className="journey-card rounded-2xl border border-white/10 bg-zinc-900/70 p-5 backdrop-blur-md transition-all duration-300 sm:p-7">
                                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                        <span className="text-xs font-semibold tracking-[0.16em] text-cyan-300">
                                            {milestone.label}
                                        </span>

                                        <span className="font-mono text-sm text-gray-500">
                                            {milestone.number}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                                        {milestone.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                                        {milestone.description}
                                    </p>

                                    <div className="mt-5 inline-flex items-center gap-2 text-xs text-gray-400 sm:text-sm">
                                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                        {milestone.detail}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-2 text-center">
                    <p className="text-lg font-semibold text-white sm:text-xl">
                        The journey continues.
                    </p>
                    <p className="mt-2 text-sm text-gray-400">
                        Keep learning. Keep building. Keep improving.
                    </p>
                </div>
            </div>
        </section>
    );
}
```
