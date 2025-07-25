import type { FC } from "react"
import styles from "./Experience.module.scss"
import { calculateDuration } from "@/shared/utils/dateUtils"
import type { ResumeData } from "@/shared/types"

const formatDate = (date?: string) =>
	date
		? new Date(date).toLocaleDateString("ru-RU", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
		  })
		: "..."

interface ExperienceProps {
	experience?: ResumeData["experience"]
}

export const Experience: FC<ExperienceProps> = ({ experience }) =>
	Array.isArray(experience) && experience.length > 0 ? (
		<div className={styles.section}>
			<h2 className={styles.sectionTitle}>Опыт работы</h2>
			<div className={styles.experienceList}>
				{experience.map((job, index) => (
					<div key={index} className={styles.experienceItem}>
						<h3 className={styles.jobTitle}>
							{job.role} — <span className={styles.company}>{job.company}</span>
						</h3>
						<div className={styles.jobDuration}>{`${formatDate(
							job.startDate || ""
						)} - ${formatDate(job.endDate || "")} (${calculateDuration(
							job.startDate,
							job.endDate
						)})`}</div>
						<p className={styles.paragraph}>{job.description}</p>
					</div>
				))}
			</div>
		</div>
	) : null
