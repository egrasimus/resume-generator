import React from "react"
import { generatePdf } from "../lib/generatePdf"

export const DownloadButton = () => {
	const handleClick = () => {
		generatePdf("resume-preview")
	}

	return <button onClick={handleClick}>Скачать PDF</button>
}
