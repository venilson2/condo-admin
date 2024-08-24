import {
	Card,
	CardBody,
	Nav,
	NavItem,
	NavLink,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'
import { projectStatus } from '../data'
import ProjectStatusCard from './ProjectStatusCard'

const ProjectStatus = () => {
	return (
		<Card>
			<TabContainer defaultActiveKey="2">
				<CardBody>
					<Nav className="nav nav-tabs" role="tablist">
						<NavItem>
							<NavLink eventKey="1" className="fw-semibold pt-0" role="tab">
								Project1
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink eventKey="2" className="fw-semibold pt-0" role="tab">
								Project2
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink eventKey="3" className="fw-semibold pt-0" role="tab">
								Project3
							</NavLink>
						</NavItem>
					</Nav>
				</CardBody>
				<CardBody className="pt-0">
					<TabContent>
						{projectStatus.map((project, idx) => (
							<TabPane eventKey={idx + 1} key={idx} role="tabpanel">
								<ProjectStatusCard project={project} />
							</TabPane>
						))}
					</TabContent>
				</CardBody>
			</TabContainer>
		</Card>
	)
}

export default ProjectStatus
