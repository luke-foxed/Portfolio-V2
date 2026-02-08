import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useThemeMode } from '../../themeProvider';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const NavbarDesktop: React.FC = () => {
  const { toggleTheme, isDark } = useThemeMode();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);

      // Determine active section
      const sections = navItems.map((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return { id: item.id, top: rect.top };
        }
        return { id: item.id, top: Infinity };
      });

      const atBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100;
      if (atBottom) {
        setActiveSection(navItems[navItems.length - 1].id);
      } else {
        const current = sections.find((s) => s.top >= -100 && s.top < 400);
        if (current) {
          setActiveSection(current.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Box
        component={motion.header}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: scrolled ? 0 : -100,
          opacity: scrolled ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          py: 1.5,
          backgroundColor: isDark
            ? 'rgba(10, 10, 10, 0.75)'
            : 'rgba(250, 250, 250, 0.75)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
          boxShadow: isDark
            ? '0 4px 30px rgba(0, 0, 0, 0.3)'
            : '0 4px 30px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              onClick={() => scrollToSection('home')}
              sx={{
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                cursor: 'pointer',
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                },
                transition: 'color 0.2s ease',
              }}
            >
              LUKE
              <Box
                component="span"
                sx={{
                  ml: 0.5,
                  background: 'linear-gradient(135deg, #3b82f6, #14b8a6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                FOX
              </Box>
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              {navItems.map((item) => (
                <Box
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    position: 'relative',
                    px: 2,
                    py: 1,
                    cursor: 'pointer',
                    color: activeSection === item.id ? 'primary.main' : 'text.secondary',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <Box
                      component={motion.div}
                      layoutId="navbar-indicator"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 24,
                        height: 2,
                        background: 'linear-gradient(90deg, #3b82f6, #14b8a6)',
                        borderRadius: 1,
                        boxShadow: '0 0 8px rgba(59, 130, 246, 0.4)',
                      }}
                    />
                  )}
                </Box>
              ))}

              <IconButton
                onClick={toggleTheme}
                size="small"
                sx={{
                  ml: 2,
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: isDark
                      ? 'rgba(59, 130, 246, 0.1)'
                      : 'rgba(37, 99, 235, 0.1)',
                  },
                }}
              >
                {isDark ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
              </IconButton>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box
        component={motion.div}
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        sx={{
          position: 'fixed',
          top: 24,
          left: 24,
          zIndex: 999,
          pointerEvents: scrolled ? 'none' : 'auto',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '1.1rem',
            color: 'text.primary',
            opacity: 0.6,
          }}
        >
          LF
        </Typography>
      </Box>

      <Box
        component={motion.div}
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        sx={{
          position: 'fixed',
          top: 16,
          right: 24,
          zIndex: 999,
          pointerEvents: scrolled ? 'none' : 'auto',
        }}
      >
        <IconButton
          onClick={toggleTheme}
          size="small"
          sx={{
            color: 'text.secondary',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          {isDark ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
        </IconButton>
      </Box>
    </>
  );
};
