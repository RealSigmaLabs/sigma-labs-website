'use client'

import { motion } from 'framer-motion'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  coverImage?: string
  url?: string
}

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "QUICKY",
    description: "Chatting app for real HODLers. Pump & Chat with your homies together.",
    tags: ["SocialFi"],
    coverImage: "/uploads/projects/QUICKY.png",
    url: "https://quicky.lol"
  }
]

interface ProjectGridProps {
  activeFilters?: string[]
}

export function ProjectGrid({ activeFilters = [] }: ProjectGridProps) {
  const filteredProjects = activeFilters.length === 0 
    ? sampleProjects 
    : sampleProjects.filter(project => 
        project.tags.some(tag => activeFilters.includes(tag))
      )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="cyberpunk-text-block p-6"
        >
          <div className="w-full h-48 bg-black rounded-lg mb-4 border border-black overflow-hidden">
            {project.coverImage && (
              <img 
                src={project.coverImage} 
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to black background if image fails to load
                  e.currentTarget.style.display = 'none'
                }}
              />
            )}
          </div>
          <h3 className="cyberpunk-font text-xl font-bold text-black mb-2">{project.title}</h3>
          <p className="cyberpunk-font-thin text-black mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-yellow-300 text-black rounded-full text-sm border border-black">
                {tag}
              </span>
            ))}
          </div>
          {project.url ? (
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-yellow-300 text-black font-bold py-2 px-4 rounded border border-black hover:bg-yellow-400 transition-colors duration-300 cyberpunk-font block text-center"
            >
              Explore Project
            </a>
          ) : (
            <button className="w-full bg-yellow-300 text-black font-bold py-2 px-4 rounded border border-black hover:bg-yellow-400 transition-colors duration-300 cyberpunk-font">
              Explore Project
            </button>
          )}
        </motion.div>
      ))}
    </div>
  )
} 