import { useState } from "react"
import type { ResumeData } from "./types"

const STORAGE_KEY = "resumeFormData"

export const useResumeState = () => {
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
