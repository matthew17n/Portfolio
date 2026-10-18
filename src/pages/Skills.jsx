
import { SkillCard } from "../components/Cards";

import CSSLogo from "../assets/css-3.svg";
import HTMLLogo from "../assets/html-1.svg";
import JSLogo from "../assets/javascript-1.svg";
import ReactLogo from "../assets/react.png";

export default function Skillspage() {
    const skills = [
        {
            skill: "HTML5",
            logo: HTMLLogo,
            alt: "html-logo",
            description:
                "I am learning to build well-structured web pages using semantic HTML and accessible elements."
        },
        {
            skill: "CSS3",
            logo: CSSLogo,
            alt: "css-logo",
            description:
                "I use CSS to style websites and practice responsive layouts with Flexbox, Grid, and media queries for mobile, tablet, and desktop screens."
        },
        {
            skill: "JavaScript",
            logo: JSLogo,
            alt: "javascript-logo",
            description:
                "I use JavaScript to add interactive features and practice modern syntax, DOM manipulation, and asynchronous programming."
        },
        {
            skill: "React",
            logo: ReactLogo,
            alt: "react-logo",
            description:
                "I am learning to build reusable interface components with React and use hooks such as useState and useEffect to manage component behavior."
        }
    ];

    return (
        <section
            id="skills"
            className="mt-8 flex w-full min-w-0 flex-col items-center overflow-x-clip px-4 py-8 sm:mt-10 sm:px-6 sm:py-10 lg:px-8"
        >
            <h1 className="inter-bold text-center text-2xl text-white sm:text-3xl">
                <span className="text-cyan-400">Skills</span> I have
            </h1>

            <div className="mt-8 grid w-full max-w-6xl min-w-0 grid-cols-1 items-stretch gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.skill}
                        logo={skill.logo}
                        alt={skill.alt}
                        description={skill.description}
                        skill={skill.skill}
                    />
                ))}
            </div>
        </section>
    );
}
