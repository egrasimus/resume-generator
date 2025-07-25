import type { FC } from "react"
import { InputField } from "../InputField"
import styles from "./MainInfoFields.module.scss"

const mainInfoFields = [
	{ name: "fullName", placeholder: "ФИО" },
	{ name: "position", placeholder: "Должность" },
	{ name: "location", placeholder: "Местоположение" },
	{ name: "photoUrl", placeholder: "URL фото (опционально)" },
] as const

export const MainInfoFields: FC = () => (
	<div className={styles.formSection}>
		<h3 className={styles.sectionTitle}>Основная информация</h3>
		{mainInfoFields.map((field) => (
			<InputField
				key={field.name}
				name={field.name}
				placeholder={field.placeholder}
			/>
		))}
	</div>
)
