import { ComponentContainerCard } from '@/components'
import { CardBody, Col, Image, Row } from 'react-bootstrap'
import moneyBag from '@/assets/images/money-beg.png'
import { FiDollarSign, FiShoppingCart, FiTarget } from 'react-icons/fi'

const EarrningReportWidget = () => {
	return (
		<ComponentContainerCard
			title="Earning Reports"
			label="Today"
			menuItems={['Today', 'Yesterday', 'Last Week']}
		>
			<CardBody className="card-body border-bottom-dashed">
				<div className="earning-data text-center">
					<Image src={moneyBag} alt="" className="money-bag my-3" height="60" />
					<h5 className="earn-money mb-1">$51,255</h5>
					<p className="text-muted font-15 mb-4">Total Revenue</p>
					<div className="text-center my-2">
						<h6 className="text-primary bg-soft-primary p-3 mb-0 font-11 rounded">
							<FiTarget className="align-self-center icon-xs me-1" />
							Target $90,000
							<span className="mx-2">/</span>
							<FiDollarSign className="align-self-center icon-xs me-1" />
							Last Month $68,550
						</h6>
					</div>
				</div>
			</CardBody>
			<CardBody className="my-1">
				<Row>
					<Col>
						<div className="media">
							<FiShoppingCart className="align-self-center icon-md text-secondary me-2" />
							<div className="media-body align-self-center">
								<h6 className="m-0 font-24">128</h6>
								<p className="text-muted mb-0">Today's New Order</p>
							</div>
						</div>
					</Col>
					<Col>
						<div className="media">
							<FiDollarSign
								data-feather="dollar-sign"
								className="align-self-center icon-md text-secondary me-2"
							/>
							<div className="media-body align-self-center">
								<h6 className="m-0 font-24">$5,335</h6>
								<p className="text-muted mb-0">Today's Revenue</p>
							</div>
						</div>
					</Col>
				</Row>
			</CardBody>
		</ComponentContainerCard>
	)
}

export default EarrningReportWidget
