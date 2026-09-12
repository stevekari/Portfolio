import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Engineering from './components/Engineering';
import About from './components/About';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Engineering />
          <About />
          <Blog />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
}

export default App;
