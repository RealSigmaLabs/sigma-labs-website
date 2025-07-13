'use client'

import { motion } from 'framer-motion'

interface Course {
  id: number
  title: string
  description: string
  difficulty: string
  duration: string
  coverImage?: string
}

const sampleCourses: Course[] = [
  {
    id: 1,
    title: "Courses Coming Soon",
    description: "Amazing courses are being created. Stay tuned for comprehensive learning content!",
    difficulty: "All Levels",
    duration: "TBA",
    coverImage: "/uploads/courses/coming-soon.jpg"
  }
]

interface CourseGridProps {
  activeFilters?: string[]
}

export function CourseGrid({ activeFilters = [] }: CourseGridProps) {
  const filteredCourses = activeFilters.length === 0 
    ? sampleCourses 
    : sampleCourses.filter(course => 
        activeFilters.includes(course.difficulty)
      )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredCourses.map((course) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-yellow-300 rounded-lg shadow-lg p-6 border-2 border-black cyberpunk-card"
        >
          <div className="w-full h-48 bg-black rounded-lg mb-4 flex items-center justify-center">
            <span className="text-yellow-300 cyberpunk-font text-lg text-center px-4">
              {course.title}
            </span>
          </div>
          <h3 className="text-xl font-bold text-black mb-2 cyberpunk-font">{course.title}</h3>
          <p className="text-black mb-4 cyberpunk-font-thin">{course.description}</p>
          <div className="flex justify-between items-center">
            <span className="px-2 py-1 bg-black text-yellow-300 rounded-full text-sm cyberpunk-font">
              {course.difficulty}
            </span>
            <span className="text-black cyberpunk-font-thin">{course.duration}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 