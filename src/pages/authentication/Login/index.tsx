import {
	Button,
	Card,
	CardBody,
	Col,
	Image,
	Nav,
	NavItem,
	NavLink,
	Row,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import logoDark from '@/assets/images/logo-sm-dark.png'
import { FormInputPassword, FormTextInput, PageMetaData } from '@/components'
import RegisterForm from '../Register/RegisterForm'
import useLogin from './useLogin'
import AuthLayout from '../AuthLayout'

const Login = () => {
	const { loading, control, login, redirectUrl, isAuthenticated } = useLogin()

	return (
		<>
			<PageMetaData title="Login" />
			{isAuthenticated && <Navigate to={redirectUrl} replace />}
			<AuthLayout>
				<Card>
					<CardBody className="p-0 auth-header-box">
						<div className="text-center p-3">
							<Link to="/" className="logo logo-admin">
								<Image
									src={logoDark}
									height="50"
									alt="logo"
									className="auth-logo"
								/>
							</Link>
							<h4 className="mt-3 mb-1 fw-semibold text-white font-18">
								Let's Get Started Dastone
							</h4>
							<p className="text-muted  mb-0">
								Sign in to continue to Dastone.
							</p>
						</div>
					</CardBody>
					<CardBody className="p-0">
						<TabContainer defaultActiveKey="1">
							<Nav className="nav-border nav-pills" role="tablist">
								<NavItem>
									<NavLink eventKey="1">Log In</NavLink>
								</NavItem>
								<NavItem>
									<NavLink eventKey="2">Register</NavLink>
								</NavItem>
							</Nav>

							<TabContent>
								<TabPane
									eventKey="1"
									className="p-3"
									id="LogIn_Tab"
									role="tabpanel"
								>
									<form className="form-horizontal auth-form" onSubmit={login}>
										<FormTextInput
											name="email"
											label="Email"
											containerClass="mb-2"
											control={control}
											placeholder="Enter email"
										/>
										<FormInputPassword
											name="password"
											label="Password"
											control={control}
											placeholder="Enter password"
										/>

										<Row className="form-group my-3">
											<Col sm={6}>
												<div className="custom-control custom-switch switch-success">
													<input
														type="checkbox"
														className="custom-control-input"
														id="customSwitchSuccess"
													/>
													<label
														className="form-label text-muted"
														htmlFor="customSwitchSuccess"
													>
														Remember me
													</label>
												</div>
											</Col>
											<Col sm={6} className="text-end">
												<Link
													to="/auth-recover-pw"
													className="text-muted font-13"
												>
													<i className="dripicons-lock"></i> Forgot password?
												</Link>
											</Col>
										</Row>

										<div className="form-group mb-0 row">
											<Col xs={12}>
												<Button
													variant="primary"
													className="w-100 waves-effect waves-light"
													disabled={loading}
													type="submit"
												>
													Log In
													<i className="fas fa-sign-in-alt ms-1"></i>
												</Button>
											</Col>
										</div>
									</form>
									<div className="m-3 text-center text-muted">
										<p className="mb-0">
											Don't have an account ?{' '}
											<Link to="/auth-register" className="text-primary ms-2">
												Free Resister
											</Link>
										</p>
									</div>
									<div className="account-social">
										<h6 className="mb-3">Or Login With</h6>
									</div>
									<div className="btn-group w-100">
										<Button variant="outline-secondary" size="sm">
											Facebook
										</Button>
										<Button variant="outline-secondary" size="sm">
											Twitter
										</Button>
										<Button variant="outline-secondary" size="sm">
											Google
										</Button>
									</div>
								</TabPane>

								<TabPane
									eventKey="2"
									className="px-3 pt-3"
									id="Register_Tab"
									role="tabpanel"
								>
									<RegisterForm />
									<p className="my-3 text-muted">
										Already have an account ?
										<Link to="/auth-login" className="text-primary ms-2">
											Log in
										</Link>
									</p>
								</TabPane>
							</TabContent>
						</TabContainer>
					</CardBody>
					<CardBody className="bg-light-alt text-center">
						<span className="text-muted d-none d-sm-inline-block">
							Mannatthemes © <script>{new Date().getFullYear()}</script>
						</span>
					</CardBody>
				</Card>
			</AuthLayout>
		</>
	)
}

export default Login
