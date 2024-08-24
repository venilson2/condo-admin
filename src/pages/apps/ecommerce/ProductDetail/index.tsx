import { PageBreadcrumb } from '@/components'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { features } from './data'
import ProductDetailCard from './components/ProductDetailCard'
import RelatedProducts from './components/RelatedProducts'

const ProductDetail = () => {
	return (
		<>
			<PageBreadcrumb subName="Ecommerce" title="Product Detail" />

			<Row>
				<Col xs={12}>
					<ProductDetailCard />
				</Col>
			</Row>

			<Row>
				{features.map((feature, idx) => {
					return (
						<Col lg={3} key={idx}>
							<Card>
								<CardBody>
									<i
										className={`mdi mdi-${feature.icon} text-${feature.variant} font-40`}
									/>
									<h4 className="header-title">{feature.title}</h4>
									<p className="text-muted mb-0">
										It is a long established fact that a reader will be
										distracted. Contrary to popular belief.
									</p>
								</CardBody>
							</Card>
						</Col>
					)
				})}
			</Row>
			<Row>
				<Col md={12}>
					<RelatedProducts />
				</Col>
			</Row>
		</>
	)
}

export default ProductDetail
