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
				<div className={styles.headerRow}>
					<div>
						<div className={styles.company}>{exp.company}</div>
						<div className={styles.role}>{exp.role}</div>
					</div>
					<button
						type='button'
						className={styles.editButton}
						onClick={() => onEdit && onEdit(idx)}
						aria-label={`Редактировать опыт работы в ${exp.company}`}
						title='Редактировать'
					>
						<span aria-hidden>✏️</span>
					</button>
				</div>
				<div className={styles.duration}>
					{getDuration(exp.startDate, exp.endDate)}
					{exp.startDate && (
						<>
							{" ("}
							{new Date(exp.startDate).toLocaleDateString("ru-RU", {
								month: "short",
								year: "numeric",
							})}
							{" — "}
							{exp.endDate
								? new Date(exp.endDate).toLocaleDateString("ru-RU", {
										month: "short",
										year: "numeric",
								  })
								: "по настоящее время"}
							{")"}
						</>
					)}
				</div>
				{exp.description && (
					<div className={styles.description}>{exp.description}</div>
				)}
			</li>
		))}
	</ul>
)
