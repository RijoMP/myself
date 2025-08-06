import { motion } from 'framer-motion'
import React from 'react'
import { LettersPullUp, TextAnimated } from '../../components/TextAnimated'
import BrandSvg from '../../components/svgs/brand'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import TypeWritterPaper from '../../components/TypeWritterPaper'
import TypeWritterTwo from '../../components/TypeWritterTwo'

type DivZProps = {
  index: number
  selectedIndex?: number
  key?: string
}

const Intro: React.FC<DivZProps> = ({ index, selectedIndex, key }) => (
  <section className="w-full flex flex-col items-center justify-center overflow-x-clip" key={key}>
    <div className="mt-10 brand-logo flex justify-center mx-6 flex-col items-center">
      {/* <RijoText text="RIJO M P" /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-xl h-56 object-contain bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: "url('/profile.png')" }}>
        &nbsp;
        <div className="relative z-20 h-full flex justify-center align-bottom items-end">
          <BrandSvg width={100} height={100} />
        </div>
      </motion.div>
      {/* Social Icons with React Icons */}
      <div className="flex gap-6 mt-6">
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={32} className="text-yellow-400" />
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={32} className="text-yellow-400" />
        </a>
        <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={32} className="text-yellow-400" />
        </a>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="text-2xl font-bold mt-4">
        <TextAnimated
          text="RIJO.M.P"
          className="text-4xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] bg-gradient-to-r from-yellow-300 via-yellow-700 to-yellow-500 bg-clip-text text-transparent"
        />
        <LettersPullUp
          text="Full Stack Developer"
          className="text-sm md:text-2xl lg:text-2xl font-[Courier_New] bg-gradient-to-r from-gray-600 via-gray-100 to-gray-700 bg-clip-text text-transparent"
        />
      </motion.div>
      <div className="mt-6 flex flex-col items-center text-white text-[6px] w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl mx-10 text-justify">
        {/* <TypeWritterPaper
          text="Full Stack Developer specializing in Node.js, AWS, and React, with expertise in NestJS, MongoDB, and PostgreSQL. Proven ability to build scalable APIs and responsive UIs, optimize performance, and deliver high-quality solutions. Strong collaborator with a track record of leading end-to-end projects on time. Passionate about cloud-native architecture and intuitive user experiences. Committed to clean, maintainable code and continuous learning."
          pause={900}
        /> */}

        <TypeWritterTwo
          sequence={[
            'എന്റെ പേര് റിജോ , സ്ഥലം വന്നിട്ട് കോതമംഗലം ആണ് ..യ്യോ .. 🫢',
            2000,
            'My Name',
            3000,
            `I'm a Software Engineer.. `,
            2000,
            '',
            2000,
            'Full Stack Developer specializing in Node.js, AWS, and React, with expertise in NestJS, MongoDB, and PostgreSQL.',
            2000,
            'Full Stack Developer specializing in Node.js, AWS, and React, with expertise in NestJS, MongoDB, and PostgreSQL. Proven ability to build scalable APIs and responsive UIs, optimize performance, and deliver high-quality solutions.',
            2000,
            'Full Stack Developer specializing in Node.js, AWS, and React, with expertise in NestJS, MongoDB, and PostgreSQL. Proven ability to build scalable APIs and responsive UIs, optimize performance, and deliver high-quality solutions. Strong collaborator with a track record of leading end-to-end projects on time.',
            2000,
            'Full Stack Developer specializing in Node.js, AWS, and React, with expertise in NestJS, MongoDB, and PostgreSQL. Proven ability to build scalable APIs and responsive UIs, optimize performance, and deliver high-quality solutions. Strong collaborator with a track record of leading end-to-end projects on time. Passionate about cloud-native architecture and intuitive user experiences.',
            2000,
            'Full Stack Developer specializing in Node.js, AWS, and React, with expertise in NestJS, MongoDB, and PostgreSQL. Proven ability to build scalable APIs and responsive UIs, optimize performance, and deliver high-quality solutions. Strong collaborator with a track record of leading end-to-end projects on time. Passionate about cloud-native architecture and intuitive user experiences. Committed to clean, maintainable code and continuous learning.'
          ]}
          repeat={0}
          className="font-typewriter"
        />
      </div>
    </div>
  </section>
)

export default Intro
