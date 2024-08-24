import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Image,
	ProgressBar,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { allProjects } from '../data'

const AllProjects = () => {
	return (
		<Card>
			<CardHeader>
				<Row className="align-items-center">
					<Col>
						<h4 className="card-title">All Projects</h4>
					</Col>
					<div className="col-auto">
						<Link to="#" className="text-primary">
							View All
						</Link>
					</div>
				</Row>
			</CardHeader>
			<CardBody>
				<div className="table-responsive">
					<table className="table table-hover mb-0">
						<thead className="thead-light">
							<tr>
								<th>Project Name</th>
								<th>Client Name</th>
								<th>Start Date</th>
								<th>Deadline</th>
								<th>Status</th>
								<th>Progress</th>
							</tr>
						</thead>
						<tbody>
							{allProjects.map((project, idx) => {
								return (
									<tr key={idx}>
										<td>{project.name}</td>
										<td>
											<Image
												src={project.client.image}
												className="thumb-sm rounded me-2"
											/>
											{project.client.name}
										</td>
										<td>{project.startDate}</td>
										<td>{project.deadLine}</td>
										<td>
											<span
												className={clsx(
													'badge badge-md badge-boxed',
													project.status == 'Pending'
														? 'badge-soft-warning'
														: project.status == 'Complete'
															? 'badge-soft-danger'
															: 'badge-soft-success'
												)}
											>
												{project.status}
											</span>
										</td>
										<td>
											<small className="float-end ms-2 pt-1 font-10">
												{project.progress}%
											</small>
											<ProgressBar
												variant={
													project.status == 'Complete'
														? 'danger'
														: project.status == 'Pending'
															? 'warning'
															: 'success'
												}
												now={project.progress}
												className="mt-2"
												style={{ height: 3 }}
											/>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</CardBody>
		</Card>
	)
}

export default AllProjects
