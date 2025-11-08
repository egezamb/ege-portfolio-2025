'use client'

import { useLanguage } from './LanguageProvider'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-32 min-h-screen flex items-center">
      <div className="max-w-[1600px] mx-auto px-8 w-full">
        <div className="text-left mb-24">
          <h2 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            {t.contact.heading}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 tracking-wide">{t.contact.contactLabel}</h3>
            
            <div className="space-y-8 text-lg">
              <div>
                <p className="text-gray-500 mb-2 text-sm tracking-wider">{t.contact.emailLabel}</p>
                <a href={`mailto:${t.contact.email}`} className="text-white hover:text-gray-400 transition-colors">
                  {t.contact.email}
                </a>
              </div>

              <div>
                <p className="text-gray-500 mb-2 text-sm tracking-wider">{t.contact.locationLabel}</p>
                <p className="text-white">{t.contact.location}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-2 text-sm tracking-wider">{t.contact.socialLabel}</p>
                <div className="flex flex-col gap-3">
                  {t.contact.social.map((item) => (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                      {item.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="flex items-center">
            <a
              href={`mailto:${t.contact.email}`}
              className="inline-block px-12 py-6 bg-white text-[#c92a2a] text-lg font-bold tracking-wide hover:bg-gray-200 transition-all duration-300"
            >
              {t.contact.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
