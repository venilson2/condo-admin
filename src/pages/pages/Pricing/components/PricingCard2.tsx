import { Badge, Card, CardBody } from 'react-bootstrap'
import type { Pricing2Type } from '../data'
import { Link } from 'react-router-dom'

const PricingCard2 = ({ plan }: { plan: Pricing2Type }) => {
	const { features, image, name, price, isPopular } = plan
	return (
		<Card>
			<CardBody>
				<div className="pricingTable1 text-center">
					{isPopular && (
						<Badge bg="warning" className="ms-auto a-animate-blink">
							POPULAR
						</Badge>
					)}
					<img src={image} className="d-block mx-auto" height={120} />
					<h6 className="title1 py-3 mt-2 mb-0">
						{name} <small className="text-muted font-12">Per Month</small>
					</h6>
					<ul className="list-unstyled pricing-content-2">
						{features.map((feature, idx) => (
							<li key={idx}>{feature}</li>
						))}
					</ul>
					<hr className="hr-dashed my-4" />
					<div className="text-center">
						<h3 className="amount">
							${price}
							<small className="font-12 text-muted">/month</small>
						</h3>
					</div>
					<div className="d-grid">
						<Link
							to="#"
							className="btn btn-primary btn-skew btn-outline-dashed py-2"
						>
							<span>sign up</span>
						</Link>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export default PricingCard2
