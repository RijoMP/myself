import React, { useEffect, useState } from 'react'
import BrandSvg from '../components/svgs/brand'
import { motion } from 'framer-motion'
import { LettersPullUp, TextAnimated } from '../components/TextAnimated'
import { useCanvasContext } from '../context/CanvasContext'
//@ts-ignore
import { Divz } from 'divz'
import Intro from './home/Intro'
import Contact from './home/Contact'
import Education from './home/Education'
import Experience from './home/Experience'
import ReactZCarousel from '../components/ReactZCarousel'
// import BrandLogo from '../components/svgs/brand.svg'

// then use <BrandLogo />
const Home: React.FC = () => {
  const { setFov, globalIndex, setGlobalIndex } = useCanvasContext()
  const [currentIndex, setCurrentIndex] = useState<number>(1)
  const [selectedIndex, setSelectedIndex] = useState<number>(1)
  // setCurrentIndex(globalIndex)

  useEffect(() => {
    setFov(globalIndex * 10)
    setTimeout(() => {
      setCurrentIndex(globalIndex)
    }, 1200)
  }, [globalIndex])
  return (
    <div>
      <ReactZCarousel>
        <Intro index={1} selectedIndex={selectedIndex} key="intro" />
        <Experience index={2} selectedIndex={selectedIndex} key="experience" />
        <Education index={3} selectedIndex={selectedIndex} key="education" />
        <Contact index={4} selectedIndex={selectedIndex} key="contact" />
      </ReactZCarousel>
    </div>
  )
}

export default Home
