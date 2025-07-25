import type { FC } from "react"
import styles from "./Summary.module.scss"

interface SummaryProps {
	summary?: string
}

export const Summary: FC<SummaryProps> = ({ summary }) =>
	summary ? (
		<div className={styles.section}>
			<h2 className={styles.sectionTitle}>О себе</h2>
			<div className={styles.content}>
				{summary.split("\n").map((line, index) => (
					<p key={index} className={styles.paragraph}>
						{line}
					</p>
				))}
			</div>
		</div>
	) : null
