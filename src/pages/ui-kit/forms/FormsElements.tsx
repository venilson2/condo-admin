import { PageBreadcrumb } from '@/components'
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Form,
	FormControl,
	FormLabel,
	FormSelect,
	InputGroup,
	Row,
} from 'react-bootstrap'
import FormRange from 'react-bootstrap/esm/FormRange'

const TextualInputs = () => {
	return (
		<Row>
			<Col lg="12">
				<Card>
					<CardHeader>
						<CardTitle>Textual inputs</CardTitle>
						<p className="text-muted mb-0">
							Here are examples of{' '}
							<code className="highlighter-rouge">.form-control</code> applied
							to each textual HTML5{' '}
							<code className="highlighter-rouge">&lt;input&gt;</code>{' '}
							<code className="highlighter-rouge">type</code>.
						</p>
					</CardHeader>
					<CardBody>
						<Row>
							<Col lg="6">
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-text-input"
										className="col-sm-2 col-form-label text-end"
									>
										Text
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="text"
											defaultValue="Artisanal kale"
											id="example-text-input"
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-email-input"
										className="col-sm-2 col-form-label text-end"
									>
										Email
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="email"
											defaultValue="bootstrap@example.com"
											id="example-email-input"
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-tel-input"
										className="col-sm-2 col-form-label text-end"
									>
										Telephone
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="tel"
											defaultValue="1-(555)-555-5555"
											id="example-tel-input"
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-password-input"
										className="col-sm-2 col-form-label text-end"
									>
										Password
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="password"
											defaultValue="hunter2"
											id="example-password-input"
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-number-input"
										className="col-sm-2 col-form-label text-end"
									>
										Number
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="number"
											defaultValue={42}
											id="example-number-input"
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-datetime-local-input"
										className="col-sm-2 col-form-label text-end"
									>
										Date and time
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="datetime-local"
											defaultValue="2011-08-19T13:45:00"
											id="example-datetime-local-input"
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel
										htmlFor="exampleColorInput"
										className="col-sm-2 col-form-label text-end"
									>
										Color
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="color"
											id="exampleColorInput"
											defaultValue="#0b51b7"
											title="Choose your color"
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel className="col-sm-2 col-form-label text-end">
										Select
									</FormLabel>
									<Col sm="10">
										<FormSelect>
											<option defaultValue="Open this select menu">
												Open this select menu
											</option>
											<option value={1}>One</option>
											<option value={2}>Two</option>
											<option value={3}>Three</option>
										</FormSelect>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-text-input-lg"
										className="col-sm-2 col-form-label text-end"
									>
										Large
									</FormLabel>
									<Col sm="10">
										<FormControl
											size="lg"
											type="text"
											placeholder=".form-control-lg"
											id="example-text-input-lg"
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-text-input-sm"
										className="col-sm-2 col-form-label text-end"
									>
										Small
									</FormLabel>
									<Col sm="10">
										<FormControl
											size="sm"
											type="text"
											placeholder=".form-control-sm"
											id="example-text-input-sm"
										/>
									</Col>
								</Row>
								<Row className="mb-3 mb-lg-0">
									<FormLabel
										htmlFor="example-search-input"
										className="col-sm-2 col-form-label text-end"
									>
										Search
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="search"
											defaultValue="How do I shoot web"
											id="example-search-input"
										/>
									</Col>
								</Row>
							</Col>
							<Col lg="6">
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-url-input"
										className="col-sm-2 col-form-label text-end"
									>
										URL
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="url"
											defaultValue="https://getbootstrap.com"
											id="example-url-input"
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-date-input"
										className="col-sm-2 col-form-label text-end"
									>
										Date
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="date"
											defaultValue="2011-08-19"
											id="example-date-input"
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-month-input"
										className="col-sm-2 col-form-label text-end"
									>
										Month
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="month"
											defaultValue="2011-08"
											id="example-month-input"
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-week-input"
										className="col-sm-2 col-form-label text-end"
									>
										Week
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="week"
											defaultValue="2011-W33"
											id="example-week-input"
										/>
									</Col>
								</Row>
								<Row className="mb-3">
									<FormLabel
										htmlFor="example-time-input"
										className="col-sm-2 col-form-label text-end"
									>
										Time
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="time"
											defaultValue="13:45:00"
											id="example-time-input"
										/>
									</Col>
								</Row>
								<Row className="mb-3 has-success">
									<FormLabel
										htmlFor="inputHorizontalSuccess"
										className="col-sm-2 col-form-label text-end"
									>
										Email
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="email"
											className="form-control-success"
											id="inputHorizontalSuccess"
											placeholder="name@example.com"
										/>
										<div className="form-control-feedback">
											Success! You've done it.
										</div>
										<small className="form-text text-muted">
											Example help text that remains unchanged.
										</small>
									</Col>
								</Row>
								<Row className="mb-3 has-warning">
									<FormLabel
										htmlFor="inputHorizontalWarning"
										className="col-sm-2 col-form-label text-end"
									>
										Email
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="email"
											className="form-control-warning"
											id="inputHorizontalWarning"
											placeholder="name@example.com"
										/>
										<div className="form-control-feedback">
											Shucks, check the formatting of that and try again.
										</div>
										<small className="form-text text-muted">
											Example help text that remains unchanged.
										</small>
									</Col>
								</Row>
								<Row className="mb-3 has-error">
									<FormLabel
										htmlFor="inputHorizontalDnger"
										className="col-sm-2 col-form-label text-end"
									>
										Email
									</FormLabel>
									<Col sm="10">
										<FormControl
											type="email"
											className="form-control-danger"
											id="inputHorizontalDnger"
											placeholder="name@example.com"
										/>
										<div className="form-control-feedback">
											Sorry, that username's taken. Try another?
										</div>
										<small className="form-text text-muted">
											Example help text that remains unchanged.
										</small>
									</Col>
								</Row>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

const BasicForm = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Basic Form</CardTitle>
					<p className="text-muted mb-0">
						Basic example to demonstrate Bootstrap’s form styles.
					</p>
				</CardHeader>
				<CardBody>
					<Form>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<FormControl
								type="email"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
							<small id="emailHelp" className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1">Password</label>
							<FormControl
								type="password"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>
						<div className="mb-3">
							<div className="custom-control custom-checkbox">
								<input
									type="checkbox"
									className="custom-control-input"
									id="InlineCheckbox"
									data-parsley-multiple="groups"
									data-parsley-mincheck={2}
								/>
								<label
									className="custom-control-label ms-1"
									htmlFor="InlineCheckbox"
								>
									Check me out
								</label>
							</div>
						</div>
						<Button type="submit" variant="outline-primary" className="me-1">
							Submit
						</Button>
						<Button type="button" variant="outline-danger">
							Cancel
						</Button>
					</Form>
				</CardBody>
			</Card>
		</Col>
	)
}

