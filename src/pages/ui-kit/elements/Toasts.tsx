import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'

import logoSM from '@/assets/images/logo-sm.png'
import {
	Button,
	Col,
	Form,
	FormGroup,
	FormSelect,
	Image,
	Row,
	Toast,
	ToastBody,
	ToastContainer,
	ToastHeader,
} from 'react-bootstrap'
import { useState } from 'react'

const BasicToast = () => {
	const [showBasic, setShowBasic] = useState(true)
	const toggleShowBasic = () => setShowBasic(!showBasic)

	return (
		<ComponentContainerCard
			title="Basic"
			description="To encourage extensible and predictable toasts, we recommend a header and body."
		>
			<Toast show={showBasic} onClose={toggleShowBasic}>
				<ToastHeader>
					<Image src={logoSM} alt="" height="20" className="me-1" />
					<h5 className="me-auto my-0">Dastone</h5>
					<small>11 mins ago</small>
				</ToastHeader>
				<ToastBody>Hello, world! This is a toast message.</ToastBody>
			</Toast>
		</ComponentContainerCard>
	)
}

const TranslucentToast = () => {
	const [showTranslucent, setShowTranslucent] = useState(true)
	const toggleShowTranslucent = () => setShowTranslucent(!showTranslucent)

	return (
		<ComponentContainerCard
			title="Translucent"
			description="Toasts are slightly translucent, too, so they blend over whatever they might appear over."
		>
			<div className="bg-light p-3">
				<Toast show={showTranslucent} onClose={toggleShowTranslucent}>
					<ToastHeader>
						<Image src={logoSM} alt="" height="20" className="me-1" />
						<h5 className="me-auto my-0">Dastone</h5>
						<small>11 mins ago</small>
					</ToastHeader>
					<ToastBody>Hello, world! This is a toast message.</ToastBody>
				</Toast>
			</div>
		</ComponentContainerCard>
	)
}

const StackingToast = () => {
	const [showStacking1, setShowStacking1] = useState(true)
	const toggleShowStacking1 = () => setShowStacking1(!showStacking1)

	const [showStacking2, setShowStacking2] = useState(true)
	const toggleShowStacking2 = () => setShowStacking2(!showStacking2)

	return (
		<ComponentContainerCard
			title="Stacking"
			description="You can stack toasts by wrapping them in a toast container, which will vertically add some spacing."
		>
			<div className="bg-light p-3">
				<ToastContainer>
					<Toast show={showStacking1} onClose={toggleShowStacking1}>
						<ToastHeader>
							<Image src={logoSM} alt="" height="20" className="me-1" />
							<h5 className="me-auto my-0">Dastone</h5>
							<small>11 mins ago</small>
						</ToastHeader>
						<ToastBody>Hello, world! This is a toast message.</ToastBody>
					</Toast>

					<Toast show={showStacking2} onClose={toggleShowStacking2}>
						<ToastHeader>
							<Image src={logoSM} alt="" height="20" className="me-1" />
							<h5 className="me-auto my-0">Dastone</h5>
							<small>11 mins ago</small>
						</ToastHeader>
						<ToastBody>Hello, world! This is a toast message.</ToastBody>
					</Toast>
				</ToastContainer>
			</div>
		</ComponentContainerCard>
	)
}

const CustomContent = () => {
	const [showCustom1, setShowCustom1] = useState(true)
	const toggleShowCustom1 = () => setShowCustom1(!showCustom1)

	const [showCustom2, setShowCustom2] = useState(true)
	const toggleShowCustom2 = () => setShowCustom2(!showCustom2)

	const [showCustom3, setShowCustom3] = useState(true)
	const toggleShowCustom3 = () => setShowCustom3(!showCustom3)

	return (
		<ComponentContainerCard
			title="Custom content"
			description="Alternatively, you can also add additional controls and components to toasts."
		>
			<div className="bg-light p-3">
				<Toast
					className="d-flex align-items-center mb-2"
					show={showCustom1}
					onClose={toggleShowCustom1}
				>
					<ToastBody>Hello, world! This is a toast message.</ToastBody>
					<button
						className="btn-close ms-auto me-2"
						onClick={toggleShowCustom1}
					>
						{' '}
					</button>
				</Toast>

				<Toast className="mb-2" show={showCustom2} onClose={toggleShowCustom2}>
					<ToastBody>
						Hello, world! This is a toast message.
						<div className="mt-2 pt-2 border-top d-flex gap-1">
							<Button size="sm" variant="primary">
								Take action
							</Button>
							<Button size="sm" variant="secondary" onClick={toggleShowCustom2}>
								Close
							</Button>
						</div>
					</ToastBody>
				</Toast>
				<Toast
					className="d-flex align-items-center text-white bg-primary border-0"
					show={showCustom3}
					onClose={toggleShowCustom3}
				>
					<ToastBody>Hello, world! This is a toast message.</ToastBody>
					<button
						type="button"
						className="btn-close btn-close-white ms-auto me-2"
						onClick={toggleShowCustom3}
					></button>
				</Toast>
			</div>
		</ComponentContainerCard>
	)
}

