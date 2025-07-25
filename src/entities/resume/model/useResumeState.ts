import type { ResumeData } from "@/shared/types"
import { useState } from "react"
import { loadResumeFromStorage } from "@/shared/utils/storageUtils"

interface useResumeStateResult {
	data: ResumeData
	setData: (data: ResumeData) => void
}

const defaultResumeData: ResumeData = {
	fullName: "",
	position: "",
	location: "",
	remoteReady: "",
	experienceYears: "",
	age: "",
	salaryExpectations: "",
	photoUrl: "",
	email: "",
	phone: "",
	telegram: "",
	habr: "",
	skills: "",
	summary: "",
	education: "",
	contacts: "",
	experience: [],
}

export const useResumeState = (): useResumeStateResult => {
	const [data, setData] = useState<ResumeData>(
		() => loadResumeFromStorage() || defaultResumeData
	)

	return { data, setData }
}
