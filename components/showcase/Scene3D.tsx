'use client'

import { useRef, useState, useEffect, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, Billboard, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { projects, type Project } from './data'

// ═══ Street Layout — buildings on both sides, walk forward along Z ═══

interface BuildingLayout {
  id: string
  side: 'left' | 'right'
  x: number
  z: number
  displayHeight: number
}

const LEFT_X = -6
const RIGHT_X = 6

const STREET_LAYOUT: BuildingLayout[] = [
  // Left side
  { id: 'fencetastic',    side: 'left',  x: LEFT_X,  z: -36, displayHeight: 5  },
  { id: 'buildkit-labs',  side: 'left',  x: LEFT_X,  z: -22, displayHeight: 5  },
  { id: 'virasat-jewels', side: 'left',  x: LEFT_X,  z: -8,  displayHeight: 7  },
  { id: 'synchub',        side: 'left',  x: LEFT_X,  z: 6,   displayHeight: 10 },
  // Right side
  { id: 'booth-plug',     side: 'right', x: RIGHT_X, z: -29, displayHeight: 6  },
  { id: 'buildkit-crm',   side: 'right', x: RIGHT_X, z: -15, displayHeight: 8  },
  { id: 'skyguard',       side: 'right', x: RIGHT_X, z: -1,  displayHeight: 9  },
]

// Dark filler boxes to fill out the street
const FILLERS = [
  // Left side fillers
  { x: LEFT_X, z: -50, w: 4, h: 6, d: 4 },
  { x: LEFT_X, z: 18,  w: 4, h: 8, d: 4 },
  { x: LEFT_X - 5, z: -44, w: 3, h: 10, d: 3 },
  { x: LEFT_X - 5, z: -30, w: 3, h: 7, d: 3 },
  { x: LEFT_X - 5, z: -14, w: 3, h: 12, d: 3 },
  { x: LEFT_X - 5, z: 2,   w: 3, h: 5, d: 3 },
  { x: LEFT_X - 5, z: 16,  w: 3, h: 9, d: 3 },
  // Right side fillers
  { x: RIGHT_X, z: -44, w: 4, h: 7, d: 4 },
  { x: RIGHT_X, z: 12,  w: 4, h: 5, d: 4 },
  { x: RIGHT_X + 5, z: -38, w: 3, h: 11, d: 3 },
  { x: RIGHT_X + 5, z: -22, w: 3, h: 8, d: 3 },
  { x: RIGHT_X + 5, z: -8,  w: 3, h: 6, d: 3 },
  { x: RIGHT_X + 5, z: 6,   w: 3, h: 13, d: 3 },
  { x: RIGHT_X + 5, z: 18,  w: 3, h: 7, d: 3 },
]

const WALK_MIN = -45
const WALK_MAX = 20

// ═══ Loading Screen ═══

function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  useEffect(() => { const t = setTimeout(() => setVisible(false), 2500); return () => clearTimeout(t) }, [])
  if (!visible) return null
  return (
    <div className="fixed inset-0 z-[300] flex flex-col items-center justify-center"
      style={{ backgroundColor: '#080c16' }}>
      <p className="text-white/50 tracking-[0.3em] text-sm uppercase mb-6">Entering the city...</p>
    </div>
  )
}

// ═══ Camera — walk forward/backward along Z ═══

