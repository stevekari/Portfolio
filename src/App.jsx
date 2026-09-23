import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Engineering from './components/Engineering';
import WhyHireMe from './components/WhyHireMe';
import About from './components/About';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import WhatsAppButton from './components/WhatsAppButton';
import PWAInstallPrompt from './components/PWAInstallPrompt';
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
          <CaseStudy />
          <Engineering />
          <WhyHireMe />
          <About />
          <Blog />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <CookieBanner />
        <WhatsAppButton />
        <PWAInstallPrompt />
      </div>
    </LanguageProvider>
  );
}

export default App;
