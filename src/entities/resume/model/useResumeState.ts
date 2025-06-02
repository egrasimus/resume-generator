import { useState } from "react"
import type { ResumeData } from "./types"

export const useResumeState = () => {
	const [data, setData] = useState<ResumeData>({
		fullName: "",
		position: "",
		summary: "",
		experience: "",
		skills: "",
		education: "",
		contacts: "",
	})

	return { data, setData }
}
