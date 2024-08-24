import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom'
import { FormInputPassword, FormTextInput } from '@/components'
import { Button, Col, Row } from 'react-bootstrap'

const RegisterForm = () => {
	const schemaResolver = yup.object().shape({
		username: yup.string().required('Please enter username'),
		email: yup
			.string()
			.required('Please enter Email')
			.email('Please enter valid Email'),
		password: yup.string().required('Please enter Password'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Passwords must match'),
		mobileNo: yup.number().required('Please enter mobile number'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
	})

	const navigate = useNavigate()

	return (
		<form
			className="form-horizontal auth-form"
			onSubmit={handleSubmit(() => navigate('/auth/login'))}
		>
			<FormTextInput
				name="username"
				label="Username"
				containerClass="mb-2"
				control={control}
				placeholder="Enter username"
			/>
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
				containerClass="mb-2"
				placeholder="Enter password"
			/>
			<FormInputPassword
				name="confirmPassword"
				label="Confirm Password"
				control={control}
				containerClass="mb-2"
				placeholder="Enter confirm password"
			/>
			<FormTextInput
				name="mobileNo"
				label="Mobile Number"
				containerClass="mb-2"
				control={control}
				placeholder="Enter Mobile Number"
			/>

			<Row className="form-group my-3">
				<Col sm={12}>
					<div className="custom-control custom-switch switch-success">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customSwitchSuccess2"
						/>
						<label
							className="form-label text-muted"
							htmlFor="customSwitchSuccess2"
						>
							You agree to the Dastone{' '}
							<Link to="#" className="text-primary">
								Terms of Use
							</Link>
						</label>
					</div>
				</Col>
			</Row>

			<Row className="form-group mb-0">
				<Col xs={12}>
					<Button
						variant="primary"
						type="submit"
						className="w-100 waves-effect waves-light"
					>
						Register <i className="fas fa-sign-in-alt ms-1"></i>
					</Button>
				</Col>
			</Row>
		</form>
	)
}

export default RegisterForm
