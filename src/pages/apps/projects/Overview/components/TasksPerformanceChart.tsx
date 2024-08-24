import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { FiCalendar } from 'react-icons/fi'

const TasksPerformanceChart = () => {
	const chartOpts: ApexOptions = {
		chart: {
			type: 'radialBar',
			height: 295,
			dropShadow: {
				enabled: true,
				top: 5,
				left: 0,
				// bottom: 0,
				// right: 0,
				blur: 5,
				color: '#45404a2e',
				opacity: 0.35,
			},
		},
		plotOptions: {
			radialBar: {
				offsetY: -10,
				startAngle: 0,
				endAngle: 270,
				hollow: {
					margin: 5,
					size: '50%',
					background: 'transparent',
				},
				track: {
					show: false,
				},
				dataLabels: {
					name: {
						fontSize: '18px',
					},
					value: {
						fontSize: '16px',
						color: '#50649c',
					},
				},
			},
		},
		colors: ['#2a76f4', 'rgba(42, 118, 244, .5)', 'rgba(42, 118, 244, .18)'],
		stroke: {
			lineCap: 'round',
		},
		series: [71, 63, 100],
		labels: ['Completed', 'Active', 'Assigned'],
		legend: {
			show: true,
			floating: true,
			position: 'left',
			offsetX: -10,
			offsetY: 0,
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					legend: {
						show: true,
						floating: true,
						position: 'left',
						offsetX: 10,
						offsetY: 0,
					},
				},
			},
		],
	}
	return (
		<ComponentContainerCard
			title="Tasks Performance"
			menuItems={['Purchases', 'Emails']}
		>
			<div className="text-center">
				<ReactApexChart
					height={295}
					options={chartOpts}
					series={chartOpts.series}
					type="radialBar"
					className="apex-charts"
				/>
				<div id="task_status" />
				<h6 className="text-primary bg-soft-primary p-3 mb-0">
					<FiCalendar className="align-self-center icon-xs me-1" />
					01 January 2021 to 31 June 2021
				</h6>
			</div>
		</ComponentContainerCard>
	)
}

export default TasksPerformanceChart
