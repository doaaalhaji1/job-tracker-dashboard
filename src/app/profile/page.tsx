export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        My Profile
      </h1>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8">
        {/* Avatar */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
            D
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Doaa Al-Haji
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Frontend Developer
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-sm">
              doaa@example.com
            </p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Git'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}