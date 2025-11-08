'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from './LanguageProvider'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative"
    >
      <div className="w-full px-6 md:px-12 py-32">
        {/* Faint watermark text */}
        <div className="absolute right-6 md:right-12 top-[25%] text-[9vw] font-bold uppercase tracking-[0.18em] text-white/5 select-none">
          {t.hero.headingLabel}
        </div>
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Heading */}
          <div className="mb-12">
            <p className="text-sm md:text-base text-gray-500 tracking-widest mb-4">{t.hero.headingLabel}</p>
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] font-medium leading-[0.9] tracking-tight">
              Ege<br />
              Zambelli
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-xl md:ml-[50%]">
            <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed">
              {t.hero.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

