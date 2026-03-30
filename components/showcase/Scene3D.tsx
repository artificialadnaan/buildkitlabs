'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshReflectorMaterial, useProgress, Stars, Text, Billboard } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { projects, type Project } from './data'

// ═══ Layout ═══

interface BuildingLayout {
  id: string
  side: 'left' | 'right'
  x: number
  z: number
  displayHeight: number
}

const STREET_LAYOUT: BuildingLayout[] = [
  { id: 'fencetastic',    side: 'left',  x: -15, z: 0, displayHeight: 6   },
  { id: 'booth-plug',     side: 'left',  x: -9,  z: 0, displayHeight: 8   },
  { id: 'buildkit-labs',  side: 'left',  x: -3,  z: 0, displayHeight: 6   },
  { id: 'buildkit-crm',   side: 'right', x: 3,   z: 0, displayHeight: 10  },
  { id: 'virasat-jewels', side: 'right', x: 9,   z: 0, displayHeight: 9   },
  { id: 'skyguard',       side: 'right', x: 15,  z: 0, displayHeight: 13  },
  { id: 'synchub',        side: 'right', x: 21,  z: 0, displayHeight: 16  },
]

const FILLER_BUILDINGS = [
  { x: -21, z: 0, w: 3, h: 4, color: '#0d1117' },
  { x: -24, z: 0, w: 4, h: 8, color: '#0f1419' },
  { x: 27,  z: 0, w: 3, h: 6, color: '#0d1117' },
  { x: 30,  z: 0, w: 4, h: 10, color: '#0f1419' },
]

// ═══ Loading Screen ═══

function LoadingScreen() {
  const { progress } = useProgress()
  const [visible, setVisible] = useState(true)
  useEffect(() => { const t = setTimeout(() => setVisible(false), 5000); return () => clearTimeout(t) }, [])
  useEffect(() => { if (progress >= 100) { const t = setTimeout(() => setVisible(false), 400); return () => clearTimeout(t) } return undefined }, [progress])
  if (!visible) return null
  return (
    <div className="fixed inset-0 z-[300] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ backgroundColor: '#0a1628', opacity: progress >= 100 ? 0 : 1, pointerEvents: progress >= 100 ? 'none' : 'auto' }}>
      <p className="text-white/50 tracking-[0.3em] text-sm uppercase mb-6">Entering the city...</p>
    </div>
  )
}

// ═══ Camera — horizontal pan ═══

function CameraController({ onCameraX }: { onCameraX: (x: number) => void }) {
  const { camera } = useThree()
  const targetX = useRef(0)
  const currentX = useRef(0)
  const keys = useRef<Set<string>>(new Set())
  const mouseNormX = useRef(0)
  const mouseNormY = useRef(0)

  useEffect(() => {
    camera.position.set(0, 3, 14)
    camera.lookAt(0, 3, 0)

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      targetX.current = Math.max(-22, Math.min(22, targetX.current + e.deltaY * 0.015))
    }
    const onKeyDown = (e: KeyboardEvent) => keys.current.add(e.key.toLowerCase())
    const onKeyUp = (e: KeyboardEvent) => keys.current.delete(e.key.toLowerCase())
    const onMouseMove = (e: MouseEvent) => {
      mouseNormX.current = (e.clientX / window.innerWidth - 0.5) * 2
      mouseNormY.current = (e.clientY / window.innerHeight - 0.5) * 2
    }
    let touchX = 0
    const onTouchStart = (e: TouchEvent) => { touchX = e.touches[0].clientX }
    const onTouchMove = (e: TouchEvent) => {
      const dx = touchX - e.touches[0].clientX
      targetX.current = Math.max(-22, Math.min(22, targetX.current + dx * 0.03))
      touchX = e.touches[0].clientX
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
    const k = keys.current
    const spd = 5 * delta
    if (k.has('a') || k.has('arrowleft')) targetX.current = Math.max(-22, targetX.current - spd)
    if (k.has('d') || k.has('arrowright')) targetX.current = Math.min(22, targetX.current + spd)
    currentX.current += (targetX.current - currentX.current) * 0.06
    camera.position.x = currentX.current
    const lx = currentX.current + mouseNormX.current * 0.5
    const ly = 3 - mouseNormY.current * 0.3
    camera.lookAt(lx, ly, 0)
    onCameraX(currentX.current)
  })
  return null
}

