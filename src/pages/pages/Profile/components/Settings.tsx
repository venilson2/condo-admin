import {
	Row,
	Col,
	Card,
	Button,
	CardHeader,
	CardTitle,
	CardBody,
	FormControl,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Settings = () => {
	return (
		<Row>
			<Col lg={6} xl={6}>
				<Card>
					<CardHeader>
						<Row className="align-items-center">
							<Col>
								<CardTitle>Personal Information</CardTitle>
							</Col>
						</Row>
					</CardHeader>
					<CardBody>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								First Name
							</label>
							<Col lg={9} xl={8}>
								<FormControl type="text" value="Rosa" readOnly />
							</Col>
						</Row>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								Last Name
							</label>
							<Col lg={9} xl={8}>
								<FormControl type="text" value="Dodson" readOnly />
							</Col>
						</Row>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								Company Name
							</label>
							<Col lg={9} xl={8}>
								<FormControl type="text" value="MannatThemes" readOnly />
								<span className="form-text text-muted font-12">
									We'll never share your email with anyone else.
								</span>
							</Col>
						</Row>

						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								Contact Phone
							</label>
							<Col lg={9} xl={8}>
								<div className="input-group">
									<span className="input-group-text">
										<i className="las la-phone"></i>
									</span>
									<FormControl
										type="text"
										value="+123456789"
										placeholder="Phone"
										aria-describedby="basic-addon1"
										readOnly
									/>
								</div>
							</Col>
						</Row>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								Email Address
							</label>
							<Col lg={9} xl={8}>
								<div className="input-group">
									<span className="input-group-text">
										<i className="las la-at"></i>
									</span>
									<FormControl
										type="text"
										value="rosa.dodson@demo.com"
										placeholder="Email"
										aria-describedby="basic-addon1"
										readOnly
									/>
								</div>
							</Col>
						</Row>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								Website Link
							</label>
							<Col lg={9} xl={8}>
								<div className="input-group">
									<span className="input-group-text">
										<i className="la la-globe"></i>
									</span>
									<FormControl
										type="text"
										value=" https://mannatthemes.com/"
										placeholder="Email"
										aria-describedby="basic-addon1"
										readOnly
									/>
								</div>
							</Col>
						</Row>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								USA
							</label>
							<Col lg={9} xl={8}>
								<select className="form-select">
									<option>London</option>
									<option>India</option>
									<option>USA</option>
									<option>Canada</option>
									<option>Thailand</option>
								</select>
							</Col>
						</Row>
						<div className="form-group">
							<Col lg={9} xl={8} className="offset-lg-3">
								<Button size="sm" variant="outline-primary" type="submit">
									Submit
								</Button>
								<Button size="sm" variant="outline-danger" type="button">
									Cancel
								</Button>
							</Col>
						</div>
					</CardBody>
				</Card>
			</Col>
			<Col lg={6} xl={6}>
				<Card>
					<CardHeader>
						<h4 className="card-title">Change Password</h4>
					</CardHeader>
					<CardBody>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								Current Password
							</label>
							<Col lg={9} xl={8}>
								<FormControl type="password" placeholder="Password" />
								<Link to="#" className="text-primary font-12">
									Forgot password ?
								</Link>
							</Col>
						</Row>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								New Password
							</label>
							<Col lg={9} xl={8}>
								<FormControl type="password" placeholder="New Password" />
							</Col>
						</Row>
						<Row className="form-group">
							<label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">
								Confirm Password
							</label>
							<Col lg={9} xl={8}>
								<FormControl type="password" placeholder="Re-Password" />
								<span className="form-text text-muted font-12">
									Never share your password.
								</span>
							</Col>
						</Row>
						<Row className="form-group">
							<Col lg={9} xl={8} className="offset-lg-3">
								<Button type="submit" size="sm" variant="outline-primary">
									Change Password
								</Button>
								<Button type="button" size="sm" variant="outline-primary">
									Cancel
								</Button>
							</Col>
						</Row>
					</CardBody>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle as="h4">Other Settings</CardTitle>
					</CardHeader>
					<div className="card-body">
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								value=""
								id="Email_Notifications"
								checked
								readOnly
							/>
							<label className="form-check-label" htmlFor="Email_Notifications">
								Email Notifications
							</label>
							<span className="form-text text-muted font-12 mt-0">
								Do you need them?
							</span>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								value=""
								id="API_Access"
								readOnly
							/>
							<label className="form-check-label" htmlFor="API_Access">
								API Access
							</label>
							<span className="form-text text-muted font-12 mt-0">
								Enable/Disable access
							</span>
						</div>
					</div>
				</Card>
			</Col>
		</Row>
	)
}

export default Settings