const ToastPlacement = () => {
	const [position, setPosition] = useState<any>('top-start')

	return (
		<>
			<ComponentContainerCard
				title="Toast Placement"
				description="To encourage extensible and predictable toasts, we recommend a header and body."
			>
				<Form>
					<FormGroup className="mb-3">
						<label htmlFor="selectToastPlacement">Toast placement</label>
						<FormSelect
							className="mt-2"
							id="selectToastPlacement"
							onChange={(e) => setPosition(e.currentTarget.value)}
						>
							{[
								'top-start',
								'top-center',
								'top-end',
								'middle-start',
								'middle-center',
								'middle-end',
								'bottom-start',
								'bottom-center',
								'bottom-end',
							].map((p) => (
								<option key={p} value={p}>
									{p}
								</option>
							))}
						</FormSelect>
					</FormGroup>
				</Form>
				<div
					aria-live="polite"
					aria-atomic="true"
					className="bg-dark position-relative bd-example-toasts"
					style={{ minHeight: '200px' }}
				>
					<ToastContainer
						className="position-absolute p-3"
						position={position}
						style={{ zIndex: 1 }}
					>
						<Toast>
							<ToastHeader>
								<Image src={logoSM} alt="" height="20" className="me-1" />
								<h5 className="me-auto my-0">Dastone</h5>
								<small>11 mins ago</small>
							</ToastHeader>
							<ToastBody>Hello, world! This is a toast message.</ToastBody>
						</Toast>
					</ToastContainer>
				</div>
			</ComponentContainerCard>
		</>
	)
}

const CustomToast = () => {
	const [showCustom, setShowCustom] = useState(true)
	const toggleShowCustom = () => setShowCustom(!showCustom)

	return (
		<ComponentContainerCard
			title="Custom Toast"
			description="You can use custom toast."
		>
			<Toast show={showCustom} onClose={toggleShowCustom}>
				<ToastBody className="text-center">
					<Image
						src={logoSM}
						alt=""
						className="d-block mx-auto rounded-circle thumb-md"
					/>
					<h5 className="fw-bold mt-3 mb-1">Charles Smith</h5>
					<p className="text-muted mb-0">UI/UX front end developer</p>
					<div className="mt-3 mb-2">
						<Button
							variant="outline-primary"
							className="btn-icon-circle btn-icon-circle-sm"
						>
							<i className="fab fa-facebook-f"></i>
						</Button>
						<Button
							variant="outline-info"
							className="btn-icon-circle btn-icon-circle-sm"
						>
							<i className="fab fa-twitter"></i>
						</Button>
						<Button
							variant="outline-pink"
							className="btn-icon-circle btn-icon-circle-sm"
						>
							<i className="fab fa-dribbble"></i>
						</Button>
					</div>
				</ToastBody>
				<button
					type="button"
					className="btn-close btn-close-white ms-auto me-2"
					onClick={toggleShowCustom}
				></button>
			</Toast>
		</ComponentContainerCard>
	)
}

const Toasts = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Toasts" />
			<Row>
				<Col lg={6}>
					<BasicToast />
				</Col>
				<Col lg={6}>
					<TranslucentToast />
				</Col>
			</Row>

			<Row>
				<Col lg={6}>
					<StackingToast />
				</Col>
				<Col lg={6}>
					<CustomContent />
				</Col>
			</Row>

			<Row>
				<Col lg={6}>
					<ToastPlacement />
				</Col>
				<Col lg={6}>
					<CustomToast />
				</Col>
			</Row>
		</>
	)
}

export default Toasts
