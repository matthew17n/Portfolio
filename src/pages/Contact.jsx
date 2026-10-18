
import { ContactForm } from "../components/Forms";

export default function Contactpage() {
    return (
        <section
            id="contact"
            className="relative isolate flex w-full min-w-0 flex-col items-center overflow-hidden py-16 sm:py-20 lg:py-24"
        >
            <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px] sm:h-80 sm:w-80" />

            <div className="mb-10 max-w-2xl px-4 text-center sm:mb-14">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-medium tracking-[0.2em] text-cyan-300 sm:text-sm">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                    LET'S CONNECT
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                    Have an idea?
                    <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                        Let's talk about it.
                    </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                    Have a project in mind, a question, or an opportunity to
                    collaborate? Send me a message. I'd love to hear from you.
                </p>
            </div>

            <div className="relative w-full max-w-3xl px-4 sm:px-6">
                <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 opacity-70 blur-xl" />

                <div className="relative rounded-2xl border border-white/10 bg-zinc-900/80 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 md:p-10">
                    <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-5">
                        <div className="flex gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                        </div>

                        <span className="text-xs tracking-wide text-gray-400">
                            CONTACT FORM
                        </span>

                        <span className="ml-auto text-xs text-cyan-300">
                            Available to connect
                        </span>
                    </div>

                    <ContactForm />
                </div>

                <p className="mt-6 text-center text-xs text-gray-500 sm:text-sm">
                    Built with passion. Open to learning, collaboration, and new ideas.
                </p>
            </div>
        </section>
    );
}