function CameraController({ onCameraZ }: { onCameraZ: (z: number) => void }) {
  const { camera } = useThree()
  const targetZ = useRef(WALK_MAX)
  const currentZ = useRef(WALK_MAX)
  const keys = useRef<Set<string>>(new Set())
  const mouseNormX = useRef(0)
  const mouseNormY = useRef(0)

  useEffect(() => {
    camera.position.set(0, 1.7, WALK_MAX)
    camera.lookAt(0, 2, WALK_MAX - 10)

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      targetZ.current = Math.max(WALK_MIN, Math.min(WALK_MAX, targetZ.current - e.deltaY * 0.02))
    }
    const onKeyDown = (e: KeyboardEvent) => keys.current.add(e.key.toLowerCase())
    const onKeyUp = (e: KeyboardEvent) => keys.current.delete(e.key.toLowerCase())
    const onMouseMove = (e: MouseEvent) => {
      mouseNormX.current = (e.clientX / window.innerWidth - 0.5) * 2
      mouseNormY.current = (e.clientY / window.innerHeight - 0.5) * 2
    }
    let touchY = 0
    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY }
    const onTouchMove = (e: TouchEvent) => {
      const dy = touchY - e.touches[0].clientY
      targetZ.current = Math.max(WALK_MIN, Math.min(WALK_MAX, targetZ.current - dy * 0.04))
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
    const k = keys.current
    const spd = 8 * delta
    if (k.has('w') || k.has('arrowup')) targetZ.current = Math.max(WALK_MIN, targetZ.current - spd)
    if (k.has('s') || k.has('arrowdown')) targetZ.current = Math.min(WALK_MAX, targetZ.current + spd)
    currentZ.current += (targetZ.current - currentZ.current) * 0.08

    camera.position.set(0, 1.7, currentZ.current)
    // Look forward with slight mouse influence
    const lx = mouseNormX.current * 2
    const ly = 2.2 + mouseNormY.current * -0.5
    camera.lookAt(lx, ly, currentZ.current - 20)
    onCameraZ(currentZ.current)
  })
  return null
}

// ═══ GLB Building ═══

function GLBBuilding({ project, layout, cameraZ, onSelect }: {
  project: Project; layout: BuildingLayout; cameraZ: number; onSelect: (p: Project) => void
}) {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const { scene } = useGLTF(project.buildingModel!)

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true)
    const box = new THREE.Box3().setFromObject(clone)
    const size = new THREE.Vector3()
    box.getSize(size)
    const center = new THREE.Vector3()
    box.getCenter(center)

    const scaleFactor = layout.displayHeight / size.y
    clone.scale.setScalar(scaleFactor)
    clone.position.set(
      -center.x * scaleFactor,
      -box.min.y * scaleFactor,
      -center.z * scaleFactor
    )

    // Performance: disable shadows, simplify materials
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = false
        child.receiveShadow = false
        child.frustumCulled = true
      }
    })

    return clone
  }, [scene, layout.displayHeight])

  // Only show label when camera is near this building
  const dist = Math.abs(cameraZ - layout.z)
  const labelOpacity = Math.max(0, Math.min(1, 1 - (dist - 5) / 8))

  // Face building toward the street center
  const rotationY = layout.side === 'left' ? Math.PI * 0.15 : -Math.PI * 0.15

  return (
    <group position={[layout.x, 0, layout.z]}>
      <group
        ref={groupRef}
        rotation={[0, rotationY, 0]}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
        onClick={(e) => { e.stopPropagation(); onSelect(project) }}
      >
        <primitive object={clonedScene} />
      </group>

      {/* Name label — only when nearby */}
      {labelOpacity > 0.05 && (
        <Billboard follow lockY={true}>
          <Text
            position={[layout.side === 'left' ? 3 : -3, layout.displayHeight * 0.5, 0]}
            fontSize={0.4}
            color={project.accent}
            anchorX={layout.side === 'left' ? 'left' : 'right'}
            anchorY="middle"
            fillOpacity={labelOpacity}
            outlineWidth={0.02}
            outlineColor="#000000"
          >
            {project.name}
          </Text>
          <Text
            position={[layout.side === 'left' ? 3 : -3, layout.displayHeight * 0.5 - 0.5, 0]}
            fontSize={0.22}
            color="#8899aa"
            anchorX={layout.side === 'left' ? 'left' : 'right'}
            anchorY="middle"
            fillOpacity={labelOpacity * 0.7}
          >
            {project.subtitle}
          </Text>
        </Billboard>
      )}

      {/* Single subtle ground glow per building — cheap */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2, 8]} />
        <meshBasicMaterial color={project.accent} transparent opacity={hovered ? 0.2 : 0.08} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  )
}

// ═══ JPEG Billboard Fallback (SyncHub only) ═══

