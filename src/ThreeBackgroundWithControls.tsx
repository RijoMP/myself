import React from 'react'
import ThreeBackground from './ThreeBackground' // Adjust the import path
import { useCanvasContext } from './context/CanvasContext'

const ThreeBackgroundWithControls: React.FC = () => {
  const { globalXAxis, setGlobalXAxis, sliderValue, setSliderValue } = useCanvasContext()

  // const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = parseFloat(e.target.value)
  //   setSliderValue(value)
  //   setGlobalXAxis((value - 50) * 0.4)
  // }

  return (
    <div style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: -110, top: 0, left: 0 }}>
      <ThreeBackground globalXAxis={globalXAxis} />

      {/* Slider controls */}
      {/* <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '10px',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <label htmlFor="xAxisSlider" style={{ color: 'white', marginBottom: '10px' }}>
          Camera Truck & Pedestal: {globalXAxis.toFixed(1)}
        </label>
        <input style={{ zIndex: 1000000 }} id="xAxisSlider" type="range" min="0" max="100" value={sliderValue} onChange={handleSliderChange} />
      </div> */}
    </div>
  )
}

export default ThreeBackgroundWithControls
