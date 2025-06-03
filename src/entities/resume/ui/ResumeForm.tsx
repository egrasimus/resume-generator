import React from "react"
import { Formik, Form, Field } from "formik"
import styles from "./ResumeForm.module.scss"
import { DownloadButton } from "@/features/download-pdf"

const STORAGE_KEY = "resumeFormData"

const loadFromStorage = (defaultData) => {
	try {
		const saved = localStorage.getItem(STORAGE_KEY)
		if (saved) {
			const parsedData = JSON.parse(saved)
			return { ...defaultData, ...parsedData }
		}
	} catch (error) {
		console.error("Ошибка при загрузке данных из localStorage:", error)
	}
	return defaultData
}

const saveToStorage = (data) => {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
	} catch (error) {
		console.error("Ошибка при сохранении данных в localStorage:", error)
	}
}

const InputField = ({
	name,
	placeholder,
	type = "text",
	as = "input",
	rows = 4,
}) => (
	<div className={styles.formGroup}>
		<label htmlFor={name} className={styles.formLabel}>
			{placeholder}
		</label>
		<Field
			id={name}
			name={name}
			type={type}
			as={as}
			rows={as === "textarea" ? rows : undefined}
			className={`${styles.formControl} ${
				as === "textarea" ? styles.textarea : ""
			}`}
			placeholder={placeholder}
		/>
	</div>
)

export const ResumeForm = ({ data, setData }) => {
	const initialValues = React.useMemo(() => loadFromStorage(data), [data])

	React.useEffect(() => {
		setData(initialValues)
	}, [])

	return (
		<div className={styles.formWrapper}>
			<h2 className={styles.formTitle}>Создание резюме</h2>
			<Formik initialValues={initialValues} onSubmit={() => {}}>
				{({ values, handleChange }) => {
					React.useEffect(() => {
						saveToStorage(values)
						setData(values)
					}, [values, setData])

					return (
						<Form className={styles.formLayout}>
							<div className={styles.mainGrid}>
								<div className={styles.formSection}>
									<h3 className={styles.sectionTitle}>Основная информация</h3>
									<InputField name='fullName' placeholder='ФИО' />
									<InputField name='position' placeholder='Должность' />
									<InputField name='location' placeholder='Местоположение' />
									<InputField
										name='photoUrl'
										placeholder='URL фото (опционально)'
									/>
								</div>
								<div className={styles.formSection}>
									<h3 className={styles.sectionTitle}>
										Профессиональные данные
									</h3>
									<InputField
										name='experienceYears'
										placeholder='Стаж работы'
									/>
									<InputField name='age' placeholder='Возраст' />
									<InputField
										name='salaryExpectations'
										placeholder='Зарплатные ожидания'
									/>
									<InputField
										name='remoteReady'
										placeholder='Готовность к удалённой работе'
									/>
								</div>
							</div>
							<div className={styles.formSection}>
								<h3 className={styles.sectionTitle}>Детальная информация</h3>

								<InputField
									name='skills'
									placeholder='Профессиональные навыки (через запятую)'
									as='textarea'
									rows={3}
								/>

								<InputField
									name='summary'
									placeholder='О себе'
									as='textarea'
									rows={4}
								/>

								<InputField
									name='experience'
									placeholder='Опыт работы'
									as='textarea'
									rows={6}
								/>

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
							<div className={styles.formSection}>
								<h3 className={styles.sectionTitle}>Контактная информация</h3>
								<div className={styles.contactGrid}>
									<InputField name='email' placeholder='Email' type='email' />
									<InputField name='phone' placeholder='Телефон' type='tel' />
									<InputField name='telegram' placeholder='Telegram' />
									<InputField
										name='habr'
										placeholder='Профиль на Хабр Карьера'
									/>
								</div>
							</div>
							<DownloadButton />
						</Form>
					)
				}}
			</Formik>
		</div>
	)
}
