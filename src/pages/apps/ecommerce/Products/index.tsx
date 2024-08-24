import { PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { allProducts } from './data'
import ProductCard2 from './components/ProductCard2'
import ProductCard from './components/ProductCard'

const Products = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Ecommerce" title="Products" />
			<Row>
				{allProducts.slice(0, 4).map((product, idx) => (
					<Col md={3} key={idx}>
						<ProductCard product={product} />
					</Col>
				))}
			</Row>
			<Row>
				{allProducts.slice(4, 8).map((product, idx) => {
					return (
						<Col md={3} key={idx}>
							<ProductCard2 product={product} />
						</Col>
					)
				})}
			</Row>
		</>
	)
}

export default Products
