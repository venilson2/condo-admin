import smallSm1 from '@/assets/images/small/sm-1.jpg'
import smallSm2 from '@/assets/images/small/sm-2.jpg'
import user5 from '@/assets/images/users/user-5.jpg'

import {
	Button,
	ButtonGroup,
	ButtonToolbar,
	Card,
	CardBody,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Image,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EmailRightbar = ({ handleShows }: any) => {
	return (
		<div className="email-rightbar">
			<div className="float-end d-flex justify-content-between">
				<ButtonGroup className="ms-1">
					<Dropdown>
						<DropdownToggle
							variant="outline-secondary"
							size="sm"
							className="waves-light waves-effect"
						>
							<i className="fas fa-question-circle"></i>
						</DropdownToggle>
						<DropdownMenu align="end">
							<DropdownItem>Updates</DropdownItem>
							<DropdownItem>Social</DropdownItem>
							<DropdownItem>Team Manage</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</ButtonGroup>
				<ButtonGroup className="ms-1">
					<Dropdown>
						<DropdownToggle
							variant="outline-secondary"
							size="sm"
							className="waves-light waves-effect"
						>
							<i className="fas fa-cog"></i>
						</DropdownToggle>
						<DropdownMenu align="end">
							<DropdownItem>Display density</DropdownItem>
							<DropdownItem>Themes</DropdownItem>
							<DropdownItem>Help</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</ButtonGroup>
			</div>
			<ButtonToolbar role="toolbar">
				<ButtonGroup>
					<Button
						variant="outline-secondary"
						size="sm"
						className="waves-light waves-effect"
					>
						<i className="fas fa-inbox"></i>
					</Button>
					<Button
						variant="outline-secondary"
						size="sm"
						className="waves-light waves-effect"
					>
						<i className="fas fa-exclamation-circle"></i>
					</Button>
					<Button
						variant="outline-secondary"
						size="sm"
						className="waves-light waves-effect"
					>
						<i className="fas fa-trash"></i>
					</Button>
				</ButtonGroup>
				<ButtonGroup className="ms-1">
					<Dropdown>
						<DropdownToggle
							variant="outline-secondary"
							size="sm"
							className="waves-light waves-effect"
						>
							<i className="fas fa-folder"></i>
							<i className="mdi mdi-chevron-down ms-1"></i>
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem>Updates</DropdownItem>
							<DropdownItem>Social</DropdownItem>
							<DropdownItem>Team Manage</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</ButtonGroup>
				<ButtonGroup className="ms-1">
					<DropdownToggle
						variant="outline-secondary"
						size="sm"
						className="waves-light waves-effect"
					>
						<i className="fas fa-tag"></i>
						<i className="mdi mdi-chevron-down ms-1"></i>
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem>Updates</DropdownItem>
						<DropdownItem>Social</DropdownItem>
						<DropdownItem>Team Manage</DropdownItem>
					</DropdownMenu>
				</ButtonGroup>

				<ButtonGroup className="ms-1">
					<DropdownToggle
						type="button"
						variant="outline-secondary"
						size="sm"
						className="waves-light waves-effect"
					>
						More<i className="mdi mdi-chevron-down ms-1"></i>
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem>Mark as Unread</DropdownItem>
						<DropdownItem>Mark as Important</DropdownItem>
						<DropdownItem>Add to Tasks</DropdownItem>
						<DropdownItem>Add Star</DropdownItem>
						<DropdownItem>Mute</DropdownItem>
					</DropdownMenu>
				</ButtonGroup>
			</ButtonToolbar>
			<Card className="mt-3">
				<CardBody>
					<div className="media mb-4 d-flex gap-1">
						<Image
							className="d-flex me-2 rounded-circle thumb-md"
							src={user5}
							alt="Generic placeholder image"
						/>
						<div className="media-body align-self-center">
							<h6 className="font-14 m-0">Humberto D. Champion</h6>
							<small className="text-muted">support@domain.com</small>
						</div>
					</div>
					<h5 className="mt-0 font-15">This Week's Top Stories</h5>
					<p>Dear Lorem Ipsum,</p>
					<p>
						Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim.
						Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc
						vestibulum est quis orci varius viverra. Curabitur dictum volutpat
						massa vulputate molestie. In at felis ac velit maximus convallis.
					</p>
					<p>
						Sed elementum turpis eu lorem interdum, 🏆sed porttitor eros
						commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in
						dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus
						fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus,
						vel tincidunt mi nibh sit amet lorem.
					</p>
					<p>Sincerly,</p>
					<hr />
					<Row>
						<Col xs="auto">
							<Card>
								<img src={smallSm1} alt="Card image cap" />
								<div className="py-1 text-center">
									<Link to="#" className="text-muted">
										Download
										<i className="dripicons-download ms-1" />
									</Link>
								</div>
							</Card>
						</Col>
						<Col xs="auto">
							<Card>
								<img src={smallSm2} alt="Card image cap" />
								<div className="py-1 text-center">
									<Link to="#" className="text-muted">
										Download
										<i className="dripicons-download ms-1" />
									</Link>
								</div>
							</Card>
						</Col>
					</Row>
					<Link
						to="#"
						className="btn btn-soft-primary btn-sm"
						onClick={handleShows}
					>
						<i className="mdi mdi-reply" /> Reply
					</Link>
					<Link to="#" className="btn btn-soft-primary btn-sm">
						Forward <i className="mdi mdi-share" />
					</Link>
				</CardBody>
			</Card>
		</div>
	)
}

export default EmailRightbar
