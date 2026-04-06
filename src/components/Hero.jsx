import { LinkCircle } from "./Links";
import { LuFacebook, LuMail, LuInstagram } from 'react-icons/lu';

export default function Hero() {
    const contacts = [
        {
            contact: "https://www.facebook.com/share/1LiV7wTXEJ/?mibextid=wwXlfrp",
            icon: <LuFacebook className="fill-cyan-500 h-5 w-5" />
        },
        {
            contact: "mailto:edthomas.matthewchin20@gmail.com",
            icon: <LuMail className="fill-cyan-500 h-5 w-5" />
        },
        {
            contact: "https://www.instagram.com/itsmatchew.ig",
            icon: <LuInstagram className="fill-cyan-500 h-5 w-5" />
        }
    ];

    return (
        <div className="flex flex-row gap-2 items-center mt-9 w-full">
            <div className="w-[50%]">
                {/* this part is for the text, links, and cta button */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-white inter-semibold text-3xl">Hello, It&apos;s Me</h2>
                    <h1 className="text-white inter-bold text-5xl">Ed Thomas Matthew Chin</h1>
                    <h2 className="text-white inter-semibold text-3xl">And I&apos;m a <span className="text-cyan-500">Frontend Developer</span></h2>
                </div>
                <p className="mt-5 text-white inter-normal">
                    I specialize in transforming complex ideas into polished, high-performance web applications.
                </p>
                <div className="flex flex-row gap-3 items-center mt-6">
                    {contacts.map((contact, index) => (
                        <LinkCircle key={index} contact={contact.contact} icon={contact.icon} />
                    ))}
                </div>
                <button
                    type="button"
                    className="mt-6 px-5 py-2 inter-semibold text-lg bg-cyan-400 drop-shadow-[0_8px_12px_rgba(6,182,212,0.7)] rounded-4xl hover:cursor-pointer hover:bg-cyan-400/80 transition-colors duration-300"
                >
                    Download CV
                </button>
            </div>
            <div className="w-[50%] relative flex items-center justify-center">
                {/* this part is for the image */}
                <div>
                    {/* <svg viewBox="0 0 300 300" className="w-50 h-50 drop-shadow-[0_8px_12px_rgba(6,182,212,0.7)]">
                        <polygon 
                            points="100,10 180,55 180,145 100,190 20,145 20,55"
                            fill="#3B82F6"
                            stroke="#06B6D4"
                            strokeWidth="8"
                            strokeLinejoin="round"
                        />
                    </svg> */}
                    <img 
                        src="public/matthew-chin.png"
                        alt="formal-picture"
                        className="h-130 w-95 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}