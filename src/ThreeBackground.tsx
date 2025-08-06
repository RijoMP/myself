import React, { useEffect, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { fogParsVert, fogVert, fogParsFrag, fogFrag } from './components/FogReplace'
import { FirstPersonControls, ImprovedNoise } from 'three-stdlib'
import { useCanvasContext } from './context/CanvasContext'
import { ContactShadows, Environment, Float, Html, OrbitControls } from '@react-three/drei'
import type { rotate } from 'three/tsl'
import Home from './pages/Home'
import Profile from './components/Profile'

// Extend Three.js with FirstPersonControls for react-three-fiber
extend({ FirstPersonControls })

declare module '@react-three/fiber' {
  interface ThreeElements {
    firstPersonControls: {
      object?: FirstPersonControls
      args?: ConstructorParameters<typeof FirstPersonControls>
      ref?: React.Ref<FirstPersonControls>
      movementSpeed?: number
      lookSpeed?: number
      lookVertical?: boolean
    }
  }
}

interface TerrainShaderMaterial extends THREE.ShaderMaterial {
  uniforms: {
    fogNearColor: { value: THREE.Color }
    fogNoiseFreq: { value: number }
    fogNoiseSpeed: { value: number }
    fogNoiseImpact: { value: number }
    time: { value: number }
  }
}

interface ThreeBackgroundProps {
  fogNearColor?: string
  fogHorizonColor?: string
  fogDensity?: number
  fogNoiseSpeed?: number
  fogNoiseFreq?: number
  fogNoiseImpact?: number
  globalXAxis?: number
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  fogNearColor = '#101820',
  fogHorizonColor = '#232946',
  fogDensity = 0.0025,
  fogNoiseSpeed = 200,
  fogNoiseFreq = 0.0012,
  fogNoiseImpact = 0.5,
  globalXAxis = 0 // Default to 0
}) => {
  const { setCanvasLoaded, fov, setFov } = useCanvasContext()
  useLayoutEffect(() => {
    console.log('ThreeBackground mounted, fov:', fov)
  }, [fov])

  return (
    <Canvas
      camera={{
        position: [100, 800, -730],
        fov: fov + 10,
        near: 1,
        far: 10000,
        up: [0, 1, 0]
      }}
      gl={{ antialias: true }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}
      onCreated={({ gl, scene, camera }) => {
        console.log('Canvas fully initialized')
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        setTimeout(() => {
          setCanvasLoaded({ loaded: true, percentage: 100 })
        }, 100)
      }}>
      <Scene
        fogNearColor={fogNearColor}
        fogHorizonColor={fogHorizonColor}
        fogDensity={fogDensity}
        fogNoiseSpeed={fogNoiseSpeed}
        fogNoiseFreq={fogNoiseFreq}
        fogNoiseImpact={fogNoiseImpact}
        globalXAxis={globalXAxis}
      />
      {/* <Float floatIntensity={30} rotationIntensity={0.5} position={[-310, 810, -1000]} rotation={[-Math.PI / 1, 1.8, 3.2]}>
        <Html
          style={{
            userSelect: 'all',
            background: 'rgba(20,20,30,0.92)',
            borderRadius: 24,
            padding: 48,
            boxShadow: '0 12px 48px #000a',
            // border: '2px solid #ffd700',
            transform: 'scale(5.5) ',
            fontFamily: 'Inter, Arial, sans-serif'
          }}
          castShadow
          receiveShadow
          occlude="raycast"
          transform>
          <div style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginBottom: 24, letterSpacing: 2 }}>Experience</div>
          <div style={{ color: '#ffd700', fontSize: 36, fontWeight: 700 }}>Senior Software Engineer</div>
          <div style={{ color: '#aaa', fontSize: 28 }}>Inapp Information Technologies, Cochin, India</div>
          <div style={{ color: '#aaa', fontSize: 22, marginBottom: 12 }}>2023 - Present</div>
          <div style={{ color: '#fff', fontWeight: 600, marginTop: 16, fontSize: 26 }}>Projects</div>
          <ul style={{ color: '#fff', fontSize: 22, marginBottom: 12, marginLeft: 28, lineHeight: 1.4 }}>
            <li>
              <b>Thrivewellapp</b> - Child welfare ecosystem (Backend Engineer) - AWS, Serverless, NodeJS, Postgres
            </li>
            <li>
              <b>Nasscom SME Inspire awards portal 2024</b> (Backend Engineer) - NestJS, MySQL, Redis
            </li>
            <li>
              <b>Asset Management System</b> (Internal Tool - Backend Engineer) - NestJS, MySQL
            </li>
          </ul>
          <ul style={{ color: '#ccc', fontSize: 18, marginBottom: 18, marginLeft: 28, lineHeight: 1.4 }}>
            <li>Worked with product managers to design and launch new features.</li>
            <li>Used decoupled microservices. Optimized database queries and used caching.</li>
            <li>Maintained and enhanced existing applications, ensuring high availability and performance.</li>
          </ul>
          <div style={{ color: '#ffd700', fontSize: 36, fontWeight: 700, marginTop: 32 }}>NodeJS Developer</div>
          <div style={{ color: '#aaa', fontSize: 28 }}>Chillar Payment Solutions, Cochin, India</div>
          <div style={{ color: '#aaa', fontSize: 22, marginBottom: 12 }}>2022 - 2023</div>
          <div style={{ color: '#fff', fontWeight: 600, marginTop: 16, fontSize: 26 }}>Projects</div>
          <ul style={{ color: '#fff', fontSize: 22, marginBottom: 12, marginLeft: 28, lineHeight: 1.4 }}>
            <li>
              <b>BFC Payments</b> (Backend Engineer) - AWS, NodeJS, MongoDB
            </li>
            <li>
              <b>TravelBuddy</b> - Travel card (Backend Engineer) - AWS, NodeJS, MongoDB, Redis
            </li>
          </ul>
          <ul style={{ color: '#ccc', fontSize: 18, marginBottom: 18, marginLeft: 28, lineHeight: 1.4 }}>
            <li>
              Designed and implemented robust backend systems for BFC Payments and TravelBuddy, improving transaction processing speed by 30% and data retrieval
              efficiency by 25%.
            </li>
            <li>
              Coordinated with cross-functional teams, including product managers, QA, and frontend developers, to ensure timely and high-quality deliverables
              while integrating Redis caching to significantly reduce response times and enhance user experience.
            </li>
          </ul>
          <div style={{ color: '#ffd700', fontSize: 36, fontWeight: 700, marginTop: 32 }}>Associate Programmer</div>
          <div style={{ color: '#aaa', fontSize: 28 }}>TechNeurons Consulting Solutions Pvt. Ltd., Cochin, India</div>
          <div style={{ color: '#aaa', fontSize: 22, marginBottom: 12 }}>2020 – 2022</div>
          <div style={{ color: '#fff', fontWeight: 600, marginTop: 16, fontSize: 26 }}>Projects</div>
          <ul style={{ color: '#fff', fontSize: 22, marginBottom: 12, marginLeft: 28, lineHeight: 1.4 }}>
            <li>
              <b>CAMA Cloud</b> - Property appraisal system (Full stack Engineer) - Dotnet (Webforms, WEBAPI2), GIS Technologies (Leaflet, Open Layers, Google
              Maps JS API)
            </li>
          </ul>
          <ul style={{ color: '#ccc', fontSize: 18, marginBottom: 0, marginLeft: 28, lineHeight: 1.4 }}>
            <li>
              Implemented various GIS, sketching, and property data frameworks, and created a desktop application using PyQt to streamline migrating map and
              property data from the existing system to the new system.
            </li>
          </ul>
        </Html>
      </Float>

      <Float position={[-210, 820, -1000]} rotation={[-Math.PI / 1, 1.8, 3.2]} floatIntensity={30} rotationIntensity={0.5}>
        <Html
          style={{
            userSelect: 'all',
            background: 'rgba(20,20,30,0.92)',
            borderRadius: 24,
            padding: 48,
            boxShadow: '0 12px 48px #000a',
            // border: '2px solid #ffd700',
            transform: 'scale(5.5) ',
            fontFamily: 'Inter, Arial, sans-serif'
          }}
          castShadow
          receiveShadow
          occlude="raycast"
          transform>
          <Profile />
        </Html>
      </Float> */}
      <ambientLight intensity={0.15} />
      {/* <Environment background preset="sunset" blur={0.9} /> */}
    </Canvas>
  )
}

