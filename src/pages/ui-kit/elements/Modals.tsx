import {
	ComponentContainerCard,
	FormTextInput,
	PageBreadcrumb2,
} from '@/components'
import {
	Button,
	ButtonGroup,
	CardBody,
	Col,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	Nav,
	NavItem,
	NavLink,
	Row,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'
import { useToggle } from '@/hooks'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import user5 from '@/assets/images/users/user-5.jpg'
import btcImg from '@/assets/images/widgets/btc.png'
import flame from '@/assets/images/widgets/flame-5.png'
import logoSm from '@/assets/images/logo-sm.png'
import FormInputPassword from '@/components/Form/FormInputPassword'

const OptionalSizes = () => {
	const { isOpen, toggle } = useToggle()
	const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle()
	const { isOpen: lgModalOpen, toggle: lgModalToggle } = useToggle()
	const { isOpen: xlModalOpen, toggle: xlModalToggle } = useToggle()
	const { isOpen: centerModalOpen, toggle: centerModalToggle } = useToggle()
	const { isOpen: scrollModalOpen, toggle: scrollModalToggle } = useToggle()
	return (
		<ComponentContainerCard
			title="Optional sizes"
			description="Modals have three optional sizes, available via modifier classes to be placed on a .modal-dialog."
		>
			<div className="table-responsive">
				<table className="table table-bordered table-striped mb-0">
					<thead>
						<tr>
							<th>Size</th>
							<th>Class</th>
							<th>Modal max-width</th>
							<th>Modal Demo</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Small</td>
							<td>
								<code>.modal-sm</code>
							</td>
							<td>
								<code>300px</code>
							</td>
							<td>
								<Button variant="outline-primary" size="sm" onClick={toggle}>
									Launch demo modal
								</Button>
							</td>
						</tr>
						<tr>
							<td>Default</td>
							<td className="text-muted">None</td>
							<td>
								<code>500px</code>
							</td>
							<td>
								<Button
									variant="outline-primary"
									size="sm"
									onClick={defaultModalToggle}
								>
									Launch demo modal
								</Button>
							</td>
						</tr>
						<tr>
							<td>Large</td>
							<td>
								<code>.modal-lg</code>
							</td>
							<td>
								<code>800px</code>
							</td>
							<td>
								<Button
									variant="outline-primary"
									size="sm"
									onClick={lgModalToggle}
								>
									Launch demo modal
								</Button>
							</td>
						</tr>
						<tr>
							<td>Extra large</td>
							<td>
								<code>.modal-xl</code>
							</td>
							<td>
								<code>1140px</code>
							</td>
							<td>
								<Button
									variant="outline-primary"
									size="sm"
									onClick={xlModalToggle}
								>
									Launch demo modal
								</Button>
							</td>
						</tr>
						<tr>
							<td>Default (Center Modal)</td>
							<td className="text-muted">
								<code>.modal-dialog-centered</code>
							</td>
							<td>
								<code>500px</code>
							</td>
							<td>
								<Button
									variant="outline-primary"
									size="sm"
									onClick={centerModalToggle}
								>
									Launch demo modal
								</Button>
							</td>
						</tr>
						<tr>
							<td>Default (Scroll Modal)</td>
							<td className="text-muted">
								<code>.modal-dialog-scrollable</code>
							</td>
							<td>
								<code>500px</code>
							</td>
							<td>
								<Button
									variant="outline-primary"
									size="sm"
									onClick={scrollModalToggle}
								>
									Launch demo modal
								</Button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Modal
				show={isOpen}
				onHide={toggle}
				className="fade modal-sm"
				id="exampleModalSmall"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="mySmallModalLabel"
				aria-hidden="true"
			>
				<ModalHeader>
					<ModalTitle as="h6" className="m-0" id="mySmallModalLabel">
						Small Modal
					</ModalTitle>
					<button type="button" className="btn-close" onClick={toggle} />
				</ModalHeader>
				<ModalBody className="text-center">
					<img src={user5} className="thumb-lg rounded-circle" />
					<h5 className="mb-1">Good Morning!</h5>
					<p className="mb-0 text-muted">Hi, Aaron Gish ! Congratulations.</p>
				</ModalBody>
				<ModalFooter>
					<Button variant="outline-secondary" size="sm" onClick={toggle}>
						Close
					</Button>
					<Button variant="outline-primary" size="sm">
						Save changes
					</Button>
				</ModalFooter>
			</Modal>

			<Modal
				show={defaultModalOpen}
				onHide={defaultModalToggle}
				className="fade"
				id="exampleModalDefault"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="exampleModalDefaultLabel"
				aria-hidden="true"
			>
				<ModalHeader>
					<h6 className="modal-title m-0" id="exampleModalDefaultLabel">
						Default Modal
					</h6>
					<button
						type="button"
						className="btn-close"
						onClick={defaultModalToggle}
					/>
				</ModalHeader>
				<ModalBody>
					<Row>
						<Col lg={3} className="text-center align-self-center">
							<img src={btcImg} className="img-fluid" />
						</Col>
						<Col lg={9}>
							<h5>Crypto Market Services</h5>
							<span className="badge bg-soft-secondary">Disable Services</span>
							<small className="text-muted ml-2">07 Oct 2020</small>
							<ul className="mt-3 mb-0">
								<li>Lorem Ipsum is dummy text.</li>
								<li>It is a long established reader.</li>
								<li>Contrary to popular belief, Lorem simply.</li>
							</ul>
						</Col>
					</Row>
				</ModalBody>
				<ModalFooter>
					<Button
						variant="outline-secondary"
						size="sm"
						onClick={defaultModalToggle}
					>
						Close
					</Button>
					<Button variant="outline-primary" size="sm">
						Save changes
					</Button>
				</ModalFooter>
			</Modal>

			<Modal
				size="lg"
				show={lgModalOpen}
				onHide={lgModalToggle}
				className="fade"
				id="exampleModalLarge"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myLargeModalLabel"
				aria-hidden="true"
			>
				<ModalHeader>
					<h6 className="modal-title m-0" id="myLargeModalLabel">
						Large Modal
					</h6>
					<button type="button" className="btn-close" onClick={lgModalToggle} />
				</ModalHeader>
				<ModalBody>
					<Row>
						<Col lg={4} className="text-center">
							<img src={flame} className="img-fluid" />
						</Col>
						<Col lg={8} className="align-self-center">
							<div className="error-content text-center">
								<h1>404!</h1>
								<h4 className=" mb-3">Looks like you've got lost...</h4>
								<Button variant="soft-primary">Back to Dashboard</Button>
							</div>
						</Col>
					</Row>
				</ModalBody>
				<ModalFooter>
					<Button variant="outline-secondary" size="sm" onClick={lgModalToggle}>
						Close
					</Button>
				</ModalFooter>
			</Modal>

			<Modal
				size="xl"
				show={xlModalOpen}
				onHide={xlModalToggle}
				className="fade bd-example-modal-xl"
				id="bd-example-modal-xl"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myExtraLargeModalLabel"
				aria-hidden="true"
			>
				<ModalHeader>
					<h6 className="modal-title m-0" id="myExtraLargeModalLabel">
						Extra Large Modal
					</h6>
					<Button type="button" className="btn-close" onClick={xlModalToggle} />
				</ModalHeader>
				<ModalBody>
					<h5 className="mt-0">Overflowing text to show scroll behavior</h5>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
						auctor.
					</p>
					<p>
						Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
						cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
						dui. Donec ullamcorper nulla non metus auctor fringilla.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
						auctor.
					</p>
					<p>
						Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
						cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
						dui. Donec ullamcorper nulla non metus auctor fringilla.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
						auctor.
					</p>
					<p>
						Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
						cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
						dui. Donec ullamcorper nulla non metus auctor fringilla.
					</p>
				</ModalBody>
				<ModalFooter>
					<Button variant="outline-secondary" size="sm" onClick={xlModalToggle}>
						Close
					</Button>
					<Button variant="outline-primary" size="sm">
						Save changes
					</Button>
				</ModalFooter>
			</Modal>

			<Modal
				show={centerModalOpen}
				centered
				onHide={centerModalToggle}
				className="fade"
				id="exampleModalCenter"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="exampleModalCenterTitle"
				aria-hidden="true"
			>
				<ModalHeader>
					<h6 className="modal-title m-0" id="exampleModalCenterTitle">
						Center Modal
					</h6>
					<button
						type="button"
						className="btn-close"
						onClick={centerModalToggle}
					/>
				</ModalHeader>
				l
				<ModalBody>
					<Row>
						<Col lg={3} className="text-center align-self-center">
							<img src={btcImg} className="img-fluid" />
						</Col>
						<Col lg={9}>
							<h5>Crypto Market Services</h5>
							<span className="badge bg-soft-secondary">Disable Services</span>
							<small className="text-muted ml-2">07 Oct 2020</small>
							<ul className="mt-3 mb-0">
								<li>Lorem Ipsum is dummy text.</li>
								<li>It is a long established reader.</li>
								<li>Contrary to popular belief, Lorem simply.</li>
							</ul>
						</Col>
					</Row>
				</ModalBody>
				<ModalFooter>
					<Button
						variant="outline-secondary"
						size="sm"
						onClick={centerModalToggle}
					>
						Close
					</Button>
					<Button variant="outline-primary" size="sm">
						Save changes
					</Button>
				</ModalFooter>
			</Modal>
			<Modal
				show={scrollModalOpen}
				onHide={scrollModalToggle}
				scrollable
				className="fade"
				id="exampleModalScrollable"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="exampleModalScrollableTitle"
				aria-hidden="true"
			>
				<ModalHeader>
					<h6 className="modal-title m-0" id="exampleModalScrollableTitle">
						Center Modal
					</h6>
					<button
						type="button"
						className="btn-close"
						onClick={scrollModalToggle}
					/>
				</ModalHeader>
				<ModalBody>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
				</ModalBody>
				<ModalFooter>
					<Button
						variant="outline-secondary"
						size="sm"
						onClick={scrollModalToggle}
					>
						Close
					</Button>
					<Button variant="outline-primary" size="sm">
						Save changes
					</Button>
				</ModalFooter>
			</Modal>
		</ComponentContainerCard>
	)
}

const FullscreenModals = () => {
	const [fullscreen, setFullscreen] = useState<undefined | string>(undefined)
	const [show, setShow] = useState(false)

	const handleShow = (breakpoint: string) => {
		setFullscreen(breakpoint)
		setShow(true)
	}
	return (
		<ComponentContainerCard
			title="Fullscreen Modal"
			description="Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a .modal-dialog."
		>
			<div className="table-responsive">
				<table className="table table-bordered table-striped mb-0">
					<thead>
						<tr>
							<th>Class</th>
							<th>Availability</th>
							<th>Modal Demo</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<code>.modal-fullscreen</code>
							</td>
							<td>Always</td>
							<td>
								<Button
									variant="outline-primary"
									size="sm"
									onClick={() => setShow(true)}
								>
									Full screen
								</Button>
							</td>
						</tr>
						<tr>
							<td>
								<code>.modal-fullscreen-sm-down</code>
							</td>
							<td>
								Below <code>576px</code>
							</td>
							<td>
								<Button
									variant="outline-primary"
									size="sm"
									onClick={() => handleShow('sm-down')}
								>
									Full screen below sm
								</Button>
							</td>
						</tr>
						<tr>
							<td>
								<code>.modal-fullscreen-md-down</code>
							</td>
							<td>
								Below <code>768px</code>
							</td>
							<td>
								<Button
									variant="outline-primary"
									size="sm"
									onClick={() => handleShow('md-down')}
								>
									Full screen below md
								</Button>
							</td>
						</tr>
						<tr>
							<td>
								<code>.modal-fullscreen-lg-down</code>
							</td>
							<td>
								Below <code>992px</code>
							</td>
							<td>
								<Button
									variant="outline-primary"
									size="sm"
									onClick={() => handleShow('lg-down')}
								>
									Full screen below lg
								</Button>
							</td>
						</tr>
						<tr>
							<td>
								<code>.modal-fullscreen-xl-down</code>
							</td>
							<td>
								Below <code>1200px</code>
							</td>
							<td>
								<Button
									variant="outline-primary"
									size="sm"
									onClick={() => handleShow('xl-down')}
								>
									Full screen below xl
								</Button>
							</td>
						</tr>
						<tr>
							<td>
								<code>.modal-fullscreen-xxl-down</code>
							</td>
							<td>
								Below <code>1400px</code>
							</td>
							<td>
								<Button
									variant="outline-primary"
									size="sm"
									onClick={() => handleShow('xxl-down')}
								>
									Full screen below xxl
								</Button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Modal
				show={show}
				fullscreen={fullscreen ?? true}
				onHide={() => setShow(false)}
			>
				<ModalHeader closeButton>
					<ModalTitle>Modal</ModalTitle>
				</ModalHeader>
				<Modal.Body>
					<p className="mb-0">
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Link
						to=""
						className="btn btn-light waves-effect"
						onClick={() => setShow(false)}
					>
						Close
					</Link>
					<Button
						type="button"
						variant="primary"
						onClick={() => setShow(false)}
					>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</ComponentContainerCard>
	)
}

const ThemesModal = () => {
	const { isOpen, toggle } = useToggle()

	const [className, setClassName] = useState<string>('')

	// Opens modal with custom class
	const openModalWithClass = (className: string) => {
		setClassName(className)
		toggle()
	}
	return (
		<ComponentContainerCard
			title="Themes Modal"
			description=" You can use custom modals with themes colors."
		>
			<div className="button-items">
				<Button
					variant="outline-primary"
					onClick={() => openModalWithClass('primary')}
				>
					Primary
				</Button>
				<Button
					variant="outline-secondary"
					onClick={() => openModalWithClass('secondary')}
				>
					Secondary
				</Button>
				<Button
					variant="outline-success"
					onClick={() => openModalWithClass('success')}
				>
					Success
				</Button>
				<Button
					variant="outline-warning"
					onClick={() => openModalWithClass('warning')}
				>
					Warning
				</Button>
				<Button
					variant="outline-info"
					onClick={() => openModalWithClass('info')}
				>
					Info
				</Button>
				<Button
					variant="outline-danger"
					onClick={() => openModalWithClass('danger')}
				>
					Danger
				</Button>
				<Button
					variant="outline-dark"
					onClick={() => openModalWithClass('dark')}
				>
					Dark
				</Button>
			</div>

			<Modal
				show={isOpen}
				onHide={toggle}
				className="fade"
				id="exampleModalPrimary"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="exampleModalPrimary1"
				aria-hidden="true"
			>
				<ModalHeader className={`bg-${className}`}>
					<h6 className="modal-title m-0 text-white" id="exampleModalPrimary1">
						Primary Modal
					</h6>
					<button type="button" className="btn-close" onClick={toggle} />
				</ModalHeader>
				<ModalBody>
					<Row>
						<Col lg={3} className="text-center align-self-center">
							<img src={btcImg} className="img-fluid" />
						</Col>
						<Col lg={9}>
							<h5>Crypto Market Services</h5>
							<span className="badge bg-soft-secondary">Disable Services</span>
							<small className="text-muted ml-2">07 Oct 2020</small>
							<ul className="mt-3 mb-0">
								<li>Lorem Ipsum is dummy text.</li>
								<li>It is a long established reader.</li>
								<li>Contrary to popular belief, Lorem simply.</li>
							</ul>
						</Col>
					</Row>
				</ModalBody>
				<ModalFooter>
					<Button variant="outline-secondary" size="sm" onClick={toggle}>
						Close
					</Button>
					<Button variant={`outline-${className}`} size="sm">
						Save changes
					</Button>
				</ModalFooter>
			</Modal>
		</ComponentContainerCard>
	)
}

const LoginAndSignupModal = () => {
	const { isOpen, toggle } = useToggle()

	const schemaResolver = yup.object().shape({
		username: yup.string().required('Please enter username'),
		email: yup
			.string()
			.email('Please enter a valid email')
			.required('Please enter Username'),
		password: yup.string().required('Please enter Password'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Passwords must match'),
		mobileNo: yup.number().required('Please enter mobile number'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
	})
	return (
		<ComponentContainerCard
			title="Login & Signup Modal"
			description="You can use custom modals with Login and SignUp form."
		>
			<Button variant="outline-primary" onClick={toggle} className="me-1">
				Login demo modal
			</Button>
			<Button variant="outline-primary" onClick={toggle}>
				Signup demo modal
			</Button>
			<Modal
				show={isOpen}
				onHide={toggle}
				className="fade"
				id="exampleModalLogin"
				tabIndex={-1}
				role="dialog"
			>
				<ModalHeader>
					<h6 className="modal-title m-0" id="exampleModalDefaultLogin">
						Login Modal
					</h6>
					<button type="button" className="btn-close" onClick={toggle} />
				</ModalHeader>
				<ModalBody>
					<CardBody className="p-0 auth-header-box">
						<div className="text-center">
							<Link to="/" className="logo logo-admin">
								<img
									src={logoSm}
									height={50}
									alt="logo"
									className="auth-logo"
								/>
							</Link>
							<h4 className="mt-3 mb-1 font-weight-semibold font-18">
								Let's Get Started Metrica
							</h4>
							<p className="text-muted  mb-0">
								Sign in to continue to Metrica.
							</p>
						</div>
					</CardBody>
					<CardBody>
						<TabContainer defaultActiveKey="1">
							<Nav className="nav-border nav nav-pills" role="tablist">
								<NavItem>
									<NavLink
										eventKey="1"
										className="font-weight-semibold"
										role="tab"
									>
										Log In
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										eventKey="2"
										className="font-weight-semibold"
										data-bs-toggle="tab"
										href="#Register_Tab"
										role="tab"
									>
										Register
									</NavLink>
								</NavItem>
							</Nav>
							<TabContent>
								<TabPane
									eventKey="1"
									className="fade show p-3 pt-3"
									id="LogIn_Tab"
									role="tabpanel"
								>
									<form
										onSubmit={handleSubmit(() => {})}
										className="form-horizontal auth-form my-4"
									>
										<FormTextInput
											name="email"
											label="Email"
											containerClass="mb-3"
											control={control}
											placeholder="Enter email"
										/>
										<FormInputPassword
											name="password"
											label="Password"
											control={control}
											containerClass="mb-3"
											placeholder="Enter password"
										/>
										<div className="form-group row mt-4">
											<Col sm={6}>
												<div className="custom-control custom-switch switch-success">
													<input
														type="checkbox"
														className="custom-control-input me-1"
														id="customSwitchSuccess"
													/>
													<label
														className="custom-control-label text-muted"
														htmlFor="customSwitchSuccess"
													>
														Remember me
													</label>
												</div>
											</Col>
											<Col sm={6} className="text-end">
												<Link
													to="/auth/re-password"
													className="text-muted font-13"
												>
													<i className="dripicons-lock" /> Forgot password?
												</Link>
											</Col>
										</div>
										<div className="form-group mb-0 row">
											<Col xs={12} className="mt-2">
												<div className="d-grid">
													<button
														className="btn btn-outline-primary btn-block"
														type="submit"
													>
														Log In <i className="fas fa-sign-in-alt ml-1" />
													</button>
												</div>
											</Col>
										</div>
									</form>
									<div className="m-3 text-center text-muted">
										<p>
											Don't have an account ?{' '}
											<Link to="/auth/register" className="text-primary ml-2">
												Free Resister
											</Link>
										</p>
									</div>
									<div className="account-social text-center">
										<h6 className="my-4">Or Login With</h6>
									</div>
									<ButtonGroup className="w-100">
										<Button variant="outline-secondary" size="sm">
											Facebook
										</Button>
										<Button variant="outline-secondary" size="sm">
											Twitter
										</Button>
										<Button variant="outline-secondary" size="sm">
											Google
										</Button>
									</ButtonGroup>
								</TabPane>
								<TabPane
									eventKey="2"
									className="px-3 pt-3"
									id="Register_Tab"
									role="tabpanel"
								>
									<form
										onSubmit={handleSubmit(() => {})}
										className="form-horizontal auth-form my-4"
									>
										<FormTextInput
											name="username"
											label="Username"
											containerClass="mb-3"
											control={control}
											placeholder="Enter username"
										/>
										<FormTextInput
											name="email"
											label="Email"
											containerClass="mb-3"
											control={control}
											placeholder="Enter email"
										/>
										<FormInputPassword
											name="password"
											label="Password"
											control={control}
											containerClass="mb-3"
											placeholder="Enter password"
										/>
										<FormInputPassword
											name="confirmPassword"
											label="Password"
											control={control}
											containerClass="mb-3"
											placeholder="Enter confirm password"
										/>
										<FormTextInput
											name="mobileNo"
											label="Mobile Number"
											containerClass="mb-3"
											control={control}
											placeholder="Enter Mobile Number"
										/>
										<Row className="form-group mt-4">
											<Col sm={12}>
												<div className="custom-control custom-switch switch-success">
													<input
														type="checkbox"
														className="custom-control-input"
														id="customSwitchSuccess2"
													/>
													<label
														className="custom-control-label text-muted"
														htmlFor="customSwitchSuccess2"
													>
														You agree to the Metrica{' '}
														<Link to="#" className="text-primary">
															Terms of Use
														</Link>
													</label>
												</div>
											</Col>
										</Row>
										<div className="form-group mb-0 row">
											<Col xs={12} className="mt-2">
												<div className="d-grid">
													<Button variant="outline-primary" type="submit">
														Register <i className="fas fa-sign-in-alt ml-1" />
													</Button>
												</div>
											</Col>
										</div>
									</form>
									<div className="m-3 text-center text-muted">
										<p className="mb-0 text-muted">
											Already have an account ?
											<Link to="/auth/login" className="text-primary ml-2">
												Log in
											</Link>
										</p>
									</div>
								</TabPane>
							</TabContent>
						</TabContainer>
					</CardBody>
					<CardBody className="bg-light-alt text-center mx-n3 mt-5">
						<span className="text-muted d-none d-sm-inline-block">
							Mannatthemes © 2021
						</span>
					</CardBody>
				</ModalBody>
			</Modal>
		</ComponentContainerCard>
	)
}

const Modals = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Modals" />
			<Row>
				<Col xs={12}>
					<OptionalSizes />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<FullscreenModals />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ThemesModal />
				</Col>
				<Col lg={6}>
					<LoginAndSignupModal />
				</Col>
			</Row>
		</>
	)
}

export default Modals
