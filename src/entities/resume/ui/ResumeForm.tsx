import { useState, useEffect, type FC } from "react"
import { Formik, Form, Field } from "formik"
import styles from "./ResumeForm.module.scss"
import { DownloadButton } from "@/features/download-pdf"
import { WorkExperienceModal } from "@/features/work-experience-modal/ui/WorkExperienceModal"
import { Button } from "@/shared/ui-components/button"
import type { JobExperience, ResumeData } from "@/shared/types"

const STORAGE_KEY = "resumeFormData"

const saveToStorage = (data: ResumeData) => {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
	} catch (error) {
		console.error("Ошибка при сохранении данных в localStorage:", error)
	}
}

interface InputFieldProps {
	name: keyof ResumeData
	placeholder: string
	type?: string
	as?: "input" | "textarea"
	rows?: number
}

const InputField: FC<InputFieldProps> = ({
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

interface ResumeFormProps {
	data: ResumeData
	setData: (data: ResumeData) => void
}

export const ResumeForm: FC<ResumeFormProps> = ({ data, setData }) => {
	const [showExperienceModal, setShowExperienceModal] = useState(false)

	const handleAddExperience = (newExp: JobExperience) => {
		const newExperience = [...(data.experience || []), newExp]
		const newData = { ...data, experience: newExperience }
		setData(newData)
		saveToStorage(newData)
	}

	const handleValuesChange = (values: ResumeData) => {
		setData(values)
		saveToStorage(values)
	}

	return (
		<div className={styles.formWrapper}>
			<h2 className={styles.formTitle}>Создание резюме</h2>
			<Formik enableReinitialize initialValues={data} onSubmit={() => {}}>
				{({ values }) => {
					useEffect(() => {
						handleValuesChange(values)
					}, [values])

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
								<h3 className={styles.sectionTitle}>Опыт работы</h3>
								<Button
									onClick={() => setShowExperienceModal(true)}
									type='button'
									variant='secondary'
									// className={styles.addExperienceButton}
								>
									Добавить опыт работы
								</Button>

								{showExperienceModal && (
									<WorkExperienceModal
										onClose={() => setShowExperienceModal(false)}
										onSave={(exp: JobExperience) => {
											handleAddExperience(exp)
											setShowExperienceModal(false)
										}}
									/>
								)}

								<ul className={styles.experienceList}>
									{(values.experience || []).map((exp, idx) => {
										const getDuration = (
											start: string | null,
											end: string | null
										) => {
											const startDate = new Date(start || "")
											const endDate = end ? new Date(end) : new Date()
											let years =
												endDate.getFullYear() - startDate.getFullYear()
											let months = endDate.getMonth() - startDate.getMonth()

											if (months < 0) {
												years--
												months += 12
											}
											const yearsStr = years > 0 ? `${years} г.` : ""
											const monthsStr = months > 0 ? `${months} мес.` : ""
											return (
												`${yearsStr}${
													yearsStr && monthsStr ? " " : ""
												}${monthsStr}` || "0 мес."
											)
										}

										return (
											<li key={idx} className={styles.experienceItem}>
												<div className={styles.companyRole}>
													<b className={styles.company}>{exp.company}</b>,{" "}
													<span className={styles.role}>{exp.role}</span>
												</div>
												<div className={styles.durationAndActions}>
													<span className={styles.duration}>
														{getDuration(exp.startDate, exp.endDate)}
													</span>
													<button
														type='button'
														className={styles.editButton}
														onClick={() => {
															// Твой код для открытия модального окна редактирования
															// например, setEditingExperience(idx)
														}}
														aria-label={`Редактировать опыт работы в ${exp.company}`}
													>
														✏️
													</button>
												</div>
											</li>
										)
									})}
								</ul>
							</div>

							<DownloadButton />
						</Form>
					)
				}}
			</Formik>
		</div>
	)
}
