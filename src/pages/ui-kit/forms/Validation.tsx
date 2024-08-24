import {
	FormInputPassword,
	FormTextInput,
	PageBreadcrumb2,
	SelectInput,
} from '@/components'
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Form,
	FormCheck,
	FormControl,
	FormLabel,
	FormSelect,
	InputGroup,
	Row,
} from 'react-bootstrap'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const BootstrapCustomStyles = () => {
	/*
	 * form validation schema
	 */
	const FormSchema = yup.object({
		firstName: yup.string().required('Please enter first name'),
		lastName: yup.string().required('Please enter last name'),
		username: yup.string().required('Please enter user name'),
		city: yup.string().required('Please enter city'),
		state: yup.string().required('Please enter state'),
		zip: yup.string().required('Please enter zip code'),
		termAndConditions: yup
			.bool()
			.oneOf([true], 'You must agree before submitting.'),
	})

	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(FormSchema),
		defaultValues: {
			firstName: 'Mark',
			lastName: 'Otto',
			username: '',
			city: '',
			state: '',
			zip: '',
			termAndConditions: false,
		},
	})

	/*
	 * handle form submission
	 */
	const onSubmitEvent = () => {
		// reset()
	}

	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Bootstrap Custom styles</CardTitle>
					<p className="text-muted mb-0">
						Custom feedback styles apply custom colors, borders, focus styles,
						and background icons to better communicate feedback. Background
						icons for <code>&lt;select&gt;</code>s are only available with{' '}
						<code>.form-select</code>, and not <code>.form-control</code>.
					</p>
				</CardHeader>
				<CardBody>
					<Form className="row g-3" onSubmit={handleSubmit(onSubmitEvent)}>
						<Col md="4">
							<FormTextInput
								label="First name"
								name="firstName"
								placeholder="First Name"
								control={control}
							/>
						</Col>
						<Col md="4">
							<FormTextInput
								label="Last name"
								name="lastName"
								placeholder="Last Name"
								control={control}
							/>
						</Col>
						<Col md="4">
							<FormLabel htmlFor="validationCustomUsername">Username</FormLabel>
							<InputGroup hasValidation>
								<span className="input-group-text" id="inputGroupPrepend">
									@
								</span>
								<FormControl
									type="text"
									id="validationCustomUsername"
									className={`${errors.username && 'is-invalid'}`}
									{...register('username', {
										required: true,
									})}
								/>
							</InputGroup>
							{errors.username?.message && (
								<Form.Control.Feedback
									type="invalid"
									className="text-danger d-block"
								>
									{errors.username?.message}
								</Form.Control.Feedback>
							)}
						</Col>
						<Col md="6">
							<FormTextInput
								label="City"
								name="city"
								placeholder="City"
								control={control}
							/>
						</Col>
						<Col md="3">
							<FormLabel htmlFor="validationCustom04">State</FormLabel>
							<SelectInput
								id="validationCustom04"
								name="state"
								control={control}
							>
								<option defaultValue="Choose...">Choose...</option>
								<option>...</option>
							</SelectInput>
						</Col>
						<Col md="3">
							<FormTextInput
								label="Zip"
								name="zip"
								placeholder="Zip"
								control={control}
							/>
						</Col>
						<Col xs="12">
							<FormCheck>
								<input
									className="form-check-input"
									type="checkbox"
									id="invalidCheck"
									{...register('termAndConditions', {
										required: true,
									})}
								/>
								<label className="form-check-label ms-1" htmlFor="invalidCheck">
									Agree to terms and conditions
								</label>
								{errors.termAndConditions?.message && (
									<Form.Control.Feedback
										type="invalid"
										className="text-danger d-block"
									>
										{errors.termAndConditions?.message}
									</Form.Control.Feedback>
								)}
							</FormCheck>
						</Col>
						<Col xs="12">
							<Button variant="primary" type="submit">
								Submit form
							</Button>
						</Col>
					</Form>
				</CardBody>
			</Card>
		</Col>
	)
}

