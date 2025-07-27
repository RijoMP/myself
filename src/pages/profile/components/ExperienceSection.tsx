import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  return (
    <motion.section
      id="experience"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 px-4"
    >
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <ul className="text-lg max-w-2xl space-y-4">
        <li><strong>Senior Software Engineer</strong> at InApp (Jan 2024 - Present)</li>
        <li><strong>Software Engineer</strong> at InApp (Feb 2023 - Jan 2024)</li>
        <li><strong>Node.js Developer</strong> at Chillar Payment Solutions (Jul 2022 - Feb 2023)</li>
        <li><strong>Associate Programmer</strong> at TechNeurons Consulting Solutions (Oct 2020 - Jul 2022)</li>
      </ul>
    </motion.section>
  );
};

export default ExperienceSection;
