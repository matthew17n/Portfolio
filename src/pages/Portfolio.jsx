import { CardThumbnail } from "../components/Cards";
import { projects } from "../lib/data";

export default function Portfoliopage() {
    return (
        <section className="flex flex-col items-center mt-9" id="projects">
            <h1 className="inter-bold text-3xl text-white">
                <span className="text-cyan-400">Projects</span> I&apos;ve developed
            </h1>
            <div className="mt-9 flex flex-row gap-3">
                {projects.map((project, index) => (
                    <CardThumbnail
                        key={index} 
                        projectName={project.projectName} 
                        thumbnail={project.thumbnail} 
                        overview={project.overview} 
                        tools={project.tools} 
                        githubLink={project?.githubLink}
                        liveDemo={project.liveDemo}
                    />
                ))}
            </div>
        </section>
    );
}