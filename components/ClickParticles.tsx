'use client'

import { useEffect } from 'react'

const PARTICLE_COLORS = ['rgba(201,42,42,0.9)', 'rgba(255,255,255,0.75)', 'rgba(255,96,96,0.85)']

export default function ClickParticles() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const particles = 12
      for (let i = 0; i < particles; i += 1) {
        const particle = document.createElement('span')
        particle.className = 'click-particle'

        const size = 4 + Math.random() * 6
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.left = `${event.clientX}px`
        particle.style.top = `${event.clientY}px`
        particle.style.background = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]

        const angle = Math.random() * Math.PI * 2
        const velocity = 24 + Math.random() * 24
        const translateX = Math.cos(angle) * velocity
        const translateY = Math.sin(angle) * velocity

        particle.style.setProperty('--particle-x', `${translateX}px`)
        particle.style.setProperty('--particle-y', `${translateY}px`)

        document.body.appendChild(particle)

        const removeParticle = () => {
          particle.removeEventListener('animationend', removeParticle)
          particle.remove()
        }

        particle.addEventListener('animationend', removeParticle)
      }
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return null
}



