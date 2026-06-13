export default function Loading() {
  return (
    <div>
      <div className="h-8 w-48 bg-slate-200 dark:bg-slate-700 rounded-lg mb-6 animate-pulse" />
      <div className="h-10 w-full bg-slate-200 dark:bg-slate-700 rounded-lg mb-4 animate-pulse" />
      <div className="flex gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-8 w-20 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-slate-200 dark:bg-slate-700 rounded-xl h-40 animate-pulse" />
        ))}
      </div>
    </div>
  )
}