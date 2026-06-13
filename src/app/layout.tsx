import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '../components/providers'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Job Tracker Dashboard',
    template: '%s | Job Tracker',
  },
  description: 'Track and manage your job applications efficiently',
  keywords: ['job tracker', 'job applications', 'career', 'dashboard'],
  authors: [{ name: 'Doaa Al-Haji' }],
  openGraph: {
    title: 'Job Tracker Dashboard',
    description: 'Track and manage your job applications efficiently',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="flex pt-16">
            <Sidebar />
            <main className="flex-1 ml-64 p-6">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}