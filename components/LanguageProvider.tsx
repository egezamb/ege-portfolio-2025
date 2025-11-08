'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type LanguageCode = 'tr' | 'en' | 'pl'

type ProjectContent = {
  title: string
  subtitle: string
  description: string
  year: string
  category: string
  highlights: string[]
  stack: string[]
  metrics: { label: string; value: string }[]
  image: string
  repo?: string
  caseStudy?: string
  contributions: string
}

type Translations = {
  languageNames: Record<LanguageCode, string>
  nav: { home: string; projects: string; contact: string }
  hero: { headingLabel: string; description: string }
  profile: { title: string; location: string; year: string }
  projects: {
    heading: string
    subheading: string
    badge: string
    items: ProjectContent[]
    caseStudyCta: string
    repoCta: string
    contributionsLabel: string
    stackLabel: string
    metricsLabel: string
  }
  contact: {
    heading: string
    subheading: string
    contactLabel: string
    emailLabel: string
    locationLabel: string
    socialLabel: string
    email: string
    location: string
    social: { label: string; href: string }[]
    cta: string
  }
}

const translations: Record<LanguageCode, Translations> = {
  tr: {
    languageNames: { tr: 'TR', en: 'ENG', pl: 'PL' },
    nav: { home: 'Ana Sayfa', projects: 'Projeler', contact: 'İletişim' },
    hero: {
      headingLabel: 'WHO IS',
      description:
        'Azure ekosistemi üzerine yoğunlaşan, bulut mimarisi ve otomasyonda kendini geliştiren 3. sınıf yazılım geliştirme öğrencisiyim. Python, veri odaklı otomasyon ve penetrasyon araştırmaları alanlarında orta seviye deneyimle projeler üretiyorum; hedefim cloud & security alanında uzmanlaşarak kurumsal ölçekli çözümler geliştirmek.',
    },
    profile: {
      title: 'Cloud Engineer / Security Enthusiast',
      location: 'Wrocław · Poland',
      year: '2025',
    },
    projects: {
      badge: 'Case Studies',
      heading: 'Seçili Projeler',
      subheading:
        'Siber güvenlik araştırmaları, tehdit simülasyonları ve bulut otomasyonu çalışmalarının öne çıkan başlıkları.',
      caseStudyCta: 'Detaylar',
      repoCta: 'Kod Deposu',
      contributionsLabel: 'Katkılar',
      stackLabel: 'Teknoloji Yığını',
      metricsLabel: 'Metrikler',
      items: [
        {
          title: 'Tez · RAT Threat Simulation & Detection',
          subtitle: 'Bayrak niteliğinde araştırma tezi',
          description:
            'Windows Defender’ı aşabilen, TLS 443 üzerinden jitter tabanlı beacon ve adaptif karşı önlemler barındıran özel bir RAT ile Red Team vs Blue Team simülasyonu.',
          year: '2025',
          category: 'Threat Simulation',
          highlights: [
            'Şifrelenmiş çok aşamalı C2 pipeline',
            'Jitter analizi ile ağ tabanlı tespit',
            'Avcı ekipleri için telemetri panosu',
          ],
          stack: ['Python', 'AsyncIO', 'TLS', 'Windows Internals', 'Pandas'],
          metrics: [
            { label: 'Faz', value: '3' },
            { label: 'Sunucu', value: '2 VDS' },
            { label: 'Gecikme', value: '<45ms' },
          ],
          image: '/images/rat-project.svg',
          repo: 'https://github.com',
          contributions:
            'Mimari tasarım, implant geliştirme, beacon analitiği ve Blue Team deneyimi için avcılık panoları dahil uçtan uca tüm bileşenleri üstlendim.'
        },
        {
          title: 'Network Beacon Detector',
          subtitle: 'Saldırgan sinyal analitiği',
          description:
            'Paket zamanlamaları ve jitter varyansını inceleyerek kötü amaçlı beacon davranışlarını gerçek zamana yakın şekilde ortaya çıkaran makine öğrenimi çözücü.',
          year: '2024',
          category: 'Detection Engineering',
          highlights: [
            'Uyarlanabilir eşiklerle akış skorlaması',
            'Jitter parmak izi çıkarımı ve kümeleme',
            'SOC süreçleri için etkileşimli panolar',
          ],
          stack: ['Python', 'Scikit-learn', 'Kafka', 'Grafana'],
          metrics: [
            { label: 'Tespit', value: '98%' },
            { label: 'Sinyal', value: '12k+/gün' },
            { label: 'FP', value: '<2%' },
          ],
          image: '/images/network-beacon.svg',
          repo: 'https://github.com',
          contributions:
            'Veri toplama pipeline’ı, özellik mühendisliği, model eğitimi ve görselleştirme katmanının tamamından sorumluydum.'
        },
        {
          title: 'Azure Cloud Automation Suite',
          subtitle: 'Operasyonel bulut araç takımı',
          description:
            'Azure kaynak yönetimi, IaC şablonları ve CI/CD süreçlerini tek merkezde toplayan otomasyon paketi. Güvenlik ve izleme entegrasyonlarıyla desteklenir.',
          year: '2024',
          category: 'Cloud Engineering',
          highlights: [
            'ARM & Bicep ile hızlı kaynak provizyonu',
            'Azure DevOps / GitHub Actions pipeline otomasyonu',
            'Defender & Monitor entegrasyonu ile uyumluluk takibi',
          ],
          stack: ['Azure', 'Bicep', 'PowerShell', 'GitHub Actions'],
          metrics: [
            { label: 'Otomasyon', value: '90%' },
            { label: 'Pipeline', value: '<5 dk' },
            { label: 'Kaynak', value: '30+' },
          ],
          image: '/images/azure-automation.svg',
          repo: 'https://github.com',
          contributions:
            'Şablon tasarımı, pipeline otomasyonu, güvenlik entegrasyonları ve dokümantasyonu hazırlayarak operasyonel standartları belirledim.'
        },
        {
          title: 'Security Analysis Tools',
          subtitle: 'Ofansif otomasyon paketi',
          description:
            'Keşif, sömürü desteği ve raporlama süreçlerini hızlandıran modüler araç seti. Red/Purple Team egzersizleri için tasarlandı.',
          year: '2023',
          category: 'Offensive Tooling',
          highlights: [
            'Otomatik keşif ve alan genişliği analizleri',
            'AV atlatmalı payload üreticileri',
            'Kanıt gömülü otomatik raporlama',
          ],
          stack: ['Python', 'Bash', 'Go', 'Elastic Stack'],
          metrics: [
            { label: 'Modül', value: '18' },
            { label: 'Tarama', value: '350+/run' },
            { label: 'Otomasyon', value: '80%' },
          ],
          image: '/images/security-tools.svg',
          repo: 'https://github.com',
          contributions:
            'Recon botlarından rapor otomasyonuna kadar tüm modülleri kodlayıp sürdürdüm, ekiplerin yeniden kullanımına yönelik doküman sağladım.'
        },
      ],
    },
    contact: {
      heading: 'İletişime Geçelim',
      subheading: 'Projeler, iş birlikleri veya topluluk girişimleri için her zaman hazırım.',
      contactLabel: 'İletişim',
      emailLabel: 'E-posta',
      locationLabel: 'Konum',
      socialLabel: 'Sosyal',
      email: 'egezambelli@protonmail.com',
      location: 'Wrocław, Polonya',
      social: [
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
      ],
      cta: 'E-posta Gönder →',
    },
  },
  en: {
    languageNames: { tr: 'TR', en: 'ENG', pl: 'PL' },
    nav: { home: 'Home', projects: 'Projects', contact: 'Contact' },
    hero: {
      headingLabel: 'WHO IS',
      description:
        'Third-year software engineering student specialising in Azure cloud architecture and automation. I build projects that combine mid-level experience in Python, data-driven automation, and cybersecurity research, aiming to grow into a cloud & security engineering role delivering scalable solutions.',
    },
    profile: {
      title: 'Cloud Engineer / Security Enthusiast',
      location: 'Based in Wrocław · Poland',
      year: '2025',
    },
    projects: {
      badge: 'Case Studies',
      heading: 'Selected Projects',
      subheading: 'Highlights from threat simulation, detection engineering, and cloud automation initiatives.',
      caseStudyCta: 'Case Study',
      repoCta: 'View Repository',
      contributionsLabel: 'Contributions',
      stackLabel: 'Tech Stack',
      metricsLabel: 'Metrics',
      items: [
        {
          title: 'Thesis · RAT Threat Simulation & Detection',
          subtitle: 'Flagship research thesis',
          description:
            'Red Team vs Blue Team simulation featuring a custom RAT that bypasses Windows Defender, tunnels over TLS 443, and adapts detection countermeasures through jitter-aware beacons.',
          year: '2025',
          category: 'Threat Simulation',
          highlights: [
            'Encrypted multi-stage C2 pipeline',
            'Jitter analytics driving network detection',
            'Hunter dashboard with live telemetry',
          ],
          stack: ['Python', 'AsyncIO', 'TLS', 'Windows Internals', 'Pandas'],
          metrics: [
            { label: 'Phases', value: '3' },
            { label: 'Endpoints', value: '2 VDS' },
            { label: 'Latency', value: '<45ms' },
          ],
          image: '/images/rat-project.svg',
          repo: 'https://github.com',
          contributions:
            'Owned architecture, implant development, beacon analytics, and hunter dashboards end-to-end with documentation and testing.'
        },
        {
          title: 'Network Beacon Detector',
          subtitle: 'Adversary signal intelligence',
          description:
            'Machine learning detector that analyses packet timings, jitter variance, and entropy to surface malicious beacon patterns across enterprise networks in near real time.',
          year: '2024',
          category: 'Detection Engineering',
          highlights: [
            'Streaming anomaly scoring with adaptive baselines',
            'Jitter fingerprinting and clustering features',
            'Interactive dashboards for SOC investigations',
          ],
          stack: ['Python', 'Scikit-learn', 'Kafka', 'Grafana'],
          metrics: [
            { label: 'Detection', value: '98%' },
            { label: 'Signals', value: '12k+/day' },
            { label: 'False Positives', value: '<2%' },
          ],
          image: '/images/network-beacon.svg',
          repo: 'https://github.com',
          contributions:
            'Designed data ingestion, feature engineering, model training, and visualization layers for SOC-ready workflows.'
        },
        {
          title: 'Azure Cloud Automation Suite',
          subtitle: 'Operational cloud toolkit',
          description:
            'Modular automation pack orchestrating Azure resource provisioning, IaC templates, and CI/CD pipelines with built-in security and monitoring integrations.',
          year: '2024',
          category: 'Cloud Engineering',
          highlights: [
            'ARM & Bicep orchestration for one-click deployments',
            'Azure DevOps / GitHub Actions pipelines',
            'Defender for Cloud & Monitor alignment',
          ],
          stack: ['Azure', 'Bicep', 'PowerShell', 'GitHub Actions'],
          metrics: [
            { label: 'Automation', value: '90%' },
            { label: 'Pipeline', value: '<5min' },
            { label: 'Resources', value: '30+' },
          ],
          image: '/images/azure-automation.svg',
          repo: 'https://github.com',
          contributions:
            'Implemented IaC templates, pipeline automation, security hooks, and onboarding docs for cloud operations teams.'
        },
        {
          title: 'Security Analysis Tools',
          subtitle: 'Offensive automation suite',
          description:
            'Toolkit accelerating reconnaissance, exploitation support, and evidence-driven reporting for red and purple team operations.',
          year: '2023',
          category: 'Offensive Tooling',
          highlights: [
            'Automated reconnaissance & attack surface mapping',
            'Payload generators with AV evasion templates',
            'Auto-generated reports with embedded evidence',
          ],
          stack: ['Python', 'Bash', 'Go', 'Elastic Stack'],
          metrics: [
            { label: 'Modules', value: '18' },
            { label: 'Scans', value: '350+/run' },
            { label: 'Automation', value: '80%' },
          ],
          image: '/images/security-tools.svg',
          repo: 'https://github.com',
          contributions:
            'Built reconnaissance bots, exploitation helpers, and reporting automation with reusable docs for red/purple teams.'
        },
      ],
    },
    contact: {
      heading: 'Let’s Work Together',
      subheading: 'Open to freelance work, research collaborations, and community initiatives.',
      contactLabel: 'Contact',
      emailLabel: 'Email',
      locationLabel: 'Location',
      socialLabel: 'Social',
      email: 'egezambelli@protonmail.com',
      location: 'Wrocław, Poland',
      social: [
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
      ],
      cta: 'Send an Email →',
    },
  },
  pl: {
    languageNames: { tr: 'TR', en: 'ENG', pl: 'PL' },
    nav: { home: 'Start', projects: 'Projekty', contact: 'Kontakt' },
    hero: {
      headingLabel: 'KIM JEST',
      description:
        'Student trzeciego roku inżynierii oprogramowania specjalizujący się w Azure i automatyzacji chmury. Realizuję projekty oparte na średnim doświadczeniu w Pythonie, automatyzacji danych oraz badaniach cyberbezpieczeństwa, dążąc do roli inżyniera chmury i bezpieczeństwa z rozwiązaniami dla środowisk korporacyjnych.',
    },
    profile: {
      title: 'Inżynier Chmury / Entuzjasta Bezpieczeństwa',
      location: 'Wrocław · Polska',
      year: '2025',
    },
    projects: {
      badge: 'Studia przypadków',
      heading: 'Wybrane Projekty',
      subheading:
        'Najciekawsze prace z obszaru symulacji zagrożeń, detekcji ataków oraz automatyzacji chmury.',
      caseStudyCta: 'Szczegóły',
      repoCta: 'Repozytorium',
      contributionsLabel: 'Wkład',
      stackLabel: 'Technologie',
      metricsLabel: 'Metryki',
      items: [
        {
          title: 'Teza · RAT Threat Simulation & Detection',
          subtitle: 'Kluczowa praca dyplomowa',
          description:
            'Symulacja Red vs Blue z autorskim RAT-em omijającym Windows Defender, działającym przez TLS 443 z jitter-aware beaconing i adaptacyjną obroną.',
          year: '2025',
          category: 'Symulacja zagrożeń',
          highlights: [
            'Szyfrowany wieloetapowy pipeline C2',
            'Analityka jitteru dla detekcji sieciowej',
            'Panel telemetryczny dla zespołów SOC',
          ],
          stack: ['Python', 'AsyncIO', 'TLS', 'Windows Internals', 'Pandas'],
          metrics: [
            { label: 'Etapy', value: '3' },
            { label: 'Hosty', value: '2 VDS' },
            { label: 'Opóźnienie', value: '<45ms' },
          ],
          image: '/images/rat-project.svg',
          repo: 'https://github.com',
          contributions:
            'Odpowiadałem za architekturę, rozwój implantu, analitykę beaconów i panel telemetryczny wraz z testami i dokumentacją.'
        },
        {
          title: 'Network Beacon Detector',
          subtitle: 'Analityka sygnałów przeciwnika',
          description:
            'System ML analizujący czas pakietów, zmienność jitteru i entropię, wykrywający złośliwe beacony w sieciach korporacyjnych niemal w czasie rzeczywistym.',
          year: '2024',
          category: 'Inżynieria detekcji',
          highlights: [
            'Skoring anomalii w strumieniu z adaptacyjnymi progami',
            'Fingerprinting jitteru i klasteryzacja',
            'Interaktywne dashboardy dla śledztw SOC',
          ],
          stack: ['Python', 'Scikit-learn', 'Kafka', 'Grafana'],
          metrics: [
            { label: 'Wykrycia', value: '98%' },
            { label: 'Sygnały', value: '12k+/dzień' },
            { label: 'False Positive', value: '<2%' },
          ],
          image: '/images/network-beacon.svg',
          repo: 'https://github.com',
          contributions:
            'Zaprojektowałem pipeline danych, inżynierię cech, trening modeli i warstwę wizualizacji dla SOC.'
        },
        {
          title: 'Azure Cloud Automation Suite',
          subtitle: 'Operacyjny zestaw chmurowy',
          description:
            'Modułowy pakiet automatyzacji dla wdrożeń Azure, IaC i CI/CD z wbudowanymi integracjami bezpieczeństwa oraz monitoringu.',
          year: '2024',
          category: 'Cloud Engineering',
          highlights: [
            'Orkiestracja ARM i Bicep dla szybkich wdrożeń',
            'Pipeline Azure DevOps / GitHub Actions',
            'Integracja Defender for Cloud i Monitor',
          ],
          stack: ['Azure', 'Bicep', 'PowerShell', 'GitHub Actions'],
          metrics: [
            { label: 'Automatyzacja', value: '90%' },
            { label: 'Pipeline', value: '<5 min' },
            { label: 'Zasoby', value: '30+' },
          ],
          image: '/images/azure-automation.svg',
          repo: 'https://github.com',
          contributions:
            'Przygotowałem szablony IaC, automatyzację pipeline’ów oraz integracje bezpieczeństwa i dokumentację operacyjną.'
        },
        {
          title: 'Security Analysis Tools',
          subtitle: 'Pakiet automatyzacji ofensywnej',
          description:
            'Zestaw narzędzi przyspieszający rekonesans, wsparcie eksploatacji i raportowanie z dowodami dla zespołów ofensywnych.',
          year: '2023',
          category: 'Offensive Tooling',
          highlights: [
            'Automatyczny rekonesans i mapowanie powierzchni ataku',
            'Generatory payloadów z szablonami unikania AV',
            'Automatyczne raporty z osadzonymi dowodami',
          ],
          stack: ['Python', 'Bash', 'Go', 'Elastic Stack'],
          metrics: [
            { label: 'Moduły', value: '18' },
            { label: 'Skan', value: '350+/run' },
            { label: 'Automatyzacja', value: '80%' },
          ],
          image: '/images/security-tools.svg',
          repo: 'https://github.com',
          contributions:
            'Stworzyłem moduły rekonesansu, payloadów i raportowania wraz z dokumentacją dla zespołów ofensywnych.'
        },
      ],
    },
    contact: {
      heading: 'Skontaktuj się',
      subheading: 'Otwarte na współpracę, badania oraz inicjatywy społecznościowe.',
      contactLabel: 'Kontakt',
      emailLabel: 'E-mail',
      locationLabel: 'Lokalizacja',
      socialLabel: 'Social',
      email: 'egezambelli@protonmail.com',
      location: 'Wrocław, Polska',
      social: [
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
      ],
      cta: 'Wyślij e-mail →',
    },
  },
}

type LanguageContextValue = {
  language: LanguageCode
  setLanguage: (code: LanguageCode) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>('en')

  useEffect(() => {
    const stored = localStorage.getItem('language') as LanguageCode | null
    if (stored && translations[stored]) {
      setLanguageState(stored)
    } else {
      setLanguageState('en')
      localStorage.setItem('language', 'en')
    }
  }, [])

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code)
    localStorage.setItem('language', code)
  }

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    t: translations[language],
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
