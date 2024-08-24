import {
	Button,
	Card,
	CardBody,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Image,
	ProgressBar,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { type TeamType } from '../data'

import avatar8 from '@/assets/images/users/user-8.jpg'
import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar6 from '@/assets/images/users/user-6.jpg'

const teamMembers = [avatar8, avatar5, avatar4, avatar6]
const TeamCard = ({
	image,
	leaderName,
	name,
	projectLogo,
	variant,
}: TeamType) => {
	return (
		<Card className="team-card">
			<CardBody>
				<div className="float-end">
					<Dropdown className="d-inline-block">
						<DropdownToggle as="a" id="dLabel1" role="button">
							<i className="las la-ellipsis-v font-24 text-muted" />
						</DropdownToggle>
						<DropdownMenu align="end">
							<DropdownItem href="#">Open Project</DropdownItem>
							<DropdownItem href="#">Edit Card</DropdownItem>
							<DropdownItem href="#">Delete</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>

				<div className="media align-items-center">
					<Image src={image} alt="" className="rounded-circle user-img" />
					<div className="online-circle">
						<i className="fa fa-circle text-success"></i>
					</div>
					<div className="media-body ms-3 align-self-center">
						<h5 className="team-leader m-0">{leaderName}</h5>
						<p className="text-muted font-12 mb-0">Team Leader</p>
					</div>
				</div>
				<h5 className="m-0 mt-4 font-14 font-weight-semibold">{name}</h5>
				<p className="text-muted mb-0">
					Contrary to popular belief, Lorem Ipsum is not simply
				</p>
				<div className="mt-4 d-flex justify-content-between">
					<div className="img-group">
						{teamMembers.map((image, idx) => (
							<Link
								className={clsx('user-avatar', idx == 0 ? '' : ' ms-n3')}
								to="#"
								key={idx}
							>
								<Image
									src={image}
									alt="user"
									className="rounded-circle thumb-xxs"
								/>
							</Link>
						))}
						<Link to="" className="avatar-box thumb-xxs align-self-center">
							<span className="avatar-title bg-soft-info rounded-circle font-13 font-weight-normal">
								+6
							</span>
						</Link>
					</div>
					<div className="align-self-center">
						<Button className="btn btn-xs btn-light btn-round">
							View Details <i className="mdi mdi-arrow-right" />
						</Button>
					</div>
				</div>
				<hr className="hr-dashed my-4" />
				<div className="media align-items-center">
					<Image src={projectLogo} className="rounded-circle thumb-sm" />
					<div className="media-body ms-3 align-self-center">
						<h6 className="team-leader m-0">Banking</h6>
						<div className="d-flex justify-content-between">
							<span>
								<Link to="#">
									<i className="mdi mdi-format-list-bulleted text-success" />
									<span className="text-muted">50/100</span>
								</Link>
							</span>
							<span className="text-muted">55% Complete</span>
						</div>

						<ProgressBar
							className="mt-0"
							style={{ height: 3 }}
							now={55}
							variant={variant}
						/>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export default TeamCard
