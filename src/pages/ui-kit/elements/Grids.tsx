import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GridOptions = () => {
	return (
		<ComponentContainerCard
			title="Grid options"
			description="See how aspects of the Bootstrap grid system work across multiple devices with a handy table."
		>
			<div className="table-responsive">
				<table className="table table-bordered table-striped table-centered">
					<thead>
						<tr>
							<th scope="col" />
							<th scope="col">
								xs
								<br />
								<span className="fw-normal">&lt;576px</span>
							</th>
							<th scope="col">
								sm
								<br />
								<span className="fw-normal">≥576px</span>
							</th>
							<th scope="col">
								md
								<br />
								<span className="fw-normal">≥768px</span>
							</th>
							<th scope="col">
								lg
								<br />
								<span className="fw-normal">≥992px</span>
							</th>
							<th scope="col">
								xl
								<br />
								<span className="fw-normal">≥1200px</span>
							</th>
							<th scope="col">
								xxl
								<br />
								<span className="fw-normal">≥1400px</span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="text-nowrap" scope="row">
								Container <code className="fw-normal">max-width</code>
							</th>
							<td>None (auto)</td>
							<td>540px</td>
							<td>720px</td>
							<td>960px</td>
							<td>1140px</td>
							<td>1320px</td>
						</tr>
						<tr>
							<th className="text-nowrap" scope="row">
								Class prefix
							</th>
							<td>
								<code>.col-</code>
							</td>
							<td>
								<code>.col-sm-</code>
							</td>
							<td>
								<code>.col-md-</code>
							</td>
							<td>
								<code>.col-lg-</code>
							</td>
							<td>
								<code>.col-xl-</code>
							</td>
							<td>
								<code>.col-xxl-</code>
							</td>
						</tr>
						<tr>
							<th className="text-nowrap" scope="row">
								# of columns
							</th>
							<td colSpan={6}>12</td>
						</tr>
						<tr>
							<th className="text-nowrap" scope="row">
								Gutter width
							</th>
							<td colSpan={6}>1.5rem (.75rem on left and right)</td>
						</tr>
						<tr>
							<th className="text-nowrap" scope="row">
								Custom gutters
							</th>
							<td colSpan={6}>
								<Link to="#">Yes</Link>
							</td>
						</tr>
						<tr>
							<th className="text-nowrap" scope="row">
								Nestable
							</th>
							<td colSpan={6}>
								<Link to="#">Yes</Link>
							</td>
						</tr>
						<tr>
							<th className="text-nowrap" scope="row">
								Column ordering
							</th>
							<td colSpan={6}>
								<Link to="#">Yes</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}

const SmGrid = () => {
	return (
		<ComponentContainerCard
			title="Sm Grid-Example"
			description="Columns collapse at 576px"
		>
			<Row className="text-center">
				<Col sm={3}>
					<span className="border py-2 bg-light d-block mb-2 mb-lg-0">
						.col-sm-3
					</span>
				</Col>
				<Col sm={3}>
					<span className="border py-2 bg-light d-block mb-2 mb-lg-0">
						.col-sm-3
					</span>
				</Col>
				<Col sm={3}>
					<span className="border py-2 bg-light d-block mb-2 mb-lg-0">
						.col-sm-3
					</span>
				</Col>
				<Col sm={3}>
					<span className="border py-2 bg-light d-block">.col-sm-3</span>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const MdGrid = () => {
	return (
		<ComponentContainerCard
			title="Md Grid-Example"
			description="Columns collapse at 768px"
		>
			<Row className="text-center">
				<Col md={3}>
					<span className="border py-2 bg-light d-block mb-2 mb-lg-0">
						.col-md-3
					</span>
				</Col>
				<Col md={6}>
					<span className="border py-2 bg-light d-block mb-2 mb-lg-0">
						.col-md-6
					</span>
				</Col>
				<Col md={3}>
					<span className="border py-2 bg-light d-block">.col-md-3</span>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const LgGrid = () => {
	return (
		<ComponentContainerCard
			title="Lg Grid-Example"
			description="Columns collapse at 992px"
		>
			<Row className="text-center">
				<Col lg={6}>
					<span className="border py-2 bg-light d-block mb-2 mb-lg-0">
						.col-lg-6
					</span>
				</Col>
				<Col lg={6}>
					<span className="border py-2 bg-light d-block">.col-lg-6</span>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const XlGrid = () => {
	return (
		<ComponentContainerCard
			title="Xl Grid-Example"
			description="Columns collapse at 1200px"
		>
			<Row className="text-center">
				<Col xl={4}>
					<span className="border py-2 bg-light d-block mb-2 mb-lg-0">
						.col-xl-4
					</span>
				</Col>
				<Col xl={4}>
					<span className="border py-2 bg-light d-block mb-2 mb-lg-0">
						.col-xl-4
					</span>
				</Col>
				<Col xl={4}>
					<span className="border py-2 bg-light d-block">.col-xl-4</span>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const XXlGrid = () => {
	return (
		<ComponentContainerCard
			title="XXl Grid-Example"
			description="Columns collapse at 1400px"
		>
			<Row className="text-center">
				<Col xxl={6}>
					<span className="border py-2 bg-light d-block mb-2 mb-lg-0">
						.col-xxl-6
					</span>
				</Col>
				<Col xxl={6}>
					<span className="border py-2 bg-light d-block">.col-xxl-6</span>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const GridExample = () => {
	return (
		<ComponentContainerCard
			title="Grid-Example"
			description="Using a single set of .col-sm-* classes, you can create a basic grid system that starts out stacked on extra small devices before becoming horizontal on desktop (medium) devices"
		>
			<div className="text-center">
				<Row>
					<Col sm={1}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
					</Col>
					<Col sm={1}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
					</Col>
					<Col sm={1}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
					</Col>
					<Col sm={1}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
					</Col>
					<Col sm={1}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
					</Col>
					<Col sm={1}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
					</Col>
					<Col sm={1}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
					</Col>
					<Col sm={1}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
					</Col>
					<Col sm={1}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
					</Col>
					<Col sm={1}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
					</Col>
					<Col sm={1}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
					</Col>
					<Col sm={1}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
					</Col>
				</Row>
				<Row>
					<Col sm={2}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-2</span>
					</Col>
					<Col sm={2}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-2</span>
					</Col>
					<Col sm={2}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-2</span>
					</Col>
					<Col sm={2}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-2</span>
					</Col>
					<Col sm={2}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-2</span>
					</Col>
					<Col sm={2}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-2</span>
					</Col>
				</Row>
				<Row>
					<Col sm={3}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-3</span>
					</Col>
					<Col sm={3}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-3</span>
					</Col>
					<Col sm={3}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-3</span>
					</Col>
					<Col sm={3}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-3</span>
					</Col>
				</Row>
				<Row>
					<Col sm={4}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-4</span>
					</Col>
					<Col sm={4}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-4</span>
					</Col>
					<Col sm={4}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-4</span>
					</Col>
				</Row>
				<Row>
					<Col sm={6}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-6</span>
					</Col>
					<Col sm={6}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-6</span>
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<span className="border py-2 bg-light d-block">.col-sm-12</span>
					</Col>
				</Row>
			</div>
		</ComponentContainerCard>
	)
}

const OffsetGrid = () => {
	return (
		<ComponentContainerCard
			title="Offset (Max-Auto)"
			description="Move columns to the right using .offset-md-* classes. These classes increase the left margin of a column by * columns. For example, .offset-md-4 moves .col-md-4 over four columns. With the move to flexbox in v4, you can use margin utilities like .mr-auto to force sibling columns away from one another."
		>
			<div className="text-center">
				<Row>
					<Col sm={8} className="offset-sm-2">
						<span className="border py-2 bg-light d-block mb-2">
							.col-sm-8 offset-sm-2
						</span>
					</Col>
				</Row>
				<Row>
					<Col sm={3} className="ml-auto">
						<span className="border py-2 bg-light d-block mb-2">
							.col-sm-3 ml-auto
						</span>
					</Col>
					<Col sm={3} className="ml-auto">
						<span className="border py-2 bg-light d-block mb-2">
							.col-sm-3 ml-auto
						</span>
					</Col>
				</Row>
				<Row>
					<Col sm={3}>
						<span className="border py-2 bg-light d-block mb-2">.col-sm-3</span>
					</Col>
					<Col sm={3} className="offset-sm-3">
						<span className="border py-2 bg-light d-block mb-2">
							.col-sm-3 offset-sm-3
						</span>
					</Col>
				</Row>
			</div>
		</ComponentContainerCard>
	)
}

const Grids = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Grids" />
			<Row>
				<Col xs={12}>
					<GridOptions />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<SmGrid />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<MdGrid />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<LgGrid />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<XlGrid />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<XXlGrid />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<GridExample />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<OffsetGrid />
				</Col>
			</Row>
		</>
	)
}

export default Grids
