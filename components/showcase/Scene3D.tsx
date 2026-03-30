'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture, Text, MeshReflectorMaterial, useProgress } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { projects, type Project } from './data'

// ── Loading Screen ──
function LoadingScreen() {
  const { progress } = useProgress()
  const [visible, setVisible] = useState(true)

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

    // Touch controls
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

    // Keyboard movement
    const k = keys.current
    const speed = 3 * delta
    if (k.has('w') || k.has('arrowup')) targetZ.current = Math.min(10, targetZ.current + speed)
    if (k.has('s') || k.has('arrowdown')) targetZ.current = Math.max(-15, targetZ.current - speed)

    // Lerp
    currentZ.current += (targetZ.current - currentZ.current) * 0.05

    // Walking bob
    const bob = Math.sin(time.current * 3) * 0.03

    camera.position.z = currentZ.current
    camera.position.y = 1.7 + bob
    camera.lookAt(0, 1.7, currentZ.current + 20)
  })

  return null
}

// ── Ground Glow (light pool beneath building) ──
function GroundGlow({ position, color }: { position: [number, number, number]; color: string }) {
  const colorObj = useMemo(() => new THREE.Color(color), [color])

  return (
    <mesh position={[position[0], 0.01, position[2]]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[4, 4]} />
      <meshBasicMaterial
        color={colorObj}
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

// ── Building Plane ──
function BuildingPlane({
  project,
  onSelect,
  onHover,
  onUnhover,
}: {
  project: Project
  onSelect: (p: Project) => void
  onHover: (p: Project) => void
  onUnhover: () => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)
  const [hovered, setHovered] = useState(false)
  const targetScale = useRef(1)

  // Load building texture
  const texture = useTexture(project.buildingImage)

  // Configure texture
  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
  }, [texture])

  // Calculate aspect ratio from texture
  const aspect = useMemo(() => {
    const img = texture.image as HTMLImageElement | undefined
    if (img?.width && img?.height) {
      return img.width / img.height
    }
    return 0.6 // fallback
  }, [texture])

  const planeWidth = project.scaleHeight * aspect
  const planeHeight = project.scaleHeight

  useFrame(() => {
    if (!meshRef.current) return
    targetScale.current = hovered ? 1.08 : 1
    const s = meshRef.current.scale.x
    const ns = s + (targetScale.current - s) * 0.1
    meshRef.current.scale.set(ns, ns, ns)

    if (lightRef.current) {
      const targetIntensity = hovered ? 4 : 2
      lightRef.current.intensity += (targetIntensity - lightRef.current.intensity) * 0.1
    }
  })

  const accentColor = useMemo(() => new THREE.Color(project.accent), [project.accent])

  return (
    <group position={[project.position[0], planeHeight / 2, project.position[2]]}>
      {/* Building texture plane */}
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          onHover(project)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          onUnhover()
          document.body.style.cursor = 'default'
        }}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(project)
        }}
      >
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial
          map={texture}
          transparent
          alphaTest={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Name label */}
      <Text
        position={[0, -planeHeight / 2 - 0.3, 0]}
        fontSize={0.25}
        color={project.accent}
        anchorX="center"
        anchorY="top"
        font="/fonts/DMSans-Bold.woff"
        outlineWidth={0.01}
        outlineColor="#000000"
      >
        {project.name}
      </Text>
      <Text
        position={[0, -planeHeight / 2 - 0.6, 0]}
        fontSize={0.15}
        color="#6B7280"
        anchorX="center"
        anchorY="top"
        font="/fonts/DMSans-Regular.woff"
        outlineWidth={0.005}
        outlineColor="#000000"
      >
        {project.subtitle}
      </Text>

      {/* Point light at base */}
      <pointLight
        ref={lightRef}
        position={[0, -planeHeight / 2 + 0.5, 1]}
        color={accentColor}
        intensity={2}
        distance={15}
        decay={2}
      />
    </group>
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
function SceneContent({
  onSelectProject,
}: {
  onSelectProject: (p: Project) => void
}) {
  const { scene } = useThree()
  const [, setHoveredProject] = useState<Project | null>(null)

  // Set scene fog
  useEffect(() => {
    scene.fog = new THREE.FogExp2('#0a1628', 0.04)
    return () => { scene.fog = null }
  }, [scene])

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.15} color="#0a1628" />

      {/* Camera controller */}
      <CameraController />

      {/* Ground */}
      <Ground />

      {/* Buildings + ground glows */}
      {projects.map((p) => (
        <group key={p.id}>
          <BuildingPlane
            project={p}
            onSelect={onSelectProject}
            onHover={(proj) => setHoveredProject(proj)}
            onUnhover={() => setHoveredProject(null)}
          />
          <GroundGlow position={p.position} color={p.accent} />
        </group>
      ))}

      {/* Post-processing */}
      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.9}
          radius={0.8}
        />
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
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg pointer-events-none animate-[fadeIn_0.15s_ease]"
      style={{
        background: 'rgba(6,12,24,0.9)',
        border: `1px solid ${project.accent}30`,
        backdropFilter: 'blur(12px)',
      }}
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
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1,
        }}
        camera={{ fov: 60, near: 0.1, far: 100 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        onPointerMissed={() => setHoveredProject(null)}
      >
        <color attach="background" args={['#0a1628']} />
        <SceneContent onSelectProject={onSelectProject} />
      </Canvas>
    </>
  )
}
