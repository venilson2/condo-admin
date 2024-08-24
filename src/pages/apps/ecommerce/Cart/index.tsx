import { Card, CardBody, Col, FormControl, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PageBreadcrumb2 } from '@/components'
import { products } from './data'
import CouponCode from './components/CouponCode'
import TotalPayment from './components/TotalPayment'

const Cart = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Ecommerce" title="Cart" />
			<Row>
				<Col lg={12}>
					<Card>
						<CardBody>
							<div className="table-responsive shopping-cart">
								<table className="table mb-0">
									<thead>
										<tr>
											<th>Product</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Total</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{products.map((product, idx) => {
											return (
												<tr key={idx}>
													<td>
														<Image
															src={product.image}
															height={36}
															className="me-1"
														/>
														<p className="d-inline-block align-middle mb-0">
															<Link
																to=""
																className="d-inline-block align-middle mb-0 product-name"
															>
																{product.name}
															</Link>
															<br />
															<span className="text-muted font-13">
																{product.description}
															</span>
														</p>
													</td>
													<td>${product.price}</td>
													<td>
														<FormControl
															className="form-control-sm w-25"
															type="number"
															defaultValue={product.quantity}
															id="example-number-input1"
														/>
													</td>
													<td>${product.total}</td>
													<td>
														<Link to="" className="text-dark">
															<i className="mdi mdi-close-circle-outline font-18" />
														</Link>
													</td>
												</tr>
											)
										})}
									</tbody>
								</table>
							</div>

							<Row className="justify-content-center">
								<Col md={6} className="align-self-center">
									<CouponCode />

									<div className="mt-4">
										<Row>
											<Col xs={6}>
												<Link to="" className="text-primary">
													<i className="fas fa-long-arrow-alt-left me-1" />{' '}
													Continue Shopping
												</Link>
											</Col>
											<Col xs={6} className="text-end">
												<Link
													to="/apps/ecommerce/checkout"
													className="text-primary"
												>
													Checkout{' '}
													<i className="fas fa-long-arrow-alt-right ml-1" />
												</Link>
											</Col>
										</Row>
									</div>
								</Col>
								<Col md={6}>
									<TotalPayment />
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Cart
