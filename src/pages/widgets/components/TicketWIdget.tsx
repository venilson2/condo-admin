import { Card, CardBody, Row } from 'react-bootstrap'
import { FiCalendar } from 'react-icons/fi'
import { TicketType } from '../types'

const TicketWIdget = ({ title, count, icon }: TicketType) => {
	const Icon = icon
	return (
		<Card className="report-card">
			<CardBody>
				<Row className="d-flex justify-content-center">
					<div className="col">
						<p className="text-dark mb-0 fw-semibold">{title}</p>
						<h3 className="m-0">{count}</h3>
					</div>
					<div className="col-auto align-self-center">
						<div className="report-main-icon bg-light-alt">
							<Icon className="align-self-center text-muted icon-sm" />
						</div>
					</div>
				</Row>
				<hr className="hr-dashed" />
				<div className="text-center">
					<h6 className="text-primary bg-soft-primary p-2 m-0 font-11 rounded">
						<FiCalendar className="align-self-center icon-xs me-1" />
						01 Jan 2020 to 31 Jun 2020
					</h6>
				</div>
			</CardBody>
		</Card>
	)
}

export default TicketWIdget
