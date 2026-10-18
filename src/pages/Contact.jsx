
import { ContactForm } from "../components/Forms";

export default function Contactpage() {
    return (
        <section
            id="contact"
            className="mt-8 flex w-full min-w-0 flex-col items-center overflow-x-clip px-4 py-8 sm:mt-10 sm:px-6 sm:py-10 lg:px-8"
        >
            <h1 className="inter-bold max-w-full text-center text-2xl text-white sm:text-3xl">
                Feel free to <span className="text-cyan-400">reach out</span>
            </h1>

            <div className="mt-8 w-full min-w-0 max-w-2xl sm:mt-10">
                <ContactForm />
            </div>
        </section>
    );
}
