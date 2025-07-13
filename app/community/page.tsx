'use client'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-primary-500 cyberpunk-bg cyberpunk-grid">
      {/* 3D Background Elements */}
      <div className="cyberpunk-3d-elements">
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-black cyberpunk-font">
            Coming Soon
          </h1>
        </div>
      </div>
    </div>
  )
} 