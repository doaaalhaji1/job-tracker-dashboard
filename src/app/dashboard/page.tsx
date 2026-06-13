import { jobs } from '../../data/jobs'
import { Briefcase, Calendar, CheckCircle, XCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}
export default function DashboardPage() {
  const total = jobs.length
  const interviews = jobs.filter((j) => j.status === 'Interview').length
  const offers = jobs.filter((j) => j.status === 'Offer').length
  const rejected = jobs.filter((j) => j.status === 'Rejected').length

  const stats = [
    {
      label: 'Total Applications',
      value: total,
      icon: Briefcase,
      color: 'bg-blue-50 dark:bg-blue-950 text-blue-600',
    },
    {
      label: 'Interviews',
      value: interviews,
      icon: Calendar,
      color: 'bg-yellow-50 dark:bg-yellow-950 text-yellow-600',
    },
    {
      label: 'Offers',
      value: offers,
      icon: CheckCircle,
      color: 'bg-green-50 dark:bg-green-950 text-green-600',
    },
    {
      label: 'Rejected',
      value: rejected,
      icon: XCircle,
      color: 'bg-red-50 dark:bg-red-950 text-red-600',
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6"
          >
            <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
              <Icon className="w-6 h-6" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">
              {value}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Applications */}
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Recent Applications
      </h2>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
        {jobs.slice(0, 5).map((job, i) => (
          <div
            key={job.id}
            className={`flex items-center justify-between px-6 py-4 ${
              i !== 0 ? 'border-t border-slate-100 dark:border-slate-800' : ''
            }`}
          >
            <div>
              <p className="font-medium text-slate-900 dark:text-white">{job.title}</p>
              <p className="text-sm text-slate-500">{job.company}</p>
            </div>
            <span className="text-xs text-slate-400">{job.appliedDate}</span>
          </div>
        ))}
      </div>
    </div>
  )
}