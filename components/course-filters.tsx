'use client'

import { useState } from 'react'

export function CourseFilters({ onFilterChange }: { onFilterChange: (filters: string[]) => void }) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const categories = ['All Courses', 'Beginner', 'Intermediate', 'Advanced']

  const toggleFilter = (category: string) => {
    let newFilters: string[]
    
    if (category === 'All Courses') {
      // If "All Courses" is clicked, clear all filters
      newFilters = []
    } else {
      // If "All Courses" is currently active, remove it and add the specific category
      if (activeFilters.includes('All Courses')) {
        newFilters = [category]
      } else {
        // Toggle the specific category
        newFilters = activeFilters.includes(category)
          ? activeFilters.filter(filter => filter !== category)
          : [...activeFilters, category]
      }
    }
    
    setActiveFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleFilter(category)}
            className={`cyberpunk-button px-4 py-2 font-bold hover:scale-105 transition-transform duration-300 cyberpunk-font ${
              (category === 'All Courses' && activeFilters.length === 0) || 
              (category !== 'All Courses' && activeFilters.includes(category))
                ? 'active'
                : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
} 