const ValidationTooltips = () => {
	/*
	 * form validation schema
	 */
	const FormSchema = yup.object({
		firstName: yup.string().required('Please enter first name'),
		lastName: yup.string().required('Please enter last name'),
		username: yup.string().required('Please enter user name'),
		city: yup.string().required('Please enter city'),
		state: yup.string().required('Please enter state'),
		zip: yup.string().required('Please enter zip code'),
	})

	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(FormSchema),
		defaultValues: {
			firstName: 'Mark',
			lastName: 'Otto',
			username: '',
			city: '',
			state: '',
			zip: '',
		},
	})

	/*
	 * handle form submission
	 */
	const onSubmitEvent = () => {
		// reset()
	}

	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Validation Tooltips</CardTitle>
					<p className="text-muted mb-0">
						If your form layout allows it, you can swap the{' '}
						<code>
							.{'{'}valid | invalid{'}'}-feedback
						</code>{' '}
						classes for
						<code>
							.{'{'}valid | invalid{'}'}-tooltip
						</code>{' '}
						classes to display validation feedback in a styled tooltip.
					</p>
				</CardHeader>
				<CardBody>
					<Form className="row g-3" onSubmit={handleSubmit(onSubmitEvent)}>
						<Col md="4" className="position-relative">
							<FormTextInput
								label="First name"
								name="firstName"
								placeholder="First Name"
								control={control}
								isValid={!errors.firstName}
							/>
							{!errors.firstName && (
								<Form.Control.Feedback className="d-block" tooltip>
									Looks good!
								</Form.Control.Feedback>
							)}
						</Col>
						<Col md="4" className="position-relative">
							<FormTextInput
								label="Last name"
								name="lastName"
								placeholder="Last Name"
								control={control}
								isValid={!errors.lastName}
							/>
							{!errors.lastName && (
								<Form.Control.Feedback className="d-block" tooltip>
									Looks good!
								</Form.Control.Feedback>
							)}
						</Col>
						<Col md="4" className="position-relative">
							<FormLabel htmlFor="validationTooltipUsername">
								Username
							</FormLabel>
							<InputGroup hasValidation>
								<span
									className="input-group-text"
									id="validationTooltipUsernamePrepend"
								>
									@
								</span>
								<FormControl
									type="text"
									id="validationCustomUsername"
									{...register('username', {
										required: true,
									})}
									isInvalid={!!errors.username}
								/>
								{errors.username && (
									<Form.Control.Feedback
										type="invalid"
										className="d-block"
										tooltip
									>
										{errors.username?.message}
									</Form.Control.Feedback>
								)}
							</InputGroup>
						</Col>
						<Col md="6" className="position-relative">
							<FormLabel htmlFor="validationTooltip03">City</FormLabel>
							<FormControl
								type="text"
								id="validationCity"
								{...register('city', { required: true })}
								isInvalid={!!errors.city}
							/>
							{errors.city && (
								<Form.Control.Feedback
									type="invalid"
									className="d-block"
									tooltip
								>
									{errors.city.message}
								</Form.Control.Feedback>
							)}
						</Col>
						<Col md="3" className="position-relative">
							<FormLabel htmlFor="validationTooltip04">State</FormLabel>
							<FormSelect
								id="validationCustom04"
								{...register('state', { required: true })}
								isInvalid={!!errors.state}
							>
								<option defaultValue="Choose...">Choose...</option>
								<option>...</option>
							</FormSelect>
							{errors.state && (
								<Form.Control.Feedback
									type="invalid"
									className="d-block"
									tooltip
								>
									{errors.state?.message}
								</Form.Control.Feedback>
							)}
						</Col>
						<Col md="3" className="position-relative">
							<FormLabel htmlFor="validationTooltip05">Zip</FormLabel>
							<FormControl
								type="text"
								id="validationZip"
								{...register('zip', { required: true })}
								isInvalid={!!errors.zip}
							/>
							{errors.zip && (
								<Form.Control.Feedback
									type="invalid"
									className="d-block"
									tooltip
								>
									{errors.zip?.message}
								</Form.Control.Feedback>
							)}
						</Col>
						<Col xs="12">
							<Button variant="primary" type="submit">
								Submit form
							</Button>
						</Col>
					</Form>
				</CardBody>
			</Card>
		</Col>
	)
}

const CustomValidationForm = () => {
	/*
	 * form validation schema
	 */
	const FormSchema = yup.object({
		username: yup.string().required('Please enter user name'),
		email: yup
			.string()
			.email('Please enter a valid email address')
			.required('Please enter email'),
		password: yup.string().required('Please enter Password'),
		confirmPassword: yup.string().required('Please enter Confirm Password'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(FormSchema),
	})

	/*
	 * handle form submission
	 */
	const onSubmitEvent = () => {
		// reset()
	}

	return (
		<Row>
			<Col lg="6">
				<Card>
					<CardHeader>
						<CardTitle>Custom Validation Form</CardTitle>
						<p className="text-muted mb-0">
							Custom javascript form validation library.
						</p>
					</CardHeader>
					<CardBody>
						<Form id="form-validation-2" onSubmit={handleSubmit(onSubmitEvent)}>
							<div className="mb-2">
								<label htmlFor="username" className="mb-2">
									Username
								</label>
								<FormTextInput
									name="username"
									placeholder="Enter Username"
									control={control}
								/>
							</div>
							<div className="mb-2">
								<label htmlFor="email" className="mb-2">
									Email
								</label>
								<FormTextInput
									name="email"
									placeholder="Enter Email"
									control={control}
								/>
							</div>
							<div className="mb-2">
								<label htmlFor="password" className="mb-2">
									Password
								</label>
								<FormInputPassword
									name="password"
									placeholder="Enter Password"
									control={control}
								/>
							</div>
							<div className="mb-2">
								<label htmlFor="password2" className="mb-2">
									Confirm Password
								</label>
								<FormInputPassword
									name="confirmPassword"
									placeholder="Enter Password Again"
									control={control}
								/>
							</div>
							<Button type="submit" variant="de-primary">
								Submit form
							</Button>
						</Form>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

const Validation = () => {
	return (
		<>
			<PageBreadcrumb2 title="Validation" appName="Forms" />
			<Row>
				<BootstrapCustomStyles />
				<ValidationTooltips />
			</Row>
			<CustomValidationForm />
		</>
	)
}

export default Validation
