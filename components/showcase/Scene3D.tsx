'use client'

import { useRef, useState, useEffect, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { MeshReflectorMaterial, useProgress } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { projects, type Project } from './data'

// ── Loading Screen with timeout ──
function LoadingScreen() {
  const { progress } = useProgress()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Auto-hide after 6s regardless of progress (prevents infinite loading)
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
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${gradientColors})`,
          }}
        />
      </div>
      <p className="text-white/30 text-xs mt-3 tracking-wider">{Math.round(progress)}%</p>
    </div>
  )
}

// ── Camera Controller ──
function CameraController() {
  const { camera } = useThree()
  const targetZ = useRef(-12)
  const currentZ = useRef(-12)
  const time = useRef(0)
  const keys = useRef<Set<string>>(new Set())

  useEffect(() => {
    camera.position.set(0, 1.7, -12)
    camera.lookAt(0, 1.7, 10)

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      targetZ.current = Math.max(-15, Math.min(10, targetZ.current + e.deltaY * 0.008))
    }

    const onKeyDown = (e: KeyboardEvent) => keys.current.add(e.key.toLowerCase())
    const onKeyUp = (e: KeyboardEvent) => keys.current.delete(e.key.toLowerCase())

    let touchY = 0
    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY }
    const onTouchMove = (e: TouchEvent) => {
      const dy = touchY - e.touches[0].clientY
      targetZ.current = Math.max(-15, Math.min(10, targetZ.current + dy * 0.02))
      touchY = e.touches[0].clientY
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
  }, [camera])

  useFrame((_, delta) => {
    time.current += delta
    const k = keys.current
    const speed = 3 * delta
    if (k.has('w') || k.has('arrowup')) targetZ.current = Math.min(10, targetZ.current + speed)
    if (k.has('s') || k.has('arrowdown')) targetZ.current = Math.max(-15, targetZ.current - speed)

    currentZ.current += (targetZ.current - currentZ.current) * 0.05
    const bob = Math.sin(time.current * 3) * 0.03
    camera.position.z = currentZ.current
    camera.position.y = 1.7 + bob
    camera.lookAt(0, 1.7, currentZ.current + 20)
  })

  return null
}

// ── Ground Glow ──
function GroundGlow({ position, color }: { position: [number, number, number]; color: string }) {
  const colorObj = useMemo(() => new THREE.Color(color), [color])
  return (
    <mesh position={[position[0], 0.01, position[2]]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[4, 4]} />
      <meshBasicMaterial color={colorObj} transparent opacity={0.15} side={THREE.DoubleSide} depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  )
}

// ── Building with texture (wrapped in Suspense) ──
function TexturedBuilding({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)
  const [hovered, setHovered] = useState(false)

  // Load texture — this will suspend until loaded
  const texture = useLoader(THREE.TextureLoader, project.buildingImage)

  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
  }, [texture])

  const img = texture.image as HTMLImageElement | undefined
  const aspect = (img?.width && img?.height) ? img.width / img.height : 0.6
  const planeWidth = project.scaleHeight * aspect
  const planeHeight = project.scaleHeight

  useFrame(() => {
    if (!meshRef.current) return
    const target = hovered ? 1.08 : 1
    const s = meshRef.current.scale.x
    meshRef.current.scale.setScalar(s + (target - s) * 0.1)
    if (lightRef.current) {
      lightRef.current.intensity += ((hovered ? 4 : 2) - lightRef.current.intensity) * 0.1
    }
  })

  const accentColor = useMemo(() => new THREE.Color(project.accent), [project.accent])

  return (
    <group position={[project.position[0], planeHeight / 2, project.position[2]]}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
        onClick={(e) => { e.stopPropagation(); onSelect(project) }}
      >
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial map={texture} transparent alphaTest={0.1} side={THREE.DoubleSide} />
      </mesh>
      <pointLight ref={lightRef} position={[0, -planeHeight / 2 + 0.5, 1]} color={accentColor} intensity={2} distance={15} decay={2} />
    </group>
  )
}

// ── Fallback building (colored box when texture fails to load) ──
function FallbackBuilding({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)
  const [hovered, setHovered] = useState(false)

  const planeWidth = project.scaleHeight * 0.5
  const planeHeight = project.scaleHeight
  const accentColor = useMemo(() => new THREE.Color(project.accent), [project.accent])
  const darkColor = useMemo(() => new THREE.Color(project.accent).multiplyScalar(0.15), [project.accent])

  useFrame(() => {
    if (!meshRef.current) return
    const target = hovered ? 1.08 : 1
    const s = meshRef.current.scale.x
    meshRef.current.scale.setScalar(s + (target - s) * 0.1)
    if (lightRef.current) {
      lightRef.current.intensity += ((hovered ? 4 : 2) - lightRef.current.intensity) * 0.1
    }
  })

  return (
    <group position={[project.position[0], planeHeight / 2, project.position[2]]}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
        onClick={(e) => { e.stopPropagation(); onSelect(project) }}
      >
        <boxGeometry args={[planeWidth, planeHeight, planeWidth * 0.3]} />
        <meshStandardMaterial color={darkColor} emissive={accentColor} emissiveIntensity={0.15} />
      </mesh>
      <pointLight ref={lightRef} position={[0, -planeHeight / 2 + 0.5, 1]} color={accentColor} intensity={2} distance={15} decay={2} />
    </group>
  )
}

// ── Building wrapper — tries texture, falls back to box ──
function BuildingPlane({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  return (
    <Suspense fallback={<FallbackBuilding project={project} onSelect={onSelect} />}>
      <TexturedBuilding project={project} onSelect={onSelect} />
    </Suspense>
  )
}

// ── Ground Plane ──
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
      <planeGeometry args={[50, 80]} />
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

// ── Scene Content ──
function SceneContent({ onSelectProject }: { onSelectProject: (p: Project) => void }) {
  const { scene } = useThree()

  useEffect(() => {
    scene.fog = new THREE.FogExp2('#0a1628', 0.04)
    return () => { scene.fog = null }
  }, [scene])

  return (
    <>
      <ambientLight intensity={0.15} color="#0a1628" />
      <CameraController />
      <Ground />
      {projects.map((p) => (
        <group key={p.id}>
          <BuildingPlane project={p} onSelect={onSelectProject} />
          <GroundGlow position={p.position} color={p.accent} />
        </group>
      ))}
      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0.4} luminanceSmoothing={0.9} radius={0.8} />
        <Vignette eskil={false} offset={0.1} darkness={0.6} />
      </EffectComposer>
    </>
  )
}

// ── Tooltip ──
function Tooltip({ project }: { project: Project | null }) {
  if (!project) return null
  return (
    <div
      className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg pointer-events-none animate-[fadeIn_0.15s_ease]"
      style={{ background: 'rgba(6,12,24,0.9)', border: `1px solid ${project.accent}30`, backdropFilter: 'blur(12px)' }}
    >
      <span className="text-sm font-bold" style={{ color: project.accent }}>{project.name}</span>
      <span className="text-white/40 text-xs ml-2">{project.subtitle}</span>
    </div>
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
      <Tooltip project={hoveredProject} />
      <Canvas
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1 }}
        camera={{ fov: 60, near: 0.1, far: 100 }}
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
