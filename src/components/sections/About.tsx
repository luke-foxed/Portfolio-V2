import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Person } from '@mui/icons-material';
import { SectionHeader } from '../common/SectionHeader';
import { fadeUp, staggerContainer, scaleUp, inViewConfig } from '../../lib/animations';
import { useTheme } from '@mui/material/styles';
import me from '../../assets/images/me.png';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}

const experiences: Experience[] = [
  {
    company: 'Kargo',
    role: 'Software Engineer',
    period: '2021 - Present',
    description:
      'Building software to help advertisers scale full-funnel performance marketing campaigns across social platforms. Working as a full-stack engineer with React, Ruby on Rails, PostgreSQL, and AWS.',
  },
  {
    company: 'ReliaQuest',
    role: 'Security Analyst',
    period: '2020 - 2021',
    description:
      'Worked in a Security Operations Center investigating and analysing security incidents across diverse customer environments. Utilized various SIEM and EDR tools including Splunk, LogRhythm, and CrowdStrike.',
  },
  {
    company: 'Distilled',
    role: 'QA Engineer Intern',
    period: '2019',
    description:
      'Implemented automated testing frameworks using WebdriverIO and TypeScript. Contributed to CI/CD pipelines and quality assurance processes for DoneDeal.',
  },
];

const education = {
  institution: 'South East Technological University',
  degree: 'Applied Computing (Honours)',
  period: '2016 - 2020',
  achievement: 'First Class Honours',
};

const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Paper
      component={motion.div}
      variants={scaleUp}
      elevation={0}
      sx={{
        p: 3,
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '3px',
          background: 'linear-gradient(180deg, #3b82f6, #14b8a6)',
          borderRadius: '3px 0 0 3px',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        },
        '&:hover': {
          borderColor: isDark ? 'rgba(59, 130, 246, 0.5)' : 'rgba(37, 99, 235, 0.4)',
          transform: 'translateY(-4px)',
          boxShadow: isDark
            ? '0 8px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            : '0 8px 30px rgba(0, 0, 0, 0.08)',
          '&::before': {
            opacity: 1,
          },
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 0.5,
            }}
          >
            {experience.company}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'primary.main',
              fontWeight: 500,
            }}
          >
            {experience.role}
          </Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.75rem',
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
          }}
        >
          {experience.period}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          lineHeight: 1.7,
        }}
      >
        {experience.description}
      </Typography>
    </Paper>
  );
};

export const About: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [ref, inView] = useInView(inViewConfig);

  return (
    <Box
      id="about"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '80px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '40%',
          background: isDark
            ? 'radial-gradient(ellipse at center top, rgba(59, 130, 246, 0.04) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center top, rgba(37, 99, 235, 0.025) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader title="About" icon={<Person />} />

        <Grid
          container
          spacing={{ xs: 6, md: 4 }}
          component={motion.div}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          sx={{ mb: 10 }}
        >
          <Grid item xs={12} md={3}>
            <Box
              component={motion.div}
              variants={fadeUp}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -16,
                    borderRadius: '20px',
                    background: isDark
                      ? 'rgba(255, 255, 255, 0.03)'
                      : 'rgba(0, 0, 0, 0.03)',
                    backgroundImage: isDark
                      ? 'radial-gradient(rgba(59, 130, 246, 0.07) 1px, transparent 1px)'
                      : 'radial-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                    border: '1px solid',
                    borderColor: isDark
                      ? 'rgba(255, 255, 255, 0.06)'
                      : 'rgba(0, 0, 0, 0.06)',
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: { xs: 152, md: 192 },
                    height: { xs: 152, md: 192 },
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={me}
                    alt="Luke Fox"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 3,
                      background: isDark
                        ? 'linear-gradient(to top, rgba(96, 165, 250, 0.18) 0%, rgba(94, 234, 212, 0.14) 30%, transparent 55%)'
                        : 'linear-gradient(to top, rgba(37, 99, 235, 0.16) 0%, rgba(20, 184, 166, 0.12) 30%, transparent 55%)',
                      pointerEvents: 'none',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box component={motion.div} variants={fadeUp}>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Hi, I'm{' '}
                <Box
                  component="span"
                  sx={{
                    fontWeight: 600,
                    background: isDark
                      ? 'linear-gradient(135deg, #60a5fa, #5eead4)'
                      : 'linear-gradient(135deg, #2563eb, #14b8a6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Luke
                </Box>
                !
                I'm a software engineer based in Ireland with a passion for building elegant,
                user-focused web applications. I specialize in full-stack development,
                working primarily with React, TypeScript, and modern backend technologies.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                }}
              >
                I enjoy solving complex problems and creating intuitive user experiences.
                When I'm not coding, you'll find me tinkering with new technologies and side projects, travelling, at the gym, or
                unwinding with video games.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          sx={{ mb: 8 }}
        >
          <Typography
            component={motion.h3}
            variants={fadeUp}
            variant="h5"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 4,
            }}
          >
            Experience
          </Typography>

          <Grid container spacing={3}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} key={exp.company}>
                <ExperienceCard experience={exp} index={index} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
        >
          <Typography
            component={motion.h3}
            variants={fadeUp}
            variant="h5"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 4,
            }}
          >
            Education
          </Typography>

          <Paper
            component={motion.div}
            variants={scaleUp}
            elevation={0}
            sx={{
              p: 3,
              backgroundColor: 'background.default',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 0.5,
                  }}
                >
                  {education.institution}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 500,
                  }}
                >
                  {education.degree}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    mt: 1,
                  }}
                >
                  Graduated with {education.achievement}
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.75rem',
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                {education.period}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};
