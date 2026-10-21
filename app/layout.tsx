import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

const description =
  'Pulsimo is a self-hosted observability platform: endpoints, infrastructure, Kubernetes, metrics and logs, all connected in one clear view.'

export const metadata: Metadata = {
  metadataBase: new URL('https://pulsimo.github.io'),
  title: {
    default: 'Pulsimo - Know what\'s happening. Before it breaks.',
    template: '%s | Pulsimo',
  },
  description,
  applicationName: 'Pulsimo',
  keywords: ['monitoring', 'observability', 'uptime', 'incident management', 'kubernetes', 'self-hosted', 'logs', 'metrics'],
  openGraph: {
    type: 'website',
    siteName: 'Pulsimo',
    title: 'Pulsimo - Real-time observability',
    description,
    url: '/',
    images: [{ url: '/images/night/maindashbaord.png', width: 1914, height: 1033, alt: 'Pulsimo dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pulsimo - Real-time observability',
    description,
    images: ['/images/night/maindashbaord.png'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

// Runs before first paint so the saved theme applies without a flash.
// Dark (AMOLED black) is the default; only an explicit "light" choice switches it off.
const themeScript = `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
