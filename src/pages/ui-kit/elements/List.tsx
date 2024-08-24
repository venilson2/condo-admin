import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BasicExample = () => {
	return (
		<ComponentContainerCard
			title="Basic Example"
			description="List groups are a flexible and powerful component for displaying a series of content."
		>
			<Row>
				<Col lg={6}>
					<ListGroup>
						<ListGroupItem>
							<i className="la la-check text-success me-2" />
							Cras justo odio
						</ListGroupItem>
						<ListGroupItem>
							<i className="la la-check text-success me-2" />
							Dapibus ac facilisis in
						</ListGroupItem>
						<ListGroupItem>
							<i className="la la-check text-success me-2" />
							Morbi leo risus
						</ListGroupItem>
						<ListGroupItem className=" disabled">
							<i className="la la-check text-success me-2" />
							Disabled
						</ListGroupItem>
					</ListGroup>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const ActiveItems = () => {
	return (
		<ComponentContainerCard
			title="Active items"
			description="Add .active to a .list-group-item to indicate the current active selection."
		>
			<Row>
				<Col lg={6}>
					<ListGroup>
						<ListGroupItem>
							<i className="la la-arrow-right text-secondary me-2" />
							Cras justo odio
						</ListGroupItem>
						<ListGroupItem className="active">
							<i className="la la-arrow-right text-secondary me-2" />
							Dapibus ac facilisis in
						</ListGroupItem>
						<ListGroupItem>
							<i className="la la-arrow-right text-secondary me-2" />
							Morbi leo risus
						</ListGroupItem>
						<ListGroupItem>
							<i className="la la-arrow-right text-secondary me-2" />
							Porta ac consectetur ac
						</ListGroupItem>
					</ListGroup>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const LinksAndButtons = () => {
	return (
		<ComponentContainerCard
			title="Links And Buttons"
			description="Uses <a> or <button>s to create actionable list group itemswith hover and active states by adding .list-group-item-action."
		>
			<Row>
				<Col lg={6}>
					<ListGroup>
						<button
							type="button"
							className="list-group-item list-group-item-action active"
						>
							<i className="la la-hand-o-right text-white me-2" />
							Button Active
						</button>
						<button
							type="button"
							className="list-group-item list-group-item-action"
						>
							<i className="la la-hand-o-right text-primary me-2" />
							Button
						</button>
						<Link to="#" className="list-group-item list-group-item-action">
							<i className="la la-hand-o-right text-primary me-2" />
							Link
						</Link>
						<Link
							to="#"
							className="list-group-item list-group-item-action disabled"
							tabIndex={-1}
							aria-disabled="true"
						>
							<i className="la la-hand-o-right text-primary me-2" />
							Link disabled
						</Link>
					</ListGroup>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const Horizontal = () => {
	return (
		<ComponentContainerCard
			title="Horizontal"
			description="Add .list-group-horizontal to remove some borders and rounded corners."
		>
			<Row>
				<Col lg={8}>
					<ListGroup className="list-group-horizontal-md">
						<ListGroupItem>
							<i className="la la-angle-double-right text-info me-2" />
							Cras justo
						</ListGroupItem>
						<ListGroupItem>
							<i className="la la-angle-double-right text-info me-2" />
							Dapibus
						</ListGroupItem>
						<ListGroupItem>
							<i className="la la-angle-double-right text-info me-2" />
							Morbi leo
						</ListGroupItem>
					</ListGroup>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const Flush = () => {
	return (
		<ComponentContainerCard
			title="Flush"
			description="Add .list-group-flush to remove some borders and rounded corners."
		>
			<Row>
				<Col lg={6}>
					<ListGroup className="list-group-flush">
						<ListGroupItem>
							<i className="la la-angle-double-right text-info me-2" />
							Cras justo odio
						</ListGroupItem>
						<ListGroupItem>
							<i className="la la-angle-double-right text-info me-2" />
							Dapibus ac facilisis in
						</ListGroupItem>
						<ListGroupItem>
							<i className="la la-angle-double-right text-info me-2" />
							Morbi leo risus
						</ListGroupItem>
						<ListGroupItem>
							<i className="la la-angle-double-right text-info me-2" />
							Vestibulum at eros
						</ListGroupItem>
					</ListGroup>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const ListWithBadges = () => {
	return (
		<ComponentContainerCard
			title="With badges"
			description="Add badges to any list group item to show unread counts, activity."
		>
			<Row>
				<Col lg={8}>
					<ul className="list-group">
						<ListGroupItem className="d-flex justify-content-between align-items-center">
							<div>
								<i className="la la-check text-muted font-16 me-2" />
								Cras justo odio
							</div>
							<span className="badge badge-outline-primary badge-pill">4</span>
						</ListGroupItem>
						<ListGroupItem className="d-flex justify-content-between align-items-center">
							<div>
								<i className="la la-bell text-muted font-18 me-2" />
								New Notifications
							</div>
							<span className="badge badge-outline-secondary badge-pill">
								New
							</span>
						</ListGroupItem>
						<ListGroupItem className="d-flex justify-content-between align-items-center">
							<div>
								<i className="la la-money text-muted font-16 me-2" />
								Payment Successfull
							</div>
							<span className="badge badge-outline-success badge-pill">
								Successfully
							</span>
						</ListGroupItem>
						<ListGroupItem className="d-flex justify-content-between align-items-center">
							<div>
								<i className="la la-warning text-muted font-16 me-2" />
								Payment pending
							</div>
							<span className="badge badge-outline-warning">Pending</span>
						</ListGroupItem>
						<ListGroupItem className="d-flex justify-content-between align-items-center">
							<div>
								<i className="la la-comments text-muted font-16 me-2" />
								Good Morning!
							</div>
							<span className="badge badge-outline-info badge-pill">1</span>
						</ListGroupItem>
					</ul>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}
const ContextualClasses = () => {
	return (
		<ComponentContainerCard
			title="Contextual classes"
			description="Use contextual classes to style list items with a stateful background and color."
		>
			<Row>
				<Col lg={6}>
					<ListGroup>
						<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
						<ListGroupItem variant="primary">
							A simple primary list group item
						</ListGroupItem>
						<ListGroupItem variant="secondary">
							A simple secondary list group item
						</ListGroupItem>
						<ListGroupItem variant="success">
							A simple success list group item
						</ListGroupItem>
						<ListGroupItem variant="danger">
							A simple danger list group item
						</ListGroupItem>
						<ListGroupItem variant="warning">
							A simple warning list group item
						</ListGroupItem>
						<ListGroupItem variant="info">
							A simple info list group item
						</ListGroupItem>
						<ListGroupItem variant="light">
							A simple light list group item
						</ListGroupItem>
						<ListGroupItem variant="dark">
							A simple dark list group item
						</ListGroupItem>
					</ListGroup>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const List = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Lists" />
			<Row>
				<Col lg={6}>
					<BasicExample />
				</Col>
				<Col xl={6}>
					<ActiveItems />
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<LinksAndButtons />
				</Col>
				<Col xl={6}>
					<Flush />
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Horizontal />
					<ListWithBadges />
				</Col>
				<Col xl={6}>
					<ContextualClasses />
				</Col>
			</Row>
		</>
	)
}

export default List
