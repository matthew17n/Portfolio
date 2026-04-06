import { LuSend } from "react-icons/lu";

export function ContactForm() {
    return (
        <form className="bg-zinc-800 border border-gray-50/30 rounded-lg p-4 flex flex-col gap-4 w-100">
            <div className="flex flex-col gap-2 text-gray-100">
                <label htmlFor="userName" className="inter-medium">Your name</label>
                <input 
                    type="text"
                    name=""
                    id="userName"
                    className=" focus-within:outline-cyan-500 focus-within:outline rounded-lg px-3 py-2 text-[15px] bg-cyan-900"
                    placeholder="What's your name?"
                />
            </div>
            <div className="flex flex-col gap-2 text-gray-100">
                <label htmlFor="userEmail" className="inter-medium">Your email</label>
                <input 
                    type="email"
                    name=""
                    id="userEmail"
                    className=" focus-within:outline-cyan-500 focus-within:outline rounded-lg px-3 py-2 text-[15px] bg-cyan-900"
                    placeholder="What's your email address?" 
                />
            </div>
            <div className="flex flex-col gap-2 text-gray-100">
                <label htmlFor="userMessage">Your message</label>
                <textarea 
                    name="" 
                    id="userMessage"
                    placeholder="How may I help you?"
                    className=" focus-within:outline-cyan-500 focus-within:outline rounded-lg px-3 py-2 text-[15px] bg-cyan-900 h-30"
                ></textarea>
            </div>
            <button 
                type="button"
                className="flex flex-row gap-2 items-center text-white bg-cyan-600 px-3 py-2 rounded-lg justify-center mt-4 hover:bg-cyan-600/80 hover:cursor-pointer transition-colors duration-250"
            >
                <span>Send Message</span>
                <LuSend />
            </button>
        </form>
    );
}