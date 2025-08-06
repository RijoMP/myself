import { AnimatePresence, motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export default function Companies() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  // Use a single ref for the tab body (no scroll state)
  const bodyRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full lg:w-4xl max-w-4xl h-[60vh] max-h-[360px] rounded-[10px] bg-gray-800/80 overflow-hidden shadow-lg flex flex-col mx-auto sm:w-[80vw] sm:max-w-[85vw] sm:h-auto sm:max-h-none m-2">
      <nav className="backdrop-blur-md bg-white/20 border border-white/20 shadow-md rounded-xl mt-2 mx-2 p-2 flex items-center justify-center overflow-x-auto whitespace-nowrap">
        <ul className="flex w-full gap-2 list-none p-0 m-0 font-medium text-[15px] items-center justify-center flex-nowrap">
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.1)'
              }}
              whileHover={{ scale: 1.08, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}
              whileTap={{ scale: 0.97 }}
              className={
                'transition-all duration-200 rounded-lg px-5 py-2 flex items-center gap-2 cursor-pointer w-[100px] md:w-[160px] justify-center text-[#222] font-semibold shadow-sm border border-transparent text-base sm:text-sm' +
                (item === selectedTab ? ' border-[var(--accent)] text-[var(--accent)]' : ' hover:bg-white/30')
              }
              onClick={() => setSelectedTab(item)}>
              <img src={item.icon} alt={item.label} className="w-7 h-7 object-contain" />
              <span className="hidden md:block">{item.label}</span>
              {item === selectedTab ? (
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--accent)] mt-2"
                  layoutId="underline"
                  id="underline"
                />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main className="flex justify-center items-center flex-1 min-h-[120px] sm:min-h-[80px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full px-4 py-6 sm:py-2 font-typewriter text-white text-center justify-center overflow-y-auto text-base sm:text-sm modern-scrollbar"
            style={{ height: '360px', maxHeight: '360px' }}
            ref={bodyRef}>
            <style>{`
        @media (max-width: 640px) {
          .font-typewriter[style] {
            height: 240px !important;
            max-height: 240px !important;
          }
        }
      `}</style>
            {selectedTab && selectedTab.label === 'InApp' && (
              <div className="flex flex-col items-center justify-center text-justify">
                <div className="text-lg sm:text-xl font-bold mb-1 text-center">Senior Software Engineer</div>
                <div className=" text-lg sm:text-xl text-[13px] text-red-600 text-center">Inapp Information Technologies, Trivandrum, India</div>
                <div className="mb-2">2023 - Present</div>
                <div className="mb-2 font-semibold">Projects</div>
                <ul className="list-disc ml-6 mb-2 text-[12px] text-left w-full flex flex-col items-start">
                  <li>
                    <span className="font-semibold text-amber-100">Thrivewellapp</span> - Child welfare ecosystem (Backend Engineer) - AWS, Serverless, NodeJS,
                    Postgres
                  </li>
                  <li>
                    <span className="font-semibold text-amber-100">Nasscom SME Inspire awards portal 2024,2025</span> (Fullstack Engineer) - React, NestJS,
                    MySQL, Redis
                  </li>
                  <li>
                    <span className="font-semibold text-amber-100">Asset Management System</span> (Internal Tool - Backend Engineer) - NestJS, MySQL
                  </li>
                </ul>
                <ul className="list-disc ml-6 text-[12px] text-left w-full flex flex-col items-start">
                  <li>Worked with product managers to design and launch new features.</li>
                  <li>Used decoupled microservices. Optimized database queries and used caching.</li>
                  <li>Maintained and enhanced existing applications, ensuring high availability and performance.</li>
                </ul>
              </div>
            )}
            {selectedTab && selectedTab.label === 'Chillar' && (
              <div className="flex flex-col items-center justify-center text-justify">
                <div className="text-lg sm:text-xl font-bold mb-1 text-center">NodeJS Developer</div>
                <div className="text-lg sm:text-xl mb-2 text-emerald-600 text-center">Chillar Payment Solutions, Cochin, India</div>
                <div className="mb-2 text-center">2022 - 2023</div>
                <div className="mb-2 font-semibold text-center">Projects</div>
                <ul className="list-disc ml-6 mb-2 text-[12px] text-left w-full flex flex-col items-start">
                  <li>
                    <span className="font-semibold text-amber-100">BFC Payments</span> (Backend Engineer) - AWS, NodeJS, MongoDB
                  </li>
                  <li>
                    <span className="font-semibold text-amber-100">TravelBuddy</span> - Travel card (Backend Engineer) - AWS, NodeJS, MongoDB, Redis
                  </li>
                </ul>
                <ul className="list-disc ml-6 text-[12px] text-left w-full flex flex-col items-start">
                  <li>
                    Designed and implemented robust backend systems for BFC Payments and TravelBuddy, improving transaction processing speed by 30% and data
                    retrieval efficiency by 25%.
                  </li>
                  <li>
                    Coordinated with cross-functional teams, including product managers, QA, and frontend developers, to ensure timely and high-quality
                    deliverables while integrating Redis caching to significantly reduce response times and enhance user experience.
                  </li>
                </ul>
              </div>
            )}
            {selectedTab && selectedTab.label === 'TechNeurons' && (
              <div className="flex flex-col items-center justify-center text-justify">
                <div className="text-lg sm:text-xl font-bold mb-1 text-center">Associate Programmer</div>
                <div className="text-lg sm:text-xl mb-2 text-red-500 text-center">TechNeurons Consulting Solutions Pvt. Ltd., Cochin, India</div>
                <div className="mb-2 text-center">2020 – 2022</div>
                <div className="mb-2 font-semibold text-center">Projects</div>
                <ul className="list-disc ml-6 mb-2 text-[12px] text-left w-full flex flex-col items-start">
                  <li>
                    <span className="font-semibold text-amber-100">CAMA Cloud</span> - Property appraisal system (Full stack Engineer) - Dotnet (Webforms,
                    WEBAPI2), GIS Technologies (Leaflet, Open Layers, Google Maps JS API)
                  </li>
                </ul>
                <ul className="list-disc ml-6 text-[12px] text-left w-full flex flex-col items-start">
                  <li>
                    Implemented various GIS, sketching, and property data frameworks, and created a desktop application using PyQt to streamline migrating map
                    and property data from the existing system to the new system.
                  </li>
                </ul>
              </div>
            )}
            {/* Scroll state and icon removed */}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

// ==============   Data   ================

const allCompanies = [
  { icon: '/inapp.png', label: 'InApp' },
  { icon: '/chillar.png', label: 'Chillar' },
  { icon: '/techneurons.png', label: 'TechNeurons' }
]

const tabs = allCompanies
