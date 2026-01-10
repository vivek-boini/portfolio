import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Tools from './components/Tools';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-neutral-900 bg-neutral-50 selection:bg-primary-500 selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Tools />
      <Certificates />
      <Resume />
      <Contact />

      <footer className="py-8 text-center text-neutral-400 text-sm bg-neutral-900 border-t border-neutral-800">
        <p>© {new Date().getFullYear()} Vivek. Crafted with <span className="text-primary-500 animate-pulse">♥</span></p>
      </footer>
    </div>
  );
}

export default App;
