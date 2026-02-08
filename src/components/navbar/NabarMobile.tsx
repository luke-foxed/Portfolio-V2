import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Menu, Close, DarkMode, LightMode } from '@mui/icons-material';
import { useThemeMode } from '../../themeProvider';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const NavbarMobile: React.FC = () => {
  const { toggleTheme, isDark } = useThemeMode();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          py: 1.5,
          px: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transform: scrolled ? 'translateY(0)' : 'translateY(-100%)',
          backgroundColor: scrolled
            ? isDark
              ? 'rgba(10, 10, 10, 0.75)'
              : 'rgba(250, 250, 250, 0.75)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid' : 'none',
          borderColor: scrolled
            ? isDark
              ? 'rgba(255, 255, 255, 0.06)'
              : 'rgba(0, 0, 0, 0.06)'
            : 'transparent',
          boxShadow: scrolled && isDark
            ? '0 4px 30px rgba(0, 0, 0, 0.3)'
            : scrolled ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none',
          transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <Typography
          onClick={() => scrollToSection('home')}
          sx={{
            fontWeight: 700,
            fontSize: '1.1rem',
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

        <IconButton
          onClick={() => setIsOpen(true)}
          sx={{
            color: 'text.primary',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          <Menu />
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 320,
            backgroundColor: 'background.default',
            backgroundImage: 'none',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            p: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'text.primary',
              }}
            >
              Menu
            </Typography>
            <IconButton
              onClick={() => setIsOpen(false)}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              <Close />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <List sx={{ flexGrow: 1 }}>
            {navItems.map((item, index) => (
              <ListItem
                key={item.id}
                component={motion.li}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  py: 2,
                  cursor: 'pointer',
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: isDark
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: 'text.primary',
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary' }}
            >
              Theme
            </Typography>
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {isDark ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
