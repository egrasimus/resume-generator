import type { FC } from "react"
import { InputField } from "../InputField"
import styles from "./DetailFields.module.scss"

const detailFields = [
	{
		name: "skills",
		placeholder: "Профессиональные навыки (через запятую)",
		as: "textarea",
		rows: 3,
	},
	{ name: "summary", placeholder: "О себе", as: "textarea", rows: 4 },
	{ name: "education", placeholder: "Образование", as: "textarea", rows: 4 },
	{
		name: "contacts",
		placeholder: "Дополнительные контакты",
		as: "textarea",
		rows: 3,
	},
] as const

export const DetailFields: FC = () => (
	<div className={styles.formSection}>
		<h3 className={styles.sectionTitle}>Детальная информация</h3>
		{detailFields.map((field) => (
			<InputField key={field.name} {...field} />
		))}
	</div>
)
