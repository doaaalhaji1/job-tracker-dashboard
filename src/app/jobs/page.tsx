'use client'

import { useState } from 'react'
import { jobs } from '../../data/jobs'
import { Job, JobStatus } from '../../types'
import Link from 'next/link'

const statusColors: Record<string, string> = {
  Applied: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  Interview: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300',
  Offer: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
  Rejected: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
  Pending: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
}

const statuses: (JobStatus | 'All')[] = ['All', 'Applied', 'Interview', 'Offer', 'Rejected', 'Pending']

function JobCard({ job }: { job: Job }) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-lg">
              {job.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400">{job.company}</p>
          </div>
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[job.status]}`}>
            {job.status}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <span>📍 {job.location}</span>
          <span>💼 {job.jobType}</span>
          <span>📅 {job.appliedDate}</span>
        </div>
        {job.salary && (
          <p className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
            💰 {job.salary}
          </p>
        )}
      </div>
    </Link>
  )
}

export default function JobsPage() {
  const [search, setSearch] = useState('')
  const [activeStatus, setActiveStatus] = useState<JobStatus | 'All'>('All')

  const filtered = jobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
    const matchStatus = activeStatus === 'All' || job.status === activeStatus
    return matchSearch && matchStatus
  })

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        My Applications
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by title or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Filter */}
      <div className="flex gap-2 flex-wrap mb-6">
    {statuses.map((status) => (
  <button
    key={status}
onClick={() => {
  console.log('clicked:', status)
  setActiveStatus(status)
}}    style={{
      backgroundColor: activeStatus === status ? '#2563eb' : '',
      color: activeStatus === status ? 'white' : '',
    }}
    className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
  >
    {status}
  </button>
))}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="text-slate-500 text-center py-12">No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  )
}