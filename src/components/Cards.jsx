import { LuGithub } from "react-icons/lu";
import { MdLiveTv } from 'react-icons/md';

export function SkillCard({ logo, alt, skill, description }) {
    return (
        <div className="relative flex flex-row px-3 py-2 w-70">
            <div
                className="absolute -inset-1 rounded-lg bg-linear-to-t from-red-600 via-pink-600 to-violet-600 opacity-30 blur-sm group-hover:opacity-50 group-hover:blur-lg transition duration-300"
            ></div>
            <div
                className="absolute inset-0 z-0 rounded-xl"
                style={{
                    background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
                }}
            />
            {/* Your Content/Components */}
            <div className="relative z-10 flex flex-col gap-5">
                <div className="relative z-10 text-white flex flex-row gap-3 items-center rounded-lg p-2 justify-center">
                    <img 
                        src={logo}
                        alt={alt}
                        className="h-10 w-10"
                    />
                    <span className="inter-semibold text-lg">{skill}</span>
                </div>
                <p className="text-gray-200 inter-medium text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}

export function CardThumbnail({ thumbnail, projectName, overview, tools, githubLink, liveDemo }) {
    return (
        <div className="relative w-sm">
            <div
                className="absolute -inset-2 rounded-lg bg-linear-to-br from-green-600 via-fuchsia-600 to-amber-600 opacity-15 blur-xl"
            ></div>
            <div className="relative z-15 bg-zinc-900 w-full flex flex-col rounded-xl">
                <div className="px-3 py-3">
                    <img 
                        src={thumbnail} 
                        alt="project-thumbnail"
                        className="object-cover rounded-lg aspect-3/2 border border-gray-50/20 w-full" 
                    />
                </div>
                <div className="flex flex-col gap-3 mx-5 py-5">
                    <h2 className="text-white inter-semibold text-xl">
                        {projectName}
                    </h2>
                    <p className="text-gray-300 text-justify inter-normal text-sm">
                        {overview}
                    </p>
                    <ul className="flex flex-row gap-2">
                        {tools.map((tool, index) => (
                            <li
                                key={index}
                                className="border border-cyan-400 py-1 px-1.5 inter-medium rounded-2xl text-gray-200 text-xs"
                            >
                                {tool}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-row gap-5 items-center justify-end mt-2">
                        {githubLink && (
                            <a
                                href={githubLink}
                                rel="noopener"
                                target="_blank"
                                className="border border-white text-white inter-semibold text-sm px-2.5 py-2 rounded-xl flex flex-row gap-2 items-center hover:cursor-pointer hover:bg-white hover:text-black transition-colors duration-250"
                            >
                                <span>Source code</span>
                                <LuGithub className="h-5.5 w-5.5" />
                            </a>
                        )}
                        <a
                            href={liveDemo}
                            rel="noopener"
                            target="_blank"
                            className="bg-cyan-500 text-white inter-semibold text-sm px-2.5 py-2 rounded-xl flex flex-row gap-2 items-center hover:cursor-pointer hover:bg-cyan-500/80 transition-colors duration-250"
                        >
                            <span>Live Demo</span>
                            <MdLiveTv className="h-5.5 w-5.5" />
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export function AboutMeCard({ icon, title, description }) {
    return (
        <div className=" bg-zinc-800 border border-gray-50/30 rounded-lg px-3 py-1.5 w-90">
            <div className="flex flex-col gap-3">
                {icon}
                <h3 className="text-gray-50 inter-semibold text-lg">
                    {title}
                </h3>
            </div>
            <p className="text-gray-200 inter-normal">
                {description}
            </p>
        </div>
    );
}