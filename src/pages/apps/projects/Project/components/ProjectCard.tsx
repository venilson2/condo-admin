import { Card, CardBody, Image, ProgressBar } from 'react-bootstrap'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { type ProjectType } from '../data'

import avatar8 from '@/assets/images/users/user-8.jpg'
import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar6 from '@/assets/images/users/user-6.jpg'

const projectMembers = [avatar8, avatar5, avatar4, avatar6]

const ProjectCard = ({
	budget,
	logo,
	name,
	variant,
	clientName,
	usedBudget,
}: ProjectType) => {
	return (
		<Card>
			<CardBody>
				<div className="media mb-3">
					<Image src={logo} alt="" className="thumb-md rounded-circle" />
					<div className="media-body align-self-center text-truncate ms-3">
						<h5 className="m-0 fw-semibold text-dark font-15">{name}</h5>
						<p className="text-muted  mb-0 font-13">
							<span className="text-dark">Client : </span>
							{clientName}
						</p>
					</div>
				</div>
				<hr className="hr-dashed" />
				<div className="d-flex justify-content-between mb-3">
					<h6 className="fw-semibold m-0">
						Start : <span className="text-muted fw-normal"> 15 Nov 2020</span>
					</h6>
					<h6 className="fw-semibold m-0">
						Deadline :{' '}
						<span className="text-muted fw-normal"> 28 Fab 2021</span>
					</h6>
				</div>
				<div className="row">
					<div className="col">
						<div>
							<h5 className="font-16 m-0 fw-bold">${budget}</h5>
							<p className="mb-0 fw-semibold">Total Budget</p>
						</div>
					</div>
					<div className="col-auto align-self-center">
						<h5 className="font-14 m-0 fw-bold">
							${usedBudget}{' '}
							<span className="font-12 text-muted fw-normal">Used Budget</span>
						</h5>
					</div>
				</div>

				<div>
					<p className="text-muted mt-2 mb-1">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form.
					</p>
					<div className="d-flex justify-content-between">
						<h6 className="fw-semibold">
							All Hours :{' '}
							<span className="text-muted fw-normal"> 530 / 281:30</span>
						</h6>
						<h6 className="fw-semibold">
							Today : <span className="text-muted fw-normal"> 2:45</span>
							<span className={`badge badge-soft-${variant} fw-semibold ms-2`}>
								<i className="far fa-fw fa-clock"></i> 35 days left
							</span>
						</h6>
					</div>
					<p className="text-muted text-end mb-1">15% Complete</p>
					<ProgressBar
						className="mb-4"
						now={15}
						variant="primary"
						style={{ height: 4 }}
					/>
					<div className="d-flex justify-content-between">
						<div className="img-group">
							{projectMembers.map((image, idx) => (
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
						</div>
						<ul className="list-inline mb-0 align-self-center">
							<li className="list-item d-inline-block me-2">
								<Link className="" to="#">
									<i className="mdi mdi-format-list-bulleted text-success font-15"></i>
									<span className="text-muted fw-bold">15/100</span>
								</Link>
							</li>
							<li className="list-item d-inline-block">
								<Link className="" to="#">
									<i className="mdi mdi-comment-outline text-primary font-15"></i>
									<span className="text-muted fw-bold">3</span>
								</Link>
							</li>
							<li className="list-item d-inline-block">
								<Link className="ms-2" to="#">
									<i className="mdi mdi-pencil-outline text-muted font-18"></i>
								</Link>
							</li>
							<li className="list-item d-inline-block">
								<Link className="" to="#">
									<i className="mdi mdi-trash-can-outline text-muted font-18"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export default ProjectCard