const HorizontalForm = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Horizontal form</CardTitle>
					<p className="text-muted mb-0">
						Be sure to use{' '}
						<code className="highlighter-rouge">.col-form-label-sm</code>
						or <code className="highlighter-rouge">.col-form-label-lg</code> to
						your <code className="highlighter-rouge">&lt;label&gt;</code>s or{' '}
						<code className="highlighter-rouge">&lt;legend&gt;</code>s to
						correctly follow the size of{' '}
						<code className="highlighter-rouge">.form-control-lg</code> and
						<code className="highlighter-rouge">.form-control-sm</code>.
					</p>
				</CardHeader>
				<CardBody>
					<div className="general-label">
						<Form>
							<Row className="mb-3">
								<label
									htmlFor="horizontalInput1"
									className="col-sm-2 col-form-label"
								>
									Email
								</label>
								<Col sm="10">
									<FormControl
										type="email"
										id="horizontalInput1"
										placeholder="Enter Email"
									/>
								</Col>
							</Row>
							<Row className="mb-3">
								<label
									htmlFor="horizontalInput2"
									className="col-sm-2 col-form-label"
								>
									Password
								</label>
								<Col sm="10">
									<FormControl
										type="password"
										id="horizontalInput2"
										placeholder="Password"
									/>
								</Col>
							</Row>
							<Row className="mb-3">
								<Col sm="10" className="ms-auto">
									<div className="custom-control custom-checkbox">
										<input
											type="checkbox"
											className="custom-control-input"
											id="horizontalCheckbox"
											data-parsley-multiple="groups"
											data-parsley-mincheck={2}
										/>
										<label
											className="custom-control-label ms-1"
											htmlFor="horizontalCheckbox"
										>
											Remember me
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col sm="10" className="ms-auto">
									<Button
										type="submit"
										variant="outline-primary"
										className="me-1"
									>
										Submit
									</Button>
									<Button type="button" variant="outline-danger">
										Cancel
									</Button>
								</Col>
							</Row>
						</Form>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

