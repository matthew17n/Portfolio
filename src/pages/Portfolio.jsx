
import { CardThumbnail } from "../components/Cards";
import { projects } from "../lib/data";

export default function Portfoliopage() {
    return (
        <section
            className="flex w-full flex-col items-center px-4 py-10"
            id="projects"
        >
            <h1 className="inter-bold text-center text-3xl text-white">
                <span className="text-cyan-400">Projects</span> I&apos;ve developed
            </h1>

            <div className="mt-9 grid w-full max-w-7xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => (
                    <CardThumbnail
                        key={project.projectName || index}
                        projectName={project.projectName}
                        thumbnail={project.thumbnail}
                        overview={project.overview}
                        tools={project.tools}
                        githubLink={project.githubLink}
                        liveDemo={project.liveDemo}
                    />
                ))}
            </div>
        </section>
    );
}
