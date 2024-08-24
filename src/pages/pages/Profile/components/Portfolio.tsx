import { Row, Col, Card, Button, Image, CardBody } from 'react-bootstrap'
import { PortfolioData } from '../data'

const Portfolio = () => {
	return (
		<Row>
			{PortfolioData.map((portfolio, idx) => (
				<Col md={6} key={idx}>
					<Card>
						<CardBody>
							{/* <div className="ribbon4 rib4-primary">
                            <span className="ribbon4-band ribbon4-band-primary text-white text-center">
                                50% off
                            </span>
                        </div> */}
							<Row>
								<Col xs="auto">
									<Image
										src={portfolio.image}
										alt="user"
										height="150"
										className="align-self-center mb-3 mb-lg-0"
									/>
								</Col>
								<Col className="align-self-center">
									<p className="font-18 fw-semibold mb-2">
										{portfolio.title} - Admin & Dashboard Template
									</p>
									<p className="text-muted">{portfolio.description}</p>
									<Button variant="primary" size="sm" className="me-2">
										Live Preview
									</Button>
									<Button variant="primary" size="sm">
										Download Now
									</Button>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default Portfolio
