import React, { useState } from 'react';
import { Box, Container, Typography, Button, IconButton, Stack, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitHub, LinkedIn, Email, ContentCopy, Check, DarkMode, LightMode, Handshake } from '@mui/icons-material';
import { SectionHeader } from '../common/SectionHeader';
import { fadeUp, staggerContainer, inViewConfig } from '../../lib/animations';
import { useTheme } from '@mui/material/styles';
import { useThemeMode } from '../../themeProvider';

const EMAIL = 'lukefoxportfolio@gmail.com';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <GitHub />,
    url: 'https://github.com/luke_foxed',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedIn />,
    url: 'https://www.linkedin.com/in/luke-fox-aa103a148/',
  },
  {
    name: 'Email',
    icon: <Email />,
    url: `mailto:${EMAIL}`,
  },
];

export const Contact: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { toggleTheme } = useThemeMode();
  const [ref, inView] = useInView(inViewConfig);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy email');
    }
  };

  return (
    <Box
      id="contact"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '80px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.03) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          sx={{
            textAlign: 'center',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          <SectionHeader title="Let's Work Together" icon={<Handshake />} />

          <Typography
            component={motion.p}
            variants={fadeUp}
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.15rem' },
              lineHeight: 1.8,
              mb: 5,
            }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </Typography>

          <Box
            component={motion.div}
            variants={fadeUp}
            sx={{ mb: 5 }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 500,
                background: isDark
                  ? 'linear-gradient(135deg, #60a5fa 0%, #5eead4 100%)'
                  : 'linear-gradient(135deg, #2563eb 0%, #14b8a6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 3,
              }}
            >
              {EMAIL}
            </Typography>
            <Button
              variant="outlined"
              startIcon={copied ? <Check /> : <ContentCopy />}
              onClick={handleCopyEmail}
              sx={{
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                color: copied ? 'success.main' : 'text.primary',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(37, 99, 235, 0.08)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)',
                },
              }}
            >
              {copied ? 'Copied!' : 'Copy Email'}
            </Button>
          </Box>

          <Stack
            component={motion.div}
            variants={fadeUp}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            {socialLinks.map((link) => (
              <IconButton
                key={link.name}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                sx={{
                  color: 'text.secondary',
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                  border: '1px solid',
                  borderColor: 'divider',
                  p: 1.5,
                  transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                  '&:hover': {
                    color: '#fff',
                    borderColor: 'transparent',
                    background: 'linear-gradient(135deg, #3b82f6, #14b8a6)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.25)',
                  },
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Container>

      <Box
        component="footer"
        sx={{
          pt: 8,
          pb: 3,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              pt: 3,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
              }}
            >
              {new Date().getFullYear()} Luke Fox.
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  mr: 1,
                }}
              >
                Theme
              </Typography>
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
            </Stack>
          </Box>
        </Container>
      </Box>

      <Snackbar
        open={copied}
        autoHideDuration={2000}
        onClose={() => setCopied(false)}
        message="Email copied to clipboard"
      />
    </Box>
  );
};
