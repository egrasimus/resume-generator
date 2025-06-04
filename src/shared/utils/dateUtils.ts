const getYearWord = (n) => {
	if (n % 10 === 1 && n % 100 !== 11) return "год"
	if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100))
		return "года"
	return "лет"
}

export const getMonthWord = (n) => {
	if (n % 10 === 1 && n % 100 !== 11) return "месяц"
	if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100))
		return "месяца"
	return "месяцев"
}

export const calculateDuration = (start, end) => {
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
