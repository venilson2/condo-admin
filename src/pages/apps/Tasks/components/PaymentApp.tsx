import { Col, Card, ProgressBar, Row, CardBody } from 'react-bootstrap'

import project3 from '@/assets/images/widgets/project3.jpg'

const PaymentApp = () => {
	return (
		<Col lg={4}>
			<Card>
				<CardBody>
					<div className="media mb-5">
						<img src={project3} alt="" className="thumb-lg rounded-circle" />
						<div className="media-body align-self-center text-truncate ms-3">
							<p className="text-muted mb-0 font-11 text-uppercase">Project</p>
							<h4 className="mt-0 mb-0 fw-semibold text-dark font-16">
								Payment App
							</h4>
						</div>
					</div>

					<div className="d-flex justify-content-between">
						<div>
							<span className="badge badge-light">UX/UI Design</span>
							<span className="badge badge-light">Python</span>
							<span className="badge badge-light">React</span>
						</div>
						<small className="fw-semibold font-13 align-self-center">
							last update 45min
						</small>
					</div>
					<div className="mt-2">
						<ProgressBar
							now={85}
							variant="secondary"
							style={{ height: '5px' }}
						/>
					</div>
					<Row className="mt-4">
						<Col className="text-center align-items-center">
							<h5 className="mb-0 fw-semibold font-20">5</h5>
							<p className="font-12 mb-1 text-muted">Assigned</p>
						</Col>
						<Col className="text-center align-items-center">
							<h5 className="mb-0 fw-semibold font-20">3</h5>
							<p className="font-12 mb-1 text-muted">Started</p>
						</Col>
						<Col className="text-center align-items-center">
							<h5 className="mb-0 fw-semibold font-20">7</h5>
							<p className="font-12 mb-1 text-muted">Completed</p>
						</Col>
					</Row>
					<div className="mt-4 d-flex justify-content-between">
						<p className="mb-0 fw-semibold">
							Start Date :{' '}
							<span className="text-muted fw-normal ms-2">20 june 2019</span>{' '}
						</p>
						<p className="mb-0 text-danger fw-semibold">
							Deadline :{' '}
							<span className="text-muted fw-normal ms-2">08 Aug 2019</span>{' '}
						</p>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

export default PaymentApp
