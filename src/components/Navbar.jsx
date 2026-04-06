import { navLinks } from "../lib/data";

export function Navbar({ activeId }) {

    return (
        <div className="sticky top-0 z-50 flex flex-row justify-between py-6 items-center px-20 bg-zinc-900/25">
            <h3 className="text-white font-semibold text-2xl">Portfolio.</h3>
            <nav className="flex flex-row gap-6 inter-medium text-[1em]">
                {navLinks.map((link) => (
                    <li key={link.href} className="list-none">
                        <a 
                            href={`#${link.href}`}
                            className={`${activeId === link.href ? "text-cyan-500" : "text-white"}`}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </nav>
        </div>
    );
}