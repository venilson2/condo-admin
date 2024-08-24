import { PageBreadcrumb } from '@/components'
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from 'react-bootstrap'

import smallProject1 from '@/assets/images/widgets/project1.jpg'
import smallProject2 from '@/assets/images/widgets/project2.jpg'
import smallProject3 from '@/assets/images/widgets/project3.jpg'
import smallProject4 from '@/assets/images/widgets/project4.jpg'

import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import { Link } from 'react-router-dom'

const BasicExample = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Basic example</CardTitle>
					<p className="text-muted mb-0">
						For basic styling—light padding and only horizontal dividers—add the
						base class <code>.table</code> to any
						<code>&lt;table&gt;</code>.
					</p>
				</CardHeader>
				<CardBody>
					<div className="table-responsive">
						<table className="table mb-0 table-centered">
							<thead>
								<tr>
									<th>Compny</th>
									<th>Bill</th>
									<th>Average Bill</th>
									<th>Paid Bill</th>
									<th className="text-end">Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<img
											src={smallProject1}
											alt="project-1"
											className="rounded-circle thumb-xs me-1"
										/>
										Micromin
									</td>
									<td>4</td>
									<td>$250</td>
									<td>$800</td>
									<td className="text-end">
										<Dropdown className="d-inline-block">
											<DropdownToggle variant="link" id="dropdown-basic">
												<i className="las la-ellipsis-v font-20 text-muted" />
											</DropdownToggle>

											<DropdownMenu>
												<DropdownItem href="#">Creat Project</DropdownItem>
												<DropdownItem href="#">Open Project</DropdownItem>
												<DropdownItem href="#">Tasks Details</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</td>
								</tr>
								<tr>
									<td>
										<img
											src={smallProject2}
											alt="project-2"
											className="rounded-circle thumb-xs me-1"
										/>
										ZZ Diamond
									</td>
									<td>2</td>
									<td>$180</td>
									<td>$400</td>
									<td className="text-end">
										<Dropdown className="d-inline-block">
											<DropdownToggle variant="link" id="dropdown-basic">
												<i className="las la-ellipsis-v font-20 text-muted" />
											</DropdownToggle>

											<DropdownMenu>
												<DropdownItem href="#">Creat Project</DropdownItem>
												<DropdownItem href="#">Open Project</DropdownItem>
												<DropdownItem href="#">Tasks Details</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</td>
								</tr>
								<tr>
									<td>
										<img
											src={smallProject3}
											alt="project-3"
											className="rounded-circle thumb-xs me-1"
										/>
										Dairy Sweet
									</td>
									<td>6</td>
									<td>$210</td>
									<td>$500</td>
									<td className="text-end">
										<Dropdown className="d-inline-block">
											<DropdownToggle variant="link" id="dropdown-basic">
												<i className="las la-ellipsis-v font-20 text-muted" />
											</DropdownToggle>

											<DropdownMenu>
												<DropdownItem href="#">Creat Project</DropdownItem>
												<DropdownItem href="#">Open Project</DropdownItem>
												<DropdownItem href="#">Tasks Details</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</td>
								</tr>
								<tr>
									<td>
										<img
											src={smallProject4}
											alt="project-4"
											className="rounded-circle thumb-xs me-1"
										/>
										Corner Tea
									</td>
									<td>3</td>
									<td>$80</td>
									<td>$350</td>
									<td className="text-end">
										<Dropdown className="d-inline-block">
											<DropdownToggle variant="link" id="dropdown-basic">
												<i className="las la-ellipsis-v font-20 text-muted" />
											</DropdownToggle>

											<DropdownMenu>
												<DropdownItem href="#">Creat Project</DropdownItem>
												<DropdownItem href="#">Open Project</DropdownItem>
												<DropdownItem href="#">Tasks Details</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

