import React from "react"
import { generatePdf } from "../lib/generatePdf"
import styles from "./DownloadButton.module.scss"

export const DownloadButton = () => {
	const handleClick = () => {
		generatePdf("resume-preview")
	}

	return (
		<div className={styles.wrapper}>
			<button onClick={handleClick}>Скачать PDF</button>
		</div>
	)
}
