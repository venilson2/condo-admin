import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { Col, Pagination, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DefaultExample = () => {
	return (
		<ComponentContainerCard
			title="Default Example"
			description="Pagination links indicate a series of related content exists across multiple pages."
		>
			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li className="page-item">
						<Link className="page-link" to="#">
							Previous
						</Link>
					</li>
					<li className="page-item">
						<Link className="page-link" to="#">
							1
						</Link>
					</li>
					<li className="page-item">
						<Link className="page-link" to="#">
							2
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
			<nav aria-label="Page navigation example">
				<Pagination>
					<Pagination.First />
					<Pagination.Item>1</Pagination.Item>
					<Pagination.Item>2</Pagination.Item>
					<Pagination.Item>3</Pagination.Item>
					<Pagination.Last />
				</Pagination>
			</nav>
		</ComponentContainerCard>
	)
}

const DisabledAndActivePagination = () => {
	return (
		<ComponentContainerCard
			title="Disabled And Active States"
			description="Pagination links are customizable for different circumstances. Use .disabled for links that appear un-clickable and .active to indicate the current page."
		>
			<nav aria-label="...">
				<ul className="pagination">
					<li className="page-item disabled">
						<Link className="page-link" to="#" tabIndex={-1}>
							Previous
						</Link>
					</li>
					<li className="page-item">
						<Link className="page-link" to="#">
							1
						</Link>
					</li>
					<li className="page-item active">
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
			<nav aria-label="...">
				<ul className="pagination">
					<li className="page-item disabled">
						<span className="page-link">Previous</span>
					</li>
					<li className="page-item">
						<Link className="page-link" to="#">
							1
						</Link>
					</li>
					<li className="page-item active">
						<span className="page-link">
							2<span className="sr-only">(current)</span>
						</span>
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
		</ComponentContainerCard>
	)
}

const SizingExample = () => {
	return (
		<ComponentContainerCard
			title="Sizing Example"
			description="Fancy larger or smaller pagination? Add .pagination-lg or .pagination-sm for additional sizes."
		>
			<nav aria-label="...">
				<Pagination size="lg">
					<Pagination.Item active>1</Pagination.Item>
					<Pagination.Item>2</Pagination.Item>
					<Pagination.Item>3</Pagination.Item>
					<Pagination.Item>4</Pagination.Item>
					<Pagination.Item>5</Pagination.Item>
				</Pagination>
			</nav>
			<nav aria-label="...">
				<Pagination size="sm">
					<Pagination.Item active>1</Pagination.Item>
					<Pagination.Item>2</Pagination.Item>
					<Pagination.Item>3</Pagination.Item>
					<Pagination.Item>4</Pagination.Item>
					<Pagination.Item>5</Pagination.Item>
				</Pagination>
			</nav>
		</ComponentContainerCard>
	)
}

const AlignmentExample = () => {
	return (
		<ComponentContainerCard
			title="Alignment Example"
			description="Change the alignment of pagination components with flexbox utilities."
		>
			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li className="page-item">
						<Link className="page-link" to="#">
							Previous
						</Link>
					</li>
					<li className="page-item">
						<Link className="page-link" to="#">
							1
						</Link>
					</li>
					<li className="page-item">
						<Link className="page-link" to="#">
							2
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
			<nav aria-label="Page navigation example">
				<ul className="pagination justify-content-center">
					<li className="page-item disabled">
						<Link className="page-link" to="#" tabIndex={-1}>
							Previous
						</Link>
					</li>
					<li className="page-item">
						<Link className="page-link" to="#">
							1
						</Link>
					</li>
					<li className="page-item">
						<Link className="page-link" to="#">
							2
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
			<nav aria-label="Page navigation example">
				<ul className="pagination justify-content-end">
					<li className="page-item disabled">
						<Link className="page-link" to="#" tabIndex={-1}>
							Previous
						</Link>
					</li>
					<li className="page-item">
						<Link className="page-link" to="#">
							1
						</Link>
					</li>
					<li className="page-item">
						<Link className="page-link" to="#">
							2
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
		</ComponentContainerCard>
	)
}

const Paginations = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Pagination" />

			<Row>
				<Col lg={6}>
					<DefaultExample />
				</Col>

				<Col lg={6}>
					<DisabledAndActivePagination />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<SizingExample />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<AlignmentExample />
				</Col>
			</Row>
		</>
	)
}

export default Paginations
