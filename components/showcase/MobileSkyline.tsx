'use client'

import { useState, useEffect, useRef } from 'react'
import { projects, mobileBuildingHeights, mobileOrder, type Project } from './data'

// ── CSS Stars ──
function Stars() {
  const stars = useRef(
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60,
      size: 1 + Math.random() * 1.5,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 3,
    }))
  ).current

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

// ── Mobile Building Card ──
function MobileBuilding({
  project,
  height,
  onClick,
}: {
  project: Project
  height: number
  onClick: () => void
}) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center snap-center cursor-pointer transition-transform duration-200 active:scale-105"
      onClick={onClick}
      style={{ minWidth: 100 }}
    >
      {/* Building image */}
      <div className="relative" style={{ height }}>
        <img
          src={project.buildingImage}
          alt={project.name}
          className="h-full w-auto object-contain"
          loading="lazy"
          onError={(e) => {
            // Fallback: render a colored rectangle
            const el = e.target as HTMLImageElement
            el.style.display = 'none'
            const parent = el.parentElement
            if (parent) {
              const fallback = document.createElement('div')
              fallback.style.cssText = `width:${height * 0.4}px;height:${height}px;background:linear-gradient(180deg,${project.accent}30,${project.accent}10);border:1px solid ${project.accent}25;border-radius:3px 3px 0 0;`
              parent.appendChild(fallback)
            }
          }}
        />
        {/* Ground glow */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-6 rounded-full blur-lg"
          style={{ background: project.accent, opacity: 0.25 }}
        />
      </div>

      {/* Label */}
      <div className="mt-3 text-center">
        <div className="text-xs font-semibold tracking-wider" style={{ color: project.accent }}>
          {project.name}
        </div>
        <div className="text-[10px] text-white/40">{project.subtitle}</div>
      </div>
    </div>
  )
}

// ── Main Mobile Component ──
export default function MobileSkyline({
  onSelectProject,
}: {
  onSelectProject: (p: Project) => void
}) {
  const [showHint, setShowHint] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Hide scroll hint after first scroll or 2s
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 2000)
    const el = scrollRef.current
    const onScroll = () => setShowHint(false)
    el?.addEventListener('scroll', onScroll, { once: true })
    return () => {
      clearTimeout(timer)
      el?.removeEventListener('scroll', onScroll)
    }
  }, [])

  const orderedProjects = mobileOrder.map(id => projects.find(p => p.id === id)!).filter(Boolean)

  return (
    <div className="fixed inset-0 bg-[#0a1628] overflow-hidden">
      {/* Stars */}
      <Stars />

      {/* Header */}
      <div className="relative z-20 flex items-center justify-between px-5 pt-5 pb-3">
        <a href="/" className="text-sm font-bold text-white tracking-wider uppercase">
          Adnaan Iqbal
        </a>
        <div className="flex gap-4">
          <a href="/about" className="text-white/50 hover:text-white text-xs tracking-wider transition-colors">About</a>
          <a href="https://github.com/artificialadnaan" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-xs tracking-wider transition-colors">GitHub</a>
          <a href="/contact" className="text-white/50 hover:text-white text-xs tracking-wider transition-colors">Contact</a>
        </div>
      </div>

      {/* Horizontal scroll skyline */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: '65vh' }}>
        {/* Ground strip */}
        <div className="absolute bottom-0 left-0 right-0 h-20 z-10"
          style={{ background: 'linear-gradient(180deg, #111827, #0a1628)' }}
        >
          {/* Animated road dashes */}
          <div className="absolute top-1/2 left-0 right-0 h-px overflow-hidden">
            <div
              className="h-full"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 20px, transparent 20px, transparent 40px)',
                backgroundSize: '40px 1px',
                animation: 'roadScroll 2s linear infinite',
                width: '200%',
              }}
            />
          </div>
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="absolute bottom-20 left-0 right-0 top-0 flex items-end gap-6 px-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {/* Leading spacer */}
          <div className="flex-shrink-0 w-4" />

          {orderedProjects.map((project) => (
            <MobileBuilding
              key={project.id}
              project={project}
              height={mobileBuildingHeights[project.id] || 160}
              onClick={() => onSelectProject(project)}
            />
          ))}

          {/* Trailing spacer */}
          <div className="flex-shrink-0 w-4" />
        </div>
      </div>

      {/* Scroll hint */}
      {showHint && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 animate-pulse pointer-events-none">
          <span className="text-white/30 text-2xl">&rarr;</span>
        </div>
      )}

      {/* Bottom text */}
      <div className="absolute bottom-3 left-0 right-0 z-20 text-center">
        <span className="text-white/30 text-[10px] tracking-[3px] uppercase">
          Swipe to explore
        </span>
      </div>
    </div>
  )
}
