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

const Analytics = () => {
	return (
		<>
			<PageBreadcrumb subName="Dashboard" title="Analytics" />
			<Row>
				<Col lg={9}>
					<Statistics />
					<AudienceOverviewChart />
				</Col>
				<Col lg={3}>
					<SessionsDevice />
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<ViewByUsers />

					<Card>
						<CardBody>
							<div className="d-flex">
								<h2 className="m-0 align-self-center">80</h2>
								<div className="d-block ms-2 align-self-center">
									<span className="text-warning">Right now</span>
									<h5 className="my-1">Traffic Sources</h5>
									<p className="mb-0 text-muted">
										It is a long established fact that a reader will be of a
										page when looking at its layout.
										<Link to="#" className="text-primary">
											Read More <i className="las la-arrow-right"></i>
										</Link>
									</p>
								</div>
							</div>
						</CardBody>
					</Card>
				</Col>

				<Col lg={4}>
					<SessionsByChannels />
				</Col>
				<Col lg={4}>
					<ActivityCard height={400} />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<TrafficReports />
				</Col>
				<Col lg={6}>
					<BrowserReports />
				</Col>
			</Row>
		</>
	)
}

export default Analytics
