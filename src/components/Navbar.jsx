
import { navLinks } from "../lib/data";

export function Navbar({ activeId }) {
    return (
        <header className="sticky top-0 z-50 w-full bg-zinc-900/90 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:px-6 md:flex-row md:gap-6 lg:px-8">
                <a
                    href="#home"
                    className="shrink-0 text-2xl font-semibold text-white sm:text-3xl"
                >
                    Portfolio.
                </a>

                <nav className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 inter-medium text-sm sm:gap-x-7 sm:text-base md:w-auto md:justify-end">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={`#${link.href}`}
                            className={`whitespace-nowrap transition-colors duration-300 hover:text-cyan-400 ${
                                activeId === link.href
                                    ? "text-cyan-500"
                                    : "text-white"
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
