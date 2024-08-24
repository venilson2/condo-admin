import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const CallWidget1 = () => {
	const chartOpts: ApexOptions = {
		chart: {
			type: 'area',
			height: 60,
			sparkline: {
				enabled: true,
			},
		},
		stroke: {
			curve: 'smooth',
			width: 3,
		},
		fill: {
			opacity: 1,
			gradient: {
				shade: '#2c77f4',
				type: 'horizontal',
				shadeIntensity: 0.5,
				inverseColors: true,
				opacityFrom: 0.1,
				opacityTo: 0.1,
				stops: [0, 80, 100],
				colorStops: [],
			},
		},
		series: [
			{
				data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6],
			},
		],
		yaxis: {
			min: 0,
		},
		colors: ['#2c77f4'],
	}
	return (
		<Col lg={4}>
			<Card>
				<CardBody>
					<Row>
						<Col md={7} className="align-self-center">
							<div className="timer-data">
								<div className="icon-info mt-1 mb-3">
									<i className="dripicons-phone bg-soft-dark"></i>
								</div>
								<h3 className="mt-0 text-dark">0m:27s</h3>
								<h4 className="mt-0 header-title text-truncate font-15 mb-0">
									Avg.Speed of answer
								</h4>
								<p className="text-muted mb-0 text-truncate">
									It is a long established fact that a reader.
								</p>
							</div>
						</Col>
						<Col md={5} className="align-self-center">
							<div className="apexchart-wrapper">
								<ReactApexChart
									// height={310}
									options={chartOpts}
									series={chartOpts.series}
									type="area"
									className="chart-gutters"
								/>
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Col>
	)
}

export default CallWidget1
