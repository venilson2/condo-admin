import { Card, CardBody, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoDark from '@/assets/images/logo-sm-dark.png'
import error from '@/assets/images/error.svg'
import { PageMetaData } from '@/components'
import AuthLayout from '../AuthLayout'

const Error500 = () => {
	return (
		<AuthLayout>
			<PageMetaData title="Error 500" />
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
							Oops! Sorry page does not found
						</h4>
						<p className="text-muted  mb-0">Back to dashboard of Dastone.</p>
					</div>
				</CardBody>
				<CardBody>
					<div className="ex-page-content text-center">
						<Image src={error} alt="0" className="" height="170" />
						<h1 className="mt-5 mb-4">500!</h1>
						<h5 className="font-16 text-muted mb-5">Somthing went wrong</h5>
					</div>
					<Link
						className="btn btn-primary w-100 waves-effect waves-light"
						to="/"
					>
						Back to Dashboard <i className="fas fa-redo ms-1"></i>
					</Link>
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

export default Error500
