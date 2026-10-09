import { LuBlocks, LuUserCheck } from "react-icons/lu";
import { BsLightningCharge } from "react-icons/bs";
import { AboutMeCard } from "../components/Cards";
import { AutoCarousel } from "../components/Carousel";
import { images } from "../lib/data";

export default function Aboutpage() {
    const aboutMe = [
        {
            title: "Clean Architecture",
            description: "I dont't just write code that work; I write code that lasts. I focus on modular, reusable React components and scalable Tailwind design system",
            icon: <LuBlocks className="h-10 w-10 text-blue-400" />
        },
        {
            title: "Performance First",
            description: `Quality means speed. I optimize every asset and monitor Core Web vitals to ensure a seamless, "instant" feel for the end-user`,
            icon: <BsLightningCharge className="h-10 w-10 text-green-300" />
        },
        {
            title: "User-Centric Design",
            description: "Prioritizing the end-user by creting intuitive, accessible, and inclusive interfaces. I believe a website should not only look good but feel seamless and natural to navigate for everyone",
            icon: <LuUserCheck className="h-10 w-10 text-cyan-300" />
        }
    ];

    return (
        <section className="flex flex-col items-center mt-9" id="about">
            <h1 className="inter-bold text-white text-3xl">About <span className="text-cyan-400">Matthew Chin</span></h1>
            <p className="w-[70%] text-center inter-normal text-xl text-white mt-12 leading-9.5">
                Hi! It&apos;s Ed Thomas Matthew Chin and I&apos;m a student, currently learning and growing in the field of programming and technology. I have a strong interest in coding and I enjoy building projects that improve my skills and creativity.
            </p>
            <div className="flex flex-row gap-6 mt-15 mb-20">
                {aboutMe.map((about) => (
                    <AboutMeCard icon={about.icon} title={about.title} description={about.description} />
                ))}
            </div>
            <AutoCarousel images={images} />
        </section>
    );
}