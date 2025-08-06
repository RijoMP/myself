import React from 'react'
import { useCanvasContext } from '../../context/CanvasContext'
import BrandSvg from '../../components/svgs/brand'
import { motion } from 'framer-motion'

const Header = () => {
  const { setGlobalIndex } = useCanvasContext()
  return (
    <header className="bg-transparent absolute w-full  top-0 font-mono text-white p-4 flex justify-between items-center z-[222222222] playwrite">
      <div className="text-xl font-bold tracking-tight cursor-pointer place-self-start" onClick={() => setGlobalIndex(1)}>
        <motion.img src="/logo.png" alt="R" width={64} height={64} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
      </div>
      <nav>
        <ul className="flex gap-6 text-lg flex-col md:flex-row w-full text-right">
          <li>
            <a href="#about" className="hover:text-yellow-400 transition" onClick={() => setGlobalIndex(1)}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-yellow-400 transition" onClick={() => setGlobalIndex(2)}>
              Experience
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-yellow-400 transition" onClick={() => setGlobalIndex(3)}>
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition" onClick={() => setGlobalIndex(4)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
