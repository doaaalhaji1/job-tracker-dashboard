import { jobs } from '../../../data/jobs'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const statusColors: Record<string, string> = {
  Applied: 'bg-blue-100 text-blue-700',
  Interview: 'bg-yellow-100 text-yellow-700',
  Offer: 'bg-green-100 text-green-700',
  Rejected: 'bg-red-100 text-red-700',
  Pending: 'bg-slate-100 text-slate-700',
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const job = jobs.find((j) => j.id === id)

  if (!job) notFound()

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href="/jobs"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Jobs
      </Link>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              {job.title}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              {job.company}
            </p>
          </div>
          <span className={`text-sm font-medium px-4 py-2 rounded-full ${statusColors[job.status]}`}>
            {job.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
            <p className="text-xs text-slate-500 mb-1">Location</p>
            <p className="font-medium text-slate-900 dark:text-white">📍 {job.location}</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
            <p className="text-xs text-slate-500 mb-1">Job Type</p>
            <p className="font-medium text-slate-900 dark:text-white">💼 {job.jobType}</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
            <p className="text-xs text-slate-500 mb-1">Applied Date</p>
            <p className="font-medium text-slate-900 dark:text-white">📅 {job.appliedDate}</p>
          </div>
          {job.salary && (
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
              <p className="text-xs text-slate-500 mb-1">Salary</p>
              <p className="font-medium text-green-600">💰 {job.salary}</p>
            </div>
          )}
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 dark:text-white mb-2">
            Description
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {job.description}
          </p>
        </div>
      </div>
    </div>
  )
}