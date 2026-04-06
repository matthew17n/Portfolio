import { ContactForm } from "../components/Forms";

export default function Contactpage() {
    return (
        <section className="flex flex-col items-center mt-9" id="contact">
            <h1 className="inter-bold text-3xl text-white">
                Feel free to <span className="text-cyan-400">reach out</span>
            </h1>
            <div className="mt-12">
                <ContactForm />
            </div>
        </section>
    );
}