import { type FC } from "react"
import styles from "./ResumePreview.module.scss"
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

interface ResumePreviewProps {
	data: ResumeData
}

export const ResumePreview: FC<ResumePreviewProps> = ({ data }) => {
	return (
		<div id='resume-preview' className={styles.resumeContainer}>
			{/* Шапка */}
			<div className={styles.header}>
				<div className={styles.headerContent}>
					<h1 className={styles.fullName}>{data.fullName}</h1>
					<div className={styles.position}>{data.position}</div>

					<div className={styles.basicInfo}>
						<div className={styles.infoRow}>
							{data.location && (
								<>
									<span className={styles.label}>Местоположение:</span>
									<span>{data.location}</span>
								</>
							)}
						</div>
						<div className={styles.infoRow}>
							{data.remoteReady && (
								<>
									<span className={styles.label}>
										Готовность к удаленной работе:
									</span>
									<span>{data.remoteReady}</span>
								</>
							)}
						</div>
					</div>

					<div className={styles.professionalInfo}>
						<div className={styles.infoGrid}>
							{data.experienceYears && (
								<div className={styles.infoItem}>
									<span className={styles.label}>Стаж:</span>
									<span>{data.experienceYears}</span>
								</div>
							)}
							{data.age && (
								<div className={styles.infoItem}>
									<span className={styles.label}>Возраст:</span>
									<span>{data.age}</span>
								</div>
							)}
						</div>
						{data.salaryExpectations && (
							<div className={styles.salary}>
								<span className={styles.label}>Зарплатные ожидания:</span>
								<span className={styles.salaryAmount}>
									{data.salaryExpectations}
								</span>
							</div>
						)}
					</div>
				</div>

				{data.photoUrl && (
					<div className={styles.photoContainer}>
						<img src={data.photoUrl} alt='Фото' className={styles.photo} />
					</div>
				)}
			</div>

			{/* Контактная информация */}
			<div className={styles.section}>
				{(data.email || data.phone || data.telegram || data.habr) && (
					<>
						<h2 className={styles.sectionTitle}>Контактная информация</h2>
						<div className={styles.contactsGrid}>
							{data.email && (
								<div className={styles.contactItem}>
									<span className={styles.contactLabel}>Email:</span>
									<span>{data.email}</span>
								</div>
							)}
							{data.phone && (
								<div className={styles.contactItem}>
									<span className={styles.contactLabel}>Телефон:</span>
									<span>{data.phone}</span>
								</div>
							)}
							{data.telegram && (
								<div className={styles.contactItem}>
									<span className={styles.contactLabel}>Telegram:</span>
									<span>{data.telegram}</span>
								</div>
							)}
							{data.habr && (
								<div className={styles.contactItem}>
									<span className={styles.contactLabel}>Хабр Карьера:</span>
									<span>{data.habr}</span>
								</div>
							)}
						</div>
					</>
				)}
			</div>

			{/* Навыки */}
			{data.skills && (
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Профессиональные навыки</h2>
					<div className={styles.skills}>
						{data.skills.split(",").map((skill, index) => (
							<span key={index} className={styles.skillTag}>
								{skill.trim()}
							</span>
						))}
					</div>
				</div>
			)}

			{Array.isArray(data.experience) && data.experience.length > 0 && (
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Опыт работы</h2>
					<div className={styles.experienceList}>
						{data.experience.map((job, index) => (
							<div key={index} className={styles.experienceItem}>
								<h3 className={styles.jobTitle}>
									{job.role} —{" "}
									<span className={styles.company}>{job.company}</span>
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
			)}

			{/* О себе */}
			{data.summary && (
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>О себе</h2>
					<div className={styles.content}>
						{data.summary.split("\n").map((line, index) => (
							<p key={index} className={styles.paragraph}>
								{line}
							</p>
						))}
					</div>
				</div>
			)}

			{/* Образование */}
			{data.education && (
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Образование</h2>
					<div className={styles.content}>
						{data.education.split("\n").map((line, index) => (
							<p key={index} className={styles.paragraph}>
								{line}
							</p>
						))}
					</div>
				</div>
			)}

			{/* Дополнительные контакты */}
			{data.contacts && (
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Дополнительные контакты</h2>
					<div className={styles.content}>
						{data.contacts.split("\n").map((line, index) => (
							<p key={index} className={styles.paragraph}>
								{line}
							</p>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