const BorderedTable = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Bordered table</CardTitle>
					<p className="text-muted mb-0">
						Add <code>.table-bordered</code> for borders on all sides of the
						table and cells.
					</p>
				</CardHeader>
				<CardBody>
					<div className="table-responsive">
						<table className="table table-bordered mb-0 table-centered">
							<thead>
								<tr>
									<th>Transaction ID</th>
									<th>Date</th>
									<th>Price</th>
									<th>Order Status</th>
									<th className="text-end">Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>#124781</td>
									<td>25/11/2018</td>
									<td>$321</td>
									<td>
										<span className="badge badge-soft-success">Approved</span>
									</td>
									<td className="text-end">
										<Dropdown className="d-inline-block">
											<DropdownToggle variant="link" id="dropdown-basic">
												<i className="las la-ellipsis-v font-20 text-muted" />
											</DropdownToggle>

											<DropdownMenu>
												<DropdownItem href="#">Creat Project</DropdownItem>
												<DropdownItem href="#">Open Project</DropdownItem>
												<DropdownItem href="#">Tasks Details</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</td>
								</tr>
								<tr>
									<td>#542136</td>
									<td>19/11/2018</td>
									<td>$227</td>
									<td>
										<span className="badge badge-soft-success">Approved</span>
									</td>
									<td className="text-end">
										<Dropdown className="d-inline-block">
											<DropdownToggle variant="link" id="dropdown-basic">
												<i className="las la-ellipsis-v font-20 text-muted" />
											</DropdownToggle>

											<DropdownMenu>
												<DropdownItem href="#">Creat Project</DropdownItem>
												<DropdownItem href="#">Open Project</DropdownItem>
												<DropdownItem href="#">Tasks Details</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</td>
								</tr>
								<tr>
									<td>#234578</td>
									<td>11/10/2018</td>
									<td>$442</td>
									<td>
										<span className="badge badge-soft-danger">Rejected</span>
									</td>
									<td className="text-end">
										<Dropdown className="d-inline-block">
											<DropdownToggle variant="link" id="dropdown-basic">
												<i className="las la-ellipsis-v font-20 text-muted" />
											</DropdownToggle>

											<DropdownMenu>
												<DropdownItem href="#">Creat Project</DropdownItem>
												<DropdownItem href="#">Open Project</DropdownItem>
												<DropdownItem href="#">Tasks Details</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</td>
								</tr>
								<tr>
									<td>#951357</td>
									<td>03/12/2018</td>
									<td>$625</td>
									<td>
										<span className="badge badge-soft-success">Approved</span>
									</td>
									<td className="text-end">
										<Dropdown className="d-inline-block">
											<DropdownToggle variant="link" id="dropdown-basic">
												<i className="las la-ellipsis-v font-20 text-muted" />
											</DropdownToggle>

											<DropdownMenu>
												<DropdownItem href="#">Creat Project</DropdownItem>
												<DropdownItem href="#">Open Project</DropdownItem>
												<DropdownItem href="#">Tasks Details</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

const StripedRows = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Striped rows</CardTitle>
					<p className="text-muted mb-0">
						Use <code>.table-striped</code> to add zebra-striping to any table
						row within the <code>&lt;tbody&gt;</code>.
					</p>
				</CardHeader>
				<CardBody>
					<div className="table-responsive">
						<table className="table table-striped mb-0">
							<thead>
								<tr>
									<th>Customer</th>
									<th>Email</th>
									<th>Contact No</th>
									<th className="text-end">Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<img
											src={user3}
											alt="user-3"
											className="rounded-circle thumb-xs me-1"
										/>{' '}
										Aaron Poulin
									</td>
									<td>Aaron@example.com</td>
									<td>+21 21547896</td>
									<td className="text-end">
										<Link to="#">
											<i className="las la-pen text-secondary font-16" />
										</Link>
										<Link to="#">
											<i className="las la-trash-alt text-secondary font-16" />
										</Link>
									</td>
								</tr>
								<tr>
									<td>
										<img
											src={user4}
											alt="user-4"
											className="rounded-circle thumb-xs me-1"
										/>{' '}
										Richard Ali
									</td>
									<td>Richard@example.com</td>
									<td>+41 21547896</td>
									<td className="text-end">
										<Link to="#">
											<i className="las la-pen text-secondary font-16" />
										</Link>
										<Link to="#">
											<i className="las la-trash-alt text-secondary font-16" />
										</Link>
									</td>
								</tr>
								<tr>
									<td>
										<img
											src={user5}
											alt="user-5"
											className="rounded-circle thumb-xs me-1"
										/>{' '}
										Juan Clark
									</td>
									<td>Juan@example.com</td>
									<td>+65 21547896</td>
									<td className="text-end">
										<Link to="#">
											<i className="las la-pen text-secondary font-16" />
										</Link>
										<Link to="#">
											<i className="las la-trash-alt text-secondary font-16" />
										</Link>
									</td>
								</tr>
								<tr>
									<td>
										<img
											src={user6}
											alt="user-6"
											className="rounded-circle thumb-xs me-1"
										/>{' '}
										Albert Hull
									</td>
									<td>Albert@example.com</td>
									<td>+88 21547896</td>
									<td className="text-end">
										<Link to="#">
											<i className="las la-pen text-secondary font-16" />
										</Link>
										<Link to="#">
											<i className="las la-trash-alt text-secondary font-16" />
										</Link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

