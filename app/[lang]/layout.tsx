import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import Header from './components/header'

import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Nav from './components/Nav'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Docking Web',
  description: 'Docking rentals and leasing '
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Nav lang={params.lang} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
