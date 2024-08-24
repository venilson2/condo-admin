import { Col, Row } from 'react-bootstrap'
import { ticketData } from '../data'
import TicketWIdget from './TicketWIdget'

const Tickets = () => {
	return (
		<Row>
			{ticketData.map((ticket, idx) => {
				return (
					<Col md={6} lg={3} key={idx}>
						<TicketWIdget
							title={ticket.title}
							count={ticket.count}
							icon={ticket.icon}
						/>
					</Col>
				)
			})}
		</Row>
	)
}

export default Tickets
