import type { FC } from "react"
import { InputField } from "../InputField/InputField"
import styles from "./DetailFields.module.scss"

export const DetailFields: FC = () => (
	<div className={styles.formSection}>
		<h3 className={styles.sectionTitle}>Детальная информация</h3>
		<InputField
			name='skills'
			placeholder='Профессиональные навыки (через запятую)'
			as='textarea'
			rows={3}
		/>
		<InputField name='summary' placeholder='О себе' as='textarea' rows={4} />
		<InputField
			name='education'
			placeholder='Образование'
			as='textarea'
			rows={4}
		/>
		<InputField
			name='contacts'
			placeholder='Дополнительные контакты'
			as='textarea'
			rows={3}
		/>
	</div>
)
