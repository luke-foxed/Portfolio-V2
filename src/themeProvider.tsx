import React, { useState } from 'react';

type Theme = boolean
type ThemeContext = { lightTheme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [lightTheme, setLightTheme] = useState<Theme>(true);
  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ lightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
