import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import {
	Button,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiMoreHorizontal } from 'react-icons/fi'

import user1 from '@/assets/images/users/user-1.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user10 from '@/assets/images/users/user-10.jpg'

const DefaultAvatar = () => {
	return (
		<ComponentContainerCard title="Avatar" description="Single user example">
			<Row className="d-flex justify-content-center">
				<Col>
					<div className="media">
						<Link to="#">
							<img src={user8} alt="user" className="rounded-circle thumb-sm" />
						</Link>
						<div className="media-body align-self-center ms-2">
							<p className="font-14 font-weight-semibold mb-0">Charles Smith</p>
							<p className="mb-0 font-12 text-muted">Charles@example.com</p>
						</div>
					</div>
				</Col>
				<div className="col-auto align-self-center">
					<div className="button-items">
						<Button
							variant="outline-primary"
							type="button"
							className="btn-icon-circle btn-icon-circle-sm"
						>
							<i className="fab fa-facebook-f" />
						</Button>
						<Button
							variant="outline-info"
							type="button"
							className="btn-icon-circle btn-icon-circle-sm"
						>
							<i className="fab fa-twitter" />
						</Button>
						<Button
							variant="outline-pink"
							type="button"
							className="btn-icon-circle btn-icon-circle-sm"
						>
							<i className="fab fa-dribbble" />
						</Button>
					</div>
				</div>
			</Row>
		</ComponentContainerCard>
	)
}

