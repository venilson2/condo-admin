import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import Dropdown from './Dropdown'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ContainerType = {
	title: string
	bodyClassName?: string
	label?: string
	menuItems?: string[]
	children: ReactNode
	description?: string
	viewAll?: boolean
}

const ComponentContainerCard = ({
	title,
	bodyClassName,
	label,
	menuItems,
	children,
	viewAll,
	description,
}: ContainerType) => {
	return (
		<Card>
			<CardHeader>
				<Row className="align-items-center">
					<Col>
						<h4 className="card-title">{title}</h4>
						{description && <p className="text-muted mb-0">{description}</p>}
					</Col>
					{menuItems && (
						<Col xs="auto">
							<Dropdown label={label} menuItems={menuItems} />
						</Col>
					)}
					{viewAll && (
						<Col xs="auto">
							<Link to="#" className="text-primary">
								View All
							</Link>
						</Col>
					)}
				</Row>
			</CardHeader>
			<CardBody className={bodyClassName ?? ''}>{children}</CardBody>
		</Card>
	)
}

export default ComponentContainerCard
