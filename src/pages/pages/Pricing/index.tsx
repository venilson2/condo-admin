import { Col, Row } from 'react-bootstrap'
import { pricingPlans, pricingPlansData } from './data'
import { PageBreadcrumb2 } from '@/components'
import PricingCard from './components/PricingCard'
import PricingCard2 from './components/PricingCard2'

const Pricing = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Pages" title="Pricing" />
			<Row>
				{pricingPlans.map((plan, idx) => {
					return (
						<Col lg={3} key={idx}>
							<PricingCard
								name={plan.name}
								price={plan.price}
								isPopular={plan.isPopular}
							/>
						</Col>
					)
				})}
			</Row>
			<Row>
				{pricingPlansData.map((plan, idx) => (
					<Col lg={3} key={idx}>
						<PricingCard2 plan={plan} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default Pricing
