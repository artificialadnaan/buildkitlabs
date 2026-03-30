'use client'

import { useRef, useState, useEffect, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshReflectorMaterial, useProgress, Stars, Text, useTexture, Billboard } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { projects, type Project } from './data'

// ═══════════════════════════════════════
// Preload all building textures
// ═══════════════════════════════════════
useTexture.preload('/buildings/fencetastic.jpeg')
useTexture.preload('/buildings/booth-plug.jpeg')
useTexture.preload('/buildings/virasat-jewels.jpeg')
useTexture.preload('/buildings/skyguard.jpeg')
useTexture.preload('/buildings/synchub.jpeg')
useTexture.preload('/buildings/buildkit-crm.jpeg')
useTexture.preload('/buildings/buildkit-labs.jpeg')

// ═══════════════════════════════════════
// Street layout
// ═══════════════════════════════════════

interface BuildingLayout {
  id: string
  side: 'left' | 'right'
  x: number
  z: number
  displayHeight: number
}

const STREET_LAYOUT: BuildingLayout[] = [
  { id: 'fencetastic',    side: 'left',  x: -5.5, z: 8,  displayHeight: 4  },
  { id: 'booth-plug',     side: 'left',  x: -5.5, z: 16, displayHeight: 6  },
  { id: 'virasat-jewels', side: 'left',  x: -5.5, z: 24, displayHeight: 9  },
  { id: 'skyguard',       side: 'left',  x: -5.5, z: 32, displayHeight: 12 },
  { id: 'buildkit-crm',   side: 'right', x: 5.5,  z: 8,  displayHeight: 10 },
  { id: 'buildkit-labs',  side: 'right', x: 5.5,  z: 16, displayHeight: 4  },
  { id: 'synchub',        side: 'right', x: 5.5,  z: 24, displayHeight: 16 },
]

const FILLER_BUILDINGS = [
  { x: -6, z: 40, w: 3, h: 8,  color: '#0d1117' },
  { x: -5, z: 46, w: 4, h: 12, color: '#0f1419' },
  { x: -7, z: 52, w: 3, h: 6,  color: '#0d1117' },
  { x: 6,  z: 34, w: 3, h: 7,  color: '#0d1117' },
  { x: 5,  z: 40, w: 4, h: 14, color: '#0f1419' },
  { x: 7,  z: 48, w: 3, h: 5,  color: '#0d1117' },
]

// ═══════════════════════════════════════
// Loading Screen
// ═══════════════════════════════════════

