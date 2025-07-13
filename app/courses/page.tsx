'use client'

import { useState } from 'react'
import { CourseGrid } from '../../components/course-grid'
import { CourseFilters } from '../../components/course-filters'

export default function CoursesPage() {
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
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="cyberpunk-font text-4xl font-bold tracking-tight text-black sm:text-5xl glitch mb-6" data-text="OUR COURSES">
            OUR COURSES
          </h1>
          <p className="mt-4 text-lg leading-8 text-black cyberpunk-font-thin">
            Learn from comprehensive courses covering the latest technologies and development practices.
          </p>
        </div>
        
        <div className="mt-16">
          <CourseFilters onFilterChange={handleFilterChange} />
          <CourseGrid activeFilters={activeFilters} />
        </div>
      </div>
    </div>
  )
} 