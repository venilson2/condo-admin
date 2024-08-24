import {
	Button,
	Dropdown,
	DropdownMenu,
	DropdownToggle,
	Form,
	FormControl,
} from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
	return (
		<Dropdown as="li" className="dropdown hide-phone">
			<DropdownToggle
				as="a"
				className="nav-link arrow-none waves-light waves-effect"
			>
				<FiSearch className="topbar-icon" />
			</DropdownToggle>

			<DropdownMenu className="dropdown-menu-end dropdown-lg p-0">
				<div className="app-search-topbar">
					<Form action="#" method="get">
						<FormControl
							type="search"
							name="search"
							className="top-search mb-0"
							placeholder="Type text..."
						/>
						<Button type="submit">
							<FiSearch className="ti-search" />
						</Button>
					</Form>
				</div>
			</DropdownMenu>
		</Dropdown>
	)
}

export default SearchBar
