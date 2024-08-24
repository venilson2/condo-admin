import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import user10 from '@/assets/images/users/user-10.jpg'
import user9 from '@/assets/images/users/user-10.jpg'
import user8 from '@/assets/images/users/user-10.jpg'
import user5 from '@/assets/images/users/user-10.jpg'
import user4 from '@/assets/images/users/user-10.jpg'

const TeamMembers = () => {
	return (
		<Row>
			<Col lg={6}>
				<ul className="list-inline">
					<li className="list-inline-item">
						<h5>🏆 Dastone's available team members.</h5>
					</li>
					<li className="list-inline-item">
						<img src={user10} alt="user" className="rounded-circle thumb-xs" />
					</li>
					<li className="list-inline-item">
						<img src={user9} alt="user" className="rounded-circle thumb-xs" />
					</li>
					<li className="list-inline-item">
						<img src={user8} alt="user" className="rounded-circle thumb-xs" />
					</li>
					<li className="list-inline-item">
						<img src={user5} alt="user" className="rounded-circle thumb-xs" />
					</li>
					<li className="list-inline-item">
						<img src={user4} alt="user" className="rounded-circle thumb-xs" />
					</li>
					<li className="list-inline-item">
						<Link to="/" className="avatar-box thumb-xs align-self-center">
							<span className="avatar-title bg-soft-secondary rounded-circle font-13 fw-normal">
								+4
							</span>
						</Link>
					</li>
				</ul>
			</Col>
			<Col lg={6} className="text-end">
				<div className="text-end">
					<ul className="list-inline">
						<li className="list-inline-item">
							<button type="button" className="btn btn-sm btn-soft-primary">
								Add New Task
							</button>
						</li>
					</ul>
				</div>
			</Col>
		</Row>
	)
}

export default TeamMembers
