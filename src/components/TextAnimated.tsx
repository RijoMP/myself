'use client'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import * as React from 'react'

export function TextAnimated({ text, className = '' }: { text: string; className?: string }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div className="flex space-x-1 justify-center">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className={className + ' p-[2px]'}>
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  )
}
export function LettersPullUp({ text, className = '' }: { text: string; className?: string }) {
  const splittedText = text.split('')

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1
      }
    })
  }
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  // function cn(arg0: string, className: string): string {
  //   return [arg0, className].filter(Boolean).join(' ')
  // }

  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div key={i} ref={ref} variants={pullupVariant} initial="initial" animate={isInView ? 'animate' : ''} custom={i} className={className}>
          {current == ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  )
}
