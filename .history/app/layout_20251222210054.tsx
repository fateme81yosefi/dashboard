import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/contexts/AppContext'
import { themeScript } from './theme-script'

export const metadata: Metadata = {
  title: 'داشبورد مدیریتی',
  description: 'داشبورد پیشرفته با Next.js و React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}

