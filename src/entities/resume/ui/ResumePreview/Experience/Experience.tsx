import type { FC } from "react"
import styles from "./Experience.module.scss"
import { calculateDuration, getTotalExperience } from "@/shared/utils/dateUtils"
import type { ResumeData } from "@/shared/types"

interface ExperienceProps {
	experience?: ResumeData["experience"]
}

export const Experience: FC<ExperienceProps> = ({ experience }) => {
	return Array.isArray(experience) && experience.length > 0 ? (
		<div className={styles.section}>
			<h2 className={styles.sectionTitle}>
				Опыт работы
				<span className={styles.totalExp}>
					{getTotalExperience(experience)}
				</span>
			</h2>
			<div className={styles.experienceList}>
				{experience.map((job, index) => {
					const durationStr = calculateDuration(job.startDate, job.endDate)
					return (
						<div key={index} className={styles.experienceItem}>
							<div className={styles.headerRow}>
								<div className={styles.company}>{job.company}</div>
								<div className={styles.role}>{job.role}</div>
							</div>
							<div className={styles.jobDuration}>
								{job.startDate
									? new Date(job.startDate).toLocaleDateString("ru-RU", {
											month: "short",
											year: "numeric",
									  })
									: "—"}
								{" — "}
								{job.endDate
									? new Date(job.endDate).toLocaleDateString("ru-RU", {
											month: "short",
											year: "numeric",
									  })
									: "по настоящее время"}
								{durationStr && (
									<span className={styles.duration}>
										{`  • ${durationStr}`}
									</span>
								)}
							</div>
							{job.description && (
								<div className={styles.description}>{job.description}</div>
							)}
						</div>
					)
				})}
			</div>
		</div>
	) : null
}