const Scene: React.FC<ThreeBackgroundProps> = ({ fogNearColor, fogHorizonColor, fogDensity, fogNoiseSpeed, fogNoiseFreq, fogNoiseImpact, globalXAxis = 0 }) => {
  const { scene, camera, gl } = useThree()
  const controlsRef = useRef<FirstPersonControls>(null)
  const terrainShaderRef = useRef<TerrainShaderMaterial>(null)
  const clock = new THREE.Clock()
  const worldWidth = 256
  const worldDepth = 256
  const { setCanvasLoaded, fov } = useCanvasContext()

  // Reactively update camera FOV when context fov changes
  // Smooth FOV transition
  useFrame(() => {
    if (camera && typeof fov === 'number' && 'fov' in camera) {
      const perspCam = camera as THREE.PerspectiveCamera
      const targetFov = fov + 10
      // Lerp current FOV towards target FOV
      perspCam.fov += (targetFov - perspCam.fov) * 0.08
      perspCam.updateProjectionMatrix()
    }
  })

  useEffect(() => {
    // Ensure camera is ready
    if (!camera) return

    // Set initial camera lookAt
    camera.lookAt(-100, 810, -800)

    // Initialize scene
    scene.background = new THREE.Color(fogHorizonColor)
    scene.fog = new THREE.FogExp2(fogHorizonColor || '#ffffff', fogDensity)

    // Generate terrain
    const data = generateHeight(worldWidth, worldDepth)
    const geometry = new THREE.PlaneGeometry(7500, 7500, worldWidth - 1, worldDepth - 1)
    geometry.rotateX(-Math.PI / 2)

    const vertices = geometry.attributes.position.array
    for (let i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
      vertices[j + 1] = data[i] * 10
    }

    // Create material with custom shader
    const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(0x22223b) })
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(`#include <fog_pars_vertex>`, fogParsVert)
      shader.vertexShader = shader.vertexShader.replace(`#include <fog_vertex>`, fogVert)
      shader.fragmentShader = shader.fragmentShader.replace(`#include <fog_pars_fragment>`, fogParsFrag)
      shader.fragmentShader = shader.fragmentShader.replace(`#include <fog_fragment>`, fogFrag)

      shader.uniforms = THREE.UniformsUtils.merge([
        shader.uniforms,
        {
          fogNearColor: { value: new THREE.Color(fogNearColor) },
          fogNoiseFreq: { value: fogNoiseFreq },
          fogNoiseSpeed: { value: fogNoiseSpeed },
          fogNoiseImpact: { value: fogNoiseImpact },
          time: { value: 0 }
        }
      ])

      terrainShaderRef.current = shader as unknown as TerrainShaderMaterial
    }

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    // setCanvasLoaded({ loaded: false, percentage: 10 })

    // Initialize controls after camera is ready
    const controls = new FirstPersonControls(camera, gl.domElement)
    controls.movementSpeed = 100
    controls.lookSpeed = 0.6
    controls.lookVertical = false
    // controls.target.set(-100, 810, -800)
    controlsRef.current = controls

    return () => {
      scene.remove(mesh)
      geometry.dispose()
      material.dispose()
      controls.dispose()
    }
  }, [scene, camera, gl, fogHorizonColor, fogDensity, fogNearColor, fogNoiseFreq, fogNoiseSpeed, fogNoiseImpact])

  useFrame(() => {
    const delta = clock.getDelta()
    if (controlsRef.current) {
      controlsRef.current.update(delta)
    }
    if (camera) {
      const baseX = 100
      const baseY = 800
      const baseZ = -730

      const truckAmount = globalXAxis * 20 // Horizontal movement
      const pedestalAmount = globalXAxis * 10 // Vertical movement
      // Adjust the multiplier (10) to control how much the camera moves
      // camera.position.x = baseX + truckAmount
      // camera.position.y = baseY - pedestalAmount
      camera.position.z = baseZ + truckAmount
      // camera.lookAt(baseX + truckAmount, baseY + pedestalAmount, baseZ
      // camera.lookAt(baseX + truckAmount - 200, 810 + pedestalAmount, -800);
      // camera.lookAt(100, 800, -810 + pedestalAmount)
    }

    if (terrainShaderRef.current) {
      terrainShaderRef.current.uniforms.time.value += delta
    }
  })
  // setCanvasLoaded({ loaded: false, percentage: 50 })
  return <firstPersonControls ref={controlsRef} args={[camera, gl.domElement]} movementSpeed={100} lookSpeed={0.1} lookVertical={true} />
}

function generateHeight(width: number, height: number): Uint8Array {
  let seed = Math.PI / 4
  const customRandom = () => {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }

  const size = width * height
  const data = new Uint8Array(size)
  const perlin = new ImprovedNoise()
  let quality = 1
  const z = customRandom() * 100

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < size; i++) {
      const x = i % width
      const y = ~~(i / width)
      data[i] += Math.abs(perlin.noise(x / quality, y / quality, z) * quality * 1.75)
    }
    quality *= 5
  }

  return data
}

export default ThreeBackground
