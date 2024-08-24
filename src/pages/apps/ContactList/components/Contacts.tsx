import { Col, Row, Card, CardBody } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ContactsData } from '../data'

const Contacts = () => {
	return (
		<Row>
			{ContactsData.map((contacts, idx) => {
				return (
					<Col lg={3} key={idx}>
						<Card>
							<CardBody>
								<Row>
									<Col>
										<div className="media">
											<img
												src={contacts.contactUserImg}
												alt="user"
												className="rounded-circle thumb-lg align-self-center"
											/>
											<div className="media-body ms-3 align-self-center">
												<h5 className="mt-0 mb-1">{contacts.contactName}</h5>
												<p className="mb-0 text-muted">{contacts.jobProfile}</p>
											</div>
										</div>
									</Col>
									<div className="col-auto align-self-center">
										<ul className="list-inline mb-0">
											<li className="list-inline-item">
												<Link to="#" className="me-1 contact-icon">
													<i className="fas fa-phone"></i>
												</Link>
												<Link to="#" className="contact-icon">
													<i className="far fa-envelope"></i>
												</Link>
											</li>
										</ul>
									</div>
								</Row>
							</CardBody>
						</Card>
					</Col>
				)
			})}
		</Row>
	)
}

export default Contacts
