import React from 'react';
import './App.css';
import { Navbar } from '../navbar/Navbar';
import { Home } from '../sections/Home';
import { About } from '../sections/About';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default App;
