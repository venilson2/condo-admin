import Calendar from '@/assets/images/widgets/calendar.svg'
import { Row, Col, Card, Button, Image } from 'react-bootstrap'

const Introduction = () => {
	return (
		<Row>
			<Col xs={12}>
				<Card className="calendar-cta">
					<Card.Body>
						<Row>
							<Col xs="auto">
								<Image src={Calendar} alt="" className="" height="150" />
							</Col>
							<Col>
								<h5 className="font-20">Welcome to your theme Calendar!</h5>
								<p>
									Hi, You can see all your meetings, events and create new ones.
								</p>
								<p>
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable.
								</p>
								<Button variant="outline-primary" size="sm">
									All Time schedule
								</Button>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}

export default Introduction
