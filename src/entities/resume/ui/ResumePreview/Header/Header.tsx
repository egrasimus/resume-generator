import type { FC } from "react"
import styles from "./Header.module.scss"
import type { ResumeData } from "@/shared/types"

interface HeaderProps {
	data: ResumeData
}

export const Header: FC<HeaderProps> = ({ data }) => (
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
)
