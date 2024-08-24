import { Col, Image, ProgressBar, Row } from 'react-bootstrap'
import { ProjectStatusType } from '../types'

import avatar8 from '@/assets/images/users/user-8.jpg'
import avatar5 from '@/assets/images/users/user-5.jpg'
import avatar4 from '@/assets/images/users/user-4.jpg'
import avatar6 from '@/assets/images/users/user-6.jpg'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { FiHeadphones } from 'react-icons/fi'

const ProjectStatusCard = ({ project }: { project: ProjectStatusType }) => {
	const {
		client,
		day,
		deadline,
		logo,
		progress,
		projectName,
		startDate,
		variant,
	} = project
	return (
		<>
			<Row>
				<Col md={6}>
					<div className="media mb-3">
						<Image src={logo} className="thumb-md rounded-circle" />
						<div className="media-body align-self-center text-truncate ms-3">
							<h4 className="m-0 fw-semibold text-dark font-16">
								{projectName}
							</h4>
							<p className="text-muted  mb-0 font-13">
								<span className="text-dark">Client : </span>
								{client}
							</p>
						</div>
					</div>
				</Col>
				<div className="col-md-6 text-lg-end mb-2 mb-lg-0">
					<h6 className="fw-semibold m-0">
						Start : <span className="text-muted fw-normal"> {startDate}</span>
					</h6>
					<h6 className="fw-semibold mb-0 mt-2">
						Deadline : <span className="text-muted fw-normal"> {deadline}</span>
					</h6>
				</div>
			</Row>
			<div className="holder">
				<ul className="steppedprogress pt-1">
					<li className="complete">
						<span>Planing</span>
					</li>
					<li className={clsx('complete', progress == 15 && 'continuous')}>
						<span>Design</span>
					</li>
					<li>
						<span>Development</span>
					</li>
					<li className={progress == 100 ? 'complete finish' : ''}>
						<span>Testing</span>
					</li>
				</ul>
			</div>
			<div className="task-box">
				<div className="task-priority-icon">
					{progress == 100 ? (
						<i className="fas fa-check text-danger" />
					) : (
						<i className="fas fa-circle text-success" />
					)}{' '}
				</div>
				<div className="d-flex justify-content-between">
					<h6 className="fw-semibold m-0 align-self-center">
						All Hours :{' '}
						<span className="text-muted fw-normal"> 530 / 281:30</span>
					</h6>
					<h6 className="fw-semibold">
						Today : <span className="text-muted fw-normal"> 2:45</span>
						<span className="badge badge-soft-pink fw-semibold ms-2">
							<i className="far fa-fw fa-clock" /> {day} days left
						</span>
					</h6>
				</div>
				<p className="text-muted mb-1">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form.
				</p>
				<p className="text-muted text-end mb-1">{progress}% Complete</p>
				<ProgressBar
					variant={variant}
					now={progress}
					className="progress mb-3"
					style={{ height: 4 }}
				/>
				<div className="d-flex justify-content-between">
					<div className="img-group">
						<Link className="user-avatar" to="#">
							<Image
								src={avatar8}
								alt="user"
								className="thumb-xs rounded-circle"
							/>
						</Link>
						<Link className="user-avatar ms-n3" to="#">
							<Image
								src={avatar5}
								alt="user"
								className="thumb-xs rounded-circle"
							/>
						</Link>
						<Link className="user-avatar ms-n3" to="#">
							<Image
								src={avatar4}
								alt="user"
								className="thumb-xs rounded-circle"
							/>
						</Link>
						<Link className="user-avatar ms-n3" to="#">
							<Image
								src={avatar6}
								alt="user"
								className="thumb-xs rounded-circle"
							/>
						</Link>
						<Link
							to=""
							className="btn btn-soft-primary btn-icon-circle btn-icon-circle-sm"
						>
							<i className="las la-plus" />4
						</Link>
					</div>
					<ul className="list-inline mb-0 align-self-center">
						<li className="list-item d-inline-block me-2">
							<Link to="#">
								<i className="mdi mdi-format-list-bulleted text-success font-15" />
								<span className="text-muted fw-bold">{progress}/100</span>
							</Link>
						</li>
						<li className="list-item d-inline-block">
							<Link to="#">
								<i className="mdi mdi-comment-outline text-primary font-15" />
								<span className="text-muted fw-bold">3</span>
							</Link>
						</li>
						<li className="list-item d-inline-block">
							<Link className="ms-2" to="#">
								<i className="mdi mdi-pencil-outline text-muted font-18" />
							</Link>
						</li>
						<li className="list-item d-inline-block">
							<Link to="#">
								<i className="mdi mdi-trash-can-outline text-muted font-18" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<hr className="hr-dashed" />
			<Row className="mt-3">
				<div className="col-md">
					<div className="d-flex mb-2 mb-lg-0">
						<FiHeadphones className="align-self-center text-secondary icon-sm" />
						<div className="d-block align-self-center ms-2">
							<h6 className="m-0">Last Meeting</h6>
							<p className="mb-0 text-muted">28 Oct 2021 / 10:30AM - 12:30PM</p>
						</div>
					</div>
				</div>
				<div className="col-md-auto">
					<div className="d-flex">
						<FiHeadphones className="align-self-center text-secondary icon-sm" />
						<div className="d-block align-self-center ms-2">
							<h6 className="m-0">Next Meeting</h6>
							<p className="mb-0 text-muted">06 Nov 2021 / 10:30AM - 12:30PM</p>
						</div>
					</div>
				</div>
			</Row>
		</>
	)
}

export default ProjectStatusCard
