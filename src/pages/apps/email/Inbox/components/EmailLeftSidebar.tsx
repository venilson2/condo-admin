import { useState } from 'react'
import {
	Button,
	Card,
	CardBody,
	Col,
	Form,
	FormControl,
	FormGroup,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	Row,
} from 'react-bootstrap'
import user1 from '@/assets/images/users/user-1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import { Link } from 'react-router-dom'

const EmailLeftSidebar = () => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	return (
		<>
			<div className="email-leftbar">
				<Button
					type="button"
					size="sm"
					variant="primary"
					className="w-100"
					onClick={handleShow}
				>
					<i className="fas fa-feather-alt me-2" />
					Compose
				</Button>
				<Card className="mt-3">
					<CardBody>
						<div className="mail-list">
							<Link to="#" className="active pt-0">
								<i className="las la-inbox font-15 me-1" />
								Inbox <span className="ms-1">(5)</span>
							</Link>
							<Link to="#">
								<i className="las la-star font-15 me-1" />
								Starred
							</Link>
							<Link to="#">
								<i className="las la-tag font-15 me-1" />
								Important
							</Link>
							<Link to="#">
								<i className="las la-file-alt font-15 me-1" />
								Draft
							</Link>
							<Link to="#">
								<i className="las la-paper-plane font-15 me-1" />
								Sent Mail
							</Link>
							<Link to="#">
								<i className="las la-trash-alt font-15 me-1" />
								Trash
							</Link>
						</div>
						<p className="text-dark my-4 font-weight-bold">Labels</p>
						<div className="mail-list">
							<Link to="#">
								<span className="mdi mdi-arrow-right-drop-circle text-info float-end" />
								<i className="las la-life-ring font-15 me-1" />
								Theme Support
							</Link>
							<Link to="#">
								<span className="mdi mdi-arrow-right-drop-circle text-warning float-end" />
								<i className="las la-briefcase font-15 me-1" />
								Freelance
							</Link>
							<Link to="#">
								<span className="mdi mdi-arrow-right-drop-circle text-purple float-end" />
								<i className="lab la-google font-15 me-1" />
								Social
							</Link>
							<Link to="#">
								<span className="mdi mdi-arrow-right-drop-circle text-pink float-end" />
								<i className="las la-users font-15 me-1" />
								Friends
							</Link>
							<Link to="#">
								<span className="mdi mdi-arrow-right-drop-circle text-success float-end" />
								<i className="las la-home font-15 me-1" />
								Family
							</Link>
						</div>
						<p className="text-dark my-4 font-weight-bold">Chat</p>
						<div>
							<Link to="#" className="media">
								<img
									className="d-flex me-3 rounded-circle"
									src={user1}
									alt="Generic placeholder image"
									height={36}
								/>
								<div className="media-body chat-user-box">
									<p className="user-title m-0">Scott Median</p>
									<p className="text-muted">Hello</p>
								</div>
							</Link>
							<Link to="#" className="media">
								<img
									className="d-flex me-3 rounded-circle"
									src={user2}
									alt="Generic placeholder image"
									height={36}
								/>
								<div className="media-body chat-user-box">
									<p className="user-title m-0">Julian Rosa</p>
									<p className="text-muted">What about our next..</p>
								</div>
							</Link>
							<Link to="#" className="media">
								<img
									className="d-flex me-3 rounded-circle"
									src={user3}
									alt="Generic placeholder image"
									height={36}
								/>
								<div className="media-body chat-user-box">
									<p className="user-title m-0">David Medina</p>
									<p className="text-muted">Yeah everything is fine</p>
								</div>
							</Link>
							<Link to="#" className="media">
								<img
									className="d-flex me-3 rounded-circle"
									src={user4}
									alt="Generic placeholder image"
									height={36}
								/>
								<div className="media-body chat-user-box">
									<p className="user-title m-0">Jay Baker</p>
									<p className="text-muted">Wow that's great</p>
								</div>
							</Link>
						</div>
					</CardBody>
				</Card>
			</div>

			{/* Email Modal */}
			<Modal show={show} onHide={handleClose} centered>
				<ModalHeader closeButton>
					<ModalTitle as="h6" className="mt-0">
						Compose Mail
					</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup className="mb-3">
							<FormControl type="email" placeholder="To" />
						</FormGroup>
						<FormGroup className="mb-3">
							<Row>
								<Col md="6">
									<FormControl type="email" placeholder="Cc" />
								</Col>
								<Col md="6">
									<FormControl type="email" placeholder="Bcc" />
								</Col>
							</Row>
						</FormGroup>
						<FormGroup className="mb-3">
							<FormControl type="text" placeholder="Subject" />
						</FormGroup>
						<textarea id="basic-conf" defaultValue={'Hello, World!'} />
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button size="sm" variant="soft-primary" onClick={handleClose}>
						<span>Send</span> <i className="far fa-paper-plane ms-2" />
					</Button>
					<Button
						type="button"
						size="sm"
						variant="soft-danger"
						onClick={handleClose}
					>
						<span>Delete</span>
						<i className="far fa-trash-alt ms-2" />
					</Button>
				</ModalFooter>
			</Modal>
		</>
	)
}

export default EmailLeftSidebar
