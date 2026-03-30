'use client'

import { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import type { Project } from './data'
import DetailPanel from './DetailPanel'
import MobileSkyline from './MobileSkyline'

// Dynamically import Three.js scene (no SSR — Three.js needs DOM)
const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-[#0a1628] flex items-center justify-center">
      <p className="text-white/60 tracking-[0.3em] text-sm uppercase">Loading...</p>
    </div>
  ),
})

export default function ShowcaseContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Detect screen size
  useEffect(() => {
    setMounted(true)
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleSelect = useCallback((p: Project) => setSelectedProject(p), [])
  const handleClose = useCallback(() => setSelectedProject(null), [])

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-[#0a1628] flex items-center justify-center">
        <p className="text-white/60 tracking-[0.3em] text-sm uppercase">Entering the city...</p>
      </div>
    )
  }

  return (
    <div className="bg-[#0a1628]">
      {isMobile ? (
        <MobileSkyline onSelectProject={handleSelect} />
      ) : (
        <>
          <Scene3D
            onSelectProject={handleSelect}
            hoveredProject={hoveredProject}
            setHoveredProject={setHoveredProject}
          />

          {/* UI Overlays */}
          <div className="fixed inset-0 z-50 pointer-events-none">
            {/* Top left — name */}
            <a
              href="/"
              className="absolute top-6 left-8 text-white text-lg font-bold tracking-[0.2em] uppercase pointer-events-auto hover:text-white/80 transition-colors"
            >
              Adnaan Iqbal
            </a>

            {/* Top right — nav */}
            <div className="absolute top-6 right-8 flex gap-6 pointer-events-auto">
              <a href="/about" className="text-white/50 hover:text-white text-sm tracking-wider transition-colors">About</a>
              <a href="https://github.com/artificialadnaan" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm tracking-wider transition-colors">GitHub</a>
              <a href="/contact" className="text-white/50 hover:text-white text-sm tracking-wider transition-colors">Contact</a>
            </div>

            {/* Bottom center — hint */}
            {!selectedProject && (
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="text-white/30 text-xs tracking-[0.3em] uppercase">
                  Click any building to explore
                </span>
              </div>
            )}
          </div>
        </>
      )}

      {/* Detail panel (shared between mobile and desktop) */}
      {selectedProject && (
        <DetailPanel
          project={selectedProject}
          onClose={handleClose}
          mobile={isMobile}
        />
      )}
    </div>
  )
}
