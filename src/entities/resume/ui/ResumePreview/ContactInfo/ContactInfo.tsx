import type { FC } from "react"
import styles from "./ContactInfo.module.scss"
import type { ResumeData } from "@/shared/types"

interface ContactInfoProps {
	data: ResumeData
}

export const ContactInfo: FC<ContactInfoProps> = ({ data }) => (
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
)
