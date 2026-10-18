
import { LuBlocks, LuUserCheck } from "react-icons/lu";
import { BsLightningCharge } from "react-icons/bs";
import { AboutMeCard } from "../components/Cards";
import { AutoCarousel } from "../components/Carousel";
import { images } from "../lib/data";

export default function Aboutpage() {
    const aboutMe = [
        {
            title: "Clean Architecture",
            description: "I don't just write code that works; I focus on reusable React components and organized designs while continuing to develop my programming skills.",
            icon: <LuBlocks className="h-8 w-8 text-blue-400 sm:h-10 sm:w-10" />
        },
        {
            title: "Performance First",
            description: "I aim to build responsive websites that load smoothly and provide a good experience for users across different devices.",
            icon: <BsLightningCharge className="h-8 w-8 text-green-300 sm:h-10 sm:w-10" />
        },
        {
            title: "User-Centric Design",
            description: "I enjoy creating interfaces that are intuitive, accessible, and easy to navigate on both mobile and desktop screens.",
            icon: <LuUserCheck className="h-8 w-8 text-cyan-300 sm:h-10 sm:w-10" />
        }
    ];

    return (
        <section
            id="about"
            className="mt-8 flex w-full min-w-0 flex-col items-center overflow-x-clip px-4 py-8 sm:mt-10 sm:px-6 sm:py-10 lg:px-8"
        >
            <h1 className="inter-bold max-w-full text-center text-2xl text-white sm:text-3xl">
                About <span className="text-cyan-400">Matthew Chin</span>
            </h1>

            <p className="mt-6 w-full max-w-3xl text-center text-base leading-7 text-white inter-normal sm:mt-8 sm:text-lg sm:leading-8 lg:mt-10">
             Hi! I'm Ed Thomas Matthew Chin, an IT student at Western Institute of Technology with a growing interest in web development and software technology. 
            I enjoy exploring new technologies, building projects, and turning ideas into practical digital solutions. 
            I'm continuously improving my programming skills through hands-on experience and personal projects, including VOTARA, my portfolio website, and an XSS Training Lab. As an aspiring developer, 
                I'm eager to learn from experienced professionals, collaborate with others, and keep growing both technically and creatively.
            </p>

            <div className="mt-8 mb-10 grid w-full max-w-6xl grid-cols-1 items-stretch gap-5 sm:mt-10 sm:mb-14 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:mb-16 lg:grid-cols-3">
                {aboutMe.map((about) => (
                    <AboutMeCard
                        key={about.title}
                        icon={about.icon}
                        title={about.title}
                        description={about.description}
                    />
                ))}
            </div>

            <div className="w-full min-w-0 max-w-6xl">
                <AutoCarousel images={images} />
            </div>
        </section>
    );
}
