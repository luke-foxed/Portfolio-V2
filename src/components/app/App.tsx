import React, { FC, useEffect, useState } from 'react';
import { NavbarDesktop } from '../navbar/NavbarDesktop';
import { Home } from '../sections/Home';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Contact } from '../sections/Contact';
import { Projects } from '../sections/Projects';
import { NavbarMobile } from '../navbar/NabarMobile';
import { isMobile } from 'react-device-detect';

require('dotenv').config({ debug: true });

const App: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  const ResponsiveNav: FC = () => {
    if (isMobile || width < 700) {
      return <NavbarMobile />;
    } else {
      return <NavbarDesktop />;
    }
  };

  return (
    <div className='App'>
      <ResponsiveNav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
