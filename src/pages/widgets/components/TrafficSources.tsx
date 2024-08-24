import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Button } from 'react-bootstrap'

const TrafficSources = () => {
	const chartOpts: ApexOptions = {
		chart: {
			type: 'radialBar',
			offsetY: -20,
			sparkline: {
				enabled: true,
			},
		},
		series: [76],
		plotOptions: {
			radialBar: {
				startAngle: -90,
				endAngle: 90,
				hollow: {
					size: '75%',
					position: 'front',
				},
				track: {
					background: ['rgba(42, 118, 244, .18)'],
					strokeWidth: '80%',
					opacity: 0.5,
					margin: 5,
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						offsetY: -2,
						fontSize: '20px',
					},
				},
			},
		},
		stroke: {
			lineCap: 'butt',
		},
		colors: ['#2a76f4'],
		grid: {
			padding: {
				top: -10,
			},
		},

		labels: ['Average Results'],
	}
	return (
		<ComponentContainerCard
			title="Traffic Sources"
			label="Direct"
			menuItems={['Email', 'Refferal', 'Organic', 'Direct']}
		>
			<div className="my-5">
				<ReactApexChart
					// height={310}
					options={chartOpts}
					series={chartOpts.series}
					type="radialBar"
				/>
				<hr className="hr-dashed w-25 mt-0" />
			</div>
			<div className="text-center">
				<h4>76% Direct Visitors</h4>
				<p className="text-muted mt-2">
					This is a simple hero unit, a simple jumbotron-style component
				</p>
				<Button size="sm" variant="outline-primary" className="px-3 mt-2">
					More details
				</Button>
			</div>
		</ComponentContainerCard>
	)
}

export default TrafficSources
