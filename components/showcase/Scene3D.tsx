'use client'

import { useRef, useState, useEffect, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, Billboard, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { projects, type Project } from './data'

// ═══ Street Layout — staggered buildings on alternating sides ═══

interface BuildingLayout {
  id: string
  side: 'left' | 'right'
  x: number
  z: number
  displayHeight: number
}

const LEFT_X = -7.5
const RIGHT_X = 7.5

// Staggered so there's always a building nearby as you walk
const STREET_LAYOUT: BuildingLayout[] = [
  { id: 'fencetastic',    side: 'left',  x: LEFT_X,  z: 0,   displayHeight: 4  },
  { id: 'booth-plug',     side: 'right', x: RIGHT_X, z: -5,  displayHeight: 5  },
  { id: 'buildkit-labs',  side: 'left',  x: LEFT_X,  z: -10, displayHeight: 4  },
  { id: 'virasat-jewels', side: 'right', x: RIGHT_X, z: -15, displayHeight: 6  },
  { id: 'buildkit-crm',   side: 'left',  x: LEFT_X,  z: -20, displayHeight: 7  },
  { id: 'skyguard',       side: 'right', x: RIGHT_X, z: -25, displayHeight: 8  },
  { id: 'synchub',        side: 'left',  x: LEFT_X,  z: -30, displayHeight: 9  },
]

// Filler buildings with subtle window glow
const FILLERS = [
  // Left row (behind project buildings)
  { x: LEFT_X - 5, z: 3,   w: 4, h: 7,  d: 4 },
  { x: LEFT_X - 5, z: -5,  w: 3, h: 10, d: 3 },
  { x: LEFT_X - 5, z: -13, w: 4, h: 6,  d: 4 },
  { x: LEFT_X - 5, z: -21, w: 3, h: 12, d: 3 },
  { x: LEFT_X - 5, z: -29, w: 4, h: 8,  d: 4 },
  { x: LEFT_X - 5, z: -37, w: 3, h: 11, d: 3 },
  // Left row front gap fillers
  { x: LEFT_X, z: 6,   w: 4, h: 5, d: 3 },
  { x: LEFT_X, z: -36, w: 4, h: 6, d: 3 },
  // Right row (behind project buildings)
  { x: RIGHT_X + 5, z: 1,   w: 4, h: 9,  d: 4 },
  { x: RIGHT_X + 5, z: -8,  w: 3, h: 7,  d: 3 },
  { x: RIGHT_X + 5, z: -18, w: 4, h: 11, d: 4 },
  { x: RIGHT_X + 5, z: -26, w: 3, h: 8,  d: 3 },
  { x: RIGHT_X + 5, z: -34, w: 4, h: 13, d: 4 },
  // Right row front gap fillers
  { x: RIGHT_X, z: 5,   w: 4, h: 4, d: 3 },
  { x: RIGHT_X, z: -35, w: 4, h: 7, d: 3 },
]

const WALK_MIN = -34
const WALK_MAX = 8

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

    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = false
        child.receiveShadow = false
        child.frustumCulled = true
      }
    })

    return clone
  }, [scene, layout.displayHeight])

  const dist = Math.abs(cameraZ - layout.z)
  const labelOpacity = Math.max(0, Math.min(1, 1 - (dist - 4) / 10))

  // Face building slightly toward street
  const rotationY = layout.side === 'left' ? Math.PI * 0.2 : -Math.PI * 0.2

  return (
    <group position={[layout.x, 0, layout.z]}>
      <group
        rotation={[0, rotationY, 0]}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
        onClick={(e) => { e.stopPropagation(); onSelect(project) }}
      >
        <primitive object={clonedScene} />
      </group>

      {/* Label floating above building */}
      {labelOpacity > 0.05 && (
        <Billboard follow lockY={true}>
          <Text
            position={[0, layout.displayHeight + 0.8, 0]}
            fontSize={0.45}
            color={project.accent}
            anchorX="center"
            anchorY="bottom"
            fillOpacity={labelOpacity}
            outlineWidth={0.03}
            outlineColor="#000000"
          >
            {project.name}
          </Text>
          <Text
            position={[0, layout.displayHeight + 0.3, 0]}
            fontSize={0.22}
            color="#8899aa"
            anchorX="center"
            anchorY="bottom"
            fillOpacity={labelOpacity * 0.7}
          >
            {project.subtitle}
          </Text>
        </Billboard>
      )}

      {/* Ground glow */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.5, 8]} />
        <meshBasicMaterial color={project.accent} transparent opacity={hovered ? 0.25 : 0.1} depthWrite={false} blending={THREE.AdditiveBlending} />
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
  const labelOpacity = Math.max(0, Math.min(1, 1 - (dist - 4) / 10))

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
          <Text position={[0, h / 2 + 0.8, 0]} fontSize={0.45} color={project.accent}
            anchorX="center" anchorY="bottom" fillOpacity={labelOpacity}
            outlineWidth={0.03} outlineColor="#000000">
            {project.name}
          </Text>
          <Text position={[0, h / 2 + 0.3, 0]} fontSize={0.22} color="#8899aa"
            anchorX="center" anchorY="bottom" fillOpacity={labelOpacity * 0.7}>
            {project.subtitle}
          </Text>
        </Billboard>
      )}
      <mesh position={[0, -h / 2 + 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.5, 8]} />
        <meshBasicMaterial color={project.accent} transparent opacity={0.1} depthWrite={false} blending={THREE.AdditiveBlending} />
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

