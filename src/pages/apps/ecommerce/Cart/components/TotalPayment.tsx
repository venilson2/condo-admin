import { Link } from 'react-router-dom'

const TotalPayment = () => {
	return (
		<div className="total-payment p-3 mt-4">
			<h4 className="header-title">Total Payment</h4>
			<table className="table">
				<tbody>
					<tr>
						<td className="fw-semibold">Subtotal</td>
						<td>$496.00</td>
					</tr>
					<tr>
						<td className="fw-semibold">Shipping</td>
						<td>
							<ul className="list-unstyled mb-0">
								<li>
									<div className="radio radio-info">
										<input
											type="radio"
											name="radio"
											id="radio_1"
											defaultValue="option_1"
											defaultChecked
										/>
										<label htmlFor="radio_1">Shipping Charge : $5.00</label>
									</div>
								</li>
								<li>
									<div className="radio radio-info">
										<input
											type="radio"
											name="radio"
											id="radio_2"
											defaultValue="option_2"
										/>
										<label htmlFor="radio_2">
											Express Shipping Charge : $10.00
										</label>
									</div>
								</li>
								<li>
									<Link to="" className="text-dark">
										<strong>Change Address</strong>
									</Link>
								</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td className="fw-semibold">Promo Code</td>
						<td>-$10.00</td>
					</tr>
					<tr>
						<td className="border-bottom-0">Total</td>
						<td className="text-dark border-bottom-0">
							<strong>$491.00</strong>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default TotalPayment