function LoadingScreen() {
  const { progress } = useProgress()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 8000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => setVisible(false), 600)
      return () => clearTimeout(t)
    }
    return undefined
  }, [progress])

  if (!visible) return null
  const gradientColors = projects.map(p => p.accent).join(', ')

  return (
    <div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ backgroundColor: '#0a1628', opacity: progress >= 100 ? 0 : 1, pointerEvents: progress >= 100 ? 'none' : 'auto' }}
    >
      <p className="text-white/50 tracking-[0.3em] text-sm uppercase mb-6">Entering the city...</p>
      <div className="w-64 h-1 rounded-full overflow-hidden bg-white/10">
        <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${gradientColors})` }} />
      </div>
      <p className="text-white/30 text-xs mt-3 tracking-wider">{Math.round(progress)}%</p>
    </div>
  )
}

// ═══════════════════════════════════════
// First-person camera
// ═══════════════════════════════════════

function CameraController({ onCameraZ }: { onCameraZ: (z: number) => void }) {
  const { camera } = useThree()
  const targetZ = useRef(0)
  const targetX = useRef(0)
  const currentZ = useRef(0)
  const currentX = useRef(0)
  const time = useRef(0)
  const isMoving = useRef(false)
  const keys = useRef<Set<string>>(new Set())
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useEffect(() => {
    camera.position.set(0, 1.7, 0)
    camera.lookAt(0, 1.7, 20)

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      targetZ.current = Math.max(-2, Math.min(35, targetZ.current + e.deltaY * 0.015))
    }
    const onKeyDown = (e: KeyboardEvent) => keys.current.add(e.key.toLowerCase())
    const onKeyUp = (e: KeyboardEvent) => keys.current.delete(e.key.toLowerCase())
    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY.current = (e.clientY / window.innerHeight - 0.5) * 2
    }
    let touchY = 0
    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY }
    const onTouchMove = (e: TouchEvent) => {
      const dy = touchY - e.touches[0].clientY
      targetZ.current = Math.max(-2, Math.min(35, targetZ.current + dy * 0.03))
      touchY = e.touches[0].clientY
    }

    const canvas = document.querySelector('canvas')
    canvas?.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('mousemove', onMouseMove)
    canvas?.addEventListener('touchstart', onTouchStart, { passive: true })
    canvas?.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      canvas?.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('mousemove', onMouseMove)
      canvas?.removeEventListener('touchstart', onTouchStart)
      canvas?.removeEventListener('touchmove', onTouchMove)
    }
  }, [camera])

  useFrame((_, delta) => {
    time.current += delta
    const k = keys.current
    const speed = 5 * delta
    if (k.has('w') || k.has('arrowup')) targetZ.current = Math.min(35, targetZ.current + speed)
    if (k.has('s') || k.has('arrowdown')) targetZ.current = Math.max(-2, targetZ.current - speed)
    if (k.has('a') || k.has('arrowleft')) targetX.current = Math.max(-1, targetX.current - speed * 0.5)
    if (k.has('d') || k.has('arrowright')) targetX.current = Math.min(1, targetX.current + speed * 0.5)

    const prevZ = currentZ.current
    currentZ.current += (targetZ.current - currentZ.current) * 0.06
    currentX.current += (targetX.current - currentX.current) * 0.06
    isMoving.current = Math.abs(currentZ.current - prevZ) > 0.001

    const bob = isMoving.current ? Math.sin(time.current * 3) * 0.03 : 0
    camera.position.set(currentX.current, 1.7 + bob, currentZ.current)

    const lookX = currentX.current + mouseX.current * 0.8
    const lookY = 1.7 - mouseY.current * 0.3
    camera.lookAt(lookX, lookY, currentZ.current + 20)
    onCameraZ(currentZ.current)
  })

  return null
}

// ═══════════════════════════════════════
// Building with texture + black bg removal
// ═══════════════════════════════════════

function TexturedBuilding({ project, layout, cameraZ, onSelect }: {
  project: Project; layout: BuildingLayout; cameraZ: number; onSelect: (p: Project) => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)
  const [hovered, setHovered] = useState(false)

  // Load texture via drei useTexture (handles Suspense)
  const texture = useTexture(project.buildingImage)

  // Process texture: remove black background, create CanvasTexture
  const processedTexture = useMemo(() => {
    if (!texture.image) {
      console.warn(`[Showcase] No image data for ${project.id} at ${project.buildingImage}`)
      return texture
    }
    console.log(`[Showcase] Processing texture for ${project.id}: ${texture.image.width}x${texture.image.height}`)

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return texture

    canvas.width = texture.image.width
    canvas.height = texture.image.height
    ctx.drawImage(texture.image, 0, 0)

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
      if (data[i] < 20 && data[i + 1] < 20 && data[i + 2] < 20) {
        data[i + 3] = 0
      }
    }
    ctx.putImageData(imageData, 0, 0)

    const newTex = new THREE.CanvasTexture(canvas)
    newTex.colorSpace = THREE.SRGBColorSpace
    newTex.needsUpdate = true
    return newTex
  }, [texture, project.id, project.buildingImage])

  // Aspect ratio from source image
  const aspect = texture.image
    ? (texture.image.width || 1) / (texture.image.height || 1)
    : 0.5
  const h = layout.displayHeight
  const w = h * aspect

  // Light position: between building and street center
  const lightX = layout.side === 'left' ? layout.x + 2.5 : layout.x - 2.5

  // Label fade: visible when camera is within 8 units
  const dist = Math.abs(cameraZ - layout.z)
  const labelOpacity = Math.max(0, Math.min(1, 1 - (dist - 4) / 4))

  const accentColor = useMemo(() => new THREE.Color(project.accent), [project.accent])

  useFrame(() => {
    if (!meshRef.current) return
    const target = hovered ? 1.05 : 1
    const s = meshRef.current.scale.x
    meshRef.current.scale.setScalar(s + (target - s) * 0.1)
    if (lightRef.current) {
      lightRef.current.intensity += ((hovered ? 5 : 3) - lightRef.current.intensity) * 0.1
    }
  })

  return (
    <group position={[layout.x, h / 2, layout.z]}>
      {/* Billboard so building always faces camera */}
      <Billboard follow lockX={false} lockY={true} lockZ={false}>
        <mesh
          ref={meshRef}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
          onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
          onClick={(e) => { e.stopPropagation(); onSelect(project) }}
        >
          <planeGeometry args={[w, h]} />
          <meshBasicMaterial
            map={processedTexture}
            transparent
            alphaTest={0.05}
            side={THREE.DoubleSide}
            depthWrite
          />
        </mesh>
      </Billboard>

      {/* Label — fades in when close */}
      {labelOpacity > 0.01 && (
        <Billboard follow lockY={true}>
          <Text position={[0, -h / 2 - 0.3, 0]} fontSize={0.35} color={project.accent} anchorX="center" anchorY="top" fillOpacity={labelOpacity}>
            {project.name}
          </Text>
          <Text position={[0, -h / 2 - 0.7, 0]} fontSize={0.2} color="#6B7280" anchorX="center" anchorY="top" fillOpacity={labelOpacity * 0.7}>
            {project.subtitle}
          </Text>
        </Billboard>
      )}

      {/* Point light spilling onto the road */}
      <pointLight ref={lightRef} position={[lightX - layout.x, -h / 2 + 0.5, 0]} color={accentColor} intensity={3} distance={12} decay={2} />
    </group>
  )
}

// ═══════════════════════════════════════
// Fallback building
// ═══════════════════════════════════════

function FallbackBuilding({ project, layout, cameraZ, onSelect }: {
  project: Project; layout: BuildingLayout; cameraZ: number; onSelect: (p: Project) => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const h = layout.displayHeight
  const w = h * 0.45
  const accentColor = useMemo(() => new THREE.Color(project.accent), [project.accent])
  const labelOpacity = Math.max(0, Math.min(1, 1 - (Math.abs(cameraZ - layout.z) - 4) / 4))

  useFrame(() => {
    if (!meshRef.current) return
    const target = hovered ? 1.05 : 1
    const s = meshRef.current.scale.x
    meshRef.current.scale.setScalar(s + (target - s) * 0.1)
  })

  return (
    <group position={[layout.x, h / 2, layout.z]}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
        onClick={(e) => { e.stopPropagation(); onSelect(project) }}
      >
        <boxGeometry args={[w, h, w * 0.3]} />
        <meshBasicMaterial color={accentColor} transparent opacity={0.3} />
      </mesh>
      {labelOpacity > 0.01 && (
        <Billboard follow lockY={true}>
          <Text position={[0, -h / 2 - 0.3, 0]} fontSize={0.35} color={project.accent} anchorX="center" anchorY="top" fillOpacity={labelOpacity}>
            {project.name}
          </Text>
        </Billboard>
      )}
      <pointLight position={[layout.side === 'left' ? 2.5 : -2.5, -h / 2 + 0.5, 0]} color={accentColor} intensity={3} distance={12} decay={2} />
    </group>
  )
}

// ═══════════════════════════════════════
// Building wrapper
// ═══════════════════════════════════════

function BuildingPlane({ project, layout, cameraZ, onSelect }: {
  project: Project; layout: BuildingLayout; cameraZ: number; onSelect: (p: Project) => void
}) {
  return (
    <Suspense fallback={<FallbackBuilding project={project} layout={layout} cameraZ={cameraZ} onSelect={onSelect} />}>
      <TexturedBuilding project={project} layout={layout} cameraZ={cameraZ} onSelect={onSelect} />
    </Suspense>
  )
}

// ═══════════════════════════════════════
// Ground glow
// ═══════════════════════════════════════

function GroundGlow({ x, z, color }: { x: number; z: number; color: string }) {
  const colorObj = useMemo(() => new THREE.Color(color), [color])
  return (
    <mesh position={[x, 0.02, z]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[3, 3]} />
      <meshBasicMaterial color={colorObj} transparent opacity={0.12} depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  )
}

// ═══════════════════════════════════════
// Street
// ═══════════════════════════════════════

function Street() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 25]}>
      <planeGeometry args={[10, 55]} />
      <MeshReflectorMaterial mirror={0.4} roughness={0.25} mixStrength={0.6} mixBlur={1} color="#0a0e18" metalness={0.8} resolution={512} />
    </mesh>
  )
}

function Sidewalks() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-4, 0.04, 25]}>
        <planeGeometry args={[1.5, 55]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.9} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[4, 0.04, 25]}>
        <planeGeometry args={[1.5, 55]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.9} />
      </mesh>
    </>
  )
}

function RoadDashes() {
  const dashes = useMemo(() => Array.from({ length: 16 }, (_, i) => 2 + i * 3), [])
  return (
    <>
      {dashes.map((z) => (
        <mesh key={z} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, z]}>
          <planeGeometry args={[0.15, 1.2]} />
          <meshBasicMaterial color="#334155" transparent opacity={0.5} />
        </mesh>
      ))}
    </>
  )
}

function FillerBuildings() {
  return (
    <>
      {FILLER_BUILDINGS.map((fb, i) => (
        <mesh key={i} position={[fb.x, fb.h / 2, fb.z]}>
          <boxGeometry args={[fb.w, fb.h, 1.5]} />
          <meshBasicMaterial color={fb.color} />
        </mesh>
      ))}
    </>
  )
}

function Streetlamps() {
  const positions = useMemo(() => {
    const arr: [number, number][] = []
    for (let z = 6; z <= 36; z += 10) {
      arr.push([-3.2, z])
      arr.push([3.2, z])
    }
    return arr
  }, [])
  return (
    <>
      {positions.map(([x, z], i) => (
        <group key={i}>
          <mesh position={[x, 1.5, z]}>
            <cylinderGeometry args={[0.03, 0.03, 3]} />
            <meshBasicMaterial color="#1a1a2e" />
          </mesh>
          <pointLight position={[x, 3, z]} color="#FFF5E1" intensity={1} distance={8} decay={2} />
        </group>
      ))}
    </>
  )
}

function TRockBeacon() {
  const lightRef = useRef<THREE.PointLight>(null)
  const synchub = STREET_LAYOUT.find(b => b.id === 'synchub')!
  useFrame(({ clock }) => {
    if (lightRef.current) {
      lightRef.current.intensity = 1 + Math.sin(clock.elapsedTime * 2) * 1.5
    }
  })
  return (
    <pointLight ref={lightRef} position={[synchub.x, synchub.displayHeight + 1, synchub.z]} color="#EF4444" intensity={3} distance={20} decay={2} />
  )
}

// ═══════════════════════════════════════
// Scene content
// ═══════════════════════════════════════

function SceneContent({ onSelectProject, cameraZ, onCameraZ }: {
  onSelectProject: (p: Project) => void; cameraZ: number; onCameraZ: (z: number) => void
}) {
  const { scene } = useThree()

  useEffect(() => {
    scene.fog = new THREE.FogExp2('#0a1628', 0.02)
    return () => { scene.fog = null }
  }, [scene])

  return (
    <>
      <ambientLight intensity={0.3} color="#0a1628" />
      <directionalLight position={[0, 10, -5]} color="#334155" intensity={0.2} />
      <CameraController onCameraZ={onCameraZ} />
      <Stars count={500} depth={100} saturation={0} factor={3} fade />
      <Street />
      <Sidewalks />
      <RoadDashes />
      <Streetlamps />
      <FillerBuildings />
      <TRockBeacon />

      {STREET_LAYOUT.map((layout) => {
        const project = projects.find(p => p.id === layout.id)
        if (!project) return null
        return (
          <group key={layout.id}>
            <BuildingPlane project={project} layout={layout} cameraZ={cameraZ} onSelect={onSelectProject} />
            <GroundGlow x={layout.x} z={layout.z} color={project.accent} />
          </group>
        )
      })}

      <EffectComposer>
        <Bloom intensity={0.4} luminanceThreshold={0.5} luminanceSmoothing={0.9} radius={0.8} />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>
    </>
  )
}

// ═══════════════════════════════════════
// Main export
// ═══════════════════════════════════════

export default function Scene3D({
  onSelectProject,
  hoveredProject,
  setHoveredProject,
  panelOpen,
}: {
  onSelectProject: (p: Project) => void
  hoveredProject: Project | null
  setHoveredProject: (p: Project | null) => void
  panelOpen: boolean
}) {
  const [cameraZ, setCameraZ] = useState(0)

  return (
    <>
      <LoadingScreen />

      {hoveredProject && (
        <div
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg pointer-events-none animate-[fadeIn_0.15s_ease]"
          style={{ background: 'rgba(6,12,24,0.9)', border: `1px solid ${hoveredProject.accent}30`, backdropFilter: 'blur(12px)' }}
        >
          <span className="text-sm font-bold" style={{ color: hoveredProject.accent }}>{hoveredProject.name}</span>
          <span className="text-white/40 text-xs ml-2">{hoveredProject.subtitle}</span>
        </div>
      )}

      {!panelOpen && (
        <div className="fixed bottom-6 left-0 right-0 text-center z-50 pointer-events-none">
          <span className="text-white/25 text-xs tracking-[0.3em] uppercase">
            Scroll to walk &middot; Click to explore
          </span>
        </div>
      )}

      <Canvas
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1 }}
        camera={{ fov: 60, near: 0.1, far: 200 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        onPointerMissed={() => setHoveredProject(null)}
      >
        <color attach="background" args={['#0a1628']} />
        <Suspense fallback={null}>
          <SceneContent onSelectProject={onSelectProject} cameraZ={cameraZ} onCameraZ={setCameraZ} />
        </Suspense>
      </Canvas>
    </>
  )
}
