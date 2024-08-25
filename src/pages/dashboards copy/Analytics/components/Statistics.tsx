import { statisticsData } from '../data'
import { Col, Row } from 'react-bootstrap'
import StatisticWidget from './StatisticWidget'

const Statistics = () => {
	return (
		<Row className="justify-content-center">
			{statisticsData.map((item, idx) => {
				return (
					<Col md={6} lg={3} key={idx}>
						<StatisticWidget
							title={item.title}
							variant={item.variant}
							change={item.change}
							icon={item.icon}
							state={item.state}
							subTitle={item.subTitle}
						/>
					</Col>
				)
			})}
		</Row>
	)
}

export default Statistics
