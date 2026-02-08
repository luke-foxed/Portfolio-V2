import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Typewriter } from '../common/AnimatedText';
import { fadeUp, staggerContainer, scrollIndicator } from '../../lib/animations';
import { useTheme } from '@mui/material/styles';

export const Home: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.default',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: isDark
            ? 'radial-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)'
            : 'radial-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          pointerEvents: 'none',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: '-30%',
          left: '-20%',
          width: '120%',
          height: '100%',
          background: isDark
            ? 'radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
          filter: 'blur(80px)',
          animation: 'orb-breathe 10s ease-in-out infinite',
          willChange: 'transform, opacity',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-25%',
          width: '110%',
          height: '90%',
          background: isDark
            ? 'radial-gradient(ellipse at 70% 30%, rgba(20, 184, 166, 0.06) 0%, transparent 55%)'
            : 'radial-gradient(ellipse at 70% 30%, rgba(20, 184, 166, 0.08) 0%, transparent 55%)',
          filter: 'blur(80px)',
          animation: 'orb-breathe-alt 12s ease-in-out 2s infinite',
          willChange: 'transform, opacity',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            py: { xs: 8, md: 0 },
          }}
        >
          <Box
            component={motion.div}
            variants={fadeUp}
            sx={{
              position: 'relative',
              mb: 2,
              width: 'fit-content',
              mx: { xs: 'auto', md: 0 },
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                top: '50%',
                left: '-30%',
                right: '-30%',
                transform: 'translateY(-50%)',
                height: '200%',
                background: isDark
                  ? 'radial-gradient(ellipse at center, rgba(96,165,250,0.13) 0%, rgba(94,234,212,0.1) 30%, transparent 70%)'
                  : 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, rgba(20,184,166,0.06) 30%, transparent 70%)',
                backgroundSize: '300% 100%',
                animation: 'hero-shimmer 12s linear infinite, glow-pulse 4s ease-in-out infinite',
                filter: 'blur(50px)',
                willChange: 'background-position, opacity',
                pointerEvents: 'none',
              }}
            />
            <Typography
              component="h1"
              sx={{
                position: 'relative',
                fontSize: { xs: '3.5rem', sm: '5rem', md: '6rem', lg: '7rem' },
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: '-0.03em',
                fontFamily: '"Space Grotesk", "Inter", sans-serif',
                background: isDark
                  ? 'linear-gradient(90deg, #60a5fa 0%, #5eead4 16%, #60a5fa 33%, #5eead4 50%, #60a5fa 66%, #5eead4 83%, #60a5fa 100%)'
                  : 'linear-gradient(90deg, #2563eb 0%, #14b8a6 16%, #2563eb 33%, #14b8a6 50%, #2563eb 66%, #14b8a6 83%, #2563eb 100%)',
                backgroundSize: '300% 100%',
                animation: isDark ? 'hero-shimmer 12s linear infinite' : 'hero-shimmer 18s linear infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                WebkitTextStroke: isDark ? '1px rgba(255, 255, 255, 0.06)' : '1px rgba(15, 23, 42, 0.05)',
              }}
            >
              LUKE FOX
            </Typography>
          </Box>

          <Box
            component={motion.div}
            variants={fadeUp}
            sx={{
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg, #3b82f6 0%, #14b8a6 50%, #3b82f6 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s linear infinite',
              borderRadius: 2,
              mb: 3,
              mx: { xs: 'auto', md: 0 },
              transformOrigin: 'left',
            }}
          />

          <Typography
            component={motion.p}
            variants={fadeUp}
            variant="h4"
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              fontWeight: 500,
              color: 'text.secondary',
              mb: 1,
            }}
          >
            Software Engineer
          </Typography>

          <Box component={motion.div} variants={fadeUp}>
            <Typewriter
              texts={[
                'Building modern web experiences',
                'Full-stack development',
                'React & TypeScript enthusiast',
                'Creating elegant solutions',
              ]}
              variant="h5"
              sx={{
                fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                fontWeight: 400,
                color: 'text.secondary',
                minHeight: { xs: '2.5rem', md: '2rem' },
                mb: 5,
              }}
            />
          </Box>

          <Stack
            component={motion.div}
            variants={fadeUp}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={scrollToAbout}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                background: isDark
                  ? 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(20,184,166,0.12))'
                  : 'transparent',
                color: 'text.primary',
                border: '1px solid',
                borderColor: isDark ? 'rgba(59,130,246,0.25)' : 'rgba(0,0,0,0.15)',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.1)',
                  borderColor: 'primary.main',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.15)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              More About Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={scrollToContact}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(37, 99, 235, 0.08)',
                  transform: 'translateY(-2px)',
                  boxShadow: isDark
                    ? '0 4px 15px rgba(59, 130, 246, 0.1)'
                    : '0 4px 15px rgba(37, 99, 235, 0.08)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Contact
            </Button>
          </Stack>
        </Box>
      </Container>

      <Box
        component={motion.div}
        variants={scrollIndicator}
        initial="initial"
        animate={['animate', 'bounce']}
        onClick={scrollToAbout}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          zIndex: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontSize: '0.75rem',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </Typography>
        <KeyboardArrowDown
          sx={{
            color: 'text.secondary',
            fontSize: 28,
          }}
        />
      </Box>
    </Box>
  );
};
