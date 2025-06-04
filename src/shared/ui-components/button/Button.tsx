import type { ButtonHTMLAttributes, FC, ReactNode } from "react"
import styles from "./Button.module.scss"

type ButtonVariant = "primary" | "secondary" | "danger"
type ButtonSize = "small" | "medium" | "large"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: ButtonVariant
	size?: ButtonSize
	disabled?: boolean
	loading?: boolean
	fullWidth?: boolean
}

export const Button: FC<ButtonProps> = ({
	children,
	variant = "primary",
	size = "medium",
	disabled = false,
	loading = false,
	fullWidth = false,
	type = "button",
	onClick,
	...props
}) => {
	const buttonClass = [
		styles.button,
		styles[variant],
		styles[size],
		fullWidth && styles.fullWidth,
		disabled && styles.disabled,
		loading && styles.loading,
	]
		.filter(Boolean)
		.join(" ")

	return (
		<button
			type={type}
			className={buttonClass}
			disabled={disabled || loading}
			onClick={onClick}
			{...props}
		>
			{loading && <span className={styles.spinner} />}
			<span className={loading ? styles.loadingText : ""}>{children}</span>
		</button>
	)
}
