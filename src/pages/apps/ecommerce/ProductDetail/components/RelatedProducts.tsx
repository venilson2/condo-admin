import { Col, Row } from 'react-bootstrap'
import { relatedProducts } from '../data'
import ProductCard from '../../Products/components/ProductCard'

const RelatedProducts = () => {
	return (
		<>
			<Row>
				{relatedProducts.map((product, idx) => (
					<Col md={3} key={idx}>
						<ProductCard product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default RelatedProducts
