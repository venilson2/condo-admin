import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import {
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Nav,
	NavItem,
	NavLink,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BaseNav = () => {
	return (
		<ComponentContainerCard
			title="Base Nav"
			description="Navigation available in Bootstrap share general markup and styles, from the base .nav class to the active and disabled states."
		>
			<Nav className="nav">
				<NavItem>
					<NavLink eventKey="1" className=" active">
						Active
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink eventKey="2">Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink eventKey="3">Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						eventKey="4"
						className=" disabled"
						tabIndex={-1}
						aria-disabled="true"
					>
						Disabled
					</NavLink>
				</NavItem>
			</Nav>
		</ComponentContainerCard>
	)
}

const NavTabs = () => {
	return (
		<ComponentContainerCard
			title="Nav Tabs"
			description="Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface."
		>
			<Nav className="nav nav-tabs">
				<NavItem>
					<NavLink eventKey="1" className=" active">
						Active
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink eventKey="2">Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink eventKey="3">Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						eventKey="4"
						className=" disabled"
						tabIndex={-1}
						aria-disabled="true"
					>
						Disabled
					</NavLink>
				</NavItem>
			</Nav>
		</ComponentContainerCard>
	)
}

const NavJustified = () => {
	return (
		<ComponentContainerCard
			title="Nav Justified"
			description="For equal-width elements, use .nav-justified."
		>
			<nav className="nav nav-pills nav-justified">
				<Link className="nav-item nav-link active" to="#">
					Active
				</Link>
				<Link className="nav-item nav-link" to="#">
					Much longer nav link
				</Link>
				<Link className="nav-item nav-link" to="#">
					Link
				</Link>
				<Link
					className="nav-item nav-link disabled"
					to="#"
					tabIndex={-1}
					aria-disabled="true"
				>
					Disabled
				</Link>
			</nav>
		</ComponentContainerCard>
	)
}

const NavPills = () => {
	return (
		<ComponentContainerCard
			title="Nav Pills"
			description="Takes the basic nav from above and adds the .nav-pills class to generate a tabbed interface."
		>
			<Nav className="nav nav-pills">
				<NavItem>
					<NavLink eventKey="1" className=" active">
						Active
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink eventKey="2">Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink eventKey="3">Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						eventKey="4"
						className=" disabled"
						tabIndex={-1}
						aria-disabled="true"
					>
						Disabled
					</NavLink>
				</NavItem>
			</Nav>
		</ComponentContainerCard>
	)
}

const NavTabsWithDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Nav Tabs With Dropdowns"
			description="Add dropdown menus with a little extra HTML and the dropdowns JavaScript plugin."
		>
			<Nav className="nav nav-tabs" defaultActiveKey="1">
				<NavItem>
					<NavLink eventKey="1">Active</NavLink>
				</NavItem>
				<Dropdown className="nav-item">
					<DropdownToggle
						as="a"
						className="nav-link"
						data-bs-toggle="dropdown"
						href="#"
						role="button"
						aria-expanded="false"
					>
						Dropdown
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="#">Action</DropdownItem>
						<DropdownItem href="#">Another action</DropdownItem>
						<DropdownItem href="#">Something else here</DropdownItem>
						<DropdownItem href="#">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<NavItem>
					<NavLink eventKey="3">Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						eventKey="4"
						className=" disabled"
						tabIndex={-1}
						aria-disabled="true"
					>
						Disabled
					</NavLink>
				</NavItem>
			</Nav>
		</ComponentContainerCard>
	)
}

const NavPillsWithDropdowns = () => {
	return (
		<ComponentContainerCard
			title="Nav Pills With Dropdowns"
			description="Add dropdown menus with a little extra HTML and the dropdowns JavaScript plugin."
		>
			<Nav className="nav nav-pills" defaultActiveKey="1">
				<NavItem>
					<NavLink eventKey="1">Active</NavLink>
				</NavItem>
				<Dropdown className="nav-item">
					<DropdownToggle
						as="a"
						className="nav-link"
						data-bs-toggle="dropdown"
						href="#"
						role="button"
						aria-expanded="false"
					>
						Dropdown
						<i className="mdi mdi-chevron-down" />
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem href="#">Action</DropdownItem>
						<DropdownItem href="#">Another action</DropdownItem>
						<DropdownItem href="#">Something else here</DropdownItem>
						<DropdownItem href="#">Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<NavItem>
					<NavLink eventKey="3">Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						eventKey="4"
						className=" disabled"
						tabIndex={-1}
						aria-disabled="true"
					>
						Disabled
					</NavLink>
				</NavItem>
			</Nav>
		</ComponentContainerCard>
	)
}

const Navs = () => {
	return (
		<>
			<PageBreadcrumb2 appName="UI Kit" title="Navs" />

			<Row>
				<Col lg={6}>
					<BaseNav />
				</Col>
				<Col lg={6}>
					<NavTabs />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<NavJustified />
				</Col>
				<Col lg={6}>
					<NavPills />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<NavTabsWithDropdowns />
				</Col>
				<Col lg={6}>
					<NavPillsWithDropdowns />
				</Col>
			</Row>
		</>
	)
}

export default Navs
