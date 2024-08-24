import { Card, CardBody, Col, FormControl, Image, Row } from 'react-bootstrap'

import product4 from '@/assets/images/products/04.png'
import { Link } from 'react-router-dom'

const ProductDetailCard = () => {
	return (
		<Card>
			<CardBody>
				<Row>
					<Col lg={6} className="align-self-center">
						<Image
							src={product4}
							alt=""
							className=" mx-auto  d-block"
							height="300"
						/>
					</Col>
					<Col lg={6} className="align-self-center">
						<div className="single-pro-detail">
							<p className="mb-1">Dastone</p>
							<div className="custom-border mb-3"></div>
							<h3 className="pro-title">Dastone Mask - 101</h3>
							<p className="text-muted mb-0">Morden and good look model 2020</p>
							<ul className="list-inline mb-2 product-review">
								<li className="list-inline-item">
									<i className="mdi mdi-star text-warning"></i>
								</li>
								{Array.from(new Array(Math.floor(4))).map((idx) => {
									return (
										<li key={idx} className="list-inline-item me-1">
											{' '}
											<i className="mdi mdi-star text-warning font-18" />
										</li>
									)
								})}
							</ul>
							<h2 className="pro-price">
								$49.00{' '}
								<span>
									<del>$100.00</del>
								</span>
								<span className="text-danger fw-bold ms-2">50% Off</span>
							</h2>
							<h6 className="text-muted font-13">Features :</h6>
							<ul className="list-unstyled pro-features border-0">
								<li>
									It is a long established fact that a reader will be
									distracted.
								</li>
								<li>Contrary to popular belief, Lorem Ipsum is not text. </li>
							</ul>
							<h6 className="text-muted font-13 d-inline-block align-middle me-2">
								Color :
							</h6>
							<div className="radio2 radio-info2 form-check-inline ms-2">
								<input
									type="radio"
									id="inlineRadio1"
									defaultValue="option1"
									name="radioInline"
									defaultChecked
								/>
								<label htmlFor="inlineRadio1"></label>
							</div>
							<div className="radio2 radio-dark2 form-check-inline">
								<input
									type="radio"
									id="inlineRadio2"
									defaultValue="option2"
									name="radioInline"
								/>
								<label htmlFor="inlineRadio2"></label>
							</div>
							<div className="quantity mt-3 ">
								<FormControl
									className="form-control-sm"
									type="number"
									min="0"
									defaultValue="0"
									id="example-number-input"
								/>
								<Link
									to="#"
									className="btn btn-primary btn-sm text-white px-4 d-inline-block"
								>
									<i className="mdi mdi-cart me-2"></i>Add to Cart
								</Link>
							</div>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default ProductDetailCard
