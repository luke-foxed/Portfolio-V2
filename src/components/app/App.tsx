import React from 'react';
import './App.css';
import { Navbar } from '../navbar/Navbar';
import { Home } from '../sections/Home';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Contact } from '../sections/Contact';
import { Projects } from '../sections/Projects';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