// ═══ Street & Environment ═══

function Street() {
  return (
    <group>
      {/* Road */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -15]}>
        <planeGeometry args={[10, 80]} />
        <meshBasicMaterial color="#111318" />
      </mesh>
      {/* Center dashes */}
      {Array.from({ length: 25 }, (_, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, -50 + i * 4]}>
          <planeGeometry args={[0.1, 1.5]} />
          <meshBasicMaterial color="#2a2a35" />
        </mesh>
      ))}
      {/* Left sidewalk */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-4.2, 0.08, -15]}>
        <planeGeometry args={[1.5, 80]} />
        <meshBasicMaterial color="#161a22" />
      </mesh>
      {/* Right sidewalk */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[4.2, 0.08, -15]}>
        <planeGeometry args={[1.5, 80]} />
        <meshBasicMaterial color="#161a22" />
      </mesh>
      {/* Ground extending outward */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, -15]}>
        <planeGeometry args={[80, 100]} />
        <meshBasicMaterial color="#0a0c12" />
      </mesh>
    </group>
  )
}

function FillerBuildings() {
  // Two tones for depth — slightly visible, not pitch black
  const mat1 = useMemo(() => new THREE.MeshBasicMaterial({ color: '#121620' }), [])
  const mat2 = useMemo(() => new THREE.MeshBasicMaterial({ color: '#0e1218' }), [])
  return (
    <>
      {FILLERS.map((f, i) => (
        <mesh key={i} position={[f.x, f.h / 2, f.z]} material={i % 2 === 0 ? mat1 : mat2}>
          <boxGeometry args={[f.w, f.h, f.d]} />
        </mesh>
      ))}
    </>
  )
}

function Streetlamps() {
  const positions = useMemo(() => {
    const arr: [number, number][] = []
    for (let z = -40; z <= 15; z += 8) {
      arr.push([-3.5, z])
      arr.push([3.5, z])
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

// CSS stars — zero GPU cost
function CSSStars() {
  const stars = useMemo(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 45,
      size: 0.5 + Math.random() * 1.5,
      delay: Math.random() * 5, dur: 2 + Math.random() * 3,
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
    scene.fog = new THREE.Fog('#080c16', 8, 60)
    return () => { scene.fog = null }
  }, [scene])

  return (
    <>
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
        camera={{ fov: 65, near: 0.1, far: 80 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        onPointerMissed={() => setHoveredProject(null)}
      >
        <color attach="background" args={['#080c16']} />
        <SceneContent onSelectProject={onSelectProject} cameraZ={cameraZ} onCameraZ={setCameraZ} />
      </Canvas>
    </>
  )
}
