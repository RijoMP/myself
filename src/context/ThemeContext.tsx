// src/context/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem('theme');
    console.log('ThemeContext: Initializing theme...');
    if (savedTheme) {
      console.log('ThemeContext: Found saved theme in localStorage:', savedTheme);
      return savedTheme;
    }
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('ThemeContext: System prefers dark:', systemPrefersDark);
    return systemPrefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    console.log('ThemeContext: useEffect triggered for theme:', theme);
    const root = window.document.documentElement;
    root.className = ''; // Clear all classes
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('ThemeContext: Toggling theme to:', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};