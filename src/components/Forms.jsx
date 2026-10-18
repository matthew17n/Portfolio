
import { LuSend } from "react-icons/lu";

export function ContactForm() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full min-w-0 flex-col gap-6"
        >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex min-w-0 flex-col gap-2">
                    <label
                        htmlFor="userName"
                        className="text-sm font-medium text-gray-200"
                    >
                        Your name
                    </label>

                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        placeholder="What should I call you?"
                        autoComplete="name"
                        required
                        className="w-full min-w-0 rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 hover:border-white/20 focus:border-cyan-400 focus:bg-cyan-400/5 focus:ring-2 focus:ring-cyan-400/20"
                    />
                </div>

                <div className="flex min-w-0 flex-col gap-2">
                    <label
                        htmlFor="userEmail"
                        className="text-sm font-medium text-gray-200"
                    >
                        Your email
                    </label>

                    <input
                        id="userEmail"
                        name="userEmail"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        className="w-full min-w-0 rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 hover:border-white/20 focus:border-cyan-400 focus:bg-cyan-400/5 focus:ring-2 focus:ring-cyan-400/20"
                    />
                </div>
            </div>

            <div className="flex min-w-0 flex-col gap-2">
                <label
                    htmlFor="userMessage"
                    className="text-sm font-medium text-gray-200"
                >
                    Your message
                </label>

                <textarea
                    id="userMessage"
                    name="userMessage"
                    placeholder="Tell me about your idea, project, or question..."
                    rows={6}
                    required
                    className="w-full min-w-0 resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-gray-500 hover:border-white/20 focus:border-cyan-400 focus:bg-cyan-400/5 focus:ring-2 focus:ring-cyan-400/20"
                />
            </div>

            <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
                <p className="max-w-xs text-xs leading-5 text-gray-500">
                    Please include enough detail so I can understand how to help.
                </p>

                <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border border-cyan-300/30 bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/20 active:translate-y-0 active:scale-[0.98] sm:w-auto"
                >
                    Send Message
                    <LuSend className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
            </div>
        </form>
    );
}
