export interface JobExperience {
	role: string
	company: string
	startDate: string | null
	endDate: string | null
	description: string
}

export interface ResumeData {
	fullName: string
	position: string
	location: string
	remoteReady: string
	experienceYears: string
	age: string
	salaryExpectations: string
	photoUrl?: string

	email?: string
	phone?: string
	telegram?: string
	habr?: string

	skills?: string
	experience?: JobExperience[]
	summary?: string
	education?: string
	contacts?: string
}
