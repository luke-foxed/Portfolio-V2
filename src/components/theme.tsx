import { createTheme, ThemeOptions } from '@mui/material/styles';

export const colors = {
  dark: {
    background: '#0a0a0a',
    surface: '#141414',
    border: '#262626',
    textPrimary: '#fafafa',
    textSecondary: '#a1a1aa',
    accent: '#3b82f6',
    accentHover: '#60a5fa',
    accentGlow: 'rgba(59, 130, 246, 0.15)',
    teal: '#14b8a6',
    tealGlow: 'rgba(20, 184, 166, 0.15)',
    surfaceHover: 'rgba(255, 255, 255, 0.05)',
    borderHover: 'rgba(59, 130, 246, 0.5)',
  },
  light: {
    background: '#fafafa',
    surface: '#ffffff',
    border: '#e5e5e5',
    textPrimary: '#0a0a0a',
    textSecondary: '#71717a',
    accent: '#2563eb',
    accentHover: '#3b82f6',
    accentGlow: 'rgba(37, 99, 235, 0.12)',
    teal: '#0d9488',
    tealGlow: 'rgba(20, 184, 166, 0.12)',
    surfaceHover: 'rgba(0, 0, 0, 0.03)',
    borderHover: 'rgba(37, 99, 235, 0.4)',
  },
};

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 24px',
          fontSize: '0.95rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        },
      },
    },
  },
};

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: colors.dark.accent,
      light: colors.dark.accentHover,
    },
    background: {
      default: colors.dark.background,
      paper: colors.dark.surface,
    },
    text: {
      primary: colors.dark.textPrimary,
      secondary: colors.dark.textSecondary,
    },
    divider: colors.dark.border,
  },
});

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: colors.light.accent,
      light: colors.light.accentHover,
    },
    background: {
      default: colors.light.background,
      paper: colors.light.surface,
    },
    text: {
      primary: colors.light.textPrimary,
      secondary: colors.light.textSecondary,
    },
    divider: colors.light.border,
  },
});

export type ThemeMode = 'light' | 'dark';
