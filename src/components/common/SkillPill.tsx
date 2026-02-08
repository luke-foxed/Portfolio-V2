import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { pillItem } from '../../lib/animations';
import { useTheme } from '@mui/material/styles';

interface SkillPillProps {
  name: string;
}

export const SkillPill: React.FC<SkillPillProps> = ({ name }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component={motion.div}
      variants={pillItem}
      whileHover={{
        scale: 1.08,
        transition: { duration: 0.2 }
      }}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        px: 2,
        py: 1,
        borderRadius: '9999px',
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
        cursor: 'default',
        transition: 'all 0.2s ease',
        '&:hover': {
          backgroundColor: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.08)',
          borderColor: theme.palette.primary.main,
          boxShadow: '0 0 12px rgba(59, 130, 246, 0.15)',
        },
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.85rem',
          fontWeight: 500,
          color: 'text.primary',
          letterSpacing: '0.01em',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};
