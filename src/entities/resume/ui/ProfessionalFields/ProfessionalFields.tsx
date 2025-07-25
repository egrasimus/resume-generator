import type { FC } from "react"
import { InputField } from "../InputField/InputField"
import styles from "./ProfessionalFields.module.scss"

export const ProfessionalFields: FC = () => (
	<div className={styles.formSection}>
		<h3 className={styles.sectionTitle}>Профессиональные данные</h3>
		<InputField name='experienceYears' placeholder='Стаж работы' />
		<InputField name='age' placeholder='Возраст' />
		<InputField name='salaryExpectations' placeholder='Зарплатные ожидания' />
		<InputField
			name='remoteReady'
			placeholder='Готовность к удалённой работе'
		/>
	</div>
)
