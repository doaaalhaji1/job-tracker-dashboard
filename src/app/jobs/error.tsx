'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <p className="text-6xl">😕</p>
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        Something went wrong!
      </h2>
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        {error.message}
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  )
}