const GroupAvatar = () => {
	return (
		<ComponentContainerCard
			title="Group Avatar"
			description="Group user example"
		>
			<Row className="d-flex justify-content-center">
				<Col>
					<div className="img-group">
						<Link className="user-avatar" to="">
							<img src={user8} alt="user" className="thumb-sm rounded-circle" />
						</Link>
						<Link className="user-avatar ms-n3" to="">
							<img src={user5} alt="user" className="thumb-sm rounded-circle" />
						</Link>
						<Link className="user-avatar ms-n3" to="">
							<img src={user4} alt="user" className="thumb-sm rounded-circle" />
						</Link>
						<Link className="user-avatar ms-n3" to="">
							<img src={user6} alt="user" className="thumb-sm rounded-circle" />
						</Link>
						<Link to="" className="avatar-box thumb-sm align-self-center">
							<span className="avatar-title bg-soft-info rounded-circle font-weight-normal">
								<i className="las la-plus" />
							</span>
						</Link>
					</div>
				</Col>
				<Col xs="auto" className="col-auto align-self-center">
					<Button variant="outline-light" size="sm">
						Message
					</Button>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const AvatarWithBadge = () => {
	return (
		<ComponentContainerCard
			title="Avatar With Badge"
			description="Single user with badge example"
		>
			<div className="row d-flex justify-content-center">
				<div className="col">
					<div className="img-group">
						<Link className="user-avatar me-1" to="">
							<img
								src={user10}
								alt="user"
								className="rounded-circle thumb-sm"
							/>
							<span className="avatar-badge online" />
						</Link>
						<Link className="user-avatar me-1" to="">
							<img src={user4} alt="user" className="rounded-circle thumb-sm" />
							<span className="avatar-badge offline" />
						</Link>
						<Link className="user-avatar me-1" to="">
							<img src={user1} alt="user" className="rounded-circle thumb-sm" />
							<span className="avatar-badge online" />
						</Link>
					</div>
				</div>
				<Col xs="auto" className="align-self-center">
					<Dropdown>
						<DropdownToggle
							as="a"
							className="btn btn-sm btn-outline-light dropdown-bs-toggle"
						>
							<FiMoreHorizontal className="align-self-center text-muted icon-xs" />
						</DropdownToggle>
						<DropdownMenu className="dropdown-menu-end">
							<DropdownItem href="#">New Group</DropdownItem>
							<DropdownItem href="#">Settings</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</Col>
			</div>
		</ComponentContainerCard>
	)
}

const AvatarSizes = () => {
	return (
		<ComponentContainerCard
			title="Avatar Size"
			description="Avatar size rounded-circle example"
		>
			<Link className="user-avatar me-2" to="">
				<img src={user10} alt="user" className="thumb-xl rounded-circle" />
			</Link>
			<Link className="user-avatar me-2" to="">
				<img src={user10} alt="user" className="thumb-lg rounded-circle" />
			</Link>
			<Link className="user-avatar me-2" to="">
				<img src={user10} alt="user" className="thumb-md rounded-circle" />
			</Link>
			<Link className="user-avatar me-2" to="">
				<img src={user10} alt="user" className="thumb-sm rounded-circle" />
			</Link>
			<Link className="user-avatar me-2" to="">
				<img src={user10} alt="user" className="thumb-xs rounded-circle" />
			</Link>
		</ComponentContainerCard>
	)
}

const AvatarSizeSquare = () => {
	return (
		<ComponentContainerCard
			title="Avatar Size"
			description="Avatar size square example"
		>
			<Link className="user-avatar me-2" to="">
				<img src={user5} alt="user" className="thumb-xl rounded" />
			</Link>
			<Link className="user-avatar me-2" to="">
				<img src={user5} alt="user" className="thumb-lg rounded" />
			</Link>
			<Link className="user-avatar me-2" to="">
				<img src={user5} alt="user" className="thumb-md rounded" />
			</Link>
			<Link className="user-avatar me-2" to="">
				<img src={user5} alt="user" className="thumb-sm rounded" />
			</Link>
			<Link className="user-avatar me-2" to="">
				<img src={user5} alt="user" className="thumb-xs rounded" />
			</Link>
		</ComponentContainerCard>
	)
}

const TextAvatar = () => {
	return (
		<ComponentContainerCard
			title="Text Avatar"
			description="Round Shape avatar text in soft color example"
		>
			<div className="d-flex align-items-center">
				<span className="thumb-xl justify-content-center d-flex align-items-center bg-soft-success rounded-circle me-2">
					MT
				</span>
				<span className="thumb-lg justify-content-center d-flex align-items-center bg-soft-pink rounded-circle me-2">
					MT
				</span>
				<span className="thumb-md justify-content-center d-flex align-items-center bg-soft-purple rounded-circle me-2">
					MT
				</span>
				<span className="thumb-sm justify-content-center d-flex align-items-center bg-soft-warning rounded-circle me-2">
					MT
				</span>
				<span className="thumb-xs justify-content-center d-flex align-items-center bg-soft-info rounded-circle me-2">
					MT
				</span>
			</div>
		</ComponentContainerCard>
	)
}

const IconAvatar = () => {
	return (
		<ComponentContainerCard
			title="Icon Avatar"
			description="Round Shape avatar icon in theme color example"
		>
			<div className="d-flex align-items-center">
				<span className="thumb-xl justify-content-center d-flex align-items-center bg-primary rounded-circle me-2">
					<i className="far fa-grin-alt text-white" />
				</span>
				<span className="thumb-lg justify-content-center d-flex align-items-center bg-pink rounded-circle me-2">
					<i className="far fa-user text-white" />
				</span>
				<span className="thumb-md justify-content-center d-flex align-items-center bg-purple rounded-circle me-2">
					<i className="fab fa-mailchimp text-white" />
				</span>
				<span className="thumb-sm justify-content-center d-flex align-items-center bg-warning rounded-circle me-2">
					<i className="fas fa-user text-white" />
				</span>
				<span className="thumb-xs justify-content-center d-flex align-items-center bg-info rounded-circle me-2">
					<i className="fas fa-smile text-white" />
				</span>
			</div>
		</ComponentContainerCard>
	)
}

const SquareIconAvatar = () => {
	return (
		<ComponentContainerCard
			title="Icon Avatar"
			description="Round Shape avatar icon in theme color example"
		>
			<div className="d-flex align-items-center">
				<span className="thumb-xl justify-content-center d-flex align-items-center bg-primary rounded-circle me-2">
					<i className="far fa-grin-alt text-white" />
				</span>
				<span className="thumb-lg justify-content-center d-flex align-items-center bg-pink rounded-circle me-2">
					<i className="far fa-user text-white" />
				</span>
				<span className="thumb-md justify-content-center d-flex align-items-center bg-purple rounded-circle me-2">
					<i className="fab fa-mailchimp text-white" />
				</span>
				<span className="thumb-sm justify-content-center d-flex align-items-center bg-warning rounded-circle me-2">
					<i className="fas fa-user text-white" />
				</span>
				<span className="thumb-xs justify-content-center d-flex align-items-center bg-info rounded-circle me-2">
					<i className="fas fa-smile text-white" />
				</span>
			</div>
		</ComponentContainerCard>
	)
}

const Avatars = () => {
	return (
		<>
			<PageBreadcrumb2 title="Avatar" appName="Ui Kit" />
			<Row>
				<Col lg={4}>
					<DefaultAvatar />
				</Col>
				<Col lg={4}>
					<GroupAvatar />
				</Col>
				<Col lg={4}>
					<AvatarWithBadge />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<AvatarSizes />
				</Col>
				<Col lg={6}>
					<AvatarSizeSquare />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<TextAvatar />
				</Col>
				<Col lg={6}>
					<TextAvatar />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<IconAvatar />
				</Col>
				<Col lg={6}>
					<SquareIconAvatar />
				</Col>
			</Row>
		</>
	)
}

export default Avatars
