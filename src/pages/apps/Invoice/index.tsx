import { PageBreadcrumb2 } from '@/components'
import logoSm from '@/assets/images/logo-sm.png'
import logoDark from '@/assets/images/logo-dark.png'
import signature from '@/assets/images/signature.png'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Invoice = () => {
	const printPage = () => {
		window.print()
	}
	return (
		<>
			<PageBreadcrumb2 appName="Apps" title="Invoice" />
			<Row>
				<Col lg="10" className="mx-auto">
					<Card>
						<CardBody className="invoice-head">
							<Row>
								<Col md="4" className="align-self-center">
									<Image
										src={logoSm}
										alt="logo-small"
										className="logo-sm me-1"
										height={24}
									/>
									<Image
										src={logoDark}
										alt="logo-large"
										className="logo-lg brand-dark"
										height={20}
									/>
									<p className="mt-2 mb-0 text-muted">
										If account is not paid within 7 days the credits details
										supplied as confirmation.
									</p>
								</Col>
								<Col md="8">
									<ul className="list-inline mb-0 contact-detail float-end">
										<li className="list-inline-item">
											<div className="ps-3">
												<i className="mdi mdi-web" />
												<p className="text-muted mb-0">
													www.abcdefghijklmno.com
												</p>
												<p className="text-muted mb-0">www.qrstuvwxyz.com</p>
											</div>
										</li>
										<li className="list-inline-item">
											<div className="ps-3">
												<i className="mdi mdi-phone" />
												<p className="text-muted mb-0">+123 123456789</p>
												<p className="text-muted mb-0">+123 123456789</p>
											</div>
										</li>
										<li className="list-inline-item">
											<div className="ps-3">
												<i className="mdi mdi-map-marker" />
												<p className="text-muted mb-0">2821 Kensington Road,</p>
												<p className="text-muted mb-0">
													Avondale Estates, GA 30002 USA.
												</p>
											</div>
										</li>
									</ul>
								</Col>
							</Row>
						</CardBody>
						<CardBody>
							<Row>
								<Col md={3}>
									<div>
										<h6 className="mb-0">
											<b>Order Date :</b> 11/05/2020
										</h6>
										<h6>
											<b>Order ID :</b> # 23654789
										</h6>
									</div>
								</Col>
								<Col md={3}>
									<div className="float-left">
										<address className="font-13">
											<strong className="font-14">Billed To :</strong>
											<br />
											Joe Smith
											<br />
											795 Folsom Ave
											<br />
											San Francisco, CA 94107
											<br />
											<abbr title="Phone">P:</abbr> (123) 456-7890
										</address>
									</div>
								</Col>
								<Col md={3}>
									<div>
										<address className="font-13">
											<strong className="font-14">Shipped To:</strong>
											<br />
											Joe Smith
											<br />
											795 Folsom Ave
											<br />
											San Francisco, CA 94107
											<br />
											<abbr title="Phone">P:</abbr> (123) 456-7890
										</address>
									</div>
								</Col>
							</Row>
							<Row>
								<Col lg="12">
									<div className="table-responsive project-invoice">
										<table className="table table-bordered mb-0">
											<thead className="thead-light">
												<tr>
													<th>Project Breakdown</th>
													<th>Hours</th>
													<th>Rate</th>
													<th>Subtotal</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<h5 className="mt-0 mb-1 font-14">
															Project Design
														</h5>
														<p className="mb-0 text-muted">
															It is a long established fact that a reader will
															be distracted.
														</p>
													</td>
													<td>60</td>
													<td>$50</td>
													<td>$3000.00</td>
												</tr>
												<tr>
													<td>
														<h5 className="mt-0 mb-1 font-14">Development</h5>
														<p className="mb-0 text-muted">
															It is a long established fact that a reader will
															be distracted.
														</p>
													</td>
													<td>100</td>
													<td>$50</td>
													<td>$5000.00</td>
												</tr>
												<tr>
													<td>
														<h5 className="mt-0 mb-1 font-14">
															Testing &amp; Bug Fixing
														</h5>
														<p className="mb-0 text-muted">
															It is a long established fact that a reader will
															be distracted.
														</p>
													</td>
													<td>10</td>
													<td>$20</td>
													<td>$200.00</td>
												</tr>
												<tr>
													<td colSpan={2} className="border-0" />
													<td className="border-0 font-14 text-dark">
														<b>Sub Total</b>
													</td>
													<td className="border-0 font-14 text-dark">
														<b>$82,000.00</b>
													</td>
												</tr>
												<tr>
													<th colSpan={2} className="border-0" />
													<td className="border-0 font-14 text-dark">
														<b>Tax Rate</b>
													</td>
													<td className="border-0 font-14 text-dark">
														<b>$0.00%</b>
													</td>
												</tr>
												<tr className="bg-black text-white">
													<th colSpan={2} className="border-0" />
													<td className="border-0 font-14">
														<b>Total</b>
													</td>
													<td className="border-0 font-14">
														<b>$82,000.00</b>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</Col>
							</Row>
							<Row>
								<Col lg="6">
									<h5 className="mt-4">Terms And Condition :</h5>
									<ul className="ps-3">
										<li>
											<small className="font-12">
												All accounts are to be paid within 7 days from receipt
												of invoice.{' '}
											</small>
										</li>
										<li>
											<small className="font-12">
												To be paid by cheque or credit card or direct payment
												online.
											</small>
										</li>
										<li>
											<small className="font-12">
												{' '}
												If account is not paid within 7 days the credits details
												supplied as confirmation of work undertaken will be
												charged the agreed quoted fee noted above.
											</small>
										</li>
									</ul>
								</Col>
								<Col lg="6" className="align-self-center">
									<div
										className="float-none float-md-end"
										style={{ width: '30%' }}
									>
										<small>Account Manager</small>
										<img
											src={signature}
											alt="signature"
											className="mt-2 mb-1"
											height={20}
										/>
										<p className="border-top">Signature</p>
									</div>
								</Col>
							</Row>
							<hr />
							<Row className="d-flex justify-content-center">
								<Col lg="12" xl="4" className="ms-auto align-self-center">
									<div className="text-center">
										<small className="font-12">
											Thank you very much for doing business with us.
										</small>
									</div>
								</Col>
								<Col lg="12" xl="4">
									<div className="float-end d-print-none mt-2 mt-md-0">
										<Link
											to="#"
											onClick={printPage}
											className="btn btn-soft-info btn-sm"
										>
											Print
										</Link>
										<Link to="#" className="btn btn-soft-primary btn-sm">
											Submit
										</Link>
										<Link to="#" className="btn btn-soft-danger btn-sm">
											Cancel
										</Link>
									</div>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Invoice
