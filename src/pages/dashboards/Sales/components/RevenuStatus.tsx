import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const RevenuStatus = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 345,
			type: 'bar',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '30%',
			},
		},
		colors: ['#9fc1fa'],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
		},
		series: [
			{
				name: 'Income',
				data: [
					0, 160, 100, 210, 145, 400, 155, 210, 120, 275, 110, 200, 100, 90,
					220, 100, 180, 140, 315, 130, 105, 165, 120, 160, 100, 210, 145, 400,
					155, 210, 120,
				],
			},
		],
		labels: [
			'01',
			'02',
			'03',
			'04',
			'05',
			'06',
			'07',
			'08',
			'09',
			'10',
			'11',
			'12',
			'13',
			'14',
			'15',
			'16',
			'17',
			'18',
			'19',
			'20',
			'21',
			'22',
			'23',
			'24',
			'25',
			'26',
			'27',
			'28',
			'29',
			'30',
			'31',
		],
		yaxis: {
			labels: {
				offsetX: -12,
				offsetY: 0,
				formatter: function (value) {
					return '$' + value
				},
			},
		},
		grid: {
			borderColor: '#e0e6ed',
			strokeDashArray: 3,
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
		legend: {
			show: false,
		},
		tooltip: {
			marker: {
				show: true,
			},
			x: {
				show: false,
			},
		},
		fill: {
			opacity: 1,
		},
	}

	return (
		<ComponentContainerCard
			title="Revenue Status"
			label="This Month"
			menuItems={['Today', 'Last Week', 'Last Month', 'This Year']}
		>
			<div>
				<ReactApexChart
					height={345}
					options={chartOpts}
					series={chartOpts.series}
					type="bar"
				/>
			</div>
		</ComponentContainerCard>
	)
}

export default RevenuStatus
