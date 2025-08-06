import React, { createContext, useContext, useState } from 'react'

interface CanvasContextType {
  canvasLoaded: { loaded: boolean; percentage: number }
  setCanvasLoaded: React.Dispatch<React.SetStateAction<{ loaded: boolean; percentage: number }>>
  fov: number
  setFov: React.Dispatch<React.SetStateAction<number>>
  globalXAxis: number
  setGlobalXAxis: React.Dispatch<React.SetStateAction<number>>
  sliderValue: number
  setSliderValue: React.Dispatch<React.SetStateAction<number>>
  globalIndex: number
  setGlobalIndex: React.Dispatch<React.SetStateAction<number>>
}

const CanvasContext = createContext<CanvasContextType | undefined>(undefined)

export const CanvasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [canvasLoaded, setCanvasLoaded] = useState({ loaded: false, percentage: 0 })
  const [globalXAxis, setGlobalXAxis] = useState(0)
  const [fov, setFov] = useState(20)
  const [sliderValue, setSliderValue] = useState(50)
  const [globalIndex, setGlobalIndex] = useState(1)
  return (
    <CanvasContext.Provider
      value={{
        canvasLoaded,
        setCanvasLoaded,
        globalXAxis,
        setGlobalXAxis,
        fov,
        setFov,
        sliderValue,
        setSliderValue,
        globalIndex,
        setGlobalIndex
      }}>
      {children}
    </CanvasContext.Provider>
  )
}

export const useCanvasContext = () => {
  const ctx = useContext(CanvasContext)
  if (!ctx) throw new Error('useCanvasContext must be used within CanvasProvider')
  return ctx
}
