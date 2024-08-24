import {
	DropdownToggle,
	Dropdown as BsDropdown,
	DropdownMenu,
	DropdownItem,
} from 'react-bootstrap'

const Dropdown = ({
	label,
	menuItems,
}: {
	label?: string
	menuItems: string[]
}) => {
	return (
		<BsDropdown>
			<DropdownToggle
				as="a"
				className="btn btn-sm btn-outline-light"
				data-bs-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				{label ? (
					<>
						{label}
						<i className="las la-angle-down ms-1" />
					</>
				) : (
					<i className="mdi mdi-dots-horizontal text-muted" />
				)}
			</DropdownToggle>
			<DropdownMenu align="end">
				{menuItems.map((item, idx) => (
					<DropdownItem key={idx} href="#">
						{item}
					</DropdownItem>
				))}
			</DropdownMenu>
		</BsDropdown>
	)
}

export default Dropdown
