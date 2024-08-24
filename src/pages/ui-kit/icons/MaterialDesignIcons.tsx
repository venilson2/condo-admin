import { PageBreadcrumb2 } from '@/components'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import type { IconType } from 'react-icons'
import * as MaterialIcon from 'react-icons/md'

const MaterialDesignIcons = () => {
	const allMaterialIcons = Object.keys(
		MaterialIcon
	) as (keyof typeof MaterialIcon)[]

	return (
		<>
			<PageBreadcrumb2 appName="Icons" title="Material Design Icons" />
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
								{allMaterialIcons.map((icon, idx) => {
									const Icon: IconType = MaterialIcon[icon]
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

export default MaterialDesignIcons
