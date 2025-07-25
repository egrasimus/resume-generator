import type { FC } from "react"
import { InputField } from "../InputField/InputField"
import styles from "./ContactFields.module.scss"

export const ContactFields: FC = () => (
	<div className={styles.formSection}>
		<h3 className={styles.sectionTitle}>Контактная информация</h3>
		<div className={styles.contactGrid}>
			<InputField name='email' placeholder='Email' type='email' />
			<InputField name='phone' placeholder='Телефон' type='tel' />
			<InputField name='telegram' placeholder='Telegram' />
			<InputField name='habr' placeholder='Профиль на Хабр Карьера' />
		</div>
	</div>
)
