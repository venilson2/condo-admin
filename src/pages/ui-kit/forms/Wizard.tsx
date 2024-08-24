import { PageBreadcrumb } from '@/components'
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	FormCheck,
	FormControl,
	FormSelect,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StepWizard, {
	StepWizardChildProps,
	StepWizardProps,
} from 'react-step-wizard'

const nullFunction = () => {
	throw new Error('Function not implemented.')
}

const Form1 = () => {
	return (
		<div className="tab-pane active" id="step1">
			<CardTitle className="mt-3 mb-1">Seller Details</CardTitle>
			<Row>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtFirstNameBilling"
							className="col-lg-3 col-form-label text-end"
						>
							Contact Person
						</label>
						<Col lg="9">
							<FormControl
								id="txtFirstNameBilling"
								name="txtFirstNameBilling"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtLastNameBilling"
							className="col-lg-3 col-form-label text-end"
						>
							Mobile No.
						</label>
						<Col lg="9">
							<FormControl
								id="txtLastNameBilling"
								name="txtLastNameBilling"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtCompanyBilling"
							className="col-lg-3 col-form-label text-end"
						>
							Landline No.
						</label>
						<Col lg="9">
							<FormControl
								id="txtCompanyBilling"
								name="txtCompanyBilling"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtEmailAddressBilling"
							className="col-lg-3 col-form-label text-end"
						>
							Email Address
						</label>
						<Col lg="9">
							<FormControl
								id="txtEmailAddressBilling"
								name="txtEmailAddressBilling"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtAddress1Billing"
							className="col-lg-3 col-form-label text-end"
						>
							Address 1
						</label>
						<Col lg="9">
							<FormControl
								as="textarea"
								id="txtAddress1Billing"
								name="txtAddress1Billing"
								rows={4}
								defaultValue={''}
							/>
						</Col>
					</Row>
				</Col>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtAddress2Billing"
							className="col-lg-3 col-form-label text-end"
						>
							Warehouse Address
						</label>
						<Col lg="9">
							<FormControl
								as="textarea"
								id="txtAddress2Billing"
								name="txtAddress2Billing"
								rows={4}
								defaultValue={''}
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtCityBilling"
							className="col-lg-3 col-form-label text-end"
						>
							Company Type
						</label>
						<Col lg="9">
							<FormControl
								id="txtCityBilling"
								name="txtCityBilling"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtStateProvinceBilling"
							className="col-lg-3 col-form-label text-end"
						>
							Live Market A/C
						</label>
						<Col lg="9">
							<FormControl
								id="txtStateProvinceBilling"
								name="txtStateProvinceBilling"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtTelephoneBilling"
							className="col-lg-3 col-form-label text-end"
						>
							Product Category
						</label>
						<Col lg="9">
							<FormControl
								id="txtTelephoneBilling"
								name="txtTelephoneBilling"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtFaxBilling"
							className="col-lg-3 col-form-label text-end"
						>
							Product Sub Category
						</label>
						<Col lg="9">
							<FormControl
								id="txtFaxBilling"
								name="txtFaxBilling"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	)
}

const Form2 = () => {
	return (
		<div className="tab-pane" id="step2">
			<CardTitle className="mt-3 mb-1">Company Document</CardTitle>
			<Row>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtFirstNameShipping"
							className="col-lg-3 col-form-label text-end"
						>
							PAN Card
						</label>
						<Col lg="9">
							<FormControl
								id="txtFirstNameShipping"
								name="txtFirstNameShipping"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtLastNameShipping"
							className="col-lg-3 col-form-label text-end"
						>
							VAT/TIN No.
						</label>
						<Col lg="9">
							<FormControl
								id="txtLastNameShipping"
								name="txtLastNameShipping"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtCompanyShipping"
							className="col-lg-3 col-form-label text-end"
						>
							CST No.
						</label>
						<Col lg="9">
							<FormControl
								id="txtCompanyShipping"
								name="txtCompanyShipping"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtEmailAddressShipping"
							className="col-lg-3 col-form-label text-end"
						>
							Service Tax No.
						</label>
						<Col lg="9">
							<FormControl
								id="txtEmailAddressShipping"
								name="txtEmailAddressShipping"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtCityShipping"
							className="col-lg-3 col-form-label text-end"
						>
							Company UIN
						</label>
						<Col lg="9">
							<FormControl
								id="txtCityShipping"
								name="txtCityShipping"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtStateProvinceShipping"
							className="col-lg-3 col-form-label text-end"
						>
							Declaration
						</label>
						<Col lg="9">
							<FormControl
								id="txtStateProvinceShipping"
								name="txtStateProvinceShipping"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	)
}

