import { useState, useEffect, type FC } from "react"
import { Formik, Form } from "formik"
import styles from "./ResumeForm.module.scss"
import { DownloadButton } from "@/features/download-pdf"
import { WorkExperienceModal } from "@/features/work-experience-modal/ui/WorkExperienceModal"
import { Button } from "@/shared/ui-components/button"
import type { JobExperience, ResumeData } from "@/shared/types"
import { saveResumeToStorage } from "@/shared/utils/storageUtils"
import { ExperienceList } from "./ExperienceList"
import { MainInfoFields } from "./MainInfoFields"
import { ProfessionalFields } from "./ProfessionalFields"
import { ContactFields } from "./ContactFields"
import { DetailFields } from "./DetailFields"

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
		saveResumeToStorage(newData)
	}

	const handleValuesChange = (values: ResumeData) => {
		setData(values)
		saveResumeToStorage(values)
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
								<MainInfoFields />
								<ProfessionalFields />
							</div>

							<ContactFields />

							<DetailFields />

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

								<ExperienceList experience={values.experience || []} />
							</div>

							<DownloadButton />
						</Form>
					)
				}}
			</Formik>
		</div>
	)
}
