import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Form,
	FormGroup,
	Image,
	Row,
} from 'react-bootstrap'
import widgets1 from '@/assets/images/widgets/1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import logoSM from '@/assets/images/logo-sm.png'
import user1 from '@/assets/images/users/user-1.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import { Link } from 'react-router-dom'

import Img1 from '@/assets/images/users/user-5.jpg'
import Img2 from '@/assets/images/users/user-5.jpg'
import Img4 from '@/assets/images/users/user-5.jpg'
import Img5 from '@/assets/images/users/user-5.jpg'
import { LitePicker } from 'react-litepicker'

const Posttask = () => {
	return (
		<Row>
			<Col lg={9}>
				<Row>
					<Col lg={6}>
						<Card>
							<CardBody className="report-card">
								<Row className="d-flex justify-content-center">
									<Col>
										<p className="text-dark mb-1 fw-semibold">Views</p>
										<h3 className="my-2 font-24 fw-bold">24k</h3>
										<p className="mb-0 text-truncate text-muted">
											<i className="ti ti-bell text-warning font-18"></i>
											<span className="text-dark fw-semibold">1500</span> New
											subscribers this week
										</p>
									</Col>
									<div className="col-auto align-self-center">
										<div className="d-flex justify-content-center align-items-center thumb-xl bg-light-alt rounded-circle mx-auto">
											<i className="ti ti-eye font-30 align-self-center text-muted"></i>
										</div>
									</div>
								</Row>
							</CardBody>
						</Card>
					</Col>
					<Col lg={6}>
						<Card>
							<CardBody className="report-card">
								<Row className="d-flex justify-content-center">
									<Col>
										<p className="text-dark mb-1 fw-semibold">Comments</p>
										<h3 className="my-2 font-24 fw-bold">24k</h3>
										<p className="mb-0 text-truncate text-muted">
											<i className="ti ti-thumb-up text-success font-18"></i>
											<span className="text-dark fw-semibold">854</span> New
											Like this week
										</p>
									</Col>
									<div className="col-auto align-self-center">
										<div className="d-flex justify-content-center align-items-center thumb-xl bg-light-alt rounded-circle mx-auto">
											<i className="ti ti-brand-hipchat font-30 align-self-center text-muted"></i>
										</div>
									</div>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>

				<Card>
					<CardBody>
						<Image src={widgets1} alt="" className="img-fluid" />
						<div className="post-title mt-4">
							<Row>
								<Col>
									<span className="badge badge-soft-primary">Natural</span>
								</Col>
								<div className="col-auto">
									<span className="text-muted">
										<i className="far fa-calendar me-1"></i>
										02 July 2020
									</span>
								</div>
							</Row>

							<h5 className="font-20 fw-bold d-block mt-3 mb-4">
								There is nothing more beautiful than nature.
							</h5>
							<span className="font-15 bg-light py-2 px-3 rounded">
								Taking pictures is savouring life intensely.
							</span>
							<p className="font-15 mt-4">
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using 'Content
								here, content here', making it look like readable English. Many
								desktop publishing packages and web page editors now use Lorem
								Ipsum as their default model text, and a search for 'lorem
								ipsum' will uncover many web sites still in their infancy.
							</p>
							<blockquote className="blockquote border-start ps-4">
								<p className="font-18">
									<i>
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Integer posuere erat a ante."
									</i>
								</p>
								<footer className="blockquote-footer">
									Someone famous in{' '}
									<cite title="Source Title">Source Title</cite>
								</footer>
							</blockquote>
							<p className="font-15">
								Taking pictures is savouring life intensely, every hundredth of
								a second – Marc Riboud. Joy in looking and comprehending is
								nature’s most beautiful gift.
							</p>
							<p className="font-15 mb-0">
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using 'Content
								here, content here', making it look like readable English. Many
								desktop publishing packages and web page editors now use Lorem
								Ipsum as their default model text, and a search for 'lorem
								ipsum' will uncover many web sites still in their infancy.
							</p>
						</div>
					</CardBody>
					<CardBody className="pt-0">
						<Row className="mb-3">
							<Col>
								<p className="text-dark fw-semibold mb-0">Artical tags</p>
							</Col>
						</Row>
						<span className="badge bg-soft-dark px-3 py-2 fw-semibold">
							Music
						</span>
						<span className="badge bg-soft-dark px-3 py-2 fw-semibold">
							Animals
						</span>
						<span className="badge bg-soft-dark px-3 py-2 fw-semibold">
							Natural
						</span>
						<span className="badge bg-soft-dark px-3 py-2 fw-semibold">
							Food
						</span>
						<span className="badge bg-soft-dark px-3 py-2 fw-semibold">
							Fashion
						</span>
						<span className="badge bg-soft-dark px-3 py-2 fw-semibold">
							Helth
						</span>
						<span className="badge bg-soft-dark px-3 py-2 fw-semibold">
							Charity
						</span>
					</CardBody>
				</Card>
				<Card>
					<CardBody className="pb-0">
						<Row>
							<Col>
								<p className="text-dark fw-semibold mb-0">Comments (205)</p>
							</Col>
						</Row>
					</CardBody>
					<CardBody className="border-bottom-dashed">
						<ul className="list-unstyled mb-0">
							<li>
								<Row>
									<div className="col-auto">
										<Image
											src={user2}
											alt=""
											className="thumb-md rounded-circle"
										/>
									</div>
									<Col>
										<div className="comment-body ms-n2 bg-light-alt p-3">
											<Row>
												<Col>
													<p className="text-dark fw-semibold mb-2">
														Martin Luther
													</p>
												</Col>
												<div className="col-auto">
													<span className="text-muted">
														<i className="far fa-clock me-1"></i>
														30 min ago
													</span>
												</div>
											</Row>
											<p>
												It is a long established fact that a reader will be
												distracted by the readable content of a page when
												looking at its layout. The point of using Lorem Ipsum is
												that it has a more-or-less normal distribution of
												letters, as opposed to using 'Content here, content
												here', making it look like readable English.
											</p>
											<Link to="#" className="text-primary">
												<i className="fas fa-reply me-1"></i>
												Replay
											</Link>
										</div>
									</Col>
								</Row>
								<ul className="list-unstyled ms-5">
									<li>
										<Row className="mt-3">
											<div className="col-auto">
												<Image
													src={logoSM}
													alt=""
													className="thumb-md rounded-circle"
												/>
											</div>
											<Col>
												<div className="comment-body ms-n2 bg-light-alt p-3">
													<Row>
														<Col>
															<p className="text-dark fw-semibold mb-2">
																Dastone Author
															</p>
														</Col>
														<div className="col-auto">
															<span className="text-muted">
																<i className="far fa-clock me-1"></i>
																37 min ago
															</span>
														</div>
													</Row>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
													<p className="mb-0">Thank you</p>
												</div>
											</Col>
										</Row>
									</li>
								</ul>
							</li>
							<li className="mt-3">
								<Row>
									<div className="col-auto">
										<Image
											src={user1}
											alt=""
											className="thumb-md rounded-circle"
										/>
									</div>
									<Col>
										<div className="comment-body ms-n2 bg-light-alt p-3">
											<Row>
												<Col>
													<p className="text-dark fw-semibold mb-2">
														Joseph Rust
													</p>
												</Col>
												<div className="col-auto">
													<span className="text-muted">
														<i className="far fa-clock me-1"></i>
														40 min ago
													</span>
												</div>
											</Row>
											<p>
												Is it a long established fact that a reader will be
												distracted by the readable content of a page when
												looking at its layout?
											</p>
											<Link to="#" className="text-primary">
												<i className="fas fa-reply me-1"></i>
												Replay
											</Link>
										</div>
									</Col>
								</Row>
							</li>
							<li className="mt-3">
								<Row>
									<div className="col-auto">
										<Image
											src={user5}
											alt=""
											className="thumb-md rounded-circle"
										/>
									</div>
									<Col>
										<div className="comment-body ms-n2 bg-light-alt p-3">
											<Row>
												<Col>
													<p className="text-dark fw-semibold mb-2">
														Matt Rosales
													</p>
												</Col>
												<div className="col-auto">
													<span className="text-muted">
														<i className="far fa-clock me-1"></i>
														40 min ago
													</span>
												</div>
											</Row>
											<p>
												Is it a long established fact that a reader will be
												distracted by the readable content of a page when
												looking at its layout?
											</p>
											<Link to="#" className="text-primary">
												<i className="fas fa-reply me-1"></i>
												Replay
											</Link>
										</div>
									</Col>
								</Row>
								<ul className="list-unstyled ms-5">
									<li>
										<Row className="row mt-3">
											<div className="col-auto">
												<Image
													src={logoSM}
													alt=""
													className="thumb-md rounded-circle"
												/>
											</div>
											<Col>
												<div className="comment-body ms-n2 bg-light-alt p-3">
													<Row>
														<Col>
															<p className="text-dark fw-semibold mb-2">
																Dastone Author
															</p>
														</Col>
														<div className="col-auto">
															<span className="text-muted">
																<i className="far fa-clock me-1"></i>
																37 min ago
															</span>
														</div>
													</Row>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
													<p className="mb-0">Thank you</p>
												</div>
											</Col>
										</Row>
									</li>
								</ul>
							</li>
						</ul>
					</CardBody>
					<CardBody>
						<Row>
							<Col>
								<p className="text-dark fw-semibold mb-0">Leave a comment</p>
							</Col>
						</Row>
					</CardBody>
					<CardBody className="pt-0">
						<Form>
							<FormGroup>
								<textarea
									className="form-control"
									rows={5}
									id="leave_comment"
									placeholder="Message"
								></textarea>
							</FormGroup>
							<Row>
								<Col sm={12} className="text-end">
									<button
										type="submit"
										className="btn btn-sm btn-outline-primary px-4"
									>
										Send Message
									</button>
								</Col>
							</Row>
						</Form>
					</CardBody>
				</Card>
			</Col>
			<Col lg={3}>
				<Card>
					<CardHeader>
						<Row className="align-items-center">
							<Col>
								<CardTitle as="h4">Popular Posts</CardTitle>
							</Col>
							<div className="col-auto">
								<Dropdown>
									<DropdownToggle className="btn btn-sm btn-outline-light">
										Today
										<i className="las la-angle-down ms-1"></i>
									</DropdownToggle>
									<DropdownMenu align="end">
										<DropdownItem>Today</DropdownItem>
										<DropdownItem>Yesterday</DropdownItem>
										<DropdownItem>Last Week</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</div>
						</Row>
					</CardHeader>
					<CardBody>
						<ul className="list-group custom-list-group mb-n3">
							<li className="list-group-item align-items-center d-flex justify-content-between">
								<div className="media">
									<Image
										src={Img2}
										height="40"
										className="me-3 align-self-center rounded"
										alt="..."
									/>
									<div className="media-body align-self-center">
										<Link to="#" className="m-0 d-block fw-semibold font-13">
											Dastyle - Admin Dashboard
										</Link>
										<Link to="#" className="font-12 text-primary">
											analytic-index.html
										</Link>
									</div>
								</div>
								<div className="align-self-center">
									<span className="text-muted mb-n2">20 June</span>
								</div>
							</li>
							<li className="list-group-item align-items-center d-flex justify-content-between">
								<div className="media">
									<Image
										src={Img1}
										height="40"
										className="me-3 align-self-center rounded"
										alt="..."
									/>
									<div className="media-body align-self-center">
										<Link to="#" className="m-0 d-block fw-semibold font-13">
											Metrica Simple- Admin Dashboard
										</Link>
										<Link to="#" className="font-12 text-primary">
											sales-index.html
										</Link>
									</div>
								</div>
								<div className="align-self-center">
									<span className="text-muted mb-n2">18 june</span>
								</div>
							</li>
							<li className="list-group-item align-items-center d-flex justify-content-between">
								<div className="media">
									<Image
										src={Img4}
										height="40"
										className="me-3 align-self-center rounded"
										alt="..."
									/>
									<div className="media-body align-self-center">
										<Link to="#" className="m-0 d-block fw-semibold font-13">
											Crovex - Admin Dashboard
										</Link>
										<Link to="#" className="font-12 text-primary">
											helpdesk-index.html
										</Link>
									</div>
								</div>
								<div className="align-self-center">
									<span className="text-muted mb-n2">15 june</span>
								</div>
							</li>
							<li className="list-group-item align-items-center d-flex justify-content-between">
								<div className="media">
									<Image
										src={Img5}
										height="40"
										className="me-3 align-self-center rounded"
										alt="..."
									/>
									<div className="media-body align-self-center">
										<Link to="#" className="m-0 d-block fw-semibold font-13">
											Annex - Admin Dashboard
										</Link>
										<Link to="#" className="font-12 text-primary">
											calendar.html
										</Link>
									</div>
								</div>
								<div className="align-self-center">
									<span className="text-muted mb-n2">12 june</span>
								</div>
							</li>
						</ul>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<div className="dash-datepick">
							<LitePicker inlineMode />
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardHeader>
						<Row className="align-items-center">
							<Col>
								<CardTitle>Social Profile</CardTitle>
							</Col>
						</Row>
					</CardHeader>
					<CardBody>
						<div className="button-list btn-social-icon">
							<Button variant="soft-primary" className="btn-icon-circle">
								<i className="fab fa-facebook-f"></i>
							</Button>

							<Button variant="soft-info" className="btn-icon-circle ms-2">
								<i className="fab fa-twitter"></i>
							</Button>

							<Button variant="soft-pink" className="btn-icon-circle  ms-2">
								<i className="fab fa-dribbble"></i>
							</Button>
							<Button variant="soft-pink" className="btn-icon-circle  ms-2">
								<i className="fab fa-linkedin-in"></i>
							</Button>
							<Button variant="soft-danger" className="btn-icon-circle  ms-2">
								<i className="fab fa-google-plus-g"></i>
							</Button>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

export default Posttask
