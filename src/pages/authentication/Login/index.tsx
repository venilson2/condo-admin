import {
	Button,
	Card,
	CardBody,
	Col,
	Row,
} from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import { FormInputPassword, FormTextInput, PageMetaData } from '@/components'
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
						{/* <div className="text-center p-3">
							<Link to="/" className="logo logo-admin">
								<Image
									src={logoDark}
									height="50"
									alt="logo"
									className="auth-logo"
								/>
							</Link>
						</div> */}
					</CardBody>
					<CardBody className="p-3">
						<form className="form-horizontal auth-form" onSubmit={login}>
							<FormTextInput
								name="username"
								label="Username"
								containerClass="mb-2"
								control={control}
								placeholder="Digite seu username"
							/>
							<FormInputPassword
								name="password"
								label="Senha"
								containerClass="mb-2"
								control={control}
								placeholder="Digite sua senha"
							/>
							<FormTextInput
								name="subdomain"
								label="Dominio"
								control={control}
								placeholder="Digite o código do dominio"
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
											&nbsp;Lembrar-me
										</label>
									</div>
								</Col>
								<Col sm={6} className="text-end">
									<Link
										to="/auth-recover-pw"
										className="text-muted font-13"
									>
										<i className="dripicons-lock"></i> Esqueceu a Senha?
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
										Entrar
										<i className="fas fa-sign-in-alt ms-1"></i>
									</Button>
								</Col>
							</div>
						</form>
					</CardBody>
				</Card>
			</AuthLayout>
		</>
	)
}

export default Login