const CustomStyles = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Custom styles</CardTitle>
					<p className="text-muted mb-0">Custom stylr example.</p>
				</CardHeader>
				<CardBody>
					<Form>
						<Row>
							<Col md="4">
								<div className="mb-3">
									<label htmlFor="username">Name</label>
									<FormControl type="text" id="username" required />
								</div>
							</Col>
							<Col md="4">
								<div className="mb-3">
									<label htmlFor="useremail">Email address</label>
									<FormControl type="email" id="useremail" required />
								</div>
							</Col>
							<Col md="4">
								<div className="mb-3">
									<label htmlFor="subject">Subject</label>
									<FormControl type="text" id="subject" required />
								</div>
							</Col>
						</Row>
						<Row>
							<Col md="12">
								<div className="mb-3">
									<label htmlFor="message">Message</label>
									<FormControl
										as="textarea"
										rows={5}
										id="message"
										defaultValue={''}
									/>
								</div>
							</Col>
						</Row>
						<Row>
							<Col sm="12" className="text-end">
								<Button
									type="submit"
									variant="outline-primary"
									className="px-4"
								>
									Send Message
								</Button>
							</Col>
						</Row>
					</Form>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Inline Form</CardTitle>
					<p className="text-muted mb-0">
						Use the <code>.col-auto</code> class to create horizontal layouts.
					</p>
				</CardHeader>
				<CardBody>
					<div className="general-label">
						<Form className="row row-cols-lg-auto align-items-center">
							<Col xs="12">
								<label
									className="visually-hidden"
									htmlFor="inlineFormInputGroupUsername"
								>
									Username
								</label>
								<InputGroup>
									<div className="input-group-text">@</div>
									<FormControl
										type="text"
										id="inlineFormInputGroupUsername"
										placeholder="Username"
									/>
								</InputGroup>
							</Col>
							<Col xs="12">
								<label
									className="visually-hidden"
									htmlFor="inlineFormSelectPref"
								>
									Preference
								</label>
								<FormSelect id="inlineFormSelectPref">
									<option defaultValue="Choose...">Choose...</option>
									<option value={1}>One</option>
									<option value={2}>Two</option>
									<option value={3}>Three</option>
								</FormSelect>
							</Col>
							<Col xs="12">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										id="inlineFormCheck"
									/>
									<label className="form-check-label" htmlFor="inlineFormCheck">
										Remember me
									</label>
								</div>
							</Col>
							<Col xs="12">
								<Button type="submit" variant="outline-primary">
									Submit
								</Button>
							</Col>
						</Form>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Input Size</CardTitle>
					<p className="text-muted mb-0">
						Set heights using classes like
						<code className="highlighter-rouge">.form-control-lg</code> and
						<code className="highlighter-rouge">.form-control-sm</code>.
					</p>
				</CardHeader>
				<CardBody>
					<Form>
						<FormControl
							className="form-control-lg mb-2"
							type="text"
							placeholder=".form-control-lg"
						/>
						<FormControl
							className="form-control-sm "
							type="text"
							placeholder=".form-control-sm"
						/>
					</Form>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>File browser</CardTitle>
					<p className="text-muted mb-0">
						The file input is the most gnarly of the bunch and requires
						additional JavaScript if you’d like to hook them up with functional
						Choose file… and selected file name text.
					</p>
				</CardHeader>
				<CardBody>
					<InputGroup className="mb-3">
						<label className="input-group-text" htmlFor="inputGroupFile01">
							Upload
						</label>
						<FormControl type="file" id="inputGroupFile01" />
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl type="file" id="inputGroupFile02" />
						<label className="input-group-text" htmlFor="inputGroupFile02">
							Upload
						</label>
					</InputGroup>
					<InputGroup className="mb-3">
						<Button
							variant="outline-secondary"
							type="button"
							id="inputGroupFileAddon03"
						>
							Button
						</Button>
						<FormControl
							type="file"
							id="inputGroupFile03"
							aria-describedby="inputGroupFileAddon03"
							aria-label="Upload"
						/>
					</InputGroup>
					<InputGroup>
						<FormControl
							type="file"
							id="inputGroupFile04"
							aria-describedby="inputGroupFileAddon04"
							aria-label="Upload"
						/>
						<Button
							variant="outline-secondary"
							type="button"
							id="inputGroupFileAddon04"
						>
							Button
						</Button>
					</InputGroup>
				</CardBody>
			</Card>
		</Col>
	)
}

