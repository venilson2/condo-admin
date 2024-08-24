import { Button, Card, CardBody, Col, Form, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoDark from '@/assets/images/logo-sm-dark.png'
import { FormInputPassword, PageMetaData } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import AuthLayout from '../AuthLayout'

const Lockscreen = () => {
	const schemaResolver = yup.object().shape({
		password: yup.string().required('Please enter password'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
	})
	return (
		<AuthLayout>
			<PageMetaData title="Lockscreen" />
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
							Enter Password And Use Dastone
						</h4>
						<p className="text-muted  mb-0">
							Hello Mark, enter your password to unlock the screen !
						</p>
					</div>
				</CardBody>
				<CardBody>
					<Form
						className="form-horizontal auth-form"
						onSubmit={handleSubmit(() => {})}
					>
						<FormInputPassword
							name="password"
							label="Password"
							containerClass="mb-3"
							placeholder="Enter password"
							control={control}
						/>

						<Row className="form-group mb-0">
							<Col xs={12}>
								<Button
									variant="primary"
									className="w-100 waves-effect waves-light"
									type="button"
								>
									Unlock <i className="fas fa-sign-in-alt ms-1"></i>
								</Button>
							</Col>
						</Row>
					</Form>
					<p className="text-muted mb-0 mt-3">
						Not you ? return{' '}
						<Link to="/auth-register" className="text-primary ms-2">
							Sign In
						</Link>
					</p>
				</CardBody>
				<CardBody className="bg-light-alt text-center">
					<span className="text-muted d-none d-sm-inline-block">
						Mannatthemes © <script>{new Date().getFullYear()}</script>
					</span>
				</CardBody>
			</Card>
		</AuthLayout>
	)
}

export default Lockscreen
