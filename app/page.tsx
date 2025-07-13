import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { WhySigma } from '@/components/why-sigma'
import { Mission } from '@/components/mission'
import { Team } from '@/components/team'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <WhySigma />
      <Mission />
      <Team />
    </main>
  )
} 