import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-400 dark:bg-gray-700 px-4"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg">Feel free to reach out to me on LinkedIn:</p>
      <a
        href="https://www.linkedin.com/in/rijomp"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-2"
      >
        linkedin.com/in/rijomp
      </a>
    </motion.section>
  );
};

export default ContactSection;
