import { PageBreadcrumb2 } from '@/components'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import type { IconType } from 'react-icons'
import * as ThemifyIcon from 'react-icons/tfi'

const ThemifyIcons = () => {
	const allThemifyIcons = Object.keys(
		ThemifyIcon
	) as (keyof typeof ThemifyIcon)[]

	return (
		<>
			<PageBreadcrumb2 appName="Icons" title="Themify Icons" />
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
								{allThemifyIcons.map((icon, idx) => {
									const Icon: IconType = ThemifyIcon[icon]
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

export default ThemifyIcons