function BillboardBuilding({ project, layout, cameraZ, onSelect }: {
  project: Project; layout: BuildingLayout; cameraZ: number; onSelect: (p: Project) => void
}) {
  const [tex, setTex] = useState<THREE.Texture | null>(null)
  const [aspect, setAspect] = useState(0.6)

  useEffect(() => {
    const loader = new THREE.TextureLoader()
    loader.load(project.buildingImage, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace
      texture.minFilter = THREE.LinearFilter
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
          const t = new THREE.CanvasTexture(canvas)
          t.colorSpace = THREE.SRGBColorSpace
          t.needsUpdate = true
          setTex(t)
        } else { setTex(texture) }
      } else { setTex(texture) }
    })
  }, [project.buildingImage])

  const h = layout.displayHeight
  const w = h * aspect
  const dist = Math.abs(cameraZ - layout.z)
  const labelOpacity = Math.max(0, Math.min(1, 1 - (dist - 5) / 8))

  return (
    <group position={[layout.x, h / 2, layout.z]}>
      <Billboard follow lockX={false} lockY={true} lockZ={false}>
        <mesh
          onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = 'pointer' }}
          onPointerOut={() => { document.body.style.cursor = 'default' }}
          onClick={(e) => { e.stopPropagation(); onSelect(project) }}
        >
          <planeGeometry args={[w, h]} />
          {tex ? (
            <meshBasicMaterial map={tex} transparent alphaTest={0.05} side={THREE.DoubleSide} />
          ) : (
            <meshBasicMaterial color={project.accent} transparent opacity={0.3} />
          )}
        </mesh>
      </Billboard>
      {labelOpacity > 0.05 && (
        <Billboard follow lockY={true}>
          <Text position={[layout.side === 'left' ? 3 : -3, 0, 0]} fontSize={0.4} color={project.accent}
            anchorX={layout.side === 'left' ? 'left' : 'right'} anchorY="middle" fillOpacity={labelOpacity}
            outlineWidth={0.02} outlineColor="#000000">
            {project.name}
          </Text>
        </Billboard>
      )}
      <mesh position={[0, -h / 2 + 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2, 8]} />
        <meshBasicMaterial color={project.accent} transparent opacity={0.08} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  )
}

// ═══ Building Router ═══

function BuildingRouter({ project, layout, cameraZ, onSelect }: {
  project: Project; layout: BuildingLayout; cameraZ: number; onSelect: (p: Project) => void
}) {
  if (project.buildingModel) {
    return (
      <Suspense fallback={null}>
        <GLBBuilding project={project} layout={layout} cameraZ={cameraZ} onSelect={onSelect} />
      </Suspense>
    )
  }
  return <BillboardBuilding project={project} layout={layout} cameraZ={cameraZ} onSelect={onSelect} />
}

// ═══ Street & Environment — all meshBasicMaterial for performance ═══

function Street() {
  return (
    <group>
      {/* Road surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -15]}>
        <planeGeometry args={[8, 80]} />
        <meshBasicMaterial color="#111318" />
      </mesh>
      {/* Center line dashes */}
      {Array.from({ length: 20 }, (_, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, -50 + i * 5]}>
          <planeGeometry args={[0.1, 2]} />
          <meshBasicMaterial color="#2a2a35" />
        </mesh>
      ))}
      {/* Left sidewalk */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-3.5, 0.05, -15]}>
        <planeGeometry args={[1.5, 80]} />
        <meshBasicMaterial color="#151820" />
      </mesh>
      {/* Right sidewalk */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[3.5, 0.05, -15]}>
        <planeGeometry args={[1.5, 80]} />
        <meshBasicMaterial color="#151820" />
      </mesh>
      {/* Ground plane extending outward */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, -15]}>
        <planeGeometry args={[60, 100]} />
        <meshBasicMaterial color="#0a0c12" />
      </mesh>
    </group>
  )
}

function FillerBuildings() {
  const fillerMat = useMemo(() => new THREE.MeshBasicMaterial({ color: '#0d1018' }), [])
  const fillerMat2 = useMemo(() => new THREE.MeshBasicMaterial({ color: '#0f1420' }), [])
  return (
    <>
      {FILLERS.map((f, i) => (
        <mesh key={i} position={[f.x, f.h / 2, f.z]} material={i % 2 === 0 ? fillerMat : fillerMat2}>
          <boxGeometry args={[f.w, f.h, f.d]} />
        </mesh>
      ))}
    </>
  )
}

