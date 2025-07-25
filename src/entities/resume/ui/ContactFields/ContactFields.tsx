import type { FC } from "react"
import { InputField } from "../InputField"
import styles from "./ContactFields.module.scss"

const contactFields = [
	{ name: "email", placeholder: "Email", type: "email" },
	{ name: "phone", placeholder: "Телефон", type: "tel" },
	{ name: "telegram", placeholder: "Telegram" },
	{ name: "habr", placeholder: "Профиль на Хабр Карьера" },
] as const

export const ContactFields: FC = () => (
	<div className={styles.formSection}>
		<h3 className={styles.sectionTitle}>Контактная информация</h3>
		<div className={styles.contactGrid}>
			{contactFields.map((field) => (
				<InputField key={field.name} {...field} />
			))}
		</div>
	</div>
)
