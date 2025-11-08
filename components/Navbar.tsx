'use client'

import { CSSProperties, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLanguage } from './LanguageProvider'

const LANG_ORDER: Array<'tr' | 'en' | 'pl'> = ['tr', 'pl', 'en']

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState<'home' | 'projects' | 'contact'>('home')
  const [clearWidth, setClearWidth] = useState(320)
  const signatureRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  useEffect(() => {
    const sectionIds: Array<'home' | 'projects' | 'contact'> = ['home', 'projects', 'contact']

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3
      let current: 'home' | 'projects' | 'contact' = 'home'

      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const offsetTop = el.offsetTop
        if (scrollPos >= offsetTop) {
          current = id
        }
      })

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (!signatureRef.current) return
      const rect = signatureRef.current.getBoundingClientRect()
      const widthWithGap = rect.width + 12
      setClearWidth(Math.min(Math.max(widthWithGap, 200), 320))
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  if (!mounted) {
    return null
  }

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 nav-glass"
        style={{ '--nav-clear-width': `${clearWidth}px` } as CSSProperties}
      >
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-0">
          {/* Profile signature */}
          <div ref={signatureRef} className="flex flex-col gap-1">
            <a href="#home" className="text-[0.8rem] md:text-[0.95rem] font-semibold tracking-[0.08em] text-white hover:text-white/80 transition-colors">
              {t.profile.title}
            </a>
            <span className="text-[0.65rem] md:text-xs tracking-[0.18em] uppercase text-white/60">
              {t.profile.location}
            </span>
          </div>

          {/* Language Switcher */}
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center gap-2">
            {LANG_ORDER.map((code) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`relative flex h-7 md:h-8 min-w-[2rem] md:min-w-[2.25rem] items-center justify-center rounded-full bg-[#c92a2a] text-[0.65rem] md:text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-white transition-all duration-300 ${
                  language === code
                    ? 'shadow-[0_0_14px_rgba(201,42,42,0.45)] scale-[1.05]'
                    : 'opacity-60 hover:opacity-100'
                }`}
                aria-label={`Switch language to ${t.languageNames[code]}`}
              >
                <span className="px-2 md:px-3 drop-shadow-[0_0_6px_rgba(255,255,255,0.45)]">{t.languageNames[code]}</span>
              </button>
            ))}
          </div>

          {/* Navigation - Right */}
          <div className="flex items-end gap-4 md:gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="flex flex-col items-center gap-1 md:gap-2">
                <a
                  href={link.href}
                  className={`text-[0.65rem] md:text-xs font-medium tracking-widest transition-colors ${
                    activeSection === link.href.replace('#', '') ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
                <span
                  className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full transition-all duration-300 ${
                    activeSection === link.href.replace('#', '') ? 'bg-[#c92a2a] scale-110 shadow-[0_0_12px_rgba(201,42,42,0.45)]' : 'bg-transparent scale-75'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </nav>
      {/* Fixed 2025 Year Badge */}
      <div className="fixed top-[90px] md:top-[70px] left-4 md:left-8 z-40 flex gap-1">
        {t.profile.year.split('').map((digit, index) => (
          <span
            key={`${digit}-${index}`}
            className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-[#c92a2a] text-[0.65rem] md:text-[0.75rem] font-semibold text-white shadow-[0_0_12px_rgba(201,42,42,0.35)]"
          >
            {digit}
          </span>
        ))}
      </div>
    </>
  )
}
