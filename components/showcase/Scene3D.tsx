'use client'

import { useRef, useState, useEffect, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { MeshReflectorMaterial, useProgress, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { projects, type Project } from './data'

// ── Loading Screen with timeout ──
function LoadingScreen() {
  const { progress } = useProgress()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 6000)
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
      style={{
        backgroundColor: '#0a1628',
        opacity: progress >= 100 ? 0 : 1,
        pointerEvents: progress >= 100 ? 'none' : 'auto',
      }}
    >
      <p className="text-white/60 tracking-[0.3em] text-sm uppercase mb-6">
        Entering the city...
      </p>
      <div className="w-64 h-1 rounded-full overflow-hidden bg-white/10">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${gradientColors})` }}
        />
      </div>
      <p className="text-white/30 text-xs mt-3 tracking-wider">{Math.round(progress)}%</p>
    </div>
  )
}

// ── Horizontal Camera Controller (scroll pans X) ──
function CameraController() {
  const { camera } = useThree()
  const targetX = useRef(0)
  const currentX = useRef(0)
  const keys = useRef<Set<string>>(new Set())

  // Calculate skyline bounds for clamping
  const xMin = -8
  const xMax = 8

  useEffect(() => {
    // Camera positioned to see full skyline height
    camera.position.set(0, 4, 18)
    camera.lookAt(0, 4, 0)

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      targetX.current = Math.max(xMin, Math.min(xMax, targetX.current + e.deltaY * 0.01))
    }

    const onKeyDown = (e: KeyboardEvent) => keys.current.add(e.key.toLowerCase())
    const onKeyUp = (e: KeyboardEvent) => keys.current.delete(e.key.toLowerCase())

    // Touch controls — horizontal swipe
    let touchX = 0
    const onTouchStart = (e: TouchEvent) => { touchX = e.touches[0].clientX }
    const onTouchMove = (e: TouchEvent) => {
      const dx = touchX - e.touches[0].clientX
      targetX.current = Math.max(xMin, Math.min(xMax, targetX.current + dx * 0.02))
      touchX = e.touches[0].clientX
    }

    const canvas = document.querySelector('canvas')
    canvas?.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    canvas?.addEventListener('touchstart', onTouchStart, { passive: true })
    canvas?.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      canvas?.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      canvas?.removeEventListener('touchstart', onTouchStart)
      canvas?.removeEventListener('touchmove', onTouchMove)
    }
  }, [camera, xMin, xMax])

  useFrame((_, delta) => {
    const k = keys.current
    const speed = 5 * delta
    if (k.has('a') || k.has('arrowleft')) targetX.current = Math.max(xMin, targetX.current - speed)
    if (k.has('d') || k.has('arrowright')) targetX.current = Math.min(xMax, targetX.current + speed)

    currentX.current += (targetX.current - currentX.current) * 0.05
    camera.position.x = currentX.current
    camera.lookAt(currentX.current, 4, 0)
  })

  return null
}

// ── Ground Glow ──
function GroundGlow({ x, color }: { x: number; color: string }) {
  const colorObj = useMemo(() => new THREE.Color(color), [color])
  return (
    <mesh position={[x, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[3, 3]} />
      <meshBasicMaterial color={colorObj} transparent opacity={0.15} side={THREE.DoubleSide} depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  )
}

// ── Building with texture ──
function TexturedBuilding({ project, xPos, displayHeight, onSelect }: {
  project: Project; xPos: number; displayHeight: number; onSelect: (p: Project) => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)
  const [hovered, setHovered] = useState(false)

  const texture = useLoader(THREE.TextureLoader, project.buildingImage)

  // Fix horizontal flip — flip UVs on load
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(1, 1) // sized later
    const uvs = geo.attributes.uv
    for (let i = 0; i < uvs.count; i++) {
      uvs.setX(i, 1 - uvs.getX(i)) // flip X to un-mirror
    }
    uvs.needsUpdate = true
    return geo
  }, [])

  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
  }, [texture])

  // Calculate correct aspect ratio from image
  const img = texture.image as HTMLImageElement | undefined
  const aspect = (img?.naturalWidth && img?.naturalHeight)
    ? img.naturalWidth / img.naturalHeight
    : (img?.width && img?.height) ? img.width / img.height : 0.5

  const planeHeight = displayHeight
  const planeWidth = planeHeight * aspect

  // Update geometry size
  useMemo(() => {
    const params = geometry.parameters
    if (params.width !== planeWidth || params.height !== planeHeight) {
      geometry.dispose()
    }
  }, [geometry, planeWidth, planeHeight])

  const accentColor = useMemo(() => new THREE.Color(project.accent), [project.accent])

  useFrame(() => {
    if (!meshRef.current) return
    const target = hovered ? 1.06 : 1
    const s = meshRef.current.scale.x
    meshRef.current.scale.setScalar(s + (target - s) * 0.1)
    if (lightRef.current) {
      lightRef.current.intensity += ((hovered ? 4 : 2) - lightRef.current.intensity) * 0.1
    }
  })

  return (
    <group position={[xPos, planeHeight / 2, 0]}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
        onClick={(e) => { e.stopPropagation(); onSelect(project) }}
      >
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial map={texture} transparent alphaTest={0.05} side={THREE.FrontSide} />
      </mesh>
      <pointLight ref={lightRef} position={[0, -planeHeight / 2 + 0.3, 1.5]} color={accentColor} intensity={2} distance={12} decay={2} />
    </group>
  )
}

// ── Fallback building (colored box when texture fails) ──
function FallbackBuilding({ project, xPos, displayHeight, onSelect }: {
  project: Project; xPos: number; displayHeight: number; onSelect: (p: Project) => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)
  const [hovered, setHovered] = useState(false)
  const w = displayHeight * 0.45
  const accentColor = useMemo(() => new THREE.Color(project.accent), [project.accent])
  const darkColor = useMemo(() => new THREE.Color(project.accent).multiplyScalar(0.15), [project.accent])

  useFrame(() => {
    if (!meshRef.current) return
    const target = hovered ? 1.06 : 1
    const s = meshRef.current.scale.x
    meshRef.current.scale.setScalar(s + (target - s) * 0.1)
    if (lightRef.current) {
      lightRef.current.intensity += ((hovered ? 4 : 2) - lightRef.current.intensity) * 0.1
    }
  })

  return (
    <group position={[xPos, displayHeight / 2, 0]}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
        onClick={(e) => { e.stopPropagation(); onSelect(project) }}
      >
        <boxGeometry args={[w, displayHeight, w * 0.3]} />
        <meshStandardMaterial color={darkColor} emissive={accentColor} emissiveIntensity={0.15} />
      </mesh>
      <pointLight ref={lightRef} position={[0, -displayHeight / 2 + 0.3, 1.5]} color={accentColor} intensity={2} distance={12} decay={2} />
    </group>
  )
}

// ── Building wrapper ──
function BuildingPlane({ project, xPos, displayHeight, onSelect }: {
  project: Project; xPos: number; displayHeight: number; onSelect: (p: Project) => void
}) {
  return (
    <Suspense fallback={<FallbackBuilding project={project} xPos={xPos} displayHeight={displayHeight} onSelect={onSelect} />}>
      <TexturedBuilding project={project} xPos={xPos} displayHeight={displayHeight} onSelect={onSelect} />
    </Suspense>
  )
}

// ── Ground Plane ──
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
      <planeGeometry args={[60, 30]} />
      <MeshReflectorMaterial
        mirror={0.5}
        roughness={0.2}
        mixStrength={0.8}
        mixBlur={1}
        color="#0a0e18"
        metalness={0.8}
        resolution={512}
      />
    </mesh>
  )
}

// ── Skyline layout — compute X positions ──
// Order: fencetastic, booth-plug, virasat-jewels, skyguard, synchub, buildkit-crm, buildkit-labs
const DISPLAY_ORDER = ['fencetastic', 'booth-plug', 'virasat-jewels', 'skyguard', 'synchub', 'buildkit-crm', 'buildkit-labs']
const DISPLAY_HEIGHTS: Record<string, number> = {
  fencetastic: 3,
  'booth-plug': 5,
  'virasat-jewels': 8,
  skyguard: 11,
  synchub: 15,
  'buildkit-crm': 9,
  'buildkit-labs': 3,
}
// Estimated widths (will be corrected by actual aspect ratios at render time)
// Use generous width estimates for spacing so buildings don't overlap
const EST_WIDTHS: Record<string, number> = {
  fencetastic: 2.5,
  'booth-plug': 3,
  'virasat-jewels': 4.5,
  skyguard: 5.5,
  synchub: 6,
  'buildkit-crm': 5,
  'buildkit-labs': 2.5,
}

function computeXPositions(): Record<string, number> {
  const gap = 0.6
  const positions: Record<string, number> = {}
  let x = 0
  // Calculate total width first to center the skyline
  let totalWidth = 0
  for (const id of DISPLAY_ORDER) {
    totalWidth += EST_WIDTHS[id] + gap
  }
  totalWidth -= gap // remove last gap
  x = -totalWidth / 2

  for (const id of DISPLAY_ORDER) {
    const w = EST_WIDTHS[id]
    positions[id] = x + w / 2
    x += w + gap
  }
  return positions
}

const X_POSITIONS = computeXPositions()

// ── Scene Content ──
function SceneContent({ onSelectProject }: { onSelectProject: (p: Project) => void }) {
  const { scene } = useThree()

  useEffect(() => {
    scene.fog = new THREE.FogExp2('#0a1628', 0.02)
    return () => { scene.fog = null }
  }, [scene])

  return (
    <>
      <ambientLight intensity={0.3} color="#1a2744" />
      <CameraController />
      <Ground />

      {/* Stars */}
      <Stars count={300} depth={50} saturation={0} factor={4} fade />

      {/* Buildings in skyline order */}
      {DISPLAY_ORDER.map((id) => {
        const project = projects.find(p => p.id === id)
        if (!project) return null
        const xPos = X_POSITIONS[id]
        const height = DISPLAY_HEIGHTS[id]
        return (
          <group key={id}>
            <BuildingPlane project={project} xPos={xPos} displayHeight={height} onSelect={onSelectProject} />
            <GroundGlow x={xPos} color={project.accent} />
          </group>
        )
      })}

      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0.4} luminanceSmoothing={0.9} radius={0.8} />
        <Vignette eskil={false} offset={0.1} darkness={0.6} />
      </EffectComposer>
    </>
  )
}

// ── Main Export ──
export default function Scene3D({
  onSelectProject,
  hoveredProject,
  setHoveredProject,
}: {
  onSelectProject: (p: Project) => void
  hoveredProject: Project | null
  setHoveredProject: (p: Project | null) => void
}) {
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
      <Canvas
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1 }}
        camera={{ fov: 50, near: 0.1, far: 200 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        onPointerMissed={() => setHoveredProject(null)}
      >
        <color attach="background" args={['#0a1628']} />
        <Suspense fallback={null}>
          <SceneContent onSelectProject={onSelectProject} />
        </Suspense>
      </Canvas>
    </>
  )
}
