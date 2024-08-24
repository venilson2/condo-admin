import { PageBreadcrumb2 } from '@/components'
import { Col, Image, Row } from 'react-bootstrap'
import { allProducts } from './data'
import { Link } from 'react-router-dom'

const ProductList = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Ecommerce" title="Product List" />
			<Row>
				<Col lg={12}>
					<div className="table-responsive">
						<table className="table table-bordered">
							<thead>
								<tr>
									<th>Product Name</th>
									<th>Category</th>
									<th>Pics</th>
									<th>Price</th>
									<th>Status</th>
									<th>Avai.Color</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{allProducts.map((product, idx) => {
									return (
										<tr key={idx}>
											<td>
												<Image src={product.image} height={40} />
												<p className="d-inline-block align-middle mb-0 ms-1">
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
											<td>{product.category}</td>
											<td>{product.pics}</td>
											<td>${product.price}</td>
											<td>
												<span
													className={`badge badge-soft-${product.status == 'Sold' ? 'pink' : 'purple'}`}
												>
													{product.status}
												</span>
											</td>
											<td>
												<ul className="list-inline mb-0">
													{product.availableColor.map((color, idx) => {
														return (
															<li
																key={idx}
																className="list-inline-item align-middle"
															>
																<i className={`fas fa-circle text-${color}`} />
															</li>
														)
													})}
												</ul>
											</td>
											<td>
												<Link to="#" className="me-1">
													<i className="las la-pen text-secondary font-16" />
												</Link>
												<Link to="#">
													<i className="las la-trash-alt text-secondary font-16" />
												</Link>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					<Row>
						<Col>
							<button className="btn btn-outline-light btn-sm px-4 ">
								+ Add New
							</button>
						</Col>
						<Col xs="auto">
							<nav aria-label="...">
								<ul className="pagination pagination-sm mb-0">
									<li className="page-item disabled">
										<Link className="page-link" to="#" tabIndex={-1}>
											Previous
										</Link>
									</li>
									<li className="page-item active">
										<Link className="page-link" to="#">
											1
										</Link>
									</li>
									<li className="page-item">
										<Link className="page-link" to="#">
											2 <span className="sr-only">(current)</span>
										</Link>
									</li>
									<li className="page-item">
										<Link className="page-link" to="#">
											3
										</Link>
									</li>
									<li className="page-item">
										<Link className="page-link" to="#">
											Next
										</Link>
									</li>
								</ul>
							</nav>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	)
}

export default ProductList