// ═══ Building — loads texture manually, falls back to colored box ═══

function BuildingMesh({ project, layout, cameraX, onSelect }: {
  project: Project; layout: BuildingLayout; cameraX: number; onSelect: (p: Project) => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)
  const [hovered, setHovered] = useState(false)
  const [tex, setTex] = useState<THREE.Texture | null>(null)
  const [aspect, setAspect] = useState(0.6)

  // Load texture manually (no Suspense dependency)
  useEffect(() => {
    const loader = new THREE.TextureLoader()
    loader.load(
      project.buildingImage,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace
        texture.minFilter = THREE.LinearFilter
        texture.magFilter = THREE.LinearFilter

        // Remove black background via canvas
        const img = texture.image as HTMLImageElement
        if (img.width && img.height) {
          setAspect(img.width / img.height)
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          if (ctx) {
            canvas.width = img.width
            canvas.height = img.height
            ctx.drawImage(img, 0, 0)
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
            const d = imageData.data
            for (let i = 0; i < d.length; i += 4) {
              if (d[i] < 20 && d[i + 1] < 20 && d[i + 2] < 20) d[i + 3] = 0
            }
            ctx.putImageData(imageData, 0, 0)
            const canvasTex = new THREE.CanvasTexture(canvas)
            canvasTex.colorSpace = THREE.SRGBColorSpace
            canvasTex.needsUpdate = true
            setTex(canvasTex)
          } else {
            setTex(texture)
          }
        } else {
          setTex(texture)
        }
        console.log(`[Showcase] Loaded: ${project.id}`)
      },
      undefined,
      (err) => {
        console.warn(`[Showcase] Failed to load ${project.buildingImage}:`, err)
      }
    )
  }, [project.buildingImage, project.id])

  const h = layout.displayHeight
  const w = h * aspect
  const accentColor = useMemo(() => new THREE.Color(project.accent), [project.accent])

  // Label fade based on camera X proximity
  const dist = Math.abs(cameraX - layout.x)
  const labelOpacity = Math.max(0, Math.min(1, 1 - (dist - 4) / 6))

  useFrame(() => {
    if (!meshRef.current) return
    const target = hovered ? 1.04 : 1
    const s = meshRef.current.scale.x
    meshRef.current.scale.setScalar(s + (target - s) * 0.1)
    if (lightRef.current) {
      lightRef.current.intensity += ((hovered ? 5 : 3) - lightRef.current.intensity) * 0.1
    }
  })

  return (
    <group position={[layout.x, h / 2, layout.z]}>
      <Billboard follow lockX={false} lockY={true} lockZ={false}>
        <mesh
          ref={meshRef}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
          onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
          onClick={(e) => { e.stopPropagation(); onSelect(project) }}
        >
          <planeGeometry args={[w, h]} />
          {tex ? (
            <meshBasicMaterial map={tex} transparent alphaTest={0.05} side={THREE.DoubleSide} depthWrite />
          ) : (
            <meshBasicMaterial color={accentColor} transparent opacity={0.3} />
          )}
        </mesh>
      </Billboard>

      {/* Name label */}
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

      {/* Light */}
      <pointLight ref={lightRef} position={[0, -h / 2 + 0.5, 2]} color={accentColor} intensity={3} distance={10} decay={2} />
    </group>
  )
}

// ═══ Ground glow ═══

function GroundGlow({ x, z, color }: { x: number; z: number; color: string }) {
  const c = useMemo(() => new THREE.Color(color), [color])
  return (
    <mesh position={[x, 0.02, z + 2]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[3, 3]} />
      <meshBasicMaterial color={c} transparent opacity={0.1} depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  )
}

