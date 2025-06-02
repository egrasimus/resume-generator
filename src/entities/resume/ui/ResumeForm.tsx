import React from "react"
import { useResumeState } from "../model"

export const ResumeForm = ({ data, setData }) => {
	console.log({ data })

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		console.log(e.target.name)
		console.log(e.target.value)
		setData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<input
				name='fullName'
				value={data.fullName}
				onChange={handleChange}
				placeholder='Full Name'
			/>
			<input
				name='position'
				value={data.position}
				onChange={handleChange}
				placeholder='Position'
			/>
			<textarea
				name='summary'
				value={data.summary}
				onChange={handleChange}
				placeholder='Summary'
			/>
			<textarea
				name='experience'
				value={data.experience}
				onChange={handleChange}
				placeholder='Experience'
			/>
			<textarea
				name='skills'
				value={data.skills}
				onChange={handleChange}
				placeholder='Skills'
			/>
			<textarea
				name='education'
				value={data.education}
				onChange={handleChange}
				placeholder='Education'
			/>
			<input
				name='contacts'
				value={data.contacts}
				onChange={handleChange}
				placeholder='Contacts'
			/>
		</form>
	)
}