const Form3 = () => {
	return (
		<div className="tab-pane" id="step3">
			<CardTitle className="mt-3 mb-1">Bank Details</CardTitle>
			<Row>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtNameCard"
							className="col-lg-3 col-form-label text-end"
						>
							Name on Card
						</label>
						<Col lg="9">
							<FormControl id="txtNameCard" name="txtNameCard" type="text" />
						</Col>
					</Row>
				</Col>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="ddlCreditCardType"
							className="col-lg-3 col-form-label text-end"
						>
							Credit Card Type
						</label>
						<Col lg="9">
							<FormSelect
								id="ddlCreditCardType"
								name="ddlCreditCardType"
								className="form-select"
							>
								<option defaultValue="--Please Select--">
									--Please Select--
								</option>
								<option value="AE">American Express</option>
								<option value="VI">Visa</option>
								<option value="MC">MasterCard</option>
								<option value="DI">Discover</option>
							</FormSelect>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtCreditCardNumber"
							className="col-lg-3 col-form-label text-end"
						>
							Credit Card Number
						</label>
						<Col lg="9">
							<FormControl
								id="txtCreditCardNumber"
								name="txtCreditCardNumber"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtCardVerificationNumber"
							className="col-lg-3 col-form-label text-end"
						>
							Card Verification Number
						</label>
						<Col lg="9">
							<FormControl
								id="txtCardVerificationNumber"
								name="txtCardVerificationNumber"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<Row className="form-group mb-2">
						<label
							htmlFor="txtExpirationDate"
							className="col-lg-3 col-form-label text-end"
						>
							Expiration Date
						</label>
						<Col lg="9">
							<FormControl
								id="txtExpirationDate"
								name="txtExpirationDate"
								type="text"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	)
}

const Form4 = () => {
	return (
		<div className="tab-pane" id="step4">
			<CardTitle className="mt-3">Confirm Detail</CardTitle>
			<FormCheck className="my-2">
				<input
					className="form-check-input"
					type="checkbox"
					id="flexCheckDefault"
				/>
				<label className="form-check-label ms-1" htmlFor="flexCheckDefault">
					I agree with the Terms and Conditions.
				</label>
			</FormCheck>
		</div>
	)
}

