import { Card, CardBody } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { PricingType } from '../data'

const PricingCard = ({ name, price, isPopular }: PricingType) => {
	return (
		<Card>
			<CardBody>
				{isPopular && (
					<span className="badge bg-pink a-animate-blink mt-0">POPULAR</span>
				)}
				<div className="pricingTable1 text-center">
					<h6 className="title1 pt-3 pb-2 m-0">{name}</h6>
					<p className="text-muted p-3 mb-0">
						It is a long established fact that a reader will be distracted by
						the readable.
					</p>
					<div className="p-3">
						<h3 className="amount amount-border d-inline-block">${price}</h3>
						<small className="font-12 text-muted">/month</small>
					</div>
					<hr className="hr-dashed" />
					<ul className="list-unstyled pricing-content-2 text-left py-3 border-0 mb-0">
						<li>30GB Disk Space</li>
						<li>30 Email Accounts</li>
						<li>30GB Monthly Bandwidth</li>
						<li>06 Subdomains</li>
						<li>10 Domains</li>
					</ul>
					<Link to="#" className="btn btn-dark py-2 px-5 font-16">
						<span>Sign up</span>
					</Link>
				</div>
			</CardBody>
		</Card>
	)
}

export default PricingCard
