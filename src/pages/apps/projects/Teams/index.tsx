import { PageBreadcrumb } from '@/components'
import { Button, Col, Row } from 'react-bootstrap'
import { allTeams } from './data'
import TeamCard from './components/TeamCard'

const Teams = () => {
	return (
		<>
			<PageBreadcrumb title="Teams" subName="Projects" />
			<Row>
				<Col lg={6}>
					<h6 className="m-0 font-14">Here the list of all available teams.</h6>
				</Col>
				<Col lg={6} className="text-end">
					<Button
						type="button"
						variant="soft-primary"
						size="sm"
						className="mb-3"
					>
						Create Card
					</Button>
				</Col>
			</Row>
			<Row>
				{allTeams.map((team, idx) => {
					return (
						<Col lg={4} key={idx}>
							<TeamCard
								name={team.name}
								image={team.image}
								leaderName={team.leaderName}
								projectLogo={team.projectLogo}
								variant={team.variant}
							/>
						</Col>
					)
				})}
			</Row>
		</>
	)
}

export default Teams
