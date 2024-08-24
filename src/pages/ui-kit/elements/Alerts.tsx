import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import handleDismiss from '@/utils/dismisser'
import { Alert, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DefaultAlerts = () => {
	return (
		<ComponentContainerCard
			title="Alerts Examples"
			description="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
		>
			<Alert variant="primary" className="border-0">
				<strong>Well done!</strong> You successfully read this important alert
				message. 😀
			</Alert>
			<Alert variant="light" className="border-0">
				<strong>Oh snap!</strong> Change a few things up and try submitting
				again.
			</Alert>
			<Alert variant="success" className="border-0">
				<strong>Well done!</strong> You successfully read this important alert
				message.
			</Alert>
			<Alert variant="danger" className="border-0">
				<strong>Oh snap!</strong> Change a few things up and try submitting
				again.
			</Alert>
			<Alert variant="warning" className="border-0">
				<strong>Well done!</strong> You successfully read this important alert
				message.
			</Alert>
			<Alert variant="info" className="border-0">
				A simple primary alert with{' '}
				<Link to="#" className="alert-link">
					an example link
				</Link>
				. Give it a click if you like.
			</Alert>
		</ComponentContainerCard>
	)
}

const OutlineAlerts = () => {
	return (
		<ComponentContainerCard
			title="Alerts Outline Examples"
			description="You can see this in action with a live demo:"
		>
			<Alert variant="outline-primary">
				<strong>Well done!</strong> You successfully read this important alert
				message. 😀
			</Alert>
			<Alert variant="outline-secondary">
				<strong>Oh snap!</strong> Change a few things up and try submitting
				again.
			</Alert>
			<Alert variant="outline-success">
				<strong>Well done!</strong> You successfully read this important alert
				message.
			</Alert>
			<Alert variant="outline-danger">
				<strong>Oh snap!</strong> Change a few things up and try submitting
				again.
			</Alert>
			<Alert variant="outline-warning">
				<strong>Well done!</strong> You successfully read this important alert
				message.
			</Alert>
			<Alert variant="outline-info mb-0">
				<strong>Oh snap!</strong> Change a few things up and try submitting
				again. 🎉
			</Alert>
		</ComponentContainerCard>
	)
}

const DismissingAlerts = () => {
	return (
		<ComponentContainerCard
			title="Dismissing Examples"
			description="You can see this in action with a live demo:"
		>
			<Alert
				variant="primary"
				id="alert-1"
				dismissible
				className="fade border-0 b-round"
				role="alert"
			>
				<strong>Well done!</strong> 👍 You successfully read this important
				alert message.
				<button
					type="button"
					className="btn-close"
					onClick={() => handleDismiss('alert-1')}
				/>
			</Alert>
			<Alert
				variant="light"
				dismissible
				id="alert-2"
				className="fade show border-0"
				role="alert"
			>
				<strong>Oh snap!</strong> Change a few things up and try submitting
				again.
				<button
					type="button"
					className="btn-close"
					onClick={() => handleDismiss('alert-2')}
				/>
			</Alert>
		</ComponentContainerCard>
	)
}

const DismissingOutlineAlerts = () => {
	return (
		<ComponentContainerCard
			title="Dismissing Outline Examples"
			description="You can see this in action with a live demo:"
		>
			<Alert
				variant="outline-primary"
				id="alert-3"
				dismissible
				className="b-round fade show"
				role="alert"
			>
				<strong>Well done!</strong> You successfully read this important alert
				message.
				<button
					type="button"
					className="btn-close"
					onClick={() => handleDismiss('alert-3')}
				/>
			</Alert>
			<Alert
				variant="outline-success"
				id="alert-4"
				className="icon-custom-alert fade show"
				role="alert"
			>
				<i className="mdi mdi-check-all alert-icon" />
				<div className="alert-text">
					<strong>Well done!</strong> You successfully read this important alert
					message.
				</div>
				<button
					type="button"
					className="btn-close"
					onClick={() => handleDismiss('alert-4')}
				/>
			</Alert>
		</ComponentContainerCard>
	)
}

const AdditionalContent = () => {
	return (
		<ComponentContainerCard
			title="Additional Content"
			description="Alerts can also contain additional HTML elements like headings, paragraphs and dividers."
		>
			<div className="alert alert-light mb-0" role="alert">
				<h4 className="alert-heading font-18">Well done!</h4>
				<p>
					Aww yeah, you successfully read this important alert message. This
					example text is going to run a bit longer so that you can see how
					spacing within an alert works with this kind of content.
				</p>
				<p className="mb-0">
					Whenever you need to, be sure to use margin utilities to keep things
					nice and tidy.
				</p>
			</div>
		</ComponentContainerCard>
	)
}

const CustomAlerts = () => {
	return (
		<ComponentContainerCard
			title="Custom Alerts Examples"
			description="You can see this in action with a live demo:"
		>
			<div
				className="alert custom-alert custom-alert-primary icon-custom-alert shadow-sm fade show"
				id="alert-5"
				role="alert"
			>
				<i className="mdi mdi-alert-outline alert-icon text-primary align-self-center font-30 me-3" />
				<div className="alert-text my-1">
					<h5 className="mb-1 fw-bold mt-0">Primary</h5>
					<span>Oh snap! Change a few things up and try submitting again.</span>
				</div>
				<div className="alert-close">
					<button
						type="button"
						className="btn-close"
						onClick={() => handleDismiss('alert-5')}
					/>
				</div>
			</div>
			<div
				className="alert custom-alert custom-alert-danger icon-custom-alert shadow-sm fade show"
				id="alert-6"
				role="alert"
			>
				<i className="la la-skull-crossbones alert-icon text-danger align-self-center font-30 me-3" />
				<div className="alert-text my-1">
					<h5 className="mb-1 fw-bold mt-0">Danger</h5>
					<span>Oh snap! Change a few things up and try submitting again.</span>
				</div>
				<div className="alert-close">
					<button
						type="button"
						className="btn-close"
						onClick={() => handleDismiss('alert-6')}
					/>
				</div>
			</div>
		</ComponentContainerCard>
	)
}

const Alerts = () => {
	return (
		<>
			<PageBreadcrumb2 title="Alerts" appName="UI Kit" />
			<Row>
				<Col lg={6}>
					<DefaultAlerts />
				</Col>
				<Col lg={6}>
					<OutlineAlerts />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<DismissingAlerts />
				</Col>
				<Col lg={6}>
					<DismissingOutlineAlerts />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<CustomAlerts />
				</Col>
				<Col lg={6}>
					<AdditionalContent />
				</Col>
			</Row>
		</>
	)
}

export default Alerts
