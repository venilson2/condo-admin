import { ActivityCard, PageBreadcrumb } from '@/components'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Statistics from './components/Statistics'
import AudienceOverviewChart from './components/AudienceOverviewChart'
import SessionsDevice from './components/SessionsDevice'
import ViewByUsers from './components/ViewByUsers'
import SessionsByChannels from './components/SessionsByChannels'
import TrafficReports from './components/TrafficReports'
import BrowserReports from './components/BrowserReports'

const Dashboard = () => {
	return (
		<>
			<PageBreadcrumb subName="Dashboard" title="Dashboard" />
			<Row>
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
