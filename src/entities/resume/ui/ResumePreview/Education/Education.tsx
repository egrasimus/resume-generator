import type { FC } from "react"
import styles from "./Education.module.scss"

interface EducationProps {
	education?: string
}

export const Education: FC<EducationProps> = ({ education }) =>
	education ? (
		<div className={styles.section}>
			<h2 className={styles.sectionTitle}>Образование</h2>
			<div className={styles.content}>
				{education.split("\n").map((line, index) => (
					<p key={index} className={styles.paragraph}>
						{line}
					</p>
				))}
			</div>
		</div>
	) : null
