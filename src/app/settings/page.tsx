'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Settings
      </h1>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8">
        <h2 className="font-semibold text-slate-900 dark:text-white mb-4">
          Appearance
        </h2>

        <div className="flex flex-col gap-3">
          {['light', 'dark', 'system'].map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-colors ${
                theme === t
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950'
                  : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">
                  {t === 'light' ? '☀️' : t === 'dark' ? '🌙' : '💻'}
                </span>
                <span className="font-medium text-slate-900 dark:text-white capitalize">
                  {t === 'light' ? 'Light Mode' : t === 'dark' ? 'Dark Mode' : 'System Default'}
                </span>
              </div>
              {theme === t && (
                <span className="w-3 h-3 rounded-full bg-blue-500" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}