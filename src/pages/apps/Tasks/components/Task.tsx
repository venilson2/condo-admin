import { Card, CardBody, Col, Row, ProgressBar, Image } from 'react-bootstrap'
import { TaskData } from '../data'
import { Link } from 'react-router-dom'
const Task = () => {
	return (
		<Row>
			{TaskData.map((tasks, idx) => {
				return (
					<Col lg={6} key={idx}>
						<Card>
							<CardBody>
								<div className="task-box">
									<div className="task-priority-icon">
										<i className={`fas fa-circle text-${tasks.iconColor}`}></i>
									</div>
									<p className="text-muted float-end">
										<span className="text-muted">{tasks.timeCount}</span> /
										<span className="text-muted">{tasks.timeRequired}</span>
										<span className="mx-1">·</span>
										<span>
											<i className="far fa-fw fa-clock"></i> {tasks.date}
										</span>
									</p>
									<h5 className="mt-0">{tasks.title}</h5>
									<p className="text-muted mb-1">{tasks.description}</p>
									<p className="text-muted text-end mb-1">
										{tasks.progress}% Complete
									</p>
									<ProgressBar
										now={tasks.progress}
										className="mb-4"
										style={{ height: '4px' }}
										variant={tasks.progressColor}
									/>
									<Row className="d-flex justify-content-between">
										<Col className="img-group">
											{tasks.images.map((taskImage, idx) => (
												<Link
													className="user-avatar user-avatar-group"
													key={idx}
													to="#"
												>
													<Image
														src={taskImage}
														alt="user"
														className="rounded-circle thumb-xs"
													/>
												</Link>
											))}
										</Col>
										<Col
											xs={6}
											md={3}
											className="list-inline mb-0 align-self-center"
										>
											<ul className="list-inline mb-0 align-self-center">
												<li className="list-item d-inline-block me-2">
													<Link className="" to="#">
														<i className="mdi mdi-format-list-bulleted text-success font-15"></i>
														<span className="text-muted fw-bold">
															{tasks.taskComplete}/{tasks.requiredTasks}
														</span>
													</Link>
												</li>
												<li className="list-item d-inline-block">
													<Link className="" to="#">
														<i className="mdi mdi-comment-outline text-primary font-15"></i>
														<span className="text-muted fw-bold">
															{tasks.messages}
														</span>
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
										</Col>
									</Row>
								</div>
							</CardBody>
						</Card>
					</Col>
				)
			})}
		</Row>
	)
}

export default Task
