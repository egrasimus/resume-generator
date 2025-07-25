import type { FC } from "react"
import { InputField } from "../InputField/InputField"
import styles from "./MainInfoFields.module.scss"

export const MainInfoFields: FC = () => (
	<div className={styles.formSection}>
		<h3 className={styles.sectionTitle}>Основная информация</h3>
		<InputField name='fullName' placeholder='ФИО' />
		<InputField name='position' placeholder='Должность' />
		<InputField name='location' placeholder='Местоположение' />
		<InputField name='photoUrl' placeholder='URL фото (опционально)' />
	</div>
)
