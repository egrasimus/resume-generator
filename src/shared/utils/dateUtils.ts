const getYearWord = (n: number): string => {
	if (n % 10 === 1 && n % 100 !== 11) return "год"
	if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100))
		return "года"
	return "лет"
}

export const getMonthWord = (n: number): string => {
	if (n % 10 === 1 && n % 100 !== 11) return "месяц"
	if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100))
		return "месяца"
	return "месяцев"
}

export const calculateDuration = (
	start?: string | Date | null,
	end?: string | Date | null
) => {
	if (!start || !end) return ""

	const startDate = new Date(start)
	const endDate = new Date(end)

	let years = endDate.getFullYear() - startDate.getFullYear()
	let months = endDate.getMonth() - startDate.getMonth()

	if (months < 0) {
		years--
		months += 12
	}

	const yearStr = years > 0 ? `${years} ${getYearWord(years)}` : ""
	const monthStr = months > 0 ? `${months} ${getMonthWord(months)}` : ""

	return [yearStr, monthStr].filter(Boolean).join(" ")
}

// Возвращает строку вида 'X г. Y мес.' для разницы между start и end
export function getDuration(start: string | null, end: string | null): string {
	const startDate = new Date(start || "")
	const endDate = end ? new Date(end) : new Date()
	let years = endDate.getFullYear() - startDate.getFullYear()
	let months = endDate.getMonth() - startDate.getMonth()
	if (months < 0) {
		years--
		months += 12
	}
	const yearsStr = years > 0 ? `${years} г.` : ""
	const monthsStr = months > 0 ? `${months} мес.` : ""
	return (
		`${yearsStr}${yearsStr && monthsStr ? " " : ""}${monthsStr}` || "0 мес."
	)
}
