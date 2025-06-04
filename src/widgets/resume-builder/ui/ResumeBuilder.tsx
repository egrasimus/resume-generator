import { ResumeForm, ResumePreview, useResumeState } from "@/entities/resume"
import type { FC } from "react"

export const ResumeBuilder: FC = () => {
	const { data, setData } = useResumeState()

	return (
		<div
			style={{
				display: "flex",
				gap: "2rem",
				alignItems: "flex-start",
				width: "100%",
			}}
		>
			<div style={{ flex: 1 }}>
				<ResumeForm data={data} setData={setData} />
			</div>
			<div style={{ flex: 1 }}>
				<ResumePreview data={data} />
			</div>
		</div>
	)
}
