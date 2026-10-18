
import { useEffect, useRef, useState } from "react";
import { ContactForm } from "../components/Forms";

export default function Contactpage() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="contact-section relative isolate flex w-full min-w-0 flex-col items-center overflow-hidden py-16 sm:py-20 lg:py-24"
        >
            <div className="contact-orb contact-orb-one pointer-events-none absolute left-[10%] top-[20%] -z-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px]" />
            <div className="contact-orb contact-orb-two pointer-events-none absolute bottom-[10%] right-[5%] -z-10 h-64 w-64 rounded-full bg-violet-500/10 blur-[110px]" />

            <div
                className={`contact-reveal mb-10 max-w-2xl px-4 text-center sm:mb-14 ${isVisible ? "is-visible" : ""}`}
            >
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-medium tracking-[0.2em] text-cyan-300 sm:text-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                    </span>
                    LET'S CONNECT
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                    Have an idea?
                    <span className="contact-gradient-text mt-2 block bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                        Let's talk about it.
                    </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                    Have a project in mind, a question, or an opportunity to
                    collaborate? Send me a message. I'd love to hear from you.
                </p>
            </div>

            <div
                className={`contact-reveal contact-reveal-delay relative w-full max-w-3xl px-4 sm:px-6 ${isVisible ? "is-visible" : ""}`}
            >
                <div className="contact-border-glow pointer-events-none absolute -inset-px rounded-3xl" />

                <div className="contact-panel relative rounded-2xl border border-white/10 bg-zinc-900/85 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 md:p-10">
                    <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-5">
                        <div className="flex gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                        </div>

                        <span className="text-xs tracking-wide text-gray-400">
                            CONTACT FORM
                        </span>

                        <span className="ml-auto text-xs text-cyan-300">
                            Available to connect
                        </span>
                    </div>

                    <ContactForm />
                </div>

                <p className="mt-6 text-center text-xs text-gray-500 sm:text-sm">
                    Built with passion. Open to learning, collaboration, and new ideas.
                </p>
            </div>
        </section>
    );
}
