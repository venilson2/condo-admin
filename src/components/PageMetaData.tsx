import { Helmet } from 'react-helmet'

const PageMetaData = ({ title }: { title: string }) => {
	return (
		<Helmet>
			<title>{title} | Dastone - Admin & Dashboard Template</title>
		</Helmet>
	)
}

export default PageMetaData
