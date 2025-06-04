import type { ResumeData } from "@/shared/types"
import { useState } from "react"

const STORAGE_KEY = "resumeFormData"

interface useResumeStateResult {
	data: ResumeData
	setData: (data: ResumeData) => void
}

export const useResumeState = (): useResumeStateResult => {
	const loadFromStorage = () => {
		try {
			const saved = localStorage.getItem(STORAGE_KEY)
			if (saved) return JSON.parse(saved)
		} catch (error) {
			console.error("Ошибка при загрузке из localStorage:", error)
		}
		return {}
	}
	const [data, setData] = useState<ResumeData>(() => loadFromStorage())

	return { data, setData }
}
