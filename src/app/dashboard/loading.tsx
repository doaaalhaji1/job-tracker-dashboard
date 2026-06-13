export default function Loading() {
  return (
    <div>
      <div className="h-8 w-36 bg-slate-200 dark:bg-slate-700 rounded-lg mb-6 animate-pulse" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-slate-200 dark:bg-slate-700 rounded-xl h-36 animate-pulse" />
        ))}
      </div>
      <div className="h-64 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
    </div>
  )
}