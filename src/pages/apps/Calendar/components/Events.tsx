import { ListGroup, ListGroupItem } from 'react-bootstrap'

import project1 from '@/assets/images/widgets/project1.jpg'
import project3 from '@/assets/images/widgets/project3.jpg'
import project4 from '@/assets/images/widgets/project4.jpg'

import user5 from '@/assets/images/users/user-5.jpg'
import user4 from '@/assets/images/users/user-4.jpg'

const Events = () => {
	return (
		<ListGroup>
			<ListGroupItem className="align-items-center d-flex">
				<div className="media">
					<img
						src={project1}
						className="me-3 thumb-sm align-self-center rounded-circle"
						alt="..."
					/>
					<div className="media-body align-self-center">
						<h6 className="mt-0 mb-1">Meeting with UI/UX Designers</h6>
						<p className="text-muted mb-0">Today 07:30 AM</p>
					</div>
				</div>
			</ListGroupItem>
			<ListGroupItem className="align-items-center ">
				<div className="media">
					<img
						src={user5}
						className="me-3 thumb-sm align-self-center rounded-circle"
						alt="..."
					/>
					<div className="media-body align-self-center">
						<h6 className="mt-0 mb-1">Lunch with my friend</h6>
						<p className="text-muted mb-0">Today 12:30 PM</p>
					</div>
				</div>
			</ListGroupItem>
			<ListGroupItem className="align-items-center">
				<div className="media">
					<img
						src={project3}
						className="me-3 thumb-sm align-self-center rounded-circle"
						alt="..."
					/>
					<div className="media-body align-self-center">
						<h6 className="mt-0 mb-1">Call for payment Project ID : #254136</h6>
						<p className="text-muted mb-0">Tomorrow 10:30 AM</p>
					</div>
				</div>
			</ListGroupItem>
			<ListGroupItem className="align-items-center ">
				<div className="media">
					<img
						src={user4}
						className="me-3 thumb-sm align-self-center rounded-circle"
						alt="..."
					/>
					<div className="media-body align-self-center">
						<h6 className="mt-0 mb-1">Picnic with my Family</h6>
						<p className="text-muted mb-0">01 June 2019 - 09:30 AM</p>
					</div>
				</div>
			</ListGroupItem>
			<ListGroupItem className="align-items-center">
				<div className="media">
					<img
						src={project4}
						className="me-3 thumb-sm align-self-center rounded-circle"
						alt="..."
					/>
					<div className="media-body align-self-center">
						<h6 className="mt-0 mb-1">Meeting with Developers</h6>
						<p className="text-muted mb-0">04 June 2019 - 07:30 AM</p>
					</div>
				</div>
			</ListGroupItem>
		</ListGroup>
	)
}

export default Events
