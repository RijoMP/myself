// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext.tsx';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
        animate={{ opacity: 1, scale: [0.8, 0.6, 1], rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
        transition={{ duration: 0.5, times: [0, 0.5, 1] }}
        className="mt-2"
      >
        {theme === 'light' ? (
          <FaSun size={32} className="text-yellow-500" />
        ) : (
          <FaMoon size={32} className="text-gray-800 dark:text-gray-200" />
        )}
      </motion.div>
    </div>
  );
};

export default ThemeToggle;