import './index.css';
import { Navbar } from './components/Navbar';
import { sectionIds } from './lib/data.js';
import { useScrollSpy } from './hooks/use-scroll-spy.js';

// pages
import Homepage from './pages/Home.jsx';
import Aboutpage from './pages/About.jsx';
import Skillspage from './pages/Skills.jsx';
import Portfoliopage from './pages/Portfolio.jsx';
import Contactpage from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {

  const activeId = useScrollSpy(sectionIds);
  
  return (
    <>
      <Navbar activeId={activeId} />
      <main className='mx-20 flex flex-col gap-10'>
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
