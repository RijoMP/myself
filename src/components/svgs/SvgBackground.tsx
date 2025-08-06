import React, { useState, useEffect, useRef } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const SvgBackground: React.FC = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none flex items-end justify-center"
      style={{ minWidth: '100vw', minHeight: '100vh' }}>
      <div
        style={{
          width: '1200px',
          height: '600px',
          position: 'absolute',
          top: 0,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center'
        }}>
        <DotLottieReact
          src="/k5rZ5FB5FJ.lottie"
          loop
          autoplay
          width={1200}
          height={600}
          style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', height: '00px !important', width: '1200px !important' }}
        />
      </div>
    </div>
  )
}

export default SvgBackground
