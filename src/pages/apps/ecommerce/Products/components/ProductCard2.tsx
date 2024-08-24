import { Button, Card, CardBody, Image } from 'react-bootstrap'
import { type ProductType } from '../data'
import { Link } from 'react-router-dom'

const ProductCard2 = ({ product }: { product: ProductType }) => {
	const { category, image, name, offer, price, sellPrice } = product
	return (
		<Card>
			<CardBody>
				<div className="ribbon4 rib4-secondary">
					<span className="ribbon4-band ribbon4-band-secondary text-white text-center">
						{offer}
					</span>
				</div>
				<Image
					src={image}
					alt=""
					className="d-block mx-auto my-4"
					height="150"
				/>
				<div className="row my-4">
					<div className="col">
						<span className="badge badge-light mb-2">{name}</span>
						<Link to="#" className="title-text d-block">
							{category}
						</Link>
					</div>
					<div className="col-auto">
						<h4 className="text-dark mt-0">
							${sellPrice}.00{' '}
							<small className="text-muted font-14">
								<del>${price}.00</del>
							</small>
						</h4>
						<ul className="list-inline mb-0 product-review align-self-center">
							{Array.from(new Array(Math.floor(4))).map((idx) => {
								return (
									<li key={idx} className="list-inline-item me-1">
										<i className="la la-star text-warning font-16" />
									</li>
								)
							})}
							<li className="list-inline-item">
								<i className="la la-star-half-o text-warning font-16"></i>
							</li>
						</ul>
					</div>
				</div>
				<Button variant="soft-primary" className="w-100">
					Add To Cart
				</Button>
			</CardBody>
		</Card>
	)
}

export default ProductCard2
