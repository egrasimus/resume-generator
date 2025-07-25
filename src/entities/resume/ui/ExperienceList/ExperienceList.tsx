import type { FC } from "react"
import type { JobExperience } from "@/shared/types"
import styles from "./ExperienceList.module.scss"
import { getDuration } from "@/shared/utils/dateUtils"

interface ExperienceListProps {
	experience: JobExperience[]
	onEdit?: (idx: number) => void
}

export const ExperienceList: FC<ExperienceListProps> = ({
	experience,
	onEdit,
}) => (
	<ul className={styles.experienceList}>
		{(experience || []).map((exp, idx) => (
			<li key={idx} className={styles.experienceItem}>
				<div className={styles.companyRole}>
					<b className={styles.company}>{exp.company}</b>,{" "}
					<span className={styles.role}>{exp.role}</span>
				</div>
				<div className={styles.durationAndActions}>
					<span className={styles.duration}>
						{getDuration(exp.startDate, exp.endDate)}
					</span>
					<button
						type='button'
						className={styles.editButton}
						onClick={() => onEdit && onEdit(idx)}
						aria-label={`Редактировать опыт работы в ${exp.company}`}
					>
						✏️
					</button>
				</div>
			</li>
		))}
	</ul>
)
