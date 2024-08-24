import { ActivityCard, PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'
import Statistics from './components/Statistics'
import OverviewChart from './components/OverviewChart'
import ProjectStatus from './components/ProjectStatus'
import AllProjects from './components/AllProjects'
import TasksPerformanceChart from './components/TasksPerformanceChart'

const Overview = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Projects" title="Overview" />

			<Statistics />

			<Row>
				<Col lg={4}>
					<TasksPerformanceChart />
				</Col>

				<Col lg={8}>
					<OverviewChart />
				</Col>
			</Row>

			<Row>
				<Col lg={8}>
					<ProjectStatus />
				</Col>
				<Col lg={4}>
					<ActivityCard height={425} />
				</Col>
			</Row>

			<Row>
				<Col lg={12}>
					<AllProjects />
				</Col>
			</Row>
		</>
	)
}

export default Overview
