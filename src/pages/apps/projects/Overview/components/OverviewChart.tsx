import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { FiCalendar } from 'react-icons/fi'

const OverviewChart = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 230,
			type: 'area',
			stacked: true,
			toolbar: {
				show: false,
				autoSelected: 'zoom',
			},
		},
		colors: ['#2a77f4'],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
			width: [2, 2],
			dashArray: [0, 4],
			lineCap: 'round',
		},
		grid: {
			borderColor: '#45404a2e',
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
		},
		markers: {
			size: 0,
			hover: {
				size: 0,
			},
		},
		series: [
			{
				name: 'Unique Visits',
				data: [10, 10, 50, 20, 70, 20, 80, 30, 75, 40, 60, 60],
			},
		],

		xaxis: {
			type: 'category',
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			],
			axisBorder: {
				show: true,
				color: '#45404a2e',
			},
			axisTicks: {
				show: true,
				color: '#45404a2e',
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.3,
				stops: [0, 90, 100],
			},
		},

		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm',
			},
		},
		legend: {
			position: 'top',
			horizontalAlign: 'right',
		},
	}
	return (
		<ComponentContainerCard
			title="Overview"
			menuItems={['Purchases', 'Emails']}
		>
			<div className="text-center">
				<ReactApexChart
					height={260}
					options={chartOpts}
					series={chartOpts.series}
					className="apex-charts"
					type="area"
				/>
				<h6 className="text-primary bg-soft-primary p-3 mb-0">
					<FiCalendar className="align-self-center icon-xs me-1" />
					01 January 2021 to 01 January 2021
				</h6>
			</div>
		</ComponentContainerCard>
	)
}

export default OverviewChart
