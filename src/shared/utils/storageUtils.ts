import type { ResumeData } from "@/shared/types"

const STORAGE_KEY = "resumeFormData"

export function saveResumeToStorage(data: ResumeData) {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
	} catch (error) {
		console.error("Ошибка при сохранении данных в localStorage:", error)
	}
}

export function loadResumeFromStorage(): ResumeData | undefined {
	try {
		const saved = localStorage.getItem(STORAGE_KEY)
		if (saved) return JSON.parse(saved)
	} catch (error) {
		console.error("Ошибка при загрузке из localStorage:", error)
	}
	return undefined
}
