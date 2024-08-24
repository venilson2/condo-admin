import { PageBreadcrumb2 } from '@/components'
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'

import dastyle from '@/assets/images/dashboards/dastyle.jpg'
import metrica from '@/assets/images/dashboards/metrica.jpg'
import crovex from '@/assets/images/dashboards/crovex.jpg'
import frogetor from '@/assets/images/dashboards/frogetor.jpg'

const Ribbons = () => {
	return (
		<>
			<PageBreadcrumb2 title="Ribbons" appName="Advanced UI" />
			<Row>
				<Col md={6}>
					<Card>
						<CardBody>
							<div className="ribbon4 rib4-primary">
								<span className="ribbon4-band ribbon4-band-primary text-white text-center">
									50% off
								</span>
							</div>
							<Row>
								<Col xs="auto">
									<img
										src={dastyle}
										alt="user"
										height={150}
										className="align-self-center mb-3 mb-lg-0"
									/>
								</Col>
								<Col className="align-self-center">
									<p className="font-24 fw-semibold mb-2">
										Dastyle - Admin &amp; Dashboard Template
									</p>
									<p className="text-muted">
										Dastyle is a Bootstrap 4 admin dashboard, It is fully
										responsive and included awesome features to help build web
										applications fast and easy.
									</p>
									<Button variant="soft-primary" size="sm">
										Live Priview
									</Button>
									<Button variant="soft-primary" size="sm" className="ms-1">
										Download Now
									</Button>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<CardBody>
							<div className="ribbon4 rib4-warning">
								<span className="ribbon4-band ribbon4-band-warning text-white text-center">
									50% off
								</span>
							</div>
							<Row>
								<Col xs="auto">
									<img
										src={metrica}
										alt="user"
										height={150}
										className="align-self-center mb-3 mb-lg-0"
									/>
								</Col>
								<div className="col align-self-center">
									<p className="font-18 fw-semibold mb-2">
										Metrica - Admin &amp; Dashboard Template
									</p>
									<p className="text-muted">
										Metrica is a Bootstrap 4 admin dashboard, It is fully
										responsive and included awesome features to help build web
										applications fast and easy.
									</p>
									<Button variant="soft-primary" size="sm">
										Live Priview
									</Button>
									<Button variant="soft-primary" size="sm" className="ms-1">
										Download Now
									</Button>
								</div>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<Card>
						<CardBody>
							<div className="ribbon1 rib1-secondary">
								<span className="text-white text-center rib1-secondary">
									50% off
								</span>
							</div>
							<Row>
								<Col xs="auto">
									<img
										src={crovex}
										alt="user"
										height={150}
										className="align-self-center mb-3 mb-lg-0"
									/>
								</Col>
								<div className="col align-self-center">
									<p className="font-18 fw-semibold mb-2">
										Crovex - Admin &amp; Dashboard Template
									</p>
									<p className="text-muted">
										Crovex is a Bootstrap 4 admin dashboard, It is fully
										responsive and included awesome features to help build web
										applications fast and easy.
									</p>
									<Button variant="soft-primary" size="sm">
										Live Priview
									</Button>
									<Button variant="soft-primary" size="sm" className="ms-1">
										Download Now
									</Button>
								</div>
							</Row>
						</CardBody>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<CardBody>
							<div className="ribbon1 rib1-success">
								<span className="text-white text-center rib1-success">
									50% off
								</span>
							</div>
							<Row>
								<Col xs="auto">
									<img
										src={frogetor}
										alt="user"
										height={150}
										className="align-self-center mb-3 mb-lg-0"
									/>
								</Col>
								<div className="col align-self-center">
									<p className="font-18 fw-semibold mb-2">
										Frogetor - Admin &amp; Dashboard Template
									</p>
									<p className="text-muted">
										Frogetor is a Bootstrap 4 admin dashboard, It is fully
										responsive and included awesome features to help build web
										applications fast and easy.
									</p>
									<Button variant="soft-primary" size="sm">
										Live Priview
									</Button>
									<Button variant="soft-primary" size="sm" className="ms-1">
										Download Now
									</Button>
								</div>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<Card>
						<CardBody>
							<div className="ribbon3 rib3-primary">
								<span className="text-white text-center rib3-primary">
									50% off
								</span>
							</div>
							<Row>
								<Col xs="auto">
									<img
										src={metrica}
										alt="user"
										height={150}
										className="align-self-center mb-3 mb-lg-0"
									/>
								</Col>
								<div className="col align-self-center">
									<p className="font-18 fw-semibold mb-2">
										Metrica - Admin &amp; Dashboard Template
									</p>
									<p className="text-muted">
										Metrica is a Bootstrap 4 admin dashboard, It is fully
										responsive and included awesome features to help build web
										applications fast and easy.
									</p>
									<Button variant="soft-primary" size="sm">
										Live Priview
									</Button>
									<Button variant="soft-primary" size="sm" className="ms-1">
										Download Now
									</Button>
								</div>
							</Row>
						</CardBody>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<CardBody>
							<div className="ribbon3 rib3-warning">
								<span className="text-white text-center rib3-warning">
									50% off
								</span>
							</div>
							<Row>
								<Col xs="auto">
									<img
										src={dastyle}
										alt="user"
										height={150}
										className="align-self-center mb-3 mb-lg-0"
									/>
								</Col>
								<div className="col align-self-center">
									<p className="font-18 fw-semibold mb-2">
										Dastyle - Admin &amp; Dashboard Template
									</p>
									<p className="text-muted">
										Dastyle is a Bootstrap 4 admin dashboard, It is fully
										responsive and included awesome features to help build web
										applications fast and easy.
									</p>
									<Button variant="soft-primary" size="sm">
										Live Priview
									</Button>
									<Button variant="soft-primary" size="sm" className="ms-1">
										Download Now
									</Button>
								</div>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<Card>
						<CardBody>
							<div className="ribbon2 rib2-secondary">
								<span className="text-white text-center rib3-secondary">
									50% off
								</span>
							</div>
							<Row>
								<Col xs="auto">
									<img
										src={frogetor}
										alt="user"
										height={150}
										className="align-self-center mb-3 mb-lg-0"
									/>
								</Col>
								<div className="col align-self-center">
									<p className="font-18 fw-semibold mb-2">
										Frogetor - Admin &amp; Dashboard Template
									</p>
									<p className="text-muted">
										Frogetor is a Bootstrap 4 admin dashboard, It is fully
										responsive and included awesome features to help build web
										applications fast and easy.
									</p>
									<Button variant="soft-primary" size="sm">
										Live Priview
									</Button>
									<Button variant="soft-primary" size="sm" className="ms-1">
										Download Now
									</Button>
								</div>
							</Row>
						</CardBody>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<CardBody>
							<div className="ribbon2 rib2-success">
								<span className="text-white text-center rib3-success">
									50% off
								</span>
							</div>
							<Row>
								<Col xs="auto">
									<img
										src={crovex}
										alt="user"
										height={150}
										className="align-self-center mb-3 mb-lg-0"
									/>
								</Col>
								<div className="col align-self-center">
									<p className="font-18 fw-semibold mb-2">
										Crovex - Admin &amp; Dashboard Template
									</p>
									<p className="text-muted">
										Crovex is a Bootstrap 4 admin dashboard, It is fully
										responsive and included awesome features to help build web
										applications fast and easy.
									</p>
									<Button variant="soft-primary" size="sm">
										Live Priview
									</Button>
									<Button variant="soft-primary" size="sm" className="ms-1">
										Download Now
									</Button>
								</div>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Ribbons
