import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Image,
} from 'react-bootstrap'
import { FiBell } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { NotificationType } from '../types'

function timeSince(date: Date) {
	if (typeof date !== 'object') {
		date = new Date(date)
	}

	const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000)
	let intervalType: string

	let interval = Math.floor(seconds / 31536000)
	if (interval >= 1) {
		intervalType = 'year'
	} else {
		interval = Math.floor(seconds / 2592000)
		if (interval >= 1) {
			intervalType = 'month'
		} else {
			interval = Math.floor(seconds / 86400)
			if (interval >= 1) {
				intervalType = 'day'
			} else {
				interval = Math.floor(seconds / 3600)
				if (interval >= 1) {
					intervalType = 'hr'
				} else {
					interval = Math.floor(seconds / 60)
					if (interval >= 1) {
						intervalType = 'min'
					} else {
						interval = seconds
						intervalType = 'second'
					}
				}
			}
		}
	}
	if (interval > 1 || interval === 0) {
		intervalType += 's'
	}
	return interval + ' ' + intervalType + ' ago'
}

const Notifications = ({
	notifications,
}: {
	notifications: NotificationType[]
}) => {
	return (
		<Dropdown as="li" className="notification-list">
			<DropdownToggle
				as="a"
				className="nav-link arrow-none waves-light waves-effect"
			>
				<FiBell className="align-self-center topbar-icon" />
				<span className="badge bg-danger rounded-pill noti-icon-badge">2</span>
			</DropdownToggle>
			<DropdownMenu className="dropdown-menu-end dropdown-lg pt-0">
				<h6 className="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
					Notifications <span className="badge bg-primary rounded-pill">2</span>
				</h6>
				<SimpleBar className="notification-menu">
					{notifications.map((item, idx) => {
						const Icon = item.icon
						return (
							<DropdownItem className="py-3" key={idx}>
								<small className="float-end text-muted ps-2">
									{timeSince(item.createdAt)}
								</small>
								<div className="media">
									<div className="avatar-md bg-soft-primary">
										{item.image && (
											<Image
												src={item.image}
												alt=""
												className="thumb-sm rounded-circle"
											/>
										)}
										{Icon && <Icon className="align-self-center icon-xs" />}
									</div>
									<div className="media-body align-self-center ms-2 text-truncate">
										<h6 className="my-0 fw-normal text-dark">{item.title}</h6>
										<small className="text-muted mb-0">
											{item.description}
										</small>
									</div>
								</div>
							</DropdownItem>
						)
					})}
				</SimpleBar>

				<Link to="#" className="dropdown-item text-center text-primary">
					View all <i className="fi-arrow-right"></i>
				</Link>
			</DropdownMenu>
		</Dropdown>
	)
}

export default Notifications
