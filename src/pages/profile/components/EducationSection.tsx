import React from 'react';
import { motion } from 'framer-motion';

const EducationSection: React.FC = () => {
  return (
    <motion.section
      id="education"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-800 px-4"
    >
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <ul className="text-lg max-w-2xl space-y-4">
        <li><strong>Bachelor of Technology (BTech)</strong> in Computer Science from Mar Baselios Institute of Technology and Science (2016 - 2020)</li>
        <li><strong>Diploma</strong> in Information Technology from Govt. Polytechnic College, Purapuzha (Aug 2012 - May 2015)</li>
      </ul>
    </motion.section>
  );
};

export default EducationSection;
