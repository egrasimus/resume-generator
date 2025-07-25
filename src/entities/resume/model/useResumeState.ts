import type { ResumeData } from "@/shared/types"
import { useState } from "react"
import { loadResumeFromStorage } from "@/shared/utils/storageUtils"
import mockResumeData from "./mockResumeData"

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

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true"

console.log(USE_MOCK)

export const useResumeState = (): useResumeStateResult => {
	const [data, setData] = useState<ResumeData>(() =>
		USE_MOCK ? mockResumeData : loadResumeFromStorage() || defaultResumeData
	)

	return { data, setData }
}
