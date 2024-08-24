import { PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'
import WorldMap from './components/WorldMap'
import { worldMapOpts, worldMapWithLineOpts } from './data'

const VectorMaps = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Maps" title="Vector Maps" />
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">World Map Markers</h4>
							<p className="text-muted mb-0">Example of vector maps.</p>
						</div>
						<div className="card-body">
							<WorldMap height="350px" width="100%" options={worldMapOpts} />
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">World Map With Marker Lines</h4>
							<p className="text-muted mb-0">Example of vector maps.</p>
						</div>
						<div className="card-body">
							<WorldMap
								height="350px"
								width="100%"
								options={worldMapWithLineOpts}
							/>
						</div>
					</div>
				</Col>
			</Row>
		</>
	)
}

export default VectorMaps
