import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const CustomerSatisfaction = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 240,
			type: 'donut',
		},
		plotOptions: {
			pie: {
				donut: {
					size: '85%',
				},
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},
		series: [65, 20, 10, 5],
		legend: {
			show: false,
			position: 'bottom',
			horizontalAlign: 'center',
			floating: false,
			fontSize: '14px',
			offsetX: 0,
			offsetY: -13,
		},
		labels: ['Excellent', 'Very Good', 'Good', 'Fair'],
		colors: ['#2a76f4', '#fdb5c8', '#67c8ff', '#c693ff'],

		responsive: [
			{
				breakpoint: 600,
				options: {
					plotOptions: {
						donut: {
							customScale: 0.2,
						},
					},
					chart: {
						height: 240,
					},
					legend: {
						show: false,
					},
				},
			},
		],

		tooltip: {
			y: {
				formatter: function (val) {
					return val + ' %'
				},
			},
		},
	}
	return (
		<ComponentContainerCard title="Traffic Sources">
			<div className="happiness-score">
				<h2 className="mb-0">94.5%</h2>
				<p className="mb-0 text-uppercase">Happiness</p>
			</div>
			<ReactApexChart
				options={chartOpts}
				series={chartOpts.series}
				type="donut"
			/>
			<ul className="list-inline mb-0 text-center">
				<li className="list-inline-item mb-2 mb-lg-0 fw-semibold-alt">
					<i className="far fa-grin-stars text-primary me-2"></i>
					Excellent
				</li>
				<li className="list-inline-item mb-2 mb-lg-0 fw-semibold-alt">
					<i
						className="far fa-smile me-2 mb-lg-0"
						style={{ color: '#fdb5c8' }}
					></i>
					Very Good
				</li>
				<li className="list-inline-item mb-2 fw-semibold-alt">
					<i className="far fa-meh text-info me-2"></i>Good
				</li>
				<li className="list-inline-item fw-semibold-alt">
					<i className="far fa-frown  me-2" style={{ color: '#c693ff' }}></i>
					Fair
				</li>
			</ul>
			<hr className="hr-dashed" />
			<div className="media">
				<div className="avatar-box thumb-sm align-self-center me-2">
					<span className="avatar-title bg-soft-primary rounded-circle">
						JR
					</span>
				</div>
				<div className="media-body align-self-center">
					<p className="text-muted mb-0">
						There are many variations of passages of Lorem Ipsum available...
						<Link to="#" className="text-primary">
							Read more
						</Link>
					</p>
				</div>
			</div>
		</ComponentContainerCard>
	)
}

export default CustomerSatisfaction
