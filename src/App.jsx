import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Writeups from './components/Writeups';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#E6E9EF] selection:bg-[#3ED6C4]/30 selection:text-[#3ED6C4]">
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Writeups />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
