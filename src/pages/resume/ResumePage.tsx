import { ResumeBuilder } from "@/widgets/resume-builder"
import styles from "./ResumePage.module.scss"

export const ResumePage = () => {
	return (
		<div className={styles.wrapper}>
			<h1>Resume Generator</h1>
			<ResumeBuilder />
		</div>
	)
}
