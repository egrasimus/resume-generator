import { useState, type ChangeEvent, type FC } from "react"
import styles from "./WorkExperienceModal.module.scss"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import type { JobExperience } from "@/shared/types"

interface WorkExperienceModalProps {
	onClose: () => void
	onSave: (exp: JobExperience) => void
}

export const WorkExperienceModal: FC<WorkExperienceModalProps> = ({
	onClose,
	onSave,
}) => {
	const [experience, setExperience] = useState<JobExperience>({
		company: "",
		role: "",
		startDate: null,
		endDate: null,
		description: "",
	})

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setExperience((prev) => ({ ...prev, [name]: value }))
	}

	const handleStartDateChange = (date: Date | null) => {
		setExperience((prev) => ({
			...prev,
			startDate: date?.toISOString() || null,
		}))
	}

	const handleEndDateChange = (date: Date | null) => {
		setExperience((prev) => ({ ...prev, endDate: date?.toISOString() || null }))
	}

	const handleSubmit = () => {
		if (experience.company && experience.role) {
			onSave(experience)
			onClose()
		}
	}

	return (
		<div className={styles.backdrop}>
			<div className={styles.modal}>
				<h3>Добавить опыт работы</h3>

				<input
					type='text'
					name='company'
					placeholder='Компания'
					value={experience.company}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='role'
					placeholder='Должность'
					value={experience.role}
					onChange={handleChange}
				/>
				<div className={styles.datePickers}>
					<div>
						<label>Начало работы:</label>
						<DatePicker
							selected={
								experience.startDate ? new Date(experience.startDate) : null
							}
							onChange={handleStartDateChange}
							dateFormat='dd/MM/yyyy'
							placeholderText='Выберите дату'
						/>
					</div>
					<div>
						<label>Окончание работы:</label>
						<DatePicker
							selected={
								experience.endDate ? new Date(experience.endDate) : null
							}
							onChange={handleEndDateChange}
							dateFormat='dd/MM/yyyy'
							placeholderText='Выберите дату'
						/>
					</div>
				</div>
				<textarea
					name='description'
					placeholder='Обязанности'
					value={experience.description}
					onChange={handleChange}
				/>

				<div className={styles.actions}>
					<button onClick={handleSubmit}>Сохранить</button>
					<button onClick={onClose}>Отмена</button>
				</div>
			</div>
		</div>
	)
}
