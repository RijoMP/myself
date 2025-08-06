import { motion } from 'framer-motion'
import React from 'react'
import { LettersPullUp, TextAnimated } from '../../components/TextAnimated'
import BrandSvg from '../../components/svgs/brand'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

type DivZProps = {
  index: number
  selectedIndex?: number
  key?: string
}

const Intro: React.FC<DivZProps> = ({ index, selectedIndex, key }) => (
  <section className="w-full flex flex-col items-center justify-center" key={key}>
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
    </div>
  </section>
)

export default Intro
