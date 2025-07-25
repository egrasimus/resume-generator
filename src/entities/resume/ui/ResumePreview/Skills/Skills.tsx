import type { FC } from "react"
import styles from "./Skills.module.scss"

interface SkillsProps {
	skills?: string
}

export const Skills: FC<SkillsProps> = ({ skills }) =>
	skills ? (
		<div className={styles.section}>
			<h2 className={styles.sectionTitle}>Профессиональные навыки</h2>
			<div className={styles.skills}>
				{skills.split(",").map((skill, index) => (
					<span key={index} className={styles.skillTag}>
						{skill.trim()}
					</span>
				))}
			</div>
		</div>
	) : null
