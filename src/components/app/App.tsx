import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { NavbarDesktop } from '../navbar/NavbarDesktop';
import { NavbarMobile } from '../navbar/NabarMobile';
import { Home } from '../sections/Home';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Contact } from '../sections/Contact';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        color: 'text.primary',
        overflowX: 'hidden',
      }}
    >
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      <Home />
      <About />
      <Skills />
      <Contact />
    </Box>
  );
};

export default App;
