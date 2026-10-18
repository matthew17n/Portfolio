
import { LuSend } from "react-icons/lu";

export function ContactForm() {
    return (
        <form
            className="flex w-full min-w-0 flex-col gap-4 rounded-lg border border-gray-50/30 bg-zinc-800 p-4 sm:p-6"
            onSubmit={(event) => event.preventDefault()}
        >
            <div className="flex min-w-0 flex-col gap-2 text-gray-100">
                <label htmlFor="userName" className="inter-medium">
                    Your name
                </label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    autoComplete="name"
                    required
                    className="w-full min-w-0 rounded-lg bg-cyan-900 px-3 py-3 text-base text-white outline-none transition focus:ring-2 focus:ring-cyan-400"
                    placeholder="What's your name?"
                />
            </div>

            <div className="flex min-w-0 flex-col gap-2 text-gray-100">
                <label htmlFor="userEmail" className="inter-medium">
                    Your email
                </label>
                <input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 rounded-lg bg-cyan-900 px-3 py-3 text-base text-white outline-none transition focus:ring-2 focus:ring-cyan-400"
                    placeholder="What's your email address?"
                />
            </div>

            <div className="flex min-w-0 flex-col gap-2 text-gray-100">
                <label htmlFor="userMessage" className="inter-medium">
                    Your message
                </label>
                <textarea
                    name="userMessage"
                    id="userMessage"
                    required
                    rows={5}
                    className="w-full min-w-0 resize-y rounded-lg bg-cyan-900 px-3 py-3 text-base text-white outline-none transition focus:ring-2 focus:ring-cyan-400"
                    placeholder="How may I help you?"
                />
            </div>

            <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 px-4 py-3 text-white transition-colors duration-300 hover:bg-cyan-600/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 sm:w-auto sm:self-end"
            >
                <span>Send Message</span>
                <LuSend className="h-4 w-4" />
            </button>
        </form>
    );
}
