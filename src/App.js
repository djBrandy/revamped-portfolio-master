import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;