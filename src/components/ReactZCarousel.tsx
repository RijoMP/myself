import React, { useEffect, useState } from 'react'
import type { ReactElement, ReactNode } from 'react'
import { useCanvasContext } from '../context/CanvasContext'

interface ReactZCarouselProps {
  children: ReactNode[]
  className?: string
  style?: React.CSSProperties
}

const ReactZCarousel: React.FC<ReactZCarouselProps> = ({ children, className = '', style = {} }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { globalIndex, setGlobalIndex } = useCanvasContext()
  const total = React.Children.count(children)

  useEffect(() => {
    setActiveIndex(globalIndex - 1)
  }, [globalIndex, total])

  const goForward = () => setGlobalIndex((prev) => Math.min(prev + 1, total - 1)) // No circular
  const goBackward = () => setGlobalIndex((prev) => Math.max(prev - 1, 0)) // No circular

  return (
    <div className={`relative w-full h-full ${className}`} style={{ ...style }}>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center absolute" style={{ overflow: 'hidden' }}>
        {React.Children.map(children, (child, idx) => {
          if (!React.isValidElement(child)) return null
          const el = child as ReactElement<any>

          // Calculate depth position (Z-axis only)
          const zDistance = (idx - activeIndex) * 160 // Adjust multiplier for depth strength
          const scale = idx === activeIndex ? 1 : Math.max(0.3, 1 - Math.abs(zDistance) / 500) // Scale down non-active
          const opacity = idx === activeIndex ? 1 : Math.max(0, 1 - Math.abs(zDistance) / 200) // Fade out non-active

          return (
            <div
              key={el.key || idx}
              className={`react-z-carousel-item-wrapper flex items-center justify-center mx-auto ${el.props.className || ''}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                transform: `translateZ(${zDistance}px) scale(${scale})`,
                zIndex: total - Math.abs(idx - activeIndex),
                opacity,
                pointerEvents: idx === activeIndex ? 'auto' : 'none',
                transition: 'transform 0.5s cubic-bezier(.4,2,.6,1), opacity 0.3s'
              }}>
              {el}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ReactZCarousel
