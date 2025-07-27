import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-800 px-4"
    
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-center max-w-2xl">
        I am a passionate software engineer with over 4 years of experience in developing scalable and efficient applications. My expertise includes TypeScript, AWS, REST APIs, and serverless computing. I have worked with companies like InApp, Chillar Payment Solutions, and TechNeurons Consulting Solutions, contributing to various innovative projects.
      </p>
    </motion.section>
  );
};

export default AboutSection;
