import type { FC } from "react"
import styles from "./AdditionalContacts.module.scss"

interface AdditionalContactsProps {
	contacts?: string
}

export const AdditionalContacts: FC<AdditionalContactsProps> = ({ contacts }) =>
	contacts ? (
		<div className={styles.section}>
			<h2 className={styles.sectionTitle}>Дополнительные контакты</h2>
			<div className={styles.content}>
				{contacts.split("\n").map((line, index) => (
					<p key={index} className={styles.paragraph}>
						{line}
					</p>
				))}
			</div>
		</div>
	) : null
