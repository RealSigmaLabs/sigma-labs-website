'use client'

import { useState } from 'react'
import { ProjectGrid } from '../../components/project-grid'
import { ProjectFilters } from '../../components/project-filters'

export default function ProjectsPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters)
  }

  return (
    <div className="min-h-screen bg-primary-500 cyberpunk-bg cyberpunk-grid">
      {/* 3D Background Elements */}
      <div className="cyberpunk-3d-elements">
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
      </div>
      
      {/* Animated Particles */}
      <div className="cyberpunk-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="cyberpunk-font text-4xl font-bold tracking-tight text-black sm:text-5xl glitch mb-6" data-text="OUR PROJECTS">
            OUR PROJECTS
          </h1>
          <p className="cyberpunk-font-thin text-lg leading-8 text-black">
            Discover innovative projects built by our community of developers and innovators.
          </p>
        </div>
        
        <div className="mt-16">
          <ProjectFilters onFilterChange={handleFilterChange} />
          <ProjectGrid activeFilters={activeFilters} />
        </div>
      </div>
    </div>
  )
} 