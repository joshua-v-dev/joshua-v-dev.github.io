const Details = ({ htmlString, data }) => {
	return (
		<>
			<Head>
				<title>{data.title}</title>
				<meta title='description' content={data.description} />
			</Head>
			<h1>Projects Page</h1>
			<pre>{projects}</pre>
			<div dangerouslySetInnerHTML={{ __html: htmlString }} />
		</>
	)
}
