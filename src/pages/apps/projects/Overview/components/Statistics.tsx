import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { FaDollarSign } from 'react-icons/fa'
import { FiCheckSquare, FiClock, FiLayers } from 'react-icons/fi'

const Statistics = () => {
	return (
		<Row className="justify-content-center">
			<Col md={6} lg={3}>
				<Card className="report-card">
					<CardBody>
						<Row className="d-flex justify-content-center">
							<Col>
								<p className="text-dark mb-1 font-weight-semibold">Projects</p>
								<h4 className="mb-0">77</h4>
								<p className="mb-0 text-truncate text-muted">
									<span className="text-success">
										<i className="mdi mdi-checkbox-marked-circle-outline me-1" />
									</span>
									26 Project Complete
								</p>
							</Col>
							<div className="col-auto align-self-center">
								<div className="report-main-icon bg-light-alt">
									<FiLayers className="align-self-center text-muted icon-md" />
								</div>
							</div>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Col md={6} lg={3}>
				<Card className="report-card">
					<CardBody>
						<Row className="d-flex justify-content-center">
							<Col>
								<p className="text-dark mb-1 font-weight-semibold">Tasks</p>
								<h4 className="mb-0">41</h4>
								<p className="mb-0 text-truncate text-muted">
									<span className="badge badge-soft-success">Active</span>{' '}
									Weekly Avg.Sessions
								</p>
							</Col>
							<div className="col-auto align-self-center">
								<div className="report-main-icon bg-light-alt">
									<FiCheckSquare className="align-self-center text-muted icon-md" />
								</div>
							</div>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Col md={6} lg={3}>
				<Card className="report-card">
					<CardBody>
						<Row className="d-flex justify-content-center">
							<Col>
								<p className="text-dark mb-1 font-weight-semibold">
									Total Hours
								</p>
								<h4 className="mb-0">801:30</h4>
								<p className="mb-0 text-truncate text-muted">
									<span className="text-muted">01:33</span> /
									<span className="text-muted">9:30</span> Duration
								</p>
							</Col>
							<div className="col-auto align-self-center">
								<div className="report-main-icon bg-light-alt">
									<FiClock className="align-self-center text-muted icon-md" />
								</div>
							</div>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Col md={6} lg={3}>
				<Card className="report-card">
					<CardBody>
						<Row className="d-flex justify-content-center">
							<Col>
								<p className="text-dark mb-1 font-weight-semibold">Budget</p>
								<h4 className="mb-0">$24100</h4>
								<p className="mb-0 text-truncate text-muted">
									<span className="text-dark">$14k</span> Total used budgets
								</p>
							</Col>
							<div className="col-auto align-self-center">
								<div className="report-main-icon bg-light-alt">
									<FaDollarSign className="align-self-center text-muted icon-md" />
								</div>
							</div>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

export default Statistics
