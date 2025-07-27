import React from 'react';
import { motion } from 'framer-motion';

const HomeSection: React.FC = () => {
  return (
    <motion.section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 px-4"
    >
      <motion.img
        src="https://media.licdn.com/dms/image/v2/D5603AQHl1_UsRRZWwQ/profile-displayphoto-shrink_800_800/B56ZPKPY9OGkAc-/0/1734264853128?e=1756339200&v=beta&t=NM1XqU6TZUVHDzDJCbMDHW7NKf7dqUhZoyv9R7vdoiU"
        alt="Rijo MP"
        className="w-32 h-32 rounded-full mb-4"
      />
      <h2 className="text-3xl font-bold">Hi I'm Rijo MP</h2>
      <p className="text-lg text-center mt-2">
        Senior Software Engineer at InApp
      </p>
    </motion.section>
  );
};

export default HomeSection;
