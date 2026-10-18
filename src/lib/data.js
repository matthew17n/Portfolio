
import CSSLogo from '../assets/css3-logo.png';
import HTMLLogo from '../assets/html5-logo.png';
import JSLogo from '../assets/javascript-1.svg';
import ReactLogo from '../assets/react.png';
import FigmaLogo from '../assets/figma-logo.png';
import NodeJSLogo from '../assets/nodejs-logo.png';
import MongoDBLogo from '../assets/mongodb-logo.png';
import TailwindLogo from '../assets/tailwind-css-2.svg';

export const projects = [
    {
        projectName: "Awesome To-Dos",
        thumbnail: "/awesometodos-thumbnail.png",
        overview: `
            A fully-featured todo application built with React and Node.js. It allows users to create, edit, and delete tasks, with data persistence using a MongoDB backend. The app demonstrated clean UI, user-friendly interactions, and responsive design.
        `,
        tools: ['React', 'Node.js', 'MongoDB'],
        githubLink: "https://github.com/matthew17n/AwesomeTodosApp",
        liveDemo: "https://awesometodosapp-hqys.onrender.com/"
    },
    {
        projectName: "Chin Challenge",
        thumbnail: "/challenge-figma.png",
        overview: `
            A Figma-based UI design challenge focused on music streaming interfaces. This project emphasizes modern layouts, smooth interactions, and aesthetic consistency. Includes interactive prototype and presentation of design rationale.
        `,
        tools: ['Figma'],
        liveDemo: "https://www.figma.com/design/IdXwzZzvUU7q8uIUUkv42U/Chin_Challenge-1?t=jFMfrvpFWlFTQN8j-1"
    },
    {
        projectName: "WeLoop",
        thumbnail: "/weloop-app.png",
        overview: `
            This study app is designed to help students stay organized and focused. It provides simple and useful features that support better study habits. The clean and user-friendly design makes it easy to use for all students. Overall, this project improves the learning experience and helps students achieve their academic goals.
        `,
        tools: ['Figma'],
        liveDemo: "https://www.figma.com/design/gt1Y9k0lIrrYHdi51OVI5f/Untitled?t=7piqvhFRTAUG21Ae-1"
    },
    {
        projectName: "Birthday Template Shop",
        thumbnail: "/birthday-template-preview.jpg",
        overview: `
            A birthday website shop where visitors can explore themed birthday pages, personalize a greeting with a name and message, choose a package, and review order and GCash instructions. Built to make birthday surprises feel personal and memorable.
        `,
        tools: ['HTML', 'CSS', 'JavaScript'],
        githubLink: "https://github.com/matthew17n/birthday-template-shop",
        liveDemo: "https://birthday-template-shop.vercel.app/"
    },
    {
        projectName: "VOTARA — Online Voting System",
        thumbnail: "/votara-preview.png",
        overview: `
            A collaborative online voting system developed by our group to support student elections. It includes student registration, OTP verification, candidate and election management, digital voting, election results, and administrative tools.
        `,
        tools: ['React', 'JavaScript', 'Node.js', 'Express'],
        githubLink: "https://github.com/Rev0710/Votara",
        liveDemo: "https://votara-election-system.vercel.app/"
    }
];

export const sectionIds = [
    'home',
    'about',
    'journey',
    'skills',
    'projects',
    'contact'
];

export const navLinks = [
    {
        name: "Home",
        href: "home"
    },
    {
        name: "About",
        href: "about"
    },
    {
        name: "Journey",
        href: "journey"
    },
    {
        name: "Skills",
        href: "skills"
    },
    {
        name: "Projects",
        href: "projects"
    },
    {
        name: "Contact",
        href: "contact"
    }
];

export const images = [
    { url: HTMLLogo },
    { url: CSSLogo },
    { url: JSLogo },
    { url: ReactLogo },
    { url: FigmaLogo },
    { url: NodeJSLogo },
    { url: MongoDBLogo },
    { url: TailwindLogo }
];
