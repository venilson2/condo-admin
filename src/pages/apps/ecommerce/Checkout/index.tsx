import { PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'
import OrderSummery from './components/OrderSummery'
import DeliveryAddress from './components/DeliveryAddress'
import BillingDetails from './components/BillingDetails'

const Checkout = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Ecommerce" title="CheckOut" />
			<Row>
				<Col lg={4}>
					<OrderSummery />
				</Col>

				<Col lg={4}>
					<DeliveryAddress />
				</Col>

				<Col lg={4}>
					<BillingDetails />
				</Col>
			</Row>
		</>
	)
}

export default Checkout
