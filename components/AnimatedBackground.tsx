'use client'

export default function AnimatedBackground() {
  return (
    <div className="animated-lines">
      {/* Lightning lines falling from top to bottom */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="lightning-line" />
      ))}
    </div>
  )
}
