import type { FC } from "react"
import { InputField } from "../InputField"
import styles from "./ProfessionalFields.module.scss"

const professionalFields = [
	{ name: "experienceYears", placeholder: "Стаж работы" },
	{ name: "age", placeholder: "Возраст" },
	{ name: "salaryExpectations", placeholder: "Зарплатные ожидания" },
	{ name: "remoteReady", placeholder: "Готовность к удалённой работе" },
] as const

export const ProfessionalFields: FC = () => (
	<div className={styles.formSection}>
		<h3 className={styles.sectionTitle}>Профессиональные данные</h3>
		{professionalFields.map((field) => (
			<InputField
				key={field.name}
				name={field.name}
				placeholder={field.placeholder}
			/>
		))}
	</div>
)
