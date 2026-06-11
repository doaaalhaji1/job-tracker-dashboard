
'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon, Briefcase } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50">
      
      <div className="flex items-center gap-2">
        <Briefcase className="w-6 h-6 text-blue-600" />
        <span className="font-bold text-lg text-slate-900 dark:text-white">
          JobTracker
        </span>
      </div>

      {mounted && (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-slate-600" />
          )}
        </button>
      )}
    </header>
  )
}
