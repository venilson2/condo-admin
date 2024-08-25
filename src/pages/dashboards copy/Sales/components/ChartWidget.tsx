import moneyBag from '@/assets/images/money-beg.png'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const ChartWidget = () => {
	const chartOpts: ApexOptions = {
		chart: {
			type: 'area',
			height: 50,
			sparkline: {
				enabled: true,
			},
		},
		stroke: {
			curve: 'smooth',
			width: 1.5,
		},
		fill: {
			opacity: 1,
			gradient: {
				shade: '#e3ebf6',
				type: 'horizontal',
				shadeIntensity: 0.5,
				inverseColors: true,
				opacityFrom: 0.5,
				opacityTo: 0.5,
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
		colors: ['#e3ebf6'],
		tooltip: {
			enabled: false,
		},
	}
	return (
		<Card className="overflow-hidden">
			<CardBody>
				<Row>
					<Col>
						<div className="media">
							<Image
								src={moneyBag}
								alt=""
								className="align-self-center"
								height={40}
							/>
							<div className="media-body align-self-center ms-3">
								<h4 className="m-0 font-20">$1850.00</h4>
								<p className="text-muted mb-0">Total Revenue</p>
							</div>
						</div>
					</Col>
					<Col xs="auto" className="align-self-center">
						<p className="mb-0">
							<span className="text-success">
								<i className="mdi mdi-trending-up"></i>4.8%
							</span>{' '}
							Then Last Month
						</p>
					</Col>
				</Row>
			</CardBody>
			<Row>
				<div className="col-12">
					<div className="apexchart-wrapper">
						<ReactApexChart
							height={50}
							options={chartOpts}
							series={chartOpts.series}
							type="area"
							className="chart-gutters"
						/>
					</div>
				</div>
			</Row>
		</Card>
	)
}

export default ChartWidget
