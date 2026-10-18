
import './index.css';
import { Navbar } from './components/Navbar';
import { sectionIds } from './lib/data.js';
import { useScrollSpy } from './hooks/use-scroll-spy.js';
import CursorEffect from './components/CursorEffect';
import { useCallback, useEffect, useState } from 'react';
import PageLoader from './components/PageLoader';
import Homepage from './pages/Home.jsx';
import Aboutpage from './pages/About.jsx';
import Skillspage from './pages/Skills.jsx';
import Portfoliopage from './pages/Portfolio.jsx';
import Contactpage from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = useCallback(() => {
        setIsLoading(false);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isLoading ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isLoading]);

    const activeId = useScrollSpy(sectionIds);

    return (
        <>
            {isLoading && <PageLoader onComplete={finishLoading} />}
            <CursorEffect />
            <Navbar activeId={activeId} />
            <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
                <Homepage />
                <Aboutpage />
                <Skillspage />
                <Portfoliopage />
                <Contactpage />
            </main>
            <Footer />
        </>
    );
}
