import React from 'react';
import { motion } from 'framer-motion';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';

const Profile: React.FC = () => {
  return (
    <motion.div className="flex flex-col items-center w-full">
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </motion.div>
  );
};

export default Profile;
