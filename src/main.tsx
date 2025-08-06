// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThreeBackgroundWithControls from './ThreeBackgroundWithControls.tsx'
import Loader from './components/Loader'
import { CanvasProvider, useCanvasContext } from './context/CanvasContext'

function MainContent() {
  const { canvasLoaded } = useCanvasContext()

  return (
    <>
      {!canvasLoaded.loaded && <Loader />}

      <ThreeBackgroundWithControls />
      {/* <SvgBackground /> */}
      {canvasLoaded.loaded && <App />}
      {/* <App /> */}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CanvasProvider>
      <MainContent />
    </CanvasProvider>
  </React.StrictMode>
)
