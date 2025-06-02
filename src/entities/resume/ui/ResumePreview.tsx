
export const ResumePreview = ({ data }) => {
	return (
		<div style={{ border: "1px solid #ccc", padding: "1rem" }}>
			<h2>{data.fullName}</h2>
			<h3>{data.position}</h3>
			<p>{data.summary}</p>
			<h4>Experience</h4>
			<p>{data.experience}</p>
			<h4>Skills</h4>
			<p>{data.skills}</p>
			<h4>Education</h4>
			<p>{data.education}</p>
			<h4>Contacts</h4>
			<p>{data.contacts}</p>
		</div>
	)
}
