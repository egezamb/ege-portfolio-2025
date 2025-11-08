import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

