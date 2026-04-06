import { SkillCard } from "../components/Cards";

// logos
import CSSLogo from '../assets/css-3.svg';
import HTMLLogo from '../assets/html-1.svg';
import JSLogo from '../assets/javascript-1.svg';
import ReactLogo from '../assets/react.png';

export default function Skillspage() {
    const skills = [
        {
            skill: "HTML5",
            logo: HTMLLogo,
            alt: "html-logo",
            description: `
                Proficient in building semantic, accessible, and well-structured web pages. Prioritizing SEO-optimized document structures that serves as the reliable foundation for modern web applications. 
            `
        },
        {
            skill: "CSS3",
            logo: CSSLogo,
            alt: "css-logo",
            description: `
                I focus on creating responsive designs using modern CSS techniques like Flexbox nad Grid to ensure a seamless user experience across mobile, tablet, and desktop devices.
            `
        },
        {
            skill: "JavaScript",
            logo: JSLogo,
            alt: "javascript-logo",
            description: `
                Capable of implementing dynamic functionality and complex logic. I have a solid grasp of modern JavaScript concepts, including DOM manipulation, ES6 syntax, and asynchronous programing, to build interactive and high-performing websites.
            `
        },
        {
            skill: "React",
            logo: ReactLogo,
            alt: "react-logo",
            description: `
                Experienced in developing modular and reusable user interface using component-based architecture. I utilize React hooks (such as useState nad useEffect) for efficient state management and to handle data flow within modern web applications.
            `
        }
    ];

    return (
        <section className="flex flex-col items-center mt-9" id="skills">
            <h1 className="inter-bold text-white text-3xl">
                <span className="text-cyan-400">Skills</span> I have
            </h1>
            <div className="flex flex-row gap-6.5 mt-15">
                {skills.map((skill, index) => (
                    <SkillCard 
                        key={index} 
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