import { Field } from "formik"
import type { FC } from "react"
import type { ResumeData } from "@/shared/types"
import styles from "./InputField.module.scss"

interface InputFieldProps {
	name: keyof ResumeData
	placeholder: string
	type?: string
	as?: "input" | "textarea"
	rows?: number
}

export const InputField: FC<InputFieldProps> = ({
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
