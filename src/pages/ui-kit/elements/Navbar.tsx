import { ComponentContainerCard, PageBreadcrumb } from '@/components'
import {
	Button,
	Col,
	Collapse,
	Dropdown,
	DropdownDivider,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useToggle } from '@/hooks'

import logoSm from '@/assets/images/logo-sm.png'
import logoDark from '@/assets/images/logo-dark.png'

const NavBarDropdown = () => {
	return (
		<Dropdown>
			<DropdownToggle
				as="a"
				className="nav-link"
				href="#"
				id="navbarDropdown"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Dropdown <i className="la la-angle-down" />
			</DropdownToggle>
			<DropdownMenu aria-labelledby="navbarDropdown">
				<li>
					<DropdownItem href="#">Action</DropdownItem>
				</li>
				<li>
					<DropdownItem href="#">Another action</DropdownItem>
				</li>
				<li>
					<DropdownDivider />
				</li>
				<li>
					<DropdownItem href="#">Something else here</DropdownItem>
				</li>
			</DropdownMenu>
		</Dropdown>
	)
}

const BasicNavbar = () => {
	const { isOpen, toggle } = useToggle()
	return (
		<ComponentContainerCard
			title="Basic Navbar"
			description="Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin."
		>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="#">
						Navbar
					</Link>
					<button
						onClick={toggle}
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<Collapse in={isOpen} className="navbar-collapse">
						<div>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link className="nav-link active" aria-current="page" to="#">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="#">
										Link
									</Link>
								</li>
								<li className="nav-item">
									<NavBarDropdown />
								</li>
								<li className="nav-item">
									<Link
										className="nav-link disabled"
										to="#"
										tabIndex={-1}
										aria-disabled="true"
									>
										Disabled
									</Link>
								</li>
							</ul>
							<form className="d-flex">
								<div className="input-group">
									<input
										type="text"
										className="form-control"
										placeholder="Search"
										aria-label="Recipient's username"
										aria-describedby="basic-addon2"
									/>
									<Button
										variant="soft-secondary"
										type="button"
										id="button-addon2"
									>
										<i className="fas fa-search" />
									</Button>
								</div>
							</form>
						</div>
					</Collapse>
				</div>
			</nav>
		</ComponentContainerCard>
	)
}

const NavbarWithBrandImage = () => {
	const { isOpen, toggle } = useToggle()
	return (
		<ComponentContainerCard
			title="Navbar with Brand Image"
			description="Adding images to the .navbar-brand will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate."
		>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="#">
						<img src={logoSm} height={26} className="mr-1" />
					</Link>
					<button
						onClick={toggle}
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent2"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<Collapse in={isOpen} className="navbar-collapse">
						<div>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link className="nav-link active" aria-current="page" to="#">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="#">
										Link
									</Link>
								</li>
								<li className="nav-item">
									<NavBarDropdown />
								</li>
								<li className="nav-item">
									<Link
										className="nav-link disabled"
										to="#"
										tabIndex={-1}
										aria-disabled="true"
									>
										Disabled
									</Link>
								</li>
							</ul>
							<form className="d-flex">
								<div className="input-group">
									<input
										type="text"
										className="form-control"
										placeholder="Search"
										aria-label="Recipient's username"
										aria-describedby="basic-addon2"
									/>
									<Button
										variant="soft-primary"
										type="button"
										id="button-addon2"
									>
										<i className="fas fa-search" />
									</Button>
								</div>
							</form>
						</div>
					</Collapse>
				</div>
			</nav>

			<nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
				<div className="container-fluid">
					<Link className="navbar-brand" to="#">
						<img src={logoSm} height={26} className="mr-1" />
						<img src={logoDark} height={16} />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent3"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent3"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="#">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Link
								</Link>
							</li>
							<li className="nav-item">
								<NavBarDropdown />
							</li>
							<li className="nav-item">
								<Link
									className="nav-link disabled"
									to="#"
									tabIndex={-1}
									aria-disabled="true"
								>
									Disabled
								</Link>
							</li>
						</ul>
						<form className="d-flex">
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									placeholder="Search"
									aria-label="Recipient's username"
									aria-describedby="basic-addon2"
								/>
								<Button variant="soft-primary" type="button" id="button-addon2">
									<i className="fas fa-search" />
								</Button>
							</div>
						</form>
					</div>
				</div>
			</nav>
		</ComponentContainerCard>
	)
}

const NavbarThemeColors = () => {
	const navbarColors = ['primary', 'secondary', 'dark']
	return (
		<ComponentContainerCard
			title="Theme colors"
			description="Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities."
		>
			{navbarColors.map((color, idx) => {
				return (
					<nav
						key={idx}
						className={`navbar navbar-expand-lg navbar-dark bg-${color} mb-2`}
					>
						<div className="container-fluid">
							<Link className="navbar-brand" to="#">
								Navbar
							</Link>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent4"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon" />
							</button>
							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent4"
							>
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<Link
											className="nav-link active"
											aria-current="page"
											to="#"
										>
											Home
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="#">
											Link
										</Link>
									</li>
									<li className="nav-item">
										<NavBarDropdown />
									</li>
									<li className="nav-item">
										<Link
											className="nav-link disabled"
											to="#"
											tabIndex={-1}
											aria-disabled="true"
										>
											Disabled
										</Link>
									</li>
								</ul>
								<form className="d-flex">
									<div className="input-group">
										<input
											type="text"
											className="form-control"
											placeholder="Search"
											aria-label="Recipient's username"
											aria-describedby="basic-addon2"
										/>
										<Button
											variant={color === 'secondary' ? 'primary' : 'secondary'}
											type="button"
											id="button-addon2"
										>
											<i className="fas fa-search" />
										</Button>
									</div>
								</form>
							</div>
						</div>
					</nav>
				)
			})}
		</ComponentContainerCard>
	)
}

const Navbar = () => {
	return (
		<>
			<PageBreadcrumb subName="UI Kit" title="Navbar" />
			<Row>
				<Col xs={12}>
					<BasicNavbar />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<NavbarWithBrandImage />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<NavbarThemeColors />
				</Col>
			</Row>
		</>
	)
}

export default Navbar
