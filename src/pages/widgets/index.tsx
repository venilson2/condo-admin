import { ActivityCard, PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import Tickets from './components/Tickets'
import SupportStatus from './components/SupportStatus'
import CallWidget from './components/CallWidget'
import PagesViews from './components/PagesViews'
import OrderByChannel from './components/OrderByChannel'
import EarrningReportWidget from './components/EarrningReportWidget'
import Opportunities from './components/Opportunities'
import Faqs from './components/Faqs'
import TrafficSources from './components/TrafficSources'
import CustomerSatisfaction from './components/CustomerSatisfaction'
import SessionsDeviceWidget from './components/SessionsDeviceWidget'
import Statistics from '../dashboards/Analytics/components/Statistics'
import TasksPerformanceChart from '../apps/projects/Overview/components/TasksPerformanceChart'

const Widgets = () => {
	return (
		<>
			<PageBreadcrumb subName="Widgets" title="Widgets" />
			<Row>
				<Col lg={12}>
					<Statistics />
				</Col>
			</Row>

			<Row>
				<Col lg={12}>
					<Tickets />
				</Col>
			</Row>

			<Row>
				<SupportStatus />
				<CallWidget />
			</Row>
			<Row>
				<Col lg={4}>
					<PagesViews />
				</Col>
				<Col lg={4}>
					<ActivityCard height={400} />
				</Col>
				<Col lg={4}>
					<OrderByChannel />
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<EarrningReportWidget />
				</Col>
				<Col lg={4}>
					<Opportunities />
				</Col>
				<Col lg={4}>
					<Faqs />
				</Col>
			</Row>
			<Row>
				<Col lg={3}>
					<TrafficSources />
				</Col>
				<Col lg={3}>
					<CustomerSatisfaction />
				</Col>
				<Col lg={3}>
					<TasksPerformanceChart />
				</Col>
				<Col lg={3}>
					<SessionsDeviceWidget />
				</Col>
			</Row>
		</>
	)
}

export default Widgets