const TableHeadOptions = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Table head options</CardTitle>
					<p className="text-muted mb-0">
						Use one of two modifier classes to make
						<code>&lt;thead&gt;</code>s appear light or dark gray.
					</p>
				</CardHeader>
				<CardBody>
					<div className="table-responsive">
						<table className="table mb-0">
							<thead className="thead-light">
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Email</th>
									<th>Access</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>XYZ@Example.com</td>
									<td>
										<span className="badge badge-boxed  badge-outline-success">
											Business
										</span>
									</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>XYZ@Example.com</td>
									<td>
										<span className="badge badge-boxed  badge-outline-warning">
											Personal
										</span>
									</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Larry</td>
									<td>XYZ@Example.com</td>
									<td>
										<span className="badge badge-boxed  badge-outline-danger">
											Disabled
										</span>
									</td>
								</tr>
								<tr>
									<th scope="row">4</th>
									<td>Mark</td>
									<td>XYZ@Example.com</td>
									<td>
										<span className="badge badge-boxed  badge-outline-success">
											Business
										</span>
									</td>
								</tr>
								<tr>
									<th scope="row">5</th>
									<td>Jacob</td>
									<td>XYZ@Example.com</td>
									<td>
										<span className="badge badge-boxed  badge-outline-warning">
											Personal
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

const HoverableRows = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Hoverable rows</CardTitle>
					<p className="text-muted mb-0">
						Use <code>.table-striped</code> to add zebra-striping to any table
						row within the <code>&lt;tbody&gt;</code>.
					</p>
				</CardHeader>
				<CardBody>
					<div className="table-responsive">
						<table className="table table-hover mb-0">
							<thead>
								<tr>
									<th>#</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Username</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td colSpan={2}>Larry the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

const DarkTable = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Dark table</CardTitle>
					<p className="text-muted mb-0">Your awesome text goes here.</p>
				</CardHeader>
				<CardBody>
					<div className="table-responsive">
						<table className="table table-dark mb-0">
							<thead>
								<tr>
									<th>#</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Username</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

const ContextualClasses = () => {
	return (
		<Col lg="6">
			<Card>
				<CardHeader>
					<CardTitle>Contextual classes</CardTitle>
					<p className="text-muted mb-0">
						Use contextual classes to color table rows or individual cells.{' '}
					</p>
				</CardHeader>
				<CardBody>
					<div className="table-responsive-sm">
						<table className="table mb-0">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">First Name</th>
									<th scope="col">Last Name</th>
									<th scope="col">Username</th>
								</tr>
							</thead>
							<tbody>
								<tr className="table-primary">
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr className="table-secondary">
									<th scope="row">3</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
								</tr>
								<tr>
									<th scope="row">4</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr className="table-success">
									<th scope="row">5</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">6</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
								</tr>
								<tr className="table-info">
									<th scope="row">7</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">8</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
								</tr>
								<tr className="table-warning">
									<th scope="row">9</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">10</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</div>
				</CardBody>
			</Card>
		</Col>
	)
}

const CaptionsTable = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Captions Table</CardTitle>
				<p className="text-muted mb-0">
					A <code> &lt;caption&gt; </code>
					functions like a heading for a table. It helps users with screen
					readers to find a table and understand what it’s about and decide if
					they want to read it.
				</p>
			</CardHeader>
			<CardBody>
				<div className="table-responsive-sm">
					<table className="table mb-0">
						<caption>List of users</caption>
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">First Name</th>
								<th scope="col">Last Name</th>
								<th scope="col">Username</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Larry</td>
								<td>the Bird</td>
								<td>@twitter</td>
							</tr>
						</tbody>
					</table>
				</div>
			</CardBody>
		</Card>
	)
}

const SmallTable = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Small table</CardTitle>
				<p className="text-muted mb-0">
					Add <code>.table-sm</code> to make tables more compact by cutting cell
					padding in half.
				</p>
			</CardHeader>
			<CardBody>
				<div className="table-responsive-sm">
					<table className="table table-sm mb-0">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">First Name</th>
								<th scope="col">Last Name</th>
								<th scope="col">Username</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td colSpan={2}>Larry the Bird</td>
								<td>@twitter</td>
							</tr>
						</tbody>
					</table>
				</div>
			</CardBody>
		</Card>
	)
}

const BasicTables = () => {
	return (
		<>
			<PageBreadcrumb title="Basic" subName="Tables" />
			<Row>
				<BasicExample />
				<BorderedTable />
			</Row>
			<Row>
				<StripedRows />
				<TableHeadOptions />
			</Row>
			<Row>
				<HoverableRows />
				<DarkTable />
			</Row>
			<Row>
				<ContextualClasses />
				<Col lg="6">
					<CaptionsTable />
					<SmallTable />
				</Col>
			</Row>
		</>
	)
}

export default BasicTables
