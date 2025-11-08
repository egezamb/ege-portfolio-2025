import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'
import ClickParticles from '@/components/ClickParticles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ege Zambelli - Software Developer',
  description: 'Portfolio of Ege Zambelli - 3rd year software engineering student specializing in cloud architecture, cybersecurity, and automation.',
  keywords: ['Ege Zambelli', 'Software Developer', 'Cloud Engineer', 'Cybersecurity', 'Azure', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <ClickParticles />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

