import React from "react"
import { generatePdf } from "../lib/generatePdf"
import styles from "./DownloadButton.module.scss"
import { Button } from "@/shared/ui-components/button"

export const DownloadButton = () => {
	const handleClick = () => {
		generatePdf("resume-preview")
	}

	return (
		<div className={styles.wrapper}>
			<Button onClick={handleClick}>Скачать PDF</Button>
		</div>
	)
}