// ═══ Street ═══

function Street() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 5]}>
      <planeGeometry args={[70, 30]} />
      <MeshReflectorMaterial mirror={0.4} roughness={0.25} mixStrength={0.6} mixBlur={1} color="#0a0e18" metalness={0.8} resolution={512} />
    </mesh>
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
    const arr: number[] = []
    for (let x = -21; x <= 24; x += 7) arr.push(x)
    return arr
  }, [])
  return (
    <>
      {positions.map((x, i) => (
        <group key={i}>
          <mesh position={[x, 1.5, 4]}>
            <cylinderGeometry args={[0.03, 0.03, 3]} />
            <meshBasicMaterial color="#1a1a2e" />
          </mesh>
          <pointLight position={[x, 3, 4]} color="#FFF5E1" intensity={0.6} distance={6} decay={2} />
        </group>
      ))}
    </>
  )
}

function TRockBeacon() {
  const lightRef = useRef<THREE.PointLight>(null)
  const s = STREET_LAYOUT.find(b => b.id === 'synchub')!
  useFrame(({ clock }) => {
    if (lightRef.current) lightRef.current.intensity = 1.5 + Math.sin(clock.elapsedTime * 2) * 1.5
  })
  return <pointLight ref={lightRef} position={[s.x, s.displayHeight + 1, s.z]} color="#EF4444" intensity={3} distance={18} decay={2} />
}

// ═══ Scene ═══

function SceneContent({ onSelectProject, cameraX, onCameraX }: {
  onSelectProject: (p: Project) => void; cameraX: number; onCameraX: (x: number) => void
}) {
  const { scene } = useThree()
  useEffect(() => {
    scene.fog = new THREE.FogExp2('#0a1628', 0.006)
    return () => { scene.fog = null }
  }, [scene])

  return (
    <>
      <ambientLight intensity={1} color="#667788" />
      <directionalLight position={[0, 15, 10]} color="#445566" intensity={0.5} />
      <CameraController onCameraX={onCameraX} />
      <Stars count={500} depth={100} saturation={0} factor={3} fade />
      <Street />
      <Streetlamps />
      <FillerBuildings />
      <TRockBeacon />

      {STREET_LAYOUT.map(layout => {
        const project = projects.find(p => p.id === layout.id)
        if (!project) return null
        return (
          <group key={layout.id}>
            <BuildingMesh project={project} layout={layout} cameraX={cameraX} onSelect={onSelectProject} />
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

// ═══ Export ═══

export default function Scene3D({
  onSelectProject, hoveredProject, setHoveredProject, panelOpen,
}: {
  onSelectProject: (p: Project) => void; hoveredProject: Project | null
  setHoveredProject: (p: Project | null) => void; panelOpen: boolean
}) {
  const [cameraX, setCameraX] = useState(0)
  return (
    <>
      <LoadingScreen />
      {hoveredProject && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg pointer-events-none animate-[fadeIn_0.15s_ease]"
          style={{ background: 'rgba(6,12,24,0.9)', border: `1px solid ${hoveredProject.accent}30`, backdropFilter: 'blur(12px)' }}>
          <span className="text-sm font-bold" style={{ color: hoveredProject.accent }}>{hoveredProject.name}</span>
          <span className="text-white/40 text-xs ml-2">{hoveredProject.subtitle}</span>
        </div>
      )}
      {!panelOpen && (
        <div className="fixed bottom-6 left-0 right-0 text-center z-50 pointer-events-none">
          <span className="text-white/25 text-xs tracking-[0.3em] uppercase">Scroll to explore &middot; Click any building</span>
        </div>
      )}
      <Canvas
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        camera={{ fov: 65, near: 0.1, far: 200 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        onPointerMissed={() => setHoveredProject(null)}
      >
        <color attach="background" args={['#0a1628']} />
        <SceneContent onSelectProject={onSelectProject} cameraX={cameraX} onCameraX={setCameraX} />
      </Canvas>
    </>
  )
}
