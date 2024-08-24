import { PageBreadcrumb2 } from '@/components'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import { DripIcons } from './data'

const DripIcon = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Icons" title="Drip Icons" />
			<Row>
				<Col xs={12}>
					<Card>
						<CardHeader>
							<h4 className="card-title">Example</h4>
							<p className="text-muted mb-0">
								Use{' '}
								<code>&lt;i className="dripicons-zoom-out"&gt;&lt;/i&gt;</code>.
							</p>
						</CardHeader>
						<CardBody>
							<Row className="icon-demo-content">
								{DripIcons.map((icon, idx) => {
									return (
										<Col key={idx} sm={6} md={4} lg={3}>
											<i className={`dripicons-${icon}`}></i> dripicons-{icon}
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

export default DripIcon
