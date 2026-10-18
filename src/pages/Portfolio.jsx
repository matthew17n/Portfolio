
import { CardThumbnail } from "../components/Cards";
import { projects } from "../lib/data";

export default function Portfoliopage() {
    return (
        <section
            id="projects"
            className="mt-6 flex w-full min-w-0 flex-col items-center overflow-x-clip px-4 py-8 sm:mt-8 sm:px-6 sm:py-10 lg:px-8"
        >
            <h1 className="inter-bold max-w-full text-center text-2xl text-white sm:text-3xl">
                <span className="text-cyan-400">Projects</span> I&apos;ve developed
            </h1>

            <div className="mt-7 grid w-full min-w-0 max-w-7xl grid-cols-1 items-stretch gap-5 sm:mt-9 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={project.projectName || index}
                        className="w-full min-w-0"
                    >
                        <CardThumbnail
                            projectName={project.projectName}
                            thumbnail={project.thumbnail}
                            overview={project.overview}
                            tools={project.tools}
                            githubLink={project.githubLink}
                            liveDemo={project.liveDemo}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
