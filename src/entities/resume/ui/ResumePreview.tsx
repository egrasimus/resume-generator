import { type FC } from "react"
import styles from "./ResumePreview.module.scss"
import type { ResumeData } from "@/shared/types"
import { Header } from "./ResumePreview/Header"
import { ContactInfo } from "./ResumePreview/ContactInfo"
import { Skills } from "./ResumePreview/Skills"
import { Experience } from "./ResumePreview/Experience"
import { Summary } from "./ResumePreview/Summary"
import { Education } from "./ResumePreview/Education"
import { AdditionalContacts } from "./ResumePreview/AdditionalContacts"

interface ResumePreviewProps {
	data: ResumeData
}

export const ResumePreview: FC<ResumePreviewProps> = ({ data }) => {
	return (
		<div id='resume-preview' className={styles.resumeContainer}>
			<Header data={data} />
			<ContactInfo data={data} />
			<Skills skills={data.skills} />
			<Experience experience={data.experience} />
			<Summary summary={data.summary} />
			<Education education={data.education} />
			<AdditionalContacts contacts={data.contacts} />
		</div>
	)
}
