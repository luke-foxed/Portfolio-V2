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

      {/* Abstract scattered glows – varied positions, sizes, timings */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '70%',
          height: '70%',
          background: isDark
            ? 'radial-gradient(ellipse at 30% 30%, rgba(59, 130, 246, 0.12) 0%, transparent 65%)'
            : 'radial-gradient(ellipse at 30% 30%, rgba(59, 130, 246, 0.14) 0%, transparent 65%)',
          filter: 'blur(70px)',
          animation: 'orb-breathe 11s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '-15%',
          right: '-15%',
          width: '60%',
          height: '75%',
          background: isDark
            ? 'radial-gradient(ellipse at 70% 25%, rgba(20, 184, 166, 0.1) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at 70% 25%, rgba(20, 184, 166, 0.12) 0%, transparent 60%)',
          filter: 'blur(75px)',
          animation: 'orb-breathe-alt 14s ease-in-out 2.5s infinite',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '10%',
          width: '45%',
          height: '50%',
          background: isDark
            ? 'radial-gradient(circle at center, rgba(96, 165, 250, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orb-float 13s ease-in-out 1s infinite',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '5%',
          width: '50%',
          height: '45%',
          background: isDark
            ? 'radial-gradient(circle at center, rgba(94, 234, 212, 0.07) 0%, transparent 65%)'
            : 'radial-gradient(circle at center, rgba(20, 184, 166, 0.09) 0%, transparent 65%)',
          filter: 'blur(65px)',
          animation: 'orb-drift 16s ease-in-out 4s infinite',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          width: '55%',
          height: '40%',
          background: isDark
            ? 'radial-gradient(ellipse at center, rgba(129, 140, 248, 0.06) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 60%)',
          filter: 'blur(80px)',
          animation: 'orb-sway 18s ease-in-out 0.5s infinite',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '25%',
          width: '35%',
          height: '45%',
          background: isDark
            ? 'radial-gradient(circle at center, rgba(59, 130, 246, 0.06) 0%, transparent 55%)'
            : 'radial-gradient(circle at center, rgba(37, 99, 235, 0.08) 0%, transparent 55%)',
          filter: 'blur(55px)',
          animation: 'orb-pulse-slow 9s ease-in-out 3s infinite',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '35%',
          width: '55%',
          height: '55%',
          background: isDark
            ? 'radial-gradient(ellipse at 50% 50%, rgba(20, 184, 166, 0.05) 0%, transparent 58%)'
            : 'radial-gradient(ellipse at 50% 50%, rgba(20, 184, 166, 0.07) 0%, transparent 58%)',
          filter: 'blur(70px)',
          animation: 'orb-float 15s ease-in-out 6s infinite reverse',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          right: '35%',
          width: '40%',
          height: '50%',
          background: isDark
            ? 'radial-gradient(circle at center, rgba(96, 165, 250, 0.05) 0%, transparent 62%)'
            : 'radial-gradient(circle at center, rgba(59, 130, 246, 0.07) 0%, transparent 62%)',
          filter: 'blur(60px)',
          animation: 'orb-drift 12s ease-in-out 2s infinite',
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
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(85vw, 480px)',
                height: 'min(85vw, 480px)',
                animation: 'hero-glow-pulse 6s ease-in-out infinite',
                pointerEvents: 'none',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: isDark
                    ? 'radial-gradient(circle at center, rgba(96,165,250,0.32) 0%, rgba(94,234,212,0.12) 38%, transparent 60%)'
                    : 'radial-gradient(circle at center, rgba(37,99,235,0.24) 0%, rgba(20,184,166,0.1) 38%, transparent 60%)',
                  animation: 'hero-glow-shape 6s ease-in-out infinite, hero-glow-blue-fade 6s ease-in-out infinite',
                  filter: 'blur(40px)',
                  willChange: 'transform, opacity',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: isDark
                    ? 'radial-gradient(circle at center, rgba(94,234,212,0.28) 0%, rgba(96,165,250,0.1) 38%, transparent 60%)'
                    : 'radial-gradient(circle at center, rgba(20,184,166,0.22) 0%, rgba(37,99,235,0.08) 38%, transparent 60%)',
                  animation: 'hero-glow-shape 6s ease-in-out infinite, hero-glow-teal-fade 6s ease-in-out infinite',
                  filter: 'blur(40px)',
                  willChange: 'transform, opacity',
                }}
              />
            </Box>
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
                filter: isDark
                  ? 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.35)) drop-shadow(0 0 40px rgba(94, 234, 212, 0.2))'
                  : 'drop-shadow(0 0 18px rgba(59, 130, 246, 0.4)) drop-shadow(0 0 36px rgba(20, 184, 166, 0.25))',
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
          bottom: { xs: 24, md: 40 },
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          zIndex: 1,
          cursor: 'pointer',
          py: 2,
          px: 3,
          minHeight: 56,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontSize: '0.75rem',
            letterSpacing: 2,
            textTransform: 'uppercase',
            display: { xs: 'none', md: 'block' },
          }}
        >
          Scroll
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontSize: '0.75rem',
            letterSpacing: 2,
            textTransform: 'uppercase',
            display: { xs: 'block', md: 'none' },
          }}
        >
          Tap
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
