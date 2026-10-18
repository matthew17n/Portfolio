
import { useEffect } from "react";
import { sectionIds } from "../lib/data.js";

export default function SectionReveal() {
    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length) return;

        // Show sections immediately if IntersectionObserver is unavailable.
        if (!("IntersectionObserver" in window)) {
            sections.forEach((section) => {
                section.classList.add("section-reveal", "is-revealed");
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-revealed");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -30px 0px",
            }
        );

        sections.forEach((section) => {
            section.classList.add("section-reveal");
            observer.observe(section);
        });

        return () => {
            observer.disconnect();

            sections.forEach((section) => {
                section.classList.remove(
                    "section-reveal",
                    "is-revealed"
                );
            });
        };
    }, []);

    return null;
}
