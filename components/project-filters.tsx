'use client'

import { useState } from 'react'

export function ProjectFilters({ onFilterChange }: { onFilterChange: (filters: string[]) => void }) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const categories = ['DeFi', 'AI', 'SocialFi', 'GameFi', 'RWA', 'InfoFi']

  const toggleFilter = (category: string) => {
    const newFilters = activeFilters.includes(category)
      ? activeFilters.filter(filter => filter !== category)
      : [...activeFilters, category]
    
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
            className={`cyberpunk-button px-4 py-2 font-bold hover:scale-105 transition-transform duration-300 ${
              activeFilters.includes(category) ? 'active' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
} 