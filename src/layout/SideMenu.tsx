// src/layout/SideMenu.tsx
import React from 'react';
import ThemeToggle from '../components/common/ThemeToggle';

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const SideMenu: React.FC = () => {
  return (
    <aside className="w-44 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-4 fixed left-0 top-1/2 transform -translate-y-1/2 h-64 flex flex-col items-center justify-center rounded-lg">
      <nav>
        <div className="space-y-2 grid grid-cols-1">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-800 dark:text-gray-200 hover:underline mx-auto"
          >
            Me
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-800 dark:text-gray-200 hover:underline mx-auto"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-gray-800 dark:text-gray-200 hover:underline mx-auto"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-gray-800 dark:text-gray-200 hover:underline mx-auto"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-800 dark:text-gray-200 hover:underline mx-auto"
          >
            Contact
          </button>
        </div>
      </nav>
      <div className="mt-6">
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default SideMenu;
