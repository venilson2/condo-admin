import { PageBreadcrumb } from '@/components'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import type { IconType } from 'react-icons'
import * as FeatherIcon from 'react-icons/fi'

const FeatherIcons = () => {
	const allFeatherIcons = Object.keys(
		FeatherIcon
	) as (keyof typeof FeatherIcon)[]

	return (
		<>
			<PageBreadcrumb subName="Icons" title="Feather Icons" />
			<Row>
				<Col xs={12}>
					<Card>
						<CardHeader>
							<h4 className="card-title">Example</h4>
							<p className="text-muted mb-0">
								Use <code>&lt;IconName&gt;</code>.
							</p>
						</CardHeader>
						<CardBody>
							<Row className="icon-demo-content">
								{allFeatherIcons.map((icon, idx) => {
									const Icon: IconType = FeatherIcon[icon]
									return (
										<Col sm={6} md={4} lg={3} key={icon + idx}>
											<Icon size={24} />
											{icon}
										</Col>
									)
								})}
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default FeatherIcons
