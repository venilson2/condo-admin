import { Fragment } from 'react'
import {
	Button,
	ButtonGroup,
	ButtonToolbar,
	Card,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from 'react-bootstrap'
import { emails } from '../data'
import EmailCard from './EmailCard'

const EmailRightSidebar = () => {
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

			<Card className="my-3">
				<ul className="message-list">
					{(emails || []).map((email, idx) => (
						<Fragment key={idx}>
							<EmailCard emails={email} />
						</Fragment>
					))}
				</ul>
			</Card>
			<Row className="mb-3">
				<Col xs="7" className="align-self-center">
					Showing 1 - 20 of 1,524
				</Col>
				<Col xs="5">
					<ButtonGroup className="float-end">
						<Button
							type="button"
							size="sm"
							variant="soft-secondary"
							className="waves-effect mb-0"
						>
							<i className="fa fa-chevron-left" />
						</Button>
						<Button
							type="button"
							size="sm"
							variant="soft-secondary"
							className="waves-effect mb-0"
						>
							<i className="fa fa-chevron-right" />
						</Button>
					</ButtonGroup>
				</Col>
			</Row>
		</div>
	)
}

export default EmailRightSidebar
