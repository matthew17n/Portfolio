
import { LuGithub } from "react-icons/lu";
import { MdLiveTv } from "react-icons/md";

export function SkillCard({ logo, alt, skill, description }) {
    return (
        <div className="group relative flex w-full min-w-0 rounded-xl p-3 transition-transform duration-300 hover:-translate-y-1 sm:p-4">
            <div className="absolute -inset-1 rounded-lg bg-linear-to-t from-red-600 via-pink-600 to-violet-600 opacity-30 blur-sm transition duration-300 group-hover:opacity-60 group-hover:blur-lg" />
            <div
                className="absolute inset-0 rounded-xl"
                style={{
                    background:
                        "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
                }}
            />
            <div className="relative z-10 flex min-w-0 flex-1 flex-col gap-4 sm:gap-5">
                <div className="flex flex-wrap items-center justify-center gap-3 rounded-lg p-2 text-white">
                    <img
                        src={logo}
                        alt={alt}
                        className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
                    />
                    <span className="inter-semibold text-base sm:text-lg">
                        {skill}
                    </span>
                </div>
                <p className="break-words text-sm leading-6 text-gray-200 inter-medium">
                    {description}
                </p>
            </div>
        </div>
    );
}

export function CardThumbnail({
    thumbnail,
    projectName,
    overview,
    tools = [],
    githubLink,
    liveDemo,
}) {
    return (
        <div className="project-card group relative w-full min-w-0 rounded-xl">
            <div className="pointer-events-none absolute -inset-1 rounded-xl bg-linear-to-br from-cyan-500 via-fuchsia-600 to-violet-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-2xl" />

            <div className="relative z-10 flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_25px_rgba(0,220,255,0.12)]">
                <div className="overflow-hidden p-3 sm:p-4">
                    <img
                        src={thumbnail}
                        alt={`${projectName} project preview`}
                        loading="lazy"
                        className="aspect-3/2 w-full rounded-lg border border-gray-50/20 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                    />
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-3 px-4 pb-5 sm:px-5 sm:pb-6">
                    <h2 className="break-words text-lg text-white inter-semibold transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl">
                        {projectName}
                    </h2>

                    <p className="break-words text-sm leading-6 text-gray-300 inter-normal">
                        {overview}
                    </p>

                    <ul className="flex flex-wrap gap-2">
                        {tools.map((tool, index) => (
                            <li
                                key={`${tool}-${index}`}
                                className="max-w-full break-words rounded-2xl border border-cyan-400 px-2 py-1 text-xs text-gray-200 transition-colors duration-300 hover:bg-cyan-400/10 inter-medium"
                            >
                                {tool}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center justify-end gap-2 pt-3">
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${projectName} source code on GitHub`}
                                className="project-action inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-white/70 px-3 py-2 text-sm text-white transition-all duration-300 hover:border-cyan-300 hover:bg-white hover:text-black hover:shadow-[0_0_18px_rgba(0,220,255,0.25)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                            >
                                <span>Source code</span>
                                <LuGithub className="h-5 w-5 shrink-0" />
                            </a>
                        )}

                        {liveDemo && (
                            <a
                                href={liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${projectName} live demo in a new tab`}
                                className="project-action inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-500 px-3 py-2 text-sm text-white transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,220,255,0.4)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                            >
                                <span>Live Demo</span>
                                <MdLiveTv className="h-5 w-5 shrink-0" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function AboutMeCard({ icon, title, description }) {
    return (
        <div className="flex h-full w-full min-w-0 flex-col rounded-lg border border-gray-50/30 bg-zinc-800 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_18px_rgba(0,220,255,0.08)] sm:p-5">
            <div className="flex flex-col items-start gap-3">
                {icon}
                <h3 className="break-words text-lg text-gray-50 inter-semibold">
                    {title}
                </h3>
            </div>
            <p className="mt-3 break-words text-sm leading-6 text-gray-200 inter-normal sm:text-base">
                {description}
            </p>
        </div>
    );
}
