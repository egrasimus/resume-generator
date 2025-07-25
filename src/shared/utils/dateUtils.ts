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
	if (!start) return ""
	const startDate = new Date(start)
	const endDate = end ? new Date(end) : new Date()

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

export function getTotalExperience(
	experience: {
		startDate?: string | Date | null
		endDate?: string | Date | null
	}[] = []
) {
	const periods = experience
		.filter((job) => job.startDate)
		.map((job) => [
			new Date(job.startDate!),
			job.endDate ? new Date(job.endDate) : new Date(),
		])
		.sort((a, b) => a[0].getTime() - b[0].getTime())
	if (periods.length === 0) return "0 мес."
	const merged: [Date, Date][] = []
	for (const [start, end] of periods) {
		if (!merged.length || start > merged[merged.length - 1][1]) {
			merged.push([start, end])
		} else {
			merged[merged.length - 1][1] = new Date(
				Math.max(merged[merged.length - 1][1].getTime(), end.getTime())
			)
		}
	}
	let totalMonths = 0
	for (const [start, end] of merged) {
		let years = end.getFullYear() - start.getFullYear()
		let months = end.getMonth() - start.getMonth()
		if (months < 0) {
			years--
			months += 12
		}
		totalMonths += years * 12 + months
	}
	const years = Math.floor(totalMonths / 12)
	const months = totalMonths % 12
	let result = []
	if (years > 0)
		result.push(`${years} ${years === 1 ? "год" : years < 5 ? "года" : "лет"}`)
	if (months > 0) result.push(`${months} мес.`)
	return result.join(" ") || "0 мес."
}
