import React from 'react'
import BrandSvg from '../components/svgs/brand'
import { motion } from 'framer-motion'
import { LettersPullUp, TextAnimated } from '../components/TextAnimated'

// then use <BrandLogo />
const Profile: React.FC = () => {
  return (
    <div>
      <div className="mt-10 brand-logo flex justify-center mx-6 flex-col items-center w-full">
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
    </div>
  )
}

export default Profile
