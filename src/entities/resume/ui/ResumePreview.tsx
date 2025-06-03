import React from "react"

export const ResumePreview = ({ data }) => {
	return (
		<div
			id='resume-preview'
			style={{
				display: "flex",
				flexDirection: "column",
				padding: "2rem",
				backgroundColor: "#fff",
				color: "#000",
				fontFamily: "sans-serif",
				maxWidth: "800px",
				margin: "0 auto",
				lineHeight: 1.5,
				border: "1px solid #ccc",
			}}
		>
			{/* Шапка */}
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div style={{ flex: 1 }}>
					<h1 style={{ marginBottom: "0.5rem" }}>{data.fullName}</h1>
					<p>
						<strong>Местоположение:</strong> {data.location}
						<br />
						<strong>Готовность к работе:</strong> {data.remoteReady}
					</p>
					<p>
						<strong>Стаж:</strong> {data.experienceYears} лет
						<br />
						<strong>Возраст:</strong> {data.age} лет
						<br />
						<strong>Зарплатные ожидания:</strong> {data.salaryExpectations}
					</p>
					<p>
						<strong>Контактная информация:</strong>
						<br />
						Хабр Карьера: {data.habr}
						<br />
						Моб.: {data.phone}
						<br />
						Телеграм: {data.telegram}
						<br />
						Email: {data.email}
					</p>
				</div>
				{data.photoUrl && (
					<img
						src={data.photoUrl}
						alt='Фото'
						style={{
							width: "150px",
							height: "150px",
							objectFit: "cover",
							borderRadius: "8px",
							marginLeft: "2rem",
						}}
					/>
				)}
			</div>

			<hr style={{ margin: "2rem 0" }} />

			{/* Навыки */}
			<h2 style={{ marginBottom: "0.5rem" }}>Профессиональные навыки</h2>
			<p>{data.skills}</p>

			{/* Опыт */}
			<h2 style={{ margin: "2rem 0 0.5rem" }}>Опыт работы</h2>
			<p>{data.experience}</p>

			{/* Образование */}
			<h2 style={{ margin: "2rem 0 0.5rem" }}>Образование</h2>
			<p>{data.education}</p>

			{/* О себе */}
			<h2 style={{ margin: "2rem 0 0.5rem" }}>О себе</h2>
			<p>{data.summary}</p>

			{/* Доп. контакты (если нужны) */}
			{data.contacts && (
				<>
					<h2 style={{ margin: "2rem 0 0.5rem" }}>Дополнительные контакты</h2>
					<p>{data.contacts}</p>
				</>
			)}
		</div>
	)
}
