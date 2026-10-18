
import { navLinks } from "../lib/data";
import { useEffect, useState } from "react";

export function Navbar({ activeId }) {
    const [indicator, setIndicator] = useState({
        left: 0,
        width: 0,
        visible: false,
    });

    useEffect(() => {
        const activeLink = document.querySelector(
            `[data-nav-link="${activeId}"]`
        );

        const nav = document.querySelector("[data-navbar-links]");

        if (!activeLink || !nav) {
            setIndicator((current) => ({
                ...current,
                visible: false,
            }));
            return;
        }

        const updateIndicator = () => {
            const linkRect = activeLink.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();

            setIndicator({
                left: linkRect.left - navRect.left,
                width: linkRect.width,
                visible: true,
            });
        };

        updateIndicator();

        window.addEventListener("resize", updateIndicator);

        return () => {
            window.removeEventListener("resize", updateIndicator);
        };
    }, [activeId]);

    const handleNavigation = (event, href) => {
        event.preventDefault();

        const target = document.getElementById(href);

        if (!target) return;

        target.scrollIntoView({
            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
                ? "auto"
                : "smooth",
            block: "start",
        });

        window.history.replaceState(null, "", `#${href}`);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-zinc-900/90 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:px-6 md:flex-row md:gap-6 lg:px-8">
                <a
                    href="#home"
                    onClick={(event) => handleNavigation(event, "home")}
                    className="shrink-0 text-2xl font-semibold text-white transition-colors duration-300 hover:text-cyan-400 sm:text-3xl"
                >
                    Portfolio.
                </a>

                <nav
                    data-navbar-links
                    className="relative flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 inter-medium text-sm sm:gap-x-7 sm:text-base md:w-auto md:justify-end"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            data-nav-link={link.href}
                            href={`#${link.href}`}
                            onClick={(event) =>
                                handleNavigation(event, link.href)
                            }
                            className={`nav-link-cinematic relative whitespace-nowrap py-1 transition-colors duration-300 ${
                                activeId === link.href
                                    ? "text-cyan-400"
                                    : "text-white"
                            }`}
                            aria-current={
                                activeId === link.href ? "location" : undefined
                            }
                        >
                            {link.name}
                        </a>
                    ))}

                    <span
                        aria-hidden="true"
                        className={`nav-active-indicator ${
                            indicator.visible ? "is-visible" : ""
                        }`}
                        style={{
                            transform: `translateX(${indicator.left}px)`,
                            width: `${indicator.width}px`,
                        }}
                    />
                </nav>
            </div>
        </header>
    );
}
