

export function LinkCircle({ icon, contact }) {
    return (
        <a
            href={contact}
            className="border border-cyan-400 rounded-full p-3 hover:bg-cyan-400 hover:cursor-pointer transition-colors duration-250"
            rel="noopener"
            target="_blank"
        >
            {icon}
        </a>
    );
}

export function SocmedLink({ icon, link }) {
    return (
        <a
            href={link}
            rel="noopener"
            target="_blank"
            className="p-2 border border-gray-50/20 rounded-lg bg-zinc-900"
        >
            {icon}
        </a>
    );
}