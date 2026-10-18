
import { LinkCircle } from "./Links";
import { LuFacebook, LuMail, LuInstagram } from "react-icons/lu";

export default function Hero() {
    const contacts = [
        {
            contact: "https://www.facebook.com/share/1LiV7wTXEJ/?mibextid=wwXlfrp",
            icon: <LuFacebook className="h-5 w-5 fill-cyan-500" />
        },
        {
            contact: "mailto:edthomas.matthewchin20@gmail.com",
            icon: <LuMail className="h-5 w-5 fill-cyan-500" />
        },
        {
            contact: "https://www.instagram.com/itsmatchew.ig",
            icon: <LuInstagram className="h-5 w-5 fill-cyan-500" />
        }
    ];

    return (
        <div className="hero-content mt-9 flex w-full flex-col items-center gap-8 md:flex-row md:gap-6">
            <div className="w-full min-w-0 md:w-1/2">
                <div className="flex flex-col gap-3">
                    <h2 className="hero-greeting text-2xl text-white inter-semibold sm:text-3xl">
                        Hello, It&apos;s Me
                    </h2>

                    <h1 className="hero-name break-words text-3xl text-white inter-bold sm:text-4xl lg:text-5xl">
                        Ed Thomas Matthew Chin
                    </h1>

                    <h2 className="hero-role text-2xl text-white inter-semibold sm:text-3xl">
                        And I&apos;m a{" "}
                        <span className="text-cyan-500">Frontend Developer</span>
                    </h2>
                </div>

                <p className="mt-5 text-white inter-normal">
                    I&apos;m an IT student learning to build responsive, user-friendly web applications and improve my development skills through hands-on projects.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    {contacts.map((contact, index) => (
                        <LinkCircle
                            key={index}
                            contact={contact.contact}
                            icon={contact.icon}
                        />
                    ))}
                </div>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-4xl bg-cyan-400 px-5 py-2 text-center text-lg text-black inter-semibold drop-shadow-[0_8px_12px_rgba(6,182,212,0.7)] transition-colors duration-300 hover:cursor-pointer hover:bg-cyan-400/80"
                >
                    Download CV
                </a>
            </div>

            <div className="relative flex w-full min-w-0 items-center justify-center md:w-1/2">
                <div className="photo-frame">
                    <img
                        src="/matthew-chin.png"
                        alt="Ed Thomas Matthew Chin"
                        className="hero-photo h-auto w-full max-w-[280px] object-contain sm:max-w-[340px] lg:max-w-[380px]"
                    />
                </div>
            </div>
        </div>
    );
}