const FormControls = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Form controls</CardTitle>
					<p className="text-muted mb-0">
						Basic example to demonstrate Bootstrap’s form styles.
					</p>
				</CardHeader>
				<CardBody>
					<Form>
						<div className="mb-3">
							<label htmlFor="exampleFormControlInput1">Email address</label>
							<FormControl
								type="email"
								id="exampleFormControlInput1"
								placeholder="name@example.com"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleFormControlSelect1">Example select</label>
							<FormSelect id="exampleFormControlSelect1">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</FormSelect>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleFormControlSelect2">
								Example multiple select
							</label>
							<FormSelect multiple id="exampleFormControlSelect2">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</FormSelect>
						</div>
						<div>
							<label htmlFor="exampleFormControlTextarea1">
								Example textarea
							</label>
							<FormControl
								as="textarea"
								id="exampleFormControlTextarea1"
								rows={3}
								defaultValue={''}
							/>
						</div>
					</Form>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Range</CardTitle>
					<p className="text-muted mb-0">
						CUse our custom range inputs for consistent cross-browser styling
						and built-in customization.
					</p>
				</CardHeader>
				<CardBody>
					<FormLabel htmlFor="customRange1">Example range</FormLabel>
					<FormRange id="customRange1" />
					<FormLabel htmlFor="customRange2">Min and max</FormLabel>
					<FormRange min={0} max={5} id="customRange2" />
					<FormLabel htmlFor="customRange3">Steps</FormLabel>
					<FormRange min={0} max={5} step="0.5" id="customRange3" />
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Switches</CardTitle>
					<p className="text-muted mb-0">
						A switch has the markup of a custom checkbox but uses the{' '}
						<code className="highlighter-rouge">.custom-switch</code> class to
						render a toggle switch. Switches also support the{' '}
						<code className="highlighter-rouge">disabled</code> attribute.
					</p>
				</CardHeader>
				<CardBody>
					<Row>
						<Col lg="4">
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									id="flexSwitchCheckDefault"
								/>
								<label
									className="form-check-label"
									htmlFor="flexSwitchCheckDefault"
								>
									Default switch
								</label>
							</div>
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									id="flexSwitchCheckDisabled"
									disabled
								/>
								<label
									className="form-check-label"
									htmlFor="flexSwitchCheckDisabled"
								>
									Disabled switch{' '}
								</label>
							</div>
						</Col>
						<Col lg="4">
							<div className="form-check form-switch form-switch-secondary">
								<input
									className="form-check-input"
									type="checkbox"
									id="customSwitchSecondary"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="customSwitchSecondary"
								>
									Secondary
								</label>
							</div>
							<div className="form-check form-switch form-switch-success">
								<input
									className="form-check-input"
									type="checkbox"
									id="customSwitchSuccess"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="customSwitchSuccess"
								>
									Success
								</label>
							</div>
							<div className="form-check form-switch form-switch-warning">
								<input
									className="form-check-input"
									type="checkbox"
									id="customSwitchWarning"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="customSwitchWarning"
								>
									Warning
								</label>
							</div>
							<div className="form-check form-switch form-switch-info">
								<input
									className="form-check-input"
									type="checkbox"
									id="customSwitchInfo"
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="customSwitchInfo">
									Info
								</label>
							</div>
						</Col>
						<Col lg="4">
							<div className="form-check form-switch form-switch-danger">
								<input
									className="form-check-input"
									type="checkbox"
									id="customSwitchDanger"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="customSwitchDanger"
								>
									Danger
								</label>
							</div>
							<div className="form-check form-switch form-switch-dark">
								<input
									className="form-check-input"
									type="checkbox"
									id="customSwitchDark"
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="customSwitchDark">
									Dark
								</label>
							</div>
							<div className="form-check form-switch form-switch-purple">
								<input
									className="form-check-input"
									type="checkbox"
									id="customSwitchPurple"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="customSwitchPurple"
								>
									Purple
								</label>
							</div>
							<div className="form-check form-switch form-switch-pink">
								<input
									className="form-check-input"
									type="checkbox"
									id="customSwitchPink"
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="customSwitchPink">
									Pink
								</label>
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Col>
	)
}

