import { ComponentContainerCard } from '@/components'
import { Image } from 'react-bootstrap'
import { orderSummery } from '../data'

const OrderSummery = () => {
	return (
		<ComponentContainerCard title="Order Summary">
			<div className="table-responsive shopping-cart">
				<table className="table mb-0">
					<thead>
						<tr>
							<th className="border-top-0">Product</th>
							<th className="border-top-0">Quantity</th>
							<th className="border-top-0">Total</th>
						</tr>
					</thead>
					<tbody>
						{orderSummery.map((order, idx) => {
							return (
								<tr key={idx}>
									<td className="d-flex gap-1 align-items-center">
										<Image src={order.image} height={36} />
										<p className="d-inline-block align-middle mb-0 product-name">
											{order.name}
										</p>
									</td>
									<td>{order.quantity}</td>
									<td>${order.total}</td>
								</tr>
							)
						})}
						<tr>
							<td>
								<h6>Total :</h6>
							</td>
							<td></td>
							<td className="text-dark">
								<strong>$496</strong>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="total-payment">
				<table className="table mb-0">
					<tbody>
						<tr>
							<td className="payment-title">Subtotal</td>
							<td>$496.00</td>
						</tr>
						<tr>
							<td className="payment-title">Shipping</td>
							<td>Shipping Charge : $5.00</td>
						</tr>
						<tr>
							<td className="payment-title">Promo Code</td>
							<td>-$10.00</td>
						</tr>
						<tr>
							<td className="payment-title">Total</td>
							<td className="text-dark">
								<strong>$491.00</strong>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}

export default OrderSummery
