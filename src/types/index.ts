export type JobStatus = 'Applied' | 'Interview' | 'Offer' | 'Rejected' | 'Pending'

export interface Job {
  id: string
  title: string
  company: string
  location: string
  status: JobStatus
  appliedDate: string
  description: string
  salary?: string
  jobType: 'Full-time' | 'Part-time' | 'Internship' | 'Remote'
}