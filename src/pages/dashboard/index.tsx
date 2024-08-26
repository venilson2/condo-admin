import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import Statistics from './components/Statistics'
import AudienceOverviewChart from './components/AudienceOverviewChart'
import SessionsDevice from './components/SessionsDevice'

const Dashboard = () => {
	return (
		<>
			<PageBreadcrumb subName="Dashboard" title="Dashboard" />
			<Row className="row">
				<Col lg={9}>
					<Statistics />
					<AudienceOverviewChart />
				</Col>
				<Col lg={3}>
					<SessionsDevice />
				</Col>
			</Row>
		</>
	)
}

export default Dashboard
