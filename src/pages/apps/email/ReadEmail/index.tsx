import { useState } from 'react'
import { PageBreadcrumb2 } from '@/components'
import {
	Button,
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
import EmailLeftSidebar from '../Inbox/components/EmailLeftSidebar'
import EmailRightbar from './components/EmailRightbar'

const EmailRead = () => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
			<PageBreadcrumb2 title="Email Read" appName="Apps" />

			<Row>
				<Col xs="12">
					<EmailLeftSidebar />
					<EmailRightbar handleShows={handleShow} />
				</Col>
			</Row>

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

export default EmailRead
