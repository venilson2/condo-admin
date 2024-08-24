import { Col, Row } from 'react-bootstrap'
import { blogs } from './data'
import BlogCard from './components/BlogCard'
import { PageBreadcrumb2 } from '@/components'

const Blogs = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Pages" title="Blogs" />
			<Row>
				{blogs.map((blog, idx) => (
					<Col lg={4} key={idx}>
						<BlogCard blog={blog} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default Blogs
