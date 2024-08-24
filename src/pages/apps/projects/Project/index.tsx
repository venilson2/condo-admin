import { PageBreadcrumb2 } from '@/components'
import { Button, Col, Row } from 'react-bootstrap'
import { allProject } from './data'
import ProjectCard from './components/ProjectCard'

const Project = () => {
	return (
		<>
			<PageBreadcrumb2 title="Projects" appName="Projects" />
			<Row>
				<Col lg={6}>
					<ul className="list-inline">
						<li className="list-inline-item">
							<h5 className="mt-0">
								Here the list of all continu projects.{' '}
								<span className="badge badge-pink">6</span>
							</h5>
						</li>
					</ul>
				</Col>
				<Col lg={6} className="text-end">
					<div className="text-end">
						<ul className="list-inline">
							<li className="list-inline-item">
								<div className="input-group">
									<input
										type="text"
										id="example-input1-group2"
										name="example-input1-group2"
										className="form-control form-control-sm"
										placeholder="Search"
									/>
									<Button type="button" variant="soft-primary" size="sm">
										<i className="fas fa-search" />
									</Button>
								</div>
							</li>
							<li className="list-inline-item">
								<Button variant="soft-primary" size="sm" type="button">
									<i className="fas fa-filter" />
								</Button>
							</li>
							<li className="list-inline-item">
								<Button type="button" variant="soft-primary" size="sm">
									Add New Project
								</Button>
							</li>
						</ul>
					</div>
				</Col>
			</Row>
			<Row>
				{allProject.map((project, idx) => {
					return (
						<Col lg={4} key={idx}>
							<ProjectCard
								budget={project.budget}
								name={project.name}
								logo={project.logo}
								variant={project.variant}
								clientName={project.clientName}
								usedBudget={project.usedBudget}
							/>
						</Col>
					)
				})}
			</Row>
		</>
	)
}

export default Project
