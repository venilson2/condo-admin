import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const AudienceOverviewChart = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 320,
			type: 'area',
			stacked: true,
			toolbar: {
				show: false,
				autoSelected: 'zoom',
			},
		},
		colors: ['#2a77f4', '#a5c2f1'],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
			width: [1.5, 1.5],
			dashArray: [0, 4],
			lineCap: 'round',
		},
		grid: {
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
				name: 'New Visits',
				data: [0, 60, 20, 90, 45, 110, 55, 130, 44, 110, 75, 120],
			},
			{
				name: 'Unique Visits',
				data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 110],
			},
		],

		xaxis: {
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
			},
			axisTicks: {
				show: true,
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
			title="Audience Overview"
			label="This Year"
			menuItems={['Today', 'Last Week', 'Last Month', 'This Year']}
		>
			<div>
				<ReactApexChart
					height={330}
					options={chartOpts}
					series={chartOpts.series}
					type="area"
				/>
			</div>
		</ComponentContainerCard>
	)
}

export default AudienceOverviewChart
