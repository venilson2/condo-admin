import { ComponentContainerCard } from '@/components'
import { Link } from 'react-router-dom'
import { PopularProductsData } from '../data'

const PopulerProducts = () => {
	return (
		<ComponentContainerCard title="Most Populer Products">
			<div className="table-responsive">
				<table className="table mb-0">
					<thead className="table-light">
						<tr>
							<th className="border-top-0">Product</th>
							<th className="border-top-0">Price</th>
							<th className="border-top-0">Sell</th>
							<th className="border-top-0">Status</th>
							<th className="border-top-0">Action</th>
						</tr>
					</thead>
					<tbody>
						{PopularProductsData.map((products, idx) => {
							return (
								<tr key={idx}>
									<td>
										<div className="media">
											<img
												src={products.product.productImage}
												height="30"
												className="me-3 align-self-center rounded"
												alt="..."
											/>
											<div className="media-body align-self-center">
												<h6 className="m-0">{products.product.productName}</h6>
												<a href="#" className="font-12 text-primary">
													ID: {products.product.productID}
												</a>
											</div>
										</div>
									</td>
									<td>
										${products.price.discountPrice}{' '}
										<del className="text-muted font-10">
											${products.price.originalPrice}
										</del>
									</td>
									<td>
										{products.sell.sellPrice}{' '}
										<small className="text-muted">
											({products.sell.originalPrice})
										</small>
									</td>
									<td>
										{products.status === 'Stock' ? (
											<span className="badge badge-soft-primary px-2">
												{products.status}
											</span>
										) : (
											<span className="badge badge-soft-warning px-2">
												{products.status}
											</span>
										)}
									</td>
									<td>
										<Link to="#">
											<i className="las la-pen text-secondary font-16"></i>
										</Link>
										<Link to="#">
											<i className="las la-trash-alt text-secondary font-16"></i>
										</Link>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}

export default PopulerProducts
