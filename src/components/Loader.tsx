import React from 'react'
import { useCanvasContext } from '../context/CanvasContext'

const Loader: React.FC = () => {
  const { canvasLoaded } = useCanvasContext()
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255,255,255,0.8)',
        zIndex: 9999
      }}>
      <div style={{ fontSize: 32, color: '#888', fontWeight: 600 }}>Loading...{canvasLoaded.percentage}%</div>
    </div>
  )
}

export default Loader
