import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SocmedLink } from './Links';

export default function Footer() {
    const socmeds = [
        {
            link: "https://www.facebook.com/share/1LiV7wTXEJ/?mibextid=wwXlfrp",
            icon: <FaFacebook className='text-white' />
        }, 
        {
            link: "https://www.instagram.com/itsmatchew.ig",
            icon: <FaInstagram className='text-white' />
        }
    ];

    return (
        <footer className='flex flex-col items-center justify-center gap-3 mt-20 bg-zinc-800/30 py-3'>
            <h3 className='text-white inter-medium'>Visit my Socials</h3>
            <div className='flex flex-row gap-3'>
                {socmeds.map((socmed, index) => (
                    <SocmedLink key={index} icon={socmed.icon} link={socmed.link} />
                ))}
            </div>
            <span className='text-sm inter-light text-gray-300'>© 2026 Matthew Chin | All Rights Reserved.</span>
        </footer>
    );
}