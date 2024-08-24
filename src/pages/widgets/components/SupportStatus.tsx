import { ComponentContainerCard } from '@/components'
import { Col, Row, ProgressBar } from 'react-bootstrap'

const SupportStatus = () => {
	return (
		<Col lg={4}>
			<ComponentContainerCard
				title="Support Status"
				label="This Month"
				menuItems={['View']}
			>
				<Row>
					<Col className="support-tickets">
						<h4 className="fw-semibold">1530</h4>
						<h5>Tickets</h5>
					</Col>
					<div className="col-auto align-self-center">
						<ul className="list-inline url-list mb-0">
							<li className="list-inline-item mb-2">
								<i className="fas fa-circle text-primary fs-6 me-1"></i>
								<span>Open Tickets</span>
							</li>
							<li className="list-inline-item mb-2">
								<i className="fas fa-circle text-info fs-6 me-1"></i>
								<span>Resolved Tickets</span>
							</li>
							<li className="list-inline-item mb-3">
								<i className="fas fa-circle text-success fs-6 me-1"></i>
								<span>Unresolved Tickets</span>
							</li>
						</ul>
					</div>
				</Row>
				<ProgressBar className="mt-4">
					<ProgressBar
						variant="primary"
						striped
						animated
						now={70}
						label="70%"
					/>
					<ProgressBar variant="info" now={25} label="25%" />
					<ProgressBar variant="success" now={5} label="5%" />
				</ProgressBar>
			</ComponentContainerCard>
		</Col>
	)
}

export default SupportStatus