function Streetlamps() {
  // Minimal lamps — just visual poles, no point lights (performance)
  const positions = useMemo(() => {
    const arr: [number, number][] = []
    for (let z = -45; z <= 20; z += 12) {
      arr.push([-3, z])
      arr.push([3, z])
    }
    return arr
  }, [])
  const poleMat = useMemo(() => new THREE.MeshBasicMaterial({ color: '#1a1e2a' }), [])
  const bulbMat = useMemo(() => new THREE.MeshBasicMaterial({ color: '#FFF5E1' }), [])
  return (
    <>
      {positions.map(([x, z], i) => (
        <group key={i}>
          <mesh position={[x, 1.5, z]} material={poleMat}>
            <cylinderGeometry args={[0.03, 0.04, 3, 4]} />
          </mesh>
          <mesh position={[x, 3.05, z]} material={bulbMat}>
            <sphereGeometry args={[0.08, 4, 4]} />
          </mesh>
        </group>
      ))}
    </>
  )
}

// Simple CSS stars in overlay — zero GPU cost
function CSSStars() {
  const stars = useMemo(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 50,
      size: 0.5 + Math.random() * 1.5,
      delay: Math.random() * 5,
      dur: 2 + Math.random() * 3,
    })), [])
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map(s => (
        <div key={s.id} className="absolute rounded-full bg-white" style={{
          left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size,
          opacity: 0.4,
          animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
        }} />
      ))}
    </div>
  )
}

// ═══ Scene ═══

function SceneContent({ onSelectProject, cameraZ, onCameraZ }: {
  onSelectProject: (p: Project) => void; cameraZ: number; onCameraZ: (z: number) => void
}) {
  const { scene } = useThree()
  useEffect(() => {
    scene.fog = new THREE.Fog('#080c16', 5, 50)
    return () => { scene.fog = null }
  }, [scene])

  return (
    <>
      {/* Minimal lighting — 2 lights only */}
      <ambientLight intensity={1.8} color="#99aacc" />
      <directionalLight position={[3, 15, 5]} color="#ddeeff" intensity={0.6} />
      <CameraController onCameraZ={onCameraZ} />
      <Street />
      <Streetlamps />
      <FillerBuildings />

      {STREET_LAYOUT.map(layout => {
        const project = projects.find(p => p.id === layout.id)
        if (!project) return null
        return (
          <BuildingRouter key={layout.id} project={project} layout={layout} cameraZ={cameraZ} onSelect={onSelectProject} />
        )
      })}
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
  const [cameraZ, setCameraZ] = useState(WALK_MAX)
  return (
    <>
      <LoadingScreen />
      <CSSStars />
      {hoveredProject && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg pointer-events-none animate-[fadeIn_0.15s_ease]"
          style={{ background: 'rgba(6,12,24,0.9)', border: `1px solid ${hoveredProject.accent}30`, backdropFilter: 'blur(12px)' }}>
          <span className="text-sm font-bold" style={{ color: hoveredProject.accent }}>{hoveredProject.name}</span>
          <span className="text-white/40 text-xs ml-2">{hoveredProject.subtitle}</span>
        </div>
      )}
      {!panelOpen && (
        <div className="fixed bottom-6 left-0 right-0 text-center z-50 pointer-events-none">
          <span className="text-white/25 text-xs tracking-[0.3em] uppercase">Scroll to walk &middot; Click any building</span>
        </div>
      )}
      <Canvas
        gl={{
          antialias: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
        camera={{ fov: 70, near: 0.1, far: 80 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        onPointerMissed={() => setHoveredProject(null)}
      >
        <color attach="background" args={['#080c16']} />
        <SceneContent onSelectProject={onSelectProject} cameraZ={cameraZ} onCameraZ={setCameraZ} />
      </Canvas>
    </>
  )
}