const Checkboxes = () => {
	return (
		<Col xl="6">
			<Card>
				<CardHeader>
					<CardTitle>Checkboxs</CardTitle>
					<p className="text-muted mb-0">
						For even more customization and cross browser consistency, use our
						completely custom form elements to replace the browser defaults.
						They’re built on top of semantic and accessible markup, so they’re
						solid replacements for any default form control.
					</p>
				</CardHeader>
				<CardBody>
					<div className="general-label">
						<Form>
							<Row className="mb-3">
								<label className="col-md-3 my-2 control-label">
									Checkboxes
								</label>
								<Col md="9">
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											id="flexCheckDefault"
										/>
										<label
											className="form-check-label"
											htmlFor="flexCheckDefault"
										>
											Default checkbox
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											id="flexCheckChecked"
											defaultChecked
										/>
										<label
											className="form-check-label"
											htmlFor="flexCheckChecked"
										>
											Checked checkbox
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											id="flexCheckDisabled"
											disabled
										/>
										<label
											className="form-check-label"
											htmlFor="flexCheckDisabled"
										>
											Disabled checkbox
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											id="flexCheckCheckedDisabled"
											defaultChecked
											disabled
										/>
										<label
											className="form-check-label"
											htmlFor="flexCheckCheckedDisabled"
										>
											Disabled checked checkbox
										</label>
									</div>
								</Col>
							</Row>
							<Row className="mb-3">
								<label className="col-md-3 my-2 control-label">
									Inline Checkboxes
								</label>
								<Col md="9">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											id="inlineCheckbox1"
											defaultValue="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="inlineCheckbox1"
										>
											HTML5
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											id="inlineCheckbox2"
											defaultValue="option2"
										/>
										<label
											className="form-check-label"
											htmlFor="inlineCheckbox2"
										>
											Css3
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											id="inlineCheckbox3"
											defaultValue="option3"
										/>
										<label
											className="form-check-label"
											htmlFor="inlineCheckbox3"
										>
											Javascript
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<label className="col-md-3 my-1 control-label">
									Button Checkbox
								</label>
								<Col md="9">
									<input
										type="checkbox"
										className="btn-check"
										id="btn-check-outlined"
										autoComplete="off"
									/>
									<label
										className="btn btn-outline-primary btn-sm"
										htmlFor="btn-check-outlined"
									>
										Single toggle
									</label>
									<br />
								</Col>
							</Row>
						</Form>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

const Radios = () => {
	return (
		<Col xl="6">
			<Card>
				<CardHeader>
					<CardTitle>Radios</CardTitle>
					<p className="text-muted mb-0">
						For even more customization and cross browser consistency, use our
						completely custom form elements to replace the browser defaults.
						They’re built on top of semantic and accessible markup, so they’re
						solid replacements for any default form control.
					</p>
				</CardHeader>
				<CardBody>
					<div className="general-label">
						<Form>
							<Row className="mb-3">
								<label className="col-md-3 my-2 control-label">Radios</label>
								<Col md="9">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											defaultValue="option1"
											defaultChecked
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1"
										>
											Default radio
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios2"
											defaultValue="option2"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios2"
										>
											Second default radio
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios3"
											defaultValue="option3"
											disabled
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios3"
										>
											Disabled radio
										</label>
									</div>
								</Col>
							</Row>
							<Row className="mb-3">
								<label className="col-md-3 my-1 control-label">
									Inline Radios
								</label>
								<Col md="9">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio1"
											defaultValue="option1"
										/>
										<label className="form-check-label" htmlFor="inlineRadio1">
											HTML5
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio2"
											defaultValue="option2"
										/>
										<label className="form-check-label" htmlFor="inlineRadio2">
											Css
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio3"
											defaultValue="option3"
										/>
										<label className="form-check-label" htmlFor="inlineRadio3">
											Javascript
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<label className="col-md-3 my-1 control-label">
									Button Radios
								</label>
								<Col md="9">
									<input
										type="radio"
										className="btn-check"
										name="options-outlined"
										id="success-outlined"
										autoComplete="off"
										defaultChecked
									/>
									<label
										className="btn btn-outline-success btn-sm"
										htmlFor="success-outlined"
									>
										Checked success radio
									</label>{' '}
									<input
										type="radio"
										className="btn-check"
										name="options-outlined"
										id="danger-outlined"
										autoComplete="off"
									/>
									<label
										className="btn btn-outline-danger btn-sm"
										htmlFor="danger-outlined"
									>
										Danger radio
									</label>
								</Col>
							</Row>
						</Form>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

const InputGroupsStatic = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Input groups Static</CardTitle>
					<p className="text-muted mb-0">
						Easily extend form controls by adding text, buttons, or button
						groups on either side of textual inputs, custom selects, and custom
						file inputs.
					</p>
				</CardHeader>
				<CardBody>
					<InputGroup className="mb-3">
						<span className="input-group-text" id="basic-addon1">
							@
						</span>
						<FormControl
							type="text"
							placeholder="Username"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl
							type="text"
							placeholder="Recipient's username"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
						/>
						<span className="input-group-text" id="basic-addon2">
							@mannatthemes.com
						</span>
					</InputGroup>
					<FormLabel htmlFor="basic-url">Your vanity URL</FormLabel>
					<InputGroup className="mb-3">
						<span className="input-group-text" id="basic-addon3">
							https://mannatthemes.com
						</span>
						<FormControl
							type="text"
							id="basic-url"
							aria-describedby="basic-addon3"
						/>
					</InputGroup>
					<InputGroup className="mb-3">
						<span className="input-group-text">$</span>
						<FormControl
							type="text"
							aria-label="Amount (to the nearest dollar)"
						/>
						<span className="input-group-text">.00</span>
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl
							type="text"
							placeholder="Username"
							aria-label="Username"
						/>
						<span className="input-group-text">@</span>
						<FormControl type="text" placeholder="Server" aria-label="Server" />
					</InputGroup>
					<InputGroup>
						<span className="input-group-text">With textarea</span>
						<FormControl
							as="textarea"
							aria-label="With textarea"
							defaultValue={''}
						/>
					</InputGroup>
				</CardBody>
			</Card>
		</Col>
	)
}

const InputGroupsButtons = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Input groups Buttons</CardTitle>
					<p className="text-muted mb-0">
						Easily extend form controls by adding text, buttons, or button
						groups on either side of textual inputs, custom selects, and custom
						file inputs.
					</p>
				</CardHeader>
				<CardBody>
					<Form>
						<Row className="mb-3">
							<Col md="6">
								<InputGroup>
									<div className="input-group-text">
										<input className="form-check-input mt-0" type="checkbox" />
									</div>
									<FormControl
										type="text"
										aria-label="Text input with checkbox"
									/>
								</InputGroup>
							</Col>
							<Col md="6">
								<InputGroup>
									<div className="input-group-text">
										<input className="form-check-input mt-0" type="radio" />
									</div>
									<FormControl
										type="text"
										aria-label="Text input with radio button"
									/>
								</InputGroup>
							</Col>
						</Row>
						<InputGroup className="mb-3">
							<Button variant="secondary" type="button" id="button-addon1">
								<i className="fas fa-search" />
							</Button>
							<FormControl
								type="text"
								aria-label="Example text with button addon"
								aria-describedby="button-addon1"
							/>
						</InputGroup>
						<InputGroup className="mb-3">
							<FormControl
								type="text"
								placeholder="Search"
								aria-label="Recipient's username"
								aria-describedby="button-addon2"
							/>
							<Button variant="secondary" type="button" id="button-addon2">
								Go!
							</Button>
						</InputGroup>
						<InputGroup className="mb-3">
							<FormControl
								type="email"
								placeholder="Email"
								aria-label="Email"
								aria-describedby="button-addon3"
							/>
							<Button variant="secondary" type="button" id="button-addon2">
								Submit
							</Button>
						</InputGroup>
						<InputGroup>
							<FormSelect
								id="inputGroupSelect04"
								aria-label="Example select with button addon"
							>
								<option defaultValue="Choose...">Choose...</option>
								<option value={1}>One</option>
								<option value={2}>Two</option>
								<option value={3}>Three</option>
							</FormSelect>
							<Button variant="secondary" type="button">
								Button
							</Button>
						</InputGroup>
					</Form>
				</CardBody>
			</Card>
		</Col>
	)
}

const Elements = () => {
	return (
		<>
			<PageBreadcrumb title="Form Elements" subName="Forms" />
			<TextualInputs />
			<Row>
				<BasicForm />
				<HorizontalForm />
			</Row>
			<Row>
				<CustomStyles />
				<FormControls />
			</Row>
			<Row>
				<Checkboxes />
				<Radios />
			</Row>
			<Row>
				<InputGroupsStatic />
				<InputGroupsButtons />
			</Row>
		</>
	)
}

export default Elements
