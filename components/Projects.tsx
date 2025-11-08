"use client"

import { ArrowUpRight, Github } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-32">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="text-center mb-24 space-y-6">
          <p className="text-xs tracking-[0.5em] uppercase text-white/40">{t.projects.badge}</p>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight">
            {t.projects.heading}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-400">
            {t.projects.subheading}
          </p>
        </div>

        <div className="grid gap-16 xl:gap-20">
          {t.projects.items.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-white/5 backdrop-blur-sm"
            >
              <div className="grid lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)] gap-10 lg:gap-16 p-8 md:p-12">
                <div className="space-y-10">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                      <span className="text-xs tracking-[0.4em] uppercase text-white/70">{project.category}</span>
                      <span className="inline-flex items-center gap-3 text-white text-sm font-semibold">
                        <span className="h-px w-8 bg-white/50" />
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <p className="text-sm uppercase tracking-[0.45em] text-white/40">{project.subtitle}</p>
                      <h3 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
                      {project.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-3 text-sm text-gray-300">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-white to-white/40" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
                        <p className="text-xs uppercase tracking-[0.4em] text-white/40">{t.projects.metricsLabel}</p>
                        <div className="grid grid-cols-3 gap-3">
                          {project.metrics.map((metric) => (
                            <div key={metric.label} className="rounded-2xl bg-black/40 border border-white/5 px-4 py-5 text-center">
                              <div className="text-xl font-semibold text-white">{metric.value}</div>
                              <p className="text-[11px] uppercase tracking-wide text-white/50">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <aside className="flex flex-col justify-between gap-10">
                  <div className="space-y-6">
                    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 space-y-4">
                      <p className="text-xs uppercase tracking-[0.4em] text-white/40">{t.projects.stackLabel}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-wide text-white/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 space-y-4">
                      <p className="text-xs uppercase tracking-[0.4em] text-white/40">{t.projects.contributionsLabel}</p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {project.contributions}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/20"
                      >
                        <Github className="h-4 w-4" />
                        {t.projects.repoCta}
                      </a>
                    )}
                    <a
                      href={project.caseStudy ?? '#projects'}
                      className="inline-flex items-center gap-2 rounded-full border border-transparent bg-white text-black px-5 py-3 text-sm font-semibold transition hover:bg-white/80"
                    >
                      {t.projects.caseStudyCta}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </aside>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

