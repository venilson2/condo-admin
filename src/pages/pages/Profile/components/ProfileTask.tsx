import {
	Button,
	Card,
	CardBody,
	Col,
	Form,
	FormControl,
	Image,
	Nav,
	NavItem,
	NavLink,
	Row,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProjectData } from '../data'
import Posttask from './Posttask'
import Portfolio from './Portfolio'
import Settings from './Settings'

const ProfileTask = () => {
	return (
		<TabContainer defaultActiveKey="2">
			<div className="pb-4">
				<Nav
					className="nav-border nav-pills mb-0"
					id="pills-tab"
					role="tablist"
				>
					<NavItem>
						<NavLink eventKey="1">Project</NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="2">Post</NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="3">Portfolio</NavLink>
					</NavItem>
					<NavItem>
						<NavLink eventKey="4">Settings</NavLink>
					</NavItem>
				</Nav>
			</div>

			<Row>
				<Col xs={12}>
					<TabContent className="chat-list" id="pills-tabContent">
						<TabPane eventKey="1" className="fade">
							<Row className="mb-4">
								<div className="col">
									<Form>
										<div className="input-group">
											<FormControl
												type="text"
												id="example-input1-group2"
												name="example-input1-group2"
												placeholder="Search"
											/>
											<Button type="button" className="btn btn-primary">
												<i className="fas fa-search"></i>
											</Button>
										</div>
									</Form>
								</div>
								<div className="col-auto d-flex gap-1">
									<Button variant="primary">
										<i className="fas fa-filter"></i>
									</Button>
									<Button variant="primary">Add Project</Button>
								</div>
							</Row>
							<Row>
								{ProjectData.map((project, idx) => (
									<Col xs={3} key={idx}>
										<Card>
											<CardBody>
												<div className="text-center">
													<Image
														src={project.image}
														alt=""
														className="rounded-circle d-block mx-auto mt-2"
														height="70"
													/>
													<h4 className="m-0 fw-semibold text-dark font-16 mt-3">
														{project.title}
													</h4>
													<p className="text-muted  mb-0 font-13">
														<span className="text-dark">Client : </span>
														{project.client}
													</p>
												</div>
												<Row className="mt-4 d-flex align-items-center">
													<div className="col">
														<h5 className="font-22 m-0 fw-bold">
															${project.budget}
														</h5>
														<p className="mb-0 text-muted">Total Budget</p>
													</div>
													<div className="col-auto">
														<Link
															to="#"
															className="btn btn-sm btn-outline-secondary  px-4"
														>
															More Details
														</Link>
													</div>
												</Row>
											</CardBody>
										</Card>
									</Col>
								))}
							</Row>
						</TabPane>

						<TabPane eventKey="2" className="fade">
							<Posttask />
						</TabPane>

						<TabPane eventKey="3" className="fade">
							<Portfolio />
						</TabPane>
						<TabPane eventKey="4" className="fade">
							<Settings />
						</TabPane>
					</TabContent>
				</Col>
			</Row>
		</TabContainer>
	)
}

export default ProfileTask
