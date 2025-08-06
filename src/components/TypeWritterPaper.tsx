import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TypeWritterPaperProps {
  text: string
  pause?: number // ms between sentences
  className?: string
}

const splitSentences = (text: string) => {
  // Split by period, exclamation, question mark, and keep punctuation
  return text.match(/[^.!?]+[.!?]?/g) || [text]
}

const TypeWritterPaper: React.FC<TypeWritterPaperProps> = ({ text, pause = 800, className = '' }) => {
  const sentences = splitSentences(text)
  const [displayed, setDisplayed] = useState('')
  const [sentenceIdx, setSentenceIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (sentenceIdx < sentences.length) {
      if (charIdx < sentences[sentenceIdx].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev + sentences[sentenceIdx][charIdx])
          setCharIdx((prev) => prev + 1)
        }, 40)
        return () => clearTimeout(timeout)
      } else {
        // Pause before next sentence
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev + ' ')
          setSentenceIdx((prev) => prev + 1)
          setCharIdx(0)
        }, pause)
        return () => clearTimeout(timeout)
      }
    }
  }, [charIdx, sentenceIdx, sentences, pause])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`rounded-xl shadow-lg p-6 text-white  max-w-xl mx-auto typewriter ${className}`}>
      <span>{displayed}</span>
      <span
        className="animate-pulse"
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontFamily: 'monospace',
          fontSize: '1.2em'
        }}>
        &#9608;
      </span>
    </motion.div>
  )
}

export default TypeWritterPaper