const BasicWizard = () => {
	const NavButtons = (props: StepWizardChildProps | any) => {
		const handleStep = (step: number) => {
			props.goToStep(step)
		}

		return (
			<nav>
				<div className="nav nav-tabs" id="nav-tab">
					<Link
						to="#"
						className={`nav-link ${props.currentStep == 1 && 'active'}`}
						id="step1-tab"
						onClick={() => handleStep(1)}
					>
						Seller Details
					</Link>
					<Link
						to="#"
						className={`nav-link ${props.currentStep == 2 && 'active'}`}
						id="step2-tab"
						onClick={() => handleStep(2)}
					>
						Company Document
					</Link>
					<Link
						to="#"
						className={`nav-link ${props.currentStep == 3 && 'active'}`}
						id="step3-tab"
						onClick={() => handleStep(3)}
					>
						Bank Details
					</Link>
					<Link
						to="#"
						className={`nav-link ${props.currentStep == 4 && 'active'}`}
						id="step4-tab"
						onClick={() => handleStep(4)}
					>
						Confirm Detail
					</Link>
				</div>
			</nav>
		)
	}

	const ActionButtons = (props: StepWizardChildProps) => {
		const handleBack = () => {
			props.previousStep()
		}

		const handleNext = () => {
			props.nextStep()
		}

		const handleFinish = () => {
			props.lastStep()
		}

		return (
			<div>
				{props.currentStep > 1 && (
					<Button
						type="button"
						id="stepPrev"
						variant="secondary"
						className="float-start"
						onClick={handleBack}
					>
						Previous
					</Button>
				)}

				{props.currentStep < props.totalSteps && (
					<Button
						type="button"
						id="stepNext"
						variant="primary"
						onClick={handleNext}
						className="float-end"
					>
						Next
					</Button>
				)}

				{props.currentStep === props.totalSteps && (
					<Button
						type="button"
						id="stepFinish"
						variant="danger"
						onClick={handleFinish}
						className="float-end"
					>
						Finish
					</Button>
				)}
			</div>
		)
	}

	const Step1 = (props: StepWizardProps) => {
		return (
			<>
				<NavButtons
					currentStep={1}
					totalSteps={4}
					goToStep={nullFunction}
					{...props}
				/>
				<Form1 />
				<ActionButtons
					isActive={false}
					currentStep={1}
					totalSteps={4}
					nextStep={nullFunction}
					goToNamedStep={nullFunction}
					goToStep={nullFunction}
					lastStep={nullFunction}
					previousStep={nullFunction}
					firstStep={nullFunction}
					{...props}
				/>
			</>
		)
	}
	const Step2 = (props: StepWizardProps) => {
		return (
			<>
				<NavButtons
					currentStep={2}
					totalSteps={4}
					goToStep={nullFunction}
					{...props}
				/>
				<Form2 />
				<ActionButtons
					isActive={false}
					currentStep={2}
					totalSteps={4}
					firstStep={nullFunction}
					lastStep={nullFunction}
					nextStep={nullFunction}
					previousStep={nullFunction}
					goToStep={nullFunction}
					goToNamedStep={nullFunction}
					{...props}
				/>
			</>
		)
	}
	const Step3 = (props: StepWizardProps) => {
		return (
			<>
				<NavButtons
					currentStep={3}
					totalSteps={4}
					goToStep={nullFunction}
					{...props}
				/>
				<Form3 />
				<ActionButtons
					isActive={false}
					currentStep={3}
					totalSteps={4}
					firstStep={nullFunction}
					lastStep={nullFunction}
					nextStep={nullFunction}
					previousStep={nullFunction}
					goToStep={nullFunction}
					goToNamedStep={nullFunction}
					{...props}
				/>
			</>
		)
	}
	const Step4 = (props: StepWizardProps) => {
		return (
			<>
				<NavButtons
					currentStep={4}
					totalSteps={4}
					goToStep={nullFunction}
					{...props}
				/>
				<Form4 />
				<ActionButtons
					isActive={false}
					currentStep={4}
					totalSteps={4}
					firstStep={nullFunction}
					lastStep={nullFunction}
					nextStep={nullFunction}
					previousStep={nullFunction}
					goToStep={nullFunction}
					goToNamedStep={nullFunction}
					{...props}
				/>
			</>
		)
	}
	//active tab key
	return (
		<Row>
			<Col xs="12">
				<Card>
					<CardHeader>
						<CardTitle>Custom Steps Wizard</CardTitle>
						<p className="text-muted mb-0">
							You can use Steps Wizard with Bootstrap 5.
						</p>
					</CardHeader>
					<CardBody>
						<StepWizard>
							<Step1 />
							<Step2 />
							<Step3 />
							<Step4 />
						</StepWizard>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

const Wizard = () => {
	return (
		<>
			<PageBreadcrumb title="Wizard" subName="Forms" />
			<BasicWizard />
		</>
	)
}

export default Wizard
