import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeader } from '../common/SectionHeader';
import { SkillPill } from '../common/SkillPill';
import { fadeUp, staggerContainer, pillStagger, inViewConfig } from '../../lib/animations';
import { useTheme } from '@mui/material/styles';
import { Code, Storage, Cloud, DataObject, AutoAwesome } from '@mui/icons-material';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code />,
    skills: ['React', 'TypeScript', 'Next.js', 'React Remix', 'Redux', 'SASS/SCSS', 'Material UI', 'Mantine UI'],
  },
  {
    title: 'Backend',
    icon: <Storage />,
    skills: ['Node.js', 'Ruby on Rails', 'Flask', 'ExpressJS', 'Prisma',],
  },
  {
    title: 'DevOps & Tools',
    icon: <Cloud />,
    skills: ['Docker', 'AWS (& CDK)', 'Git', 'CI/CD', 'Linux', 'Heroku', 'Vercel', 'Firebase', 'Claude', 'Cursor'],
  },
  {
    title: 'Databases',
    icon: <DataObject />,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firestore'],
  },
];

const SkillCategoryCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component={motion.div}
      variants={fadeUp}
      sx={{
        p: 3,
        height: '100%',
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #3b82f6, #14b8a6)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        },
        '&:hover': {
          transform: 'translateY(-2px)',
          borderColor: isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.3)',
          boxShadow: isDark
            ? '0 8px 30px rgba(0, 0, 0, 0.3)'
            : '0 8px 30px rgba(0, 0, 0, 0.06)',
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
          '&::after': {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            borderRadius: 2,
            background: isDark
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(20, 184, 166, 0.15) 100%)'
              : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
            border: '1px solid',
            borderColor: isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.2)',
            color: isDark ? '#5eead4' : '#14b8a6',
            '& svg': {
              fontSize: '1.1rem',
            },
          }}
        >
          {category.icon}
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          {category.title}
        </Typography>
      </Box>

      <Box
        component={motion.div}
        variants={pillStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        {category.skills.map((skill) => (
          <SkillPill key={skill} name={skill} />
        ))}
      </Box>
    </Box>
  );
};

export const Skills: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [ref, inView] = useInView(inViewConfig);

  return (
    <Box
      id="skills"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '80px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '50%',
          background: isDark
            ? 'radial-gradient(ellipse at center bottom, rgba(20, 184, 166, 0.04) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center bottom, rgba(20, 184, 166, 0.025) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader title="Skills" icon={<AutoAwesome />} />

        <Typography
          component={motion.p}
          variants={fadeUp}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: 600,
            mb: 6,
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.7,
          }}
        >
          Technologies and tools I work with to build modern, scalable applications.
        </Typography>

        <Grid
          container
          spacing={3}
          component={motion.div}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
        >
          {skillCategories.map((category) => (
            <Grid item xs={12} sm={6} key={category.title}>
              <SkillCategoryCard category={category} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
