import { ResumePage } from "@/pages/resume"
import styles from "./App.module.scss"

export const App = () => {
	return (
		<main>
			<div className={styles.wrapper}>
				<ResumePage />
			</div>
		</main>
	)
}
