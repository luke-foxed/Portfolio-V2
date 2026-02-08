import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { rotateIn } from '../../lib/animations';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ mb: 6 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        {icon && (
          <motion.div variants={rotateIn}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 52,
                height: 52,
                borderRadius: 3,
                background: isDark
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)'
                  : 'linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(20, 184, 166, 0.12) 100%)',
                border: '1px solid',
                borderColor: isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.25)',
                color: 'primary.main',
                boxShadow: isDark
                  ? '0 4px 20px rgba(59, 130, 246, 0.15), 0 0 40px rgba(59, 130, 246, 0.08)'
                  : '0 4px 20px rgba(37, 99, 235, 0.1), 0 0 40px rgba(37, 99, 235, 0.06)',
                '& svg': {
                  fontSize: '1.6rem',
                },
              }}
            >
              {icon}
            </Box>
          </motion.div>
        )}
        <motion.div variants={titleVariants}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.25rem', md: '2.75rem' },
              color: 'text.primary',
              letterSpacing: '-0.02em',
              background: isDark
                ? 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)'
                : 'linear-gradient(135deg, #0a0a0a 0%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title.toUpperCase()}
          </Typography>
        </motion.div>
      </motion.div>

    </Box>
  );
